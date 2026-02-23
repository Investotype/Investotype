const express = require('express');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;
const DAY_MS = 24 * 60 * 60 * 1000;
const YEAR_MS = 365.25 * DAY_MS;
const FEE_RATE = 0.001; // 0.10% per trade
const SAVINGS_APY = 0.03;
const OPTION_DAILY_DECAY = 0.0006;
const MARKET_FETCH_BACKFILL_DAYS = 7;
const MARKET_FETCH_FORWARD_DAYS = 3;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const sessions = new Map();
const fxHistoryCache = new Map();
const symbolIntelCache = new Map();

function normalizeSymbol(symbol) {
  return String(symbol || '').trim().toUpperCase();
}

function normalizeText(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function isLikelyTicker(input) {
  const raw = String(input || '').trim();
  if (!raw) return false;
  if (/\s/.test(raw)) return false;
  if (/[a-z]/.test(raw)) return false;

  const symbol = normalizeSymbol(raw);
  if (!/^[A-Z0-9^][A-Z0-9.^=\/-]{0,24}$/.test(symbol)) return false;

  // Avoid treating long words like "APPLE" as direct ticker input.
  if (
    symbol.length > 5 &&
    !symbol.includes('.') &&
    !symbol.includes('-') &&
    !symbol.includes('^') &&
    !symbol.includes('=') &&
    !symbol.includes('/')
  ) {
    return false;
  }

  return true;
}

function levenshtein(a, b) {
  const s = normalizeText(a);
  const t = normalizeText(b);
  if (!s) return t.length;
  if (!t) return s.length;

  const dp = Array.from({ length: s.length + 1 }, () => new Array(t.length + 1).fill(0));
  for (let i = 0; i <= s.length; i += 1) dp[i][0] = i;
  for (let j = 0; j <= t.length; j += 1) dp[0][j] = j;

  for (let i = 1; i <= s.length; i += 1) {
    for (let j = 1; j <= t.length; j += 1) {
      const cost = s[i - 1] === t[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[s.length][t.length];
}

function createCalendarHistory(startDate, endDate, dailyGrowth = 0) {
  const history = [];
  let price = 1;
  let current = startDate;

  while (current <= endDate) {
    history.push({ date: current, close: price, adjClose: price });
    price *= 1 + dailyGrowth;
    current = toIsoDate(new Date(current + 'T00:00:00Z').getTime() + DAY_MS);
  }

  return history;
}

function createTransformedHistory(baseHistory, transformReturnFn) {
  if (!baseHistory.length) return [];

  const transformed = [{ date: baseHistory[0].date, close: 1, adjClose: 1 }];
  let price = 1;

  for (let i = 1; i < baseHistory.length; i += 1) {
    const prev = baseHistory[i - 1].adjClose;
    const next = baseHistory[i].adjClose;
    const baseReturn = prev > 0 ? next / prev - 1 : 0;
    const transformedReturn = transformReturnFn(baseReturn);

    price *= 1 + transformedReturn;
    if (price < 0.0001) price = 0.0001;
    transformed.push({ date: baseHistory[i].date, close: price, adjClose: price });
  }

  return transformed;
}

function parseAssetToken(rawToken) {
  const token = normalizeSymbol(rawToken);
  if (!token) throw new Error('Asset token cannot be empty.');

  if (token === 'CASH') {
    return { id: 'CASH', type: 'cash', label: 'Cash (0% return)' };
  }

  if (token === 'SAVINGS') {
    return { id: 'SAVINGS', type: 'savings', label: `Savings (${(SAVINGS_APY * 100).toFixed(1)}% APY)` };
  }

  if (token.startsWith('BOND:')) {
    const parts = token.split(':');
    if (parts.length !== 2 || !parts[1]) {
      throw new Error('Invalid bond format. Use BOND:TICKER (example: BOND:TLT).');
    }
    return { id: token, type: 'bond', baseSymbol: parts[1], label: `Bond ETF ${parts[1]}` };
  }

  if (token.startsWith('LEVERAGE:')) {
    const parts = token.split(':');
    const multiplier = Number(parts[2]);
    if (parts.length !== 3 || !parts[1] || !Number.isFinite(multiplier)) {
      throw new Error('Invalid leverage format. Use LEVERAGE:TICKER:MULTIPLIER (example: LEVERAGE:SPY:2).');
    }
    if (multiplier <= 1 || multiplier > 5) {
      throw new Error('Leverage multiplier must be > 1 and <= 5.');
    }
    return {
      id: token,
      type: 'leverage',
      baseSymbol: parts[1],
      multiplier,
      label: `${multiplier}x Leverage on ${parts[1]}`
    };
  }

  if (token.startsWith('CALL:')) {
    const parts = token.split(':');
    const multiplier = Number(parts[2]);
    if (parts.length !== 3 || !parts[1] || !Number.isFinite(multiplier)) {
      throw new Error('Invalid option format. Use CALL:TICKER:MULTIPLIER (example: CALL:AAPL:3).');
    }
    if (multiplier <= 1 || multiplier > 8) {
      throw new Error('Option multiplier must be > 1 and <= 8.');
    }
    return {
      id: token,
      type: 'option',
      baseSymbol: parts[1],
      multiplier,
      label: `Call-like ${parts[1]} x${multiplier}`
    };
  }

  if (!/^[A-Z0-9^][A-Z0-9.^=\/-]{0,24}$/.test(token)) {
    throw new Error(`Invalid market ticker token: ${token}`);
  }

  return { id: token, type: 'market', baseSymbol: token, label: token };
}

function toIsoDate(date) {
  return new Date(date).toISOString().slice(0, 10);
}

function isValidDateString(dateString) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return false;
  const d = new Date(dateString + 'T00:00:00Z');
  return !Number.isNaN(d.getTime()) && toIsoDate(d) === dateString;
}

function addMonths(dateString, months) {
  const d = new Date(dateString + 'T00:00:00Z');
  d.setUTCMonth(d.getUTCMonth() + months);
  return toIsoDate(d);
}

function createSchedule(startDate, endDate, frequency) {
  const dates = [];
  let current = startDate;
  const increment = frequency === 'daily' ? 1 : frequency === 'weekly' ? 7 : null;

  while (current <= endDate) {
    dates.push(current);
    if (frequency === 'daily' || frequency === 'weekly') {
      const d = new Date(current + 'T00:00:00Z');
      current = toIsoDate(d.getTime() + increment * DAY_MS);
    } else {
      current = addMonths(current, 1);
    }
  }

  return dates;
}

async function fetchYahooHistoryRaw(symbol, startDate, endDate) {
  const safeSymbol = encodeURIComponent(normalizeSymbol(symbol));
  const startTs =
    Math.floor(new Date(startDate + 'T00:00:00Z').getTime() / 1000) - MARKET_FETCH_BACKFILL_DAYS * 86400;
  const endTs =
    Math.floor(new Date(endDate + 'T23:59:59Z').getTime() / 1000) + MARKET_FETCH_FORWARD_DAYS * 86400;
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${safeSymbol}?interval=1d&period1=${startTs}&period2=${endTs}&events=div,splits&includeAdjustedClose=true`;

  const response = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 investment-simulator' }
  });

  if (!response.ok) {
    throw new Error(`Yahoo request failed (${response.status}) for ${symbol}`);
  }

  const json = await response.json();
  const result = json?.chart?.result?.[0];
  const err = json?.chart?.error;

  if (err) {
    throw new Error(`Yahoo error for ${symbol}: ${err.description || 'unknown error'}`);
  }
  if (!result || !Array.isArray(result.timestamp)) {
    throw new Error(`No historical data for ${symbol}`);
  }

  const closes = result?.indicators?.quote?.[0]?.close || [];
  const adjusted = result?.indicators?.adjclose?.[0]?.adjclose || [];
  const dividendByDate = {};
  const dividendEvents = result?.events?.dividends || {};
  for (const evt of Object.values(dividendEvents)) {
    const ts = Number(evt?.date);
    const amt = Number(evt?.amount);
    if (!Number.isFinite(ts) || !Number.isFinite(amt)) continue;
    const d = toIsoDate(ts * 1000);
    dividendByDate[d] = (dividendByDate[d] || 0) + amt;
  }

  const history = [];
  for (let i = 0; i < result.timestamp.length; i += 1) {
    const ts = result.timestamp[i];
    const close = closes[i];
    const adjClose = adjusted[i] ?? close;
    if (close == null || adjClose == null) continue;

    history.push({
      date: toIsoDate(ts * 1000),
      close,
      adjClose,
      dividend: Number(dividendByDate[toIsoDate(ts * 1000)] || 0)
    });
  }

  if (history.length === 0) {
    throw new Error(`No valid close prices for ${symbol}`);
  }

  return {
    history: history.sort((a, b) => (a.date < b.date ? -1 : 1)),
    currency: String(result?.meta?.currency || 'USD').toUpperCase()
  };
}

async function getFxHistoryToUsd(currency, startDate, endDate) {
  const cur = String(currency || '').toUpperCase();
  if (!cur || cur === 'USD') return null;

  const cacheKey = `${cur}|${startDate}|${endDate}`;
  if (fxHistoryCache.has(cacheKey)) return fxHistoryCache.get(cacheKey);

  const load = (async () => {
    const direct = `${cur}USD=X`;
    try {
      const directRaw = await fetchYahooHistoryRaw(direct, startDate, endDate);
      if (Array.isArray(directRaw.history) && directRaw.history.length) {
        return { mode: 'direct', history: directRaw.history };
      }
    } catch (_error) {
      // Try inverse below.
    }

    const inverse = `USD${cur}=X`;
    const invRaw = await fetchYahooHistoryRaw(inverse, startDate, endDate);
    if (!Array.isArray(invRaw.history) || !invRaw.history.length) {
      throw new Error(`No FX history for ${cur}/USD`);
    }
    return { mode: 'inverse', history: invRaw.history };
  })();

  fxHistoryCache.set(cacheKey, load);
  return load;
}

async function fetchYahooHistory(symbol, startDate, endDate) {
  const raw = await fetchYahooHistoryRaw(symbol, startDate, endDate);
  const history = raw.history;
  const currency = String(raw.currency || 'USD').toUpperCase();
  if (currency === 'USD') return history;

  let fx = null;
  try {
    fx = await getFxHistoryToUsd(currency, startDate, endDate);
  } catch (_error) {
    throw new Error(`Unable to convert ${symbol} from ${currency} to USD (missing FX data).`);
  }
  if (!fx?.history?.length) {
    throw new Error(`Unable to convert ${symbol} from ${currency} to USD (empty FX history).`);
  }

  const converted = history.map((row) => {
    const p = getPriceOnOrBefore(fx.history, row.date, 'adjClose') || getPriceOnOrAfter(fx.history, row.date, 'adjClose');
    const fxRateRaw = Number(p?.price || 0);
    if (!(fxRateRaw > 0)) {
      throw new Error(`Missing FX rate for ${currency}->USD on ${row.date}`);
    }

    // direct: CURUSD=X is USD per 1 CUR, inverse: USDCUR=X is CUR per 1 USD.
    const fxRate = fx.mode === 'inverse' ? 1 / fxRateRaw : fxRateRaw;
    if (!(fxRate > 0)) {
      throw new Error(`Invalid FX rate for ${currency}->USD on ${row.date}`);
    }
    return {
      ...row,
      close: Number(row.close || 0) * fxRate,
      adjClose: Number(row.adjClose || 0) * fxRate
    };
  });

  return converted;
}

async function searchYahooSymbols(query) {
  const q = String(query || '').trim();
  if (!q) return [];

  const url = `https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(q)}&quotesCount=15&newsCount=0`;
  const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 investment-simulator' } });
  if (!response.ok) throw new Error(`Symbol search failed (${response.status})`);

  const json = await response.json();
  const quotes = Array.isArray(json?.quotes) ? json.quotes : [];

  return quotes
    .filter((x) => x?.symbol)
    .map((x) => ({
      symbol: normalizeSymbol(x.symbol),
      shortname: x.shortname || '',
      longname: x.longname || '',
      logoUrl: x.logoUrl || x.logourl || '',
      quoteType: x.quoteType || '',
      exchange: x.exchDisp || x.exchange || ''
    }));
}

function getSymbolIntelCache(key, ttlMs) {
  const row = symbolIntelCache.get(key);
  if (!row) return null;
  if (Date.now() - Number(row.ts || 0) > ttlMs) return null;
  return row.value;
}

function setSymbolIntelCache(key, value) {
  symbolIntelCache.set(key, { ts: Date.now(), value });
}

async function fetchYahooEarningsDate(symbol) {
  const sym = normalizeSymbol(symbol);
  if (!sym) return null;
  const cacheKey = `earnings:${sym}`;
  const cached = getSymbolIntelCache(cacheKey, 12 * 60 * 60 * 1000);
  if (cached !== null) return cached;

  const url = `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${encodeURIComponent(sym)}?modules=calendarEvents`;
  const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 investment-simulator' } });
  if (!response.ok) {
    setSymbolIntelCache(cacheKey, null);
    return null;
  }
  const json = await response.json();
  const arr = json?.quoteSummary?.result?.[0]?.calendarEvents?.earnings?.earningsDate;
  const first = Array.isArray(arr) ? arr[0] : null;
  const ts = Number(first?.raw);
  const iso = Number.isFinite(ts) ? toIsoDate(ts * 1000) : null;
  setSymbolIntelCache(cacheKey, iso);
  return iso;
}

async function fetchYahooNewsHeadlines(symbol, maxItems = 3) {
  const sym = normalizeSymbol(symbol);
  if (!sym) return [];
  const cacheKey = `news:${sym}`;
  const cached = getSymbolIntelCache(cacheKey, 30 * 60 * 1000);
  if (cached !== null) return cached;

  const url = `https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(sym)}&quotesCount=0&newsCount=8`;
  const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 investment-simulator' } });
  if (!response.ok) {
    setSymbolIntelCache(cacheKey, []);
    return [];
  }
  const json = await response.json();
  const news = Array.isArray(json?.news) ? json.news : [];
  const headlines = news
    .map((n) => ({
      title: String(n?.title || '').trim(),
      publisher: String(n?.publisher || '').trim(),
      date: Number.isFinite(Number(n?.providerPublishTime))
        ? toIsoDate(Number(n.providerPublishTime) * 1000)
        : ''
    }))
    .filter((x) => x.title)
    .slice(0, Math.max(1, Math.min(5, Number(maxItems || 3))));
  setSymbolIntelCache(cacheKey, headlines);
  return headlines;
}

function scoreMatch(query, quote, preferBond = false) {
  const q = normalizeText(query);
  const symbol = normalizeText(quote.symbol);
  const shortname = normalizeText(quote.shortname);
  const longname = normalizeText(quote.longname);
  const combined = `${symbol} ${shortname} ${longname}`.trim();

  let score = 0;
  if (symbol === q) score += 1200;
  if (symbol.startsWith(q)) score += 500;
  if (shortname.startsWith(q) || longname.startsWith(q)) score += 340;
  if (combined.includes(q)) score += 220;
  score -= levenshtein(q, symbol) * 10;

  const qWords = q.split(' ').filter(Boolean);
  const longWords = longname.split(' ').filter(Boolean);
  const shortWords = shortname.split(' ').filter(Boolean);
  const corpSuffixes = new Set(['inc', 'corp', 'corporation', 'co', 'company', 'plc', 'ltd', 'limited']);

  if (qWords.length === 1) {
    if (longWords[0] === qWords[0]) {
      score += corpSuffixes.has(longWords[1]) ? 130 : 25;
    }
    if (shortWords[0] === qWords[0]) {
      score += corpSuffixes.has(shortWords[1]) ? 110 : 20;
    }
  }

  const preferredTypes = new Set(['EQUITY', 'ETF', 'MUTUALFUND', 'INDEX', 'CRYPTOCURRENCY', 'CURRENCY', 'FUTURE']);
  if (preferredTypes.has(String(quote.quoteType || '').toUpperCase())) {
    score += 30;
  }

  const nameForBondCheck = `${shortname} ${longname}`.toLowerCase();
  if (preferBond) {
    if (nameForBondCheck.includes('bond') || nameForBondCheck.includes('treasury') || nameForBondCheck.includes('fixed income')) {
      score += 140;
    }
  }

  return score;
}

async function resolveSymbolFromName(query, options = {}) {
  const preferBond = !!options.preferBond;
  const quotes = await searchYahooSymbols(query);
  if (!quotes.length) {
    throw new Error(`No matching investment found for "${query}".`);
  }

  const ranked = quotes
    .map((q) => ({ ...q, _score: scoreMatch(query, q, preferBond) }))
    .sort((a, b) => b._score - a._score);

  return {
    best: ranked[0],
    matches: ranked.slice(0, 5).map((r) => ({
      symbol: r.symbol,
      shortname: r.shortname,
      longname: r.longname,
      logoUrl: r.logoUrl,
      exchange: r.exchange,
      quoteType: r.quoteType
    }))
  };
}

async function enrichAssetMeta(rawMeta) {
  const meta = { ...rawMeta };
  const lookupSymbol = normalizeSymbol(meta.baseSymbol || meta.id || '');

  if (meta.type === 'cash' || meta.type === 'savings') {
    meta.symbol = meta.id;
    meta.displayName = meta.label;
    meta.logoUrl = '';
    return meta;
  }

  meta.symbol = lookupSymbol;
  meta.displayName = meta.label || lookupSymbol;
  meta.logoUrl = '';

  if (!lookupSymbol) return meta;

  try {
    const quotes = await searchYahooSymbols(lookupSymbol);
    const exact = quotes.find((q) => q.symbol === lookupSymbol) || quotes[0];
    if (!exact) return meta;

    const name = exact.longname || exact.shortname || lookupSymbol;
    meta.logoUrl = exact.logoUrl || '';

    if (meta.type === 'market' || meta.type === 'bond') {
      meta.displayName = name;
      meta.label = name;
      return meta;
    }

    meta.displayName = `${meta.label} (${name})`;
  } catch (_error) {
    // Keep fallback metadata when lookup fails.
  }

  return meta;
}

async function fetchAssetHistory(assetToken, startDate, endDate) {
  const parsedMeta = parseAssetToken(assetToken);
  const meta = await enrichAssetMeta(parsedMeta);

  if (meta.type === 'cash') {
    return { meta, history: createCalendarHistory(startDate, endDate, 0) };
  }

  if (meta.type === 'savings') {
    const daily = (1 + SAVINGS_APY) ** (1 / 365) - 1;
    return { meta, history: createCalendarHistory(startDate, endDate, daily) };
  }

  if (meta.type === 'leverage') {
    const baseHistory = await fetchYahooHistory(meta.baseSymbol, startDate, endDate);
    const history = createTransformedHistory(baseHistory, (r) => {
      const leveraged = r * meta.multiplier;
      return Math.max(-0.95, leveraged);
    });
    return { meta, history };
  }

  if (meta.type === 'option') {
    const baseHistory = await fetchYahooHistory(meta.baseSymbol, startDate, endDate);
    const history = createTransformedHistory(baseHistory, (r) => {
      const optionLike = r * meta.multiplier - OPTION_DAILY_DECAY;
      return Math.max(-0.95, Math.min(3, optionLike));
    });
    return { meta, history };
  }

  const history = await fetchYahooHistory(meta.baseSymbol, startDate, endDate);
  return { meta, history };
}

async function validateAssetTokenExists(assetToken) {
  const meta = parseAssetToken(assetToken);
  if (meta.type === 'cash' || meta.type === 'savings') {
    return { meta, ok: true };
  }

  const endDate = toIsoDate(Date.now());
  const startDate = toIsoDate(Date.now() - 90 * DAY_MS);

  // For derived assets, validate by checking base symbol has recent history.
  const baseSymbol = meta.baseSymbol || meta.id;
  await fetchYahooHistory(baseSymbol, startDate, endDate);
  return { meta, ok: true };
}

async function getAssetTokenPriceAtDate(assetToken, targetDate) {
  const token = normalizeSymbol(assetToken);
  if (!token) throw new Error('token is required');
  if (!isValidDateString(targetDate)) throw new Error('date must be YYYY-MM-DD');

  const endMs = new Date(targetDate + 'T00:00:00Z').getTime();
  const startDate = toIsoDate(endMs - 365 * DAY_MS);
  const endDate = toIsoDate(endMs + 2 * DAY_MS);
  const { meta, history } = await fetchAssetHistory(token, startDate, endDate);
  const before = getPriceOnOrBefore(history, targetDate, 'close');
  const after = getPriceOnOrAfter(history, targetDate, 'close');
  const chosen = before || after;
  if (!chosen || !Number.isFinite(chosen.price) || chosen.price <= 0) {
    throw new Error(`No valid price found for ${token} near ${targetDate}`);
  }

  return { meta, date: chosen.date, price: chosen.price };
}

function getPriceOnOrAfter(history, date, field = 'adjClose') {
  for (const row of history) {
    if (row.date >= date) {
      return { date: row.date, price: row[field] };
    }
  }
  return null;
}

function getPriceOnOrBefore(history, date, field = 'adjClose') {
  for (let i = history.length - 1; i >= 0; i -= 1) {
    if (history[i].date <= date) {
      return { date: history[i].date, price: history[i][field] };
    }
  }
  return null;
}

function getNearestPrice(history, date, field = 'adjClose') {
  return getPriceOnOrBefore(history, date, field) || getPriceOnOrAfter(history, date, field);
}

function computeDividendCashBetween(session, fromDateExclusive, toDateInclusive, holdingsOverride = null) {
  if (!session || !fromDateExclusive || !toDateInclusive || fromDateExclusive >= toDateInclusive) return 0;
  const holdings = holdingsOverride || session.holdings || {};
  let total = 0;

  for (const symbol of session.symbols || []) {
    const qty = Number(holdings?.[symbol] || 0);
    if (!(qty > 0)) continue;
    const history = session.histories?.[symbol] || [];
    for (const row of history) {
      if (row.date <= fromDateExclusive || row.date > toDateInclusive) continue;
      const div = Number(row.dividend || 0);
      if (div > 0) total += qty * div;
    }
  }

  return total;
}

function settleDividendsThrough(session, date) {
  if (!session || !date) return 0;
  const from = session.dividendAccruedThrough || session.startDate;
  if (!from || date <= from) {
    session.dividendAccruedThrough = from || date;
    return 0;
  }

  const cash = computeDividendCashBetween(session, from, date);
  if (cash > 0) {
    session.cash += cash;
    session.totalDividendsReceived = Number(session.totalDividendsReceived || 0) + cash;
  }
  session.dividendAccruedThrough = date;
  return cash;
}

function getHistoryReturn(history, fromDate, toDate, field = 'close') {
  const rows = Array.isArray(history) ? history : [];
  if (!rows.length) return null;
  const toPoint = getPriceOnOrBefore(rows, toDate, field);
  const fromPoint = getPriceOnOrBefore(rows, fromDate, field) || getPriceOnOrAfter(rows, fromDate, field);
  if (!toPoint || !fromPoint) return null;
  const start = Number(fromPoint.price || 0);
  const end = Number(toPoint.price || 0);
  if (!(start > 0) || !(end > 0)) return null;
  return end / start - 1;
}

function getDailyReturnAtDate(history, date, field = 'close') {
  const rows = Array.isArray(history) ? history : [];
  if (!rows.length) return null;
  let idx = -1;
  for (let i = 0; i < rows.length; i += 1) {
    if (rows[i].date <= date) idx = i;
    else break;
  }
  if (idx <= 0) return null;
  const prev = Number(rows[idx - 1]?.[field] || 0);
  const curr = Number(rows[idx]?.[field] || 0);
  if (!(prev > 0) || !(curr > 0)) return null;
  return curr / prev - 1;
}

function getLatestDividendInfo(history, date) {
  const rows = Array.isArray(history) ? history : [];
  for (let i = rows.length - 1; i >= 0; i -= 1) {
    const row = rows[i];
    if (row.date > date) continue;
    const div = Number(row.dividend || 0);
    if (div > 0) return { date: row.date, amount: div };
  }
  return null;
}

function calculateMaxDrawdown(values) {
  let peak = -Infinity;
  let maxDd = 0;
  for (const v of values) {
    if (v > peak) peak = v;
    if (peak > 0) {
      const dd = (peak - v) / peak;
      if (dd > maxDd) maxDd = dd;
    }
  }
  return maxDd;
}

function stdDev(nums) {
  if (!nums.length) return 0;
  const mean = nums.reduce((s, v) => s + v, 0) / nums.length;
  const variance = nums.reduce((s, v) => s + (v - mean) ** 2, 0) / nums.length;
  return Math.sqrt(variance);
}

function calcAnnualizedVolFromSeries(values) {
  if (values.length < 2) return 0;
  const returns = [];
  for (let i = 1; i < values.length; i += 1) {
    if (values[i - 1] <= 0) continue;
    returns.push(values[i] / values[i - 1] - 1);
  }
  return stdDev(returns) * Math.sqrt(252);
}

function calcCagr(startValue, endValue, startDate, endDate) {
  const years = (new Date(endDate + 'T00:00:00Z') - new Date(startDate + 'T00:00:00Z')) / YEAR_MS;
  if (years <= 0 || startValue <= 0 || endValue <= 0) return 0;
  return (endValue / startValue) ** (1 / years) - 1;
}

function validateWeights(rawWeights, symbols) {
  const weights = {};
  let sum = 0;

  for (const symbol of symbols) {
    const w = Number(rawWeights?.[symbol] ?? 0);
    if (!Number.isFinite(w) || w < 0 || w > 1) {
      throw new Error(`Invalid weight for ${symbol}. Use a value between 0 and 1.`);
    }
    weights[symbol] = w;
    sum += w;
  }

  if (sum > 1.000001) {
    throw new Error('Total weights cannot exceed 1.0');
  }

  return weights;
}

function validateDollars(rawDollars, symbols, portfolioValue) {
  const dollars = {};
  let sum = 0;
  const tolerance = getTargetValueTolerance(symbols?.length || 0);

  for (const symbol of symbols) {
    const v = Number(rawDollars?.[symbol] ?? 0);
    if (!Number.isFinite(v) || v < 0) {
      throw new Error(`Invalid dollar target for ${symbol}. Use a value >= 0.`);
    }
    dollars[symbol] = v;
    sum += v;
  }

  if (sum > portfolioValue + tolerance) {
    throw new Error('Total dollar targets cannot exceed current portfolio value.');
  }

  return dollars;
}

function validateUnits(rawUnits, symbols) {
  const units = {};
  for (const symbol of symbols) {
    const v = Number(rawUnits?.[symbol] ?? 0);
    if (!Number.isFinite(v) || v < 0) {
      throw new Error(`Invalid unit target for ${symbol}. Use a value >= 0.`);
    }
    units[symbol] = v;
  }
  return units;
}

function validateTargetMode(mode) {
  if (!['weight', 'dollars', 'units'].includes(mode)) {
    throw new Error(`Invalid target mode: ${mode}. Use weight, dollars, or units.`);
  }
}

function getTargetValueTolerance(symbolCount = 0, totalValue = 0) {
  // Slack to absorb floating precision/rounding drift.  The previous
  // implementation only scaled with the number of symbols which meant
  // large portfolios could still trigger a "exceeds" error when tiny
  // rounding mismatches (e.g. weight→dollars conversions) pushed the
  // sum above the cap by a few cents.  That annoyed users who had made
  // no intention to change the portfolio and were effectively told they
  // needed to "sell" to rebalance.
  //
  // We now also include a small relative component based on the total
  // value and grow the tolerance appropriately.  A minimum floor still
  // exists for extremely small portfolios.
  const base = Math.max(0.05, Number(symbolCount || 0) * 0.02);
  const relative = Math.abs(Number(totalValue) || 0) * 0.001; // 0.1%
  return Math.max(base, relative);
}

function roundToCents(value) {
  return Math.round(Number(value || 0) * 100) / 100;
}

function buildTargetValues(session, total, prices, body) {
  const planningBudgetCap = total + Math.max(0, -Number(session.cash || 0));
  // include portfolio total when computing tolerance so large accounts
  // get an appropriately relaxed threshold
  const budgetTolerance = getTargetValueTolerance(session.symbols?.length || 0, planningBudgetCap);
  if (body?.targets && typeof body.targets === 'object') {
    const targetValues = {};
    const requestedInputs = {};
    const perAssetModes = {};
    let totalTargetValue = 0;

    for (const symbol of session.symbols) {
      const entry = body.targets[symbol] || {};
      const mode = String(entry.mode || 'weight').toLowerCase();
      const value = Number(entry.value ?? 0);

      validateTargetMode(mode);
      if (!Number.isFinite(value) || value < 0) {
        throw new Error(`Invalid target value for ${symbol}. Use a value >= 0.`);
      }

      let targetValue = 0;
      if (mode === 'weight') {
        if (value > 1) {
          throw new Error(`Weight target for ${symbol} must be <= 1.`);
        }
        targetValue = total * value;
      } else if (mode === 'dollars') {
        targetValue = value;
      } else {
        targetValue = value * prices[symbol].price;
      }

      requestedInputs[symbol] = value;
      perAssetModes[symbol] = mode;
      targetValues[symbol] = targetValue;
      totalTargetValue += targetValue;
    }

    const roundedCap = roundToCents(planningBudgetCap);
    let roundedTargetTotal = roundToCents(totalTargetValue);
    if (roundedTargetTotal > roundedCap) {
      // Never hard-fail mixed target submissions for budget overshoot.
      // Price drift and stale UI state (especially on first rebalance)
      // can produce an accidental overage even when the user made no
      // intentional changes. Normalize proportionally instead.
      const scale = roundedCap > 0 ? roundedCap / roundedTargetTotal : 0;
      for (const symbol of session.symbols) {
        const scaled = Math.max(0, Number(targetValues[symbol] || 0) * scale);
        targetValues[symbol] = scaled;
      }
      roundedTargetTotal = roundedCap;
    } else if (roundedTargetTotal > roundedCap - budgetTolerance) {
      // Treat tiny near-cap drift as exactly at cap.
      roundedTargetTotal = Math.min(roundedTargetTotal, roundedCap);
    }
    totalTargetValue = roundedTargetTotal;

    return {
      allocationMode: 'mixed',
      perAssetModes,
      requestedInputs,
      targetValues,
      budgetUsed: totalTargetValue
    };
  }

  if (body?.weights && typeof body.weights === 'object') {
    const weights = validateWeights(body.weights, session.symbols);
    const targetValues = {};
    const perAssetModes = {};
    for (const symbol of session.symbols) {
      targetValues[symbol] = total * weights[symbol];
      perAssetModes[symbol] = 'weight';
    }
    const budgetUsed = Object.values(targetValues).reduce((s, v) => s + v, 0);
    return { allocationMode: 'weight', perAssetModes, requestedInputs: weights, targetValues, budgetUsed };
  }

  if (body?.dollars && typeof body.dollars === 'object') {
    const dollars = validateDollars(body.dollars, session.symbols, planningBudgetCap);
    const perAssetModes = Object.fromEntries(session.symbols.map((symbol) => [symbol, 'dollars']));
    const budgetUsed = Object.values(dollars).reduce((s, v) => s + v, 0);
    return { allocationMode: 'dollars', perAssetModes, requestedInputs: dollars, targetValues: dollars, budgetUsed };
  }

  if (body?.units && typeof body.units === 'object') {
    const units = validateUnits(body.units, session.symbols);
    const targetValues = {};
    for (const symbol of session.symbols) {
      targetValues[symbol] = units[symbol] * prices[symbol].price;
    }

    const sum = Object.values(targetValues).reduce((s, v) => s + v, 0);
    if (sum > planningBudgetCap + budgetTolerance) {
      throw new Error('Total units implied value cannot exceed current portfolio value.');
    }
    const perAssetModes = Object.fromEntries(session.symbols.map((symbol) => [symbol, 'units']));
    return { allocationMode: 'units', perAssetModes, requestedInputs: units, targetValues, budgetUsed: sum };
  }

  throw new Error('Provide target data using targets (per asset), or weights/dollars/units.');
}

function getPortfolioValueAtDate(session, date) {
  const accruedThrough = session.dividendAccruedThrough || session.startDate;
  const pendingDividends = computeDividendCashBetween(session, accruedThrough, date);
  let total = session.cash + pendingDividends;
  const prices = {};

  for (const symbol of session.symbols) {
    const history = session.histories[symbol] || [];
    const p = getPriceOnOrAfter(history, date, 'close') || getPriceOnOrBefore(history, date, 'close');
    if (!p) throw new Error(`No price found for ${symbol} near ${date}`);
    prices[symbol] = p;
    total += session.holdings[symbol] * p.price;
  }

  return { total, prices, pendingDividends };
}

function buildPreviewInsights(session, previewDate, previewData) {
  const preview = previewData || getPortfolioValueAtDate(session, previewDate);
  const lastSnapshot = session.snapshots.length ? session.snapshots[session.snapshots.length - 1] : null;
  const sinceDate = lastSnapshot ? lastSnapshot.date : session.startDate;
  const referenceValue = lastSnapshot ? lastSnapshot.value : session.initialCash;
  const periodReturn = referenceValue > 0 ? preview.total / referenceValue - 1 : 0;

  const holdings = session.symbols
    .map((symbol) => {
      const price = preview.prices[symbol]?.price || 0;
      const quantity = session.holdings[symbol] || 0;
      const costBasis = session.costBasis?.[symbol] || 0;
      const avgBuyPrice = quantity > 0 ? costBasis / quantity : 0;
      const firstBuyPrice = session.firstBuyPrice?.[symbol] || 0;
      const realizedProfit = session.realizedProfit?.[symbol] || 0;
      const value = quantity * price;
      const weight = preview.total > 0 ? value / preview.total : 0;
      return { symbol, quantity, price, value, weight, avgBuyPrice, firstBuyPrice, realizedProfit, closed: false };
    })
    .concat(
      Object.entries(session.closedPositions || {}).map(([symbol, p]) => ({
        symbol,
        quantity: 0,
        price: 0,
        value: 0,
        weight: 0,
        avgBuyPrice: 0,
        firstBuyPrice: Number(p?.firstBuyPrice || 0),
        realizedProfit: Number(p?.realizedProfit || 0),
        closed: true
      }))
    )
    .sort((a, b) => b.value - a.value);

  return {
    date: previewDate,
    sinceDate,
    referenceValue,
    portfolioValue: preview.total,
    periodReturn,
    cash: session.cash,
    holdings
  };
}

function uniqueSortedDates(dates) {
  return [...new Set(dates.filter(Boolean))].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}

function classifyInvestor(metrics) {
  const {
    avgConcentration,
    avgTurnover,
    avgCashRatio,
    annualizedVol,
    maxDrawdown,
    tradeActivity = 0,
    turnoverStd = 0,
    avgTopWeight = 0,
    feeIntensity = 0,
    decisionDrift = 0,
    directionFlipRate = 0
  } = metrics;
  const clamp01 = (n) => Math.max(0, Math.min(1, Number(n || 0)));
  const logisticPct = (raw, mid, steep = 9.5) => {
    const x = Number(raw || 0);
    const p = 1 / (1 + Math.exp(-steep * (x - mid)));
    return Math.max(0, Math.min(100, Math.round(p * 100)));
  };

  const riskRaw =
    annualizedVol * 0.36 +
    maxDrawdown * 0.28 +
    avgConcentration * 0.16 +
    clamp01(avgTopWeight) * 0.12 +
    clamp01(feeIntensity * 12) * 0.06 +
    clamp01(tradeActivity) * 0.1 +
    (1 - clamp01(avgCashRatio)) * 0.07;
  const controlRaw =
    avgTurnover * 0.42 +
    avgConcentration * 0.16 +
    clamp01(avgTopWeight) * 0.16 +
    clamp01(tradeActivity) * 0.2 +
    clamp01(turnoverStd * 1.8) * 0.04 +
    clamp01(decisionDrift * 2.2) * 0.02;
  const reactRaw =
    avgTurnover * 0.34 +
    maxDrawdown * 0.3 +
    annualizedVol * 0.16 +
    clamp01(turnoverStd * 1.9) * 0.14 +
    clamp01(feeIntensity * 12) * 0.04 +
    clamp01(directionFlipRate) * 0.06;

  const aggressivePct = logisticPct(riskRaw, 0.23, 10.5);
  const internalPct = logisticPct(controlRaw, 0.24, 9.5);
  const emotionalPct = logisticPct(reactRaw, 0.22, 10.5);

  const riskAxis = aggressivePct >= 50 ? 'A' : 'C'; // Aggressive / Conservative
  const controlAxis = internalPct >= 50 ? 'I' : 'E'; // Internal(active) / External(passive)
  const emotionAxis = emotionalPct >= 50 ? 'E' : 'R'; // Emotional / Rational
  const code = `${riskAxis}-${controlAxis}-${emotionAxis}`;

  const cube = {
    'A-I-R': {
      type: 'The Quant',
      recommendation:
        'Keep your edge process-driven: use written rules, risk budgets, and periodic model validation to avoid overconfidence.'
    },
    'A-I-E': {
      type: 'Active Conviction Investor',
      recommendation:
        'Strong initiative, but add emotional guardrails: pre-commit exits, cap concentration, and use cooldown windows after big swings.'
    },
    'A-E-R': {
      type: 'Tactical Trend Analyst',
      recommendation:
        'You adapt quickly and stay analytical. Anchor with a core allocation so tactical moves do not dominate long-term outcomes.'
    },
    'A-E-E': {
      type: 'Aggressive Reactive Trader',
      recommendation:
        'High upside mindset with high emotional risk. Enforce strict position sizing, loss limits, and profit-taking rules.'
    },
    'C-I-R': {
      type: 'Conservative Researcher',
      recommendation:
        'Your discipline is a strength. Avoid excessive caution by defining clear conditions for gradually adding risk when trends improve.'
    },
    'C-I-E': {
      type: 'Defensive Active Allocator',
      recommendation:
        'You care about safety but can react to stress. Use automation and preset allocations to reduce decision pressure.'
    },
    'C-E-R': {
      type: 'Passive Rational Allocator',
      recommendation:
        'Excellent long-term temperament. Keep low-cost diversified exposure and rebalance on schedule, not headlines.'
    },
    'C-E-E': {
      type: 'Passive Emotional Allocator',
      recommendation:
        'Simplicity and emotional protection matter most. Prefer hands-off index structures and avoid frequent discretionary trading.'
    }
  };

  const picked = cube[code] || cube['C-E-R'];
  return {
    code,
    type: picked.type,
    axes: {
      risk: riskAxis === 'A' ? 'Aggressive' : 'Conservative',
      control: controlAxis === 'I' ? 'Internal/Active' : 'External/Passive',
      reactivity: emotionAxis === 'R' ? 'Rational' : 'Emotional'
    },
    axisScores: {
      riskAggressive: aggressivePct,
      riskConservative: 100 - aggressivePct,
      controlInternal: internalPct,
      controlExternal: 100 - internalPct,
      reactivityEmotional: emotionalPct,
      reactivityRational: 100 - emotionalPct
    },
    recommendation: picked.recommendation
  };
}

function removeAssetFromSession(session, symbol) {
  const realized = Number(session.realizedProfit?.[symbol] || 0);
  const firstBuy = Number(session.firstBuyPrice?.[symbol] || 0);
  if (!session.closedPositions) session.closedPositions = {};
  session.closedPositions[symbol] = { symbol, firstBuyPrice: firstBuy, realizedProfit: realized };
  session.symbols = session.symbols.filter((s) => s !== symbol);
  delete session.holdings[symbol];
  delete session.costBasis[symbol];
  delete session.firstBuyPrice[symbol];
  delete session.realizedProfit[symbol];
}

function buildDailyTimeline(session, endDate) {
  const startDate = session.startDate;
  const end = endDate && endDate >= startDate ? endDate : session.endDate;
  const timeline = [];
  const eventsByDate = new Map();

  for (const decision of session.decisions || []) {
    if (!decision?.date || decision.date > end) continue;
    const holdings = {};
    for (const symbol of Object.keys(decision.requestedTargets || {})) {
      const history = session.histories[symbol];
      if (!history) continue;
      const p = getNearestPrice(history, decision.date, 'close');
      const px = p?.price || 0;
      holdings[symbol] = px > 0 ? Number(decision.requestedTargets[symbol] || 0) / px : 0;
    }
    eventsByDate.set(decision.date, { cash: Number(decision.cash || 0), holdings });
  }

  const holdingsState = {};
  let cashState = Number(session.initialCash || 0);
  let currentDate = startDate;
  while (currentDate <= end) {
    const event = eventsByDate.get(currentDate);
    if (event) {
      cashState = Number(event.cash || 0);
      for (const [sym, qty] of Object.entries(event.holdings || {})) {
        holdingsState[sym] = Number(qty || 0);
      }
    }

    let value = cashState;
    for (const [sym, qty] of Object.entries(holdingsState)) {
      if (!(qty > 0)) continue;
      const history = session.histories[sym];
      if (!history) continue;
      const p = getPriceOnOrBefore(history, currentDate, 'close');
      if (!p) continue;
      value += qty * p.price;
    }

    timeline.push({ date: currentDate, value });
    const d = new Date(currentDate + 'T00:00:00Z');
    currentDate = toIsoDate(d.getTime() + DAY_MS);
  }

  return timeline;
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, now: new Date().toISOString() });
});

app.post('/api/assets/validate', async (req, res) => {
  try {
    const token = normalizeSymbol(req.body?.token);
    if (!token) return res.status(400).json({ error: 'token is required' });

    const result = await validateAssetTokenExists(token);
    res.json({
      ok: true,
      asset: {
        id: result.meta.id,
        type: result.meta.type,
        label: result.meta.label
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/assets/price', async (req, res) => {
  try {
    const token = normalizeSymbol(req.body?.token);
    const date = String(req.body?.date || toIsoDate(Date.now()));
    if (!token) return res.status(400).json({ error: 'token is required' });
    if (!isValidDateString(date)) return res.status(400).json({ error: 'date must be YYYY-MM-DD' });

    const result = await getAssetTokenPriceAtDate(token, date);
    res.json({
      ok: true,
      asset: {
        id: result.meta.id,
        type: result.meta.type,
        label: result.meta.label
      },
      date: result.date,
      price: Number(result.price || 0)
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/assets/resolve', async (req, res) => {
  try {
    const query = String(req.body?.query || '').trim();
    const preferBond = !!req.body?.preferBond;
    if (!query) return res.status(400).json({ error: 'query is required' });

    if (isLikelyTicker(query)) {
      return res.json({
        ok: true,
        best: {
          symbol: normalizeSymbol(query),
          shortname: '',
          longname: '',
          logoUrl: '',
          exchange: '',
          quoteType: ''
        },
        matches: []
      });
    }

    const result = await resolveSymbolFromName(query, { preferBond });
    res.json({
      ok: true,
      best: {
        symbol: result.best.symbol,
        shortname: result.best.shortname,
        longname: result.best.longname,
        logoUrl: result.best.logoUrl || '',
        exchange: result.best.exchange,
        quoteType: result.best.quoteType
      },
      matches: result.matches
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/simulations/start', async (req, res) => {
  try {
    const startDate = req.body?.startDate;
    const endDate = req.body?.endDate;
    const frequency = req.body?.frequency;
    const initialCash = Number(req.body?.initialCash);
    const assets = Array.isArray(req.body?.assets)
      ? req.body.assets.map(normalizeSymbol).filter(Boolean)
      : Array.isArray(req.body?.symbols)
      ? req.body.symbols.map(normalizeSymbol).filter(Boolean)
      : [];
    const benchmarkSymbolsRaw = Array.isArray(req.body?.benchmarkSymbols)
      ? req.body.benchmarkSymbols
      : typeof req.body?.benchmarkSymbols === 'string'
      ? req.body.benchmarkSymbols.split(',')
      : [];
    const benchmarkSymbols = [...new Set(benchmarkSymbolsRaw.map(normalizeSymbol).filter(Boolean))];

    if (!isValidDateString(startDate)) return res.status(400).json({ error: 'startDate must be YYYY-MM-DD' });
    if (!isValidDateString(endDate)) return res.status(400).json({ error: 'endDate must be YYYY-MM-DD' });
    if (startDate >= endDate) return res.status(400).json({ error: 'endDate must be after startDate' });
    if (!['daily', 'weekly', 'monthly'].includes(frequency)) return res.status(400).json({ error: 'frequency must be daily, weekly, or monthly' });
    if (!Number.isFinite(initialCash) || initialCash <= 0) return res.status(400).json({ error: 'initialCash must be > 0' });
    if (assets.length === 0) return res.status(400).json({ error: 'Provide at least one investment asset.' });

    const parsedAssets = assets.map((token) => parseAssetToken(token));
    const uniqueAssetMap = new Map(parsedAssets.map((asset) => [asset.id, asset]));
    const uniqueAssets = [...uniqueAssetMap.values()];
    const uniqueSymbols = uniqueAssets.map((asset) => asset.id);

    const histories = {};
    const assetMeta = {};
    await Promise.all(
      uniqueSymbols.map(async (assetId) => {
        const result = await fetchAssetHistory(assetId, startDate, endDate);
        histories[assetId] = result.history;
        assetMeta[assetId] = result.meta;
      })
    );

    const schedule = createSchedule(startDate, endDate, frequency);
    if (schedule.length === 0) return res.status(400).json({ error: 'Could not create schedule.' });

    const id = crypto.randomUUID();
    const holdings = Object.fromEntries(uniqueSymbols.map((s) => [s, 0]));
    const costBasis = Object.fromEntries(uniqueSymbols.map((s) => [s, 0]));
    const firstBuyPrice = Object.fromEntries(uniqueSymbols.map((s) => [s, 0]));
    const realizedProfit = Object.fromEntries(uniqueSymbols.map((s) => [s, 0]));

    const session = {
      id,
      startDate,
      endDate,
      frequency,
      initialCash,
      cash: initialCash,
      symbols: uniqueSymbols,
      benchmarkSymbols,
      assetMeta,
      holdings,
      costBasis,
      firstBuyPrice,
      realizedProfit,
      closedPositions: {},
      histories,
      schedule,
      stepIndex: 0,
      feesPaid: 0,
      totalDividendsReceived: 0,
      dividendAccruedThrough: startDate,
      snapshots: [],
      decisions: [],
      turnoverSeries: [],
      concentrationSeries: [],
      cashRatioSeries: [],
      completed: false
    };

    sessions.set(id, session);

    const firstDate = schedule[0];
    const firstPreview = getPortfolioValueAtDate(session, firstDate);

    res.json({
      simulationId: id,
      startDate,
      endDate,
      frequency,
      symbols: uniqueSymbols,
      assets: uniqueSymbols.map((id) => ({ id, ...assetMeta[id] })),
      benchmarkSymbols,
      initialCash,
      nextRebalanceDate: firstDate,
      stepIndex: 0,
      totalSteps: schedule.length,
      preview: {
        date: firstDate,
        portfolioValue: firstPreview.total,
        prices: Object.fromEntries(Object.entries(firstPreview.prices).map(([k, v]) => [k, v.price]))
      },
      previewInsights: buildPreviewInsights(session, firstDate, firstPreview)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/simulations/:id', (req, res) => {
  const session = sessions.get(req.params.id);
  if (!session) return res.status(404).json({ error: 'Simulation not found' });

  const nextDate = session.schedule[session.stepIndex] || null;
  const previewDate = nextDate || session.endDate;
  let preview = null;
  if (previewDate) {
    try {
      const p = getPortfolioValueAtDate(session, previewDate);
      preview = {
        date: previewDate,
        portfolioValue: p.total,
        prices: Object.fromEntries(Object.entries(p.prices).map(([k, v]) => [k, v.price]))
      };
    } catch (_error) {
      preview = null;
    }
  }

  res.json({
    simulationId: session.id,
    startDate: session.startDate,
    endDate: session.endDate,
    frequency: session.frequency,
    symbols: session.symbols,
    assets: session.symbols.map((id) => ({ id, ...session.assetMeta[id] })),
    benchmarkSymbols: session.benchmarkSymbols || [],
    stepIndex: session.stepIndex,
    totalSteps: session.schedule.length,
    nextRebalanceDate: nextDate,
    preview,
    previewInsights: preview
      ? buildPreviewInsights(session, preview.date, {
          total: preview.portfolioValue,
          prices: Object.fromEntries(Object.entries(preview.prices).map(([k, price]) => [k, { price }]))
        })
      : null,
    completed: session.completed,
    feesPaid: session.feesPaid,
    holdings: session.holdings,
    costBasis: session.costBasis,
    firstBuyPrice: session.firstBuyPrice,
    realizedProfit: session.realizedProfit,
    cash: session.cash,
    decisions: session.decisions.length
  });
});

app.get('/api/simulations/:id/market-briefing', async (req, res) => {
  try {
    const session = sessions.get(req.params.id);
    if (!session) return res.status(404).json({ error: 'Simulation not found' });

    const reqDate = String(req.query?.date || '').trim();
    const reqSince = String(req.query?.sinceDate || '').trim();
    const defaultDate = session.schedule[session.stepIndex] || session.endDate;
    const date = isValidDateString(reqDate) ? reqDate : defaultDate;
    const sinceDate = isValidDateString(reqSince)
      ? reqSince
      : session.snapshots.length
      ? session.snapshots[session.snapshots.length - 1].date
      : session.startDate;
    const isHistoricalView = date < toIsoDate(Date.now() - 7 * DAY_MS);

    const preview = getPortfolioValueAtDate(session, date);

    const assets = await Promise.all(
      session.symbols.map(async (symbol) => {
        const history = session.histories[symbol] || [];
        const current = getPriceOnOrBefore(history, date, 'close') || getPriceOnOrAfter(history, date, 'close');
        const currentPrice = Number(current?.price || 0);
        const quantity = Number(session.holdings?.[symbol] || 0);
        const value = quantity * currentPrice;
        const weight = preview.total > 0 ? value / preview.total : 0;
        const periodReturn = getHistoryReturn(history, sinceDate, date, 'close');
        const dailyReturn = getDailyReturnAtDate(history, date, 'close');
        const latestDividend = getLatestDividendInfo(history, date);

        const meta = session.assetMeta?.[symbol] || {};
        const baseSymbol = normalizeSymbol(meta.baseSymbol || symbol);
        const isMarketLike = !['cash', 'savings'].includes(String(meta.type || '').toLowerCase());
        const [earningsDateRaw, headlinesRaw] = isMarketLike
          ? await Promise.all([fetchYahooEarningsDate(baseSymbol), fetchYahooNewsHeadlines(baseSymbol, 3)])
          : [null, []];
        const earningsDate = isHistoricalView ? null : earningsDateRaw;
        const headlines = (Array.isArray(headlinesRaw) ? headlinesRaw : [])
          .filter((h) => !h.date || h.date <= date)
          .slice(0, 3);

        return {
          symbol,
          baseSymbol,
          displayName: meta.displayName || meta.label || symbol,
          type: meta.type || 'market',
          price: currentPrice,
          quantity,
          value,
          weight,
          periodReturn,
          dailyReturn,
          earningsDate,
          latestDividend,
          headlines
        };
      })
    );

    res.json({
      simulationId: session.id,
      date,
      sinceDate,
      totalValue: preview.total,
      cash: session.cash,
      assets
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/simulations/:id/market-search', async (req, res) => {
  try {
    const session = sessions.get(req.params.id);
    if (!session) return res.status(404).json({ error: 'Simulation not found' });

    const rawQuery = String(req.body?.query || '').trim();
    if (!rawQuery) return res.status(400).json({ error: 'query is required' });

    const reqDate = String(req.body?.date || '').trim();
    const reqSince = String(req.body?.sinceDate || '').trim();
    const defaultDate = session.schedule[session.stepIndex] || session.endDate;
    const date = isValidDateString(reqDate) ? reqDate : defaultDate;
    const sinceInput = isValidDateString(reqSince) ? reqSince : session.startDate;
    const sinceDate = sinceInput <= date ? sinceInput : session.startDate;
    const isHistoricalView = date < toIsoDate(Date.now() - 7 * DAY_MS);

    let resolvedSymbol = '';
    let resolvedName = '';
    if (isLikelyTicker(rawQuery)) {
      resolvedSymbol = normalizeSymbol(rawQuery);
    } else {
      const resolved = await resolveSymbolFromName(rawQuery, { preferBond: false });
      resolvedSymbol = normalizeSymbol(resolved?.best?.symbol || '');
      resolvedName = String(resolved?.best?.longname || resolved?.best?.shortname || '').trim();
    }
    if (!resolvedSymbol) {
      return res.status(400).json({ error: `No matching symbol found for "${rawQuery}".` });
    }

    const history = await fetchYahooHistory(resolvedSymbol, session.startDate, session.endDate);
    const current = getPriceOnOrBefore(history, date, 'close') || getPriceOnOrAfter(history, date, 'close');
    if (!current) {
      return res.status(400).json({ error: `No price found for ${resolvedSymbol} on or near ${date}.` });
    }

    const preview = getPortfolioValueAtDate(session, date);
    const heldSymbol = session.symbols.find((sym) => {
      if (sym === resolvedSymbol) return true;
      const meta = session.assetMeta?.[sym];
      const base = normalizeSymbol(meta?.baseSymbol || '');
      return base === resolvedSymbol;
    });
    const quantity = heldSymbol ? Number(session.holdings?.[heldSymbol] || 0) : 0;
    const value = quantity * Number(current.price || 0);
    const weight = preview.total > 0 ? value / preview.total : 0;

    const [earningsDateRaw, headlinesRaw] = await Promise.all([
      fetchYahooEarningsDate(resolvedSymbol),
      fetchYahooNewsHeadlines(resolvedSymbol, 6)
    ]);
    const earningsDate = isHistoricalView ? null : earningsDateRaw;
    const headlines = (Array.isArray(headlinesRaw) ? headlinesRaw : [])
      .filter((h) => !h.date || h.date <= date)
      .slice(0, 3);

    const heldMeta = heldSymbol ? session.assetMeta?.[heldSymbol] : null;
    const displayName = String(
      heldMeta?.displayName || heldMeta?.label || resolvedName || resolvedSymbol
    ).trim();

    res.json({
      simulationId: session.id,
      query: rawQuery,
      date,
      sinceDate,
      asset: {
        symbol: resolvedSymbol,
        displayName,
        inPortfolio: !!heldSymbol,
        portfolioSymbol: heldSymbol || null,
        price: Number(current.price || 0),
        quantity,
        value,
        weight,
        periodReturn: getHistoryReturn(history, sinceDate, date, 'close'),
        dailyReturn: getDailyReturnAtDate(history, date, 'close'),
        latestDividend: getLatestDividendInfo(history, date),
        earningsDate,
        headlines
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/simulations/:id/assets', async (req, res) => {
  try {
    const session = sessions.get(req.params.id);
    if (!session) return res.status(404).json({ error: 'Simulation not found' });
    if (session.completed) return res.status(400).json({ error: 'Simulation already completed.' });

    const token = normalizeSymbol(req.body?.token);
    if (!token) return res.status(400).json({ error: 'token is required' });

    const parsed = parseAssetToken(token);
    const symbol = parsed.id;
    if (session.symbols.includes(symbol)) {
      return res.json({
        simulationId: session.id,
        symbols: session.symbols,
        assets: session.symbols.map((id) => ({ id, ...session.assetMeta[id] })),
        alreadyExists: true
      });
    }

    const fetched = await fetchAssetHistory(symbol, session.startDate, session.endDate);
    session.symbols.push(symbol);
    session.assetMeta[symbol] = fetched.meta;
    session.histories[symbol] = fetched.history;
    session.holdings[symbol] = 0;
    session.costBasis[symbol] = 0;
    session.firstBuyPrice[symbol] = 0;
    session.realizedProfit[symbol] = Number(session.closedPositions?.[symbol]?.realizedProfit || 0);
    delete session.closedPositions?.[symbol];

    const nextDate = session.schedule[session.stepIndex] || null;
    let preview = null;
    if (nextDate) {
      const p = getPortfolioValueAtDate(session, nextDate);
      preview = {
        date: nextDate,
        portfolioValue: p.total,
        prices: Object.fromEntries(Object.entries(p.prices).map(([k, v]) => [k, v.price]))
      };
    }

    return res.json({
      simulationId: session.id,
      symbols: session.symbols,
      assets: session.symbols.map((id) => ({ id, ...session.assetMeta[id] })),
      preview,
      previewInsights: preview
        ? buildPreviewInsights(session, nextDate, {
            total: preview.portfolioValue,
            prices: Object.fromEntries(Object.entries(preview.prices).map(([k, price]) => [k, { price }]))
          })
        : null
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/simulations/:id/rebalance', (req, res) => {
  try {
    const session = sessions.get(req.params.id);
    if (!session) return res.status(404).json({ error: 'Simulation not found' });
    if (session.completed) return res.status(400).json({ error: 'Simulation already completed.' });

    const date = session.schedule[session.stepIndex];
    if (!date) return res.status(400).json({ error: 'No remaining rebalance dates. Finish simulation.' });
    settleDividendsThrough(session, date);
    const feeRate = req.body?.skipFees ? 0 : FEE_RATE;

    const { total, prices } = getPortfolioValueAtDate(session, date);
    const { allocationMode, perAssetModes, requestedInputs, targetValues, budgetUsed } = buildTargetValues(
      session,
      total,
      prices,
      req.body
    );

    const preWeights = {};
    for (const symbol of session.symbols) {
      const value = session.holdings[symbol] * prices[symbol].price;
      const w = total > 0 ? value / total : 0;
      preWeights[symbol] = w;
    }

    const targetWeights = {};
    let turnover = 0;
    for (const symbol of session.symbols) {
      const w = total > 0 ? targetValues[symbol] / total : 0;
      targetWeights[symbol] = w;
      turnover += Math.abs((w || 0) - (preWeights[symbol] || 0));
    }
    turnover /= 2;

    let feeForThisRebalance = 0;
    const preHoldingsQty = Object.fromEntries(session.symbols.map((symbol) => [symbol, session.holdings[symbol] || 0]));
    const tradePlan = session.symbols.map((symbol) => {
      const price = prices[symbol].price;
      const currentQty = Number(session.holdings[symbol] || 0);
      const currentValue = currentQty * price;
      const targetValue = Number(targetValues[symbol] || 0);
      return {
        symbol,
        price,
        currentQty,
        currentValue,
        deltaRequested: targetValue - currentValue
      };
    });

    // Execute sells first so proceeds are available for buys.
    const sells = tradePlan.filter((x) => x.deltaRequested < -1e-9);
    for (const leg of sells) {
      const sellValue = Math.max(0, Math.min(leg.currentValue, Math.abs(leg.deltaRequested)));
      if (sellValue <= 1e-12) continue;
      const sellQty = sellValue / Math.max(leg.price, 1e-12);

      if (leg.currentQty > 0) {
        const ratio = Math.max(0, Math.min(1, sellQty / leg.currentQty));
        const prevBasis = Number(session.costBasis[leg.symbol] || 0);
        const soldBasis = Math.max(0, prevBasis * ratio);
        session.costBasis[leg.symbol] = Math.max(0, prevBasis - soldBasis);
        session.realizedProfit[leg.symbol] = Number(session.realizedProfit[leg.symbol] || 0) + sellValue - soldBasis;
      }

      const sellFee = sellValue * feeRate;
      session.holdings[leg.symbol] = Math.max(0, Number(session.holdings[leg.symbol] || 0) - sellQty);
      session.cash += sellValue - sellFee;
      feeForThisRebalance += sellFee;
    }

    // If requested buys (plus fees) exceed available cash, scale buys proportionally
    // so "no-change" plans do not force an immediate sell in the next period.
    const buys = tradePlan.filter((x) => x.deltaRequested > 1e-9);
    const requestedBuyCostWithFees = buys.reduce(
      (sum, leg) => sum + leg.deltaRequested * (1 + feeRate),
      0
    );
    const availableCashForBuys = Math.max(0, Number(session.cash || 0));
    const buyScale =
      requestedBuyCostWithFees > availableCashForBuys + 1e-9
        ? Math.max(0, availableCashForBuys / requestedBuyCostWithFees)
        : 1;

    for (const leg of buys) {
      const buyValue = Math.max(0, leg.deltaRequested * buyScale);
      if (buyValue <= 1e-12) continue;
      const buyQty = buyValue / Math.max(leg.price, 1e-12);
      if (
        (session.holdings[leg.symbol] || 0) <= 1e-10 &&
        buyQty > 1e-10 &&
        Number(session.firstBuyPrice?.[leg.symbol] || 0) <= 0
      ) {
        session.firstBuyPrice[leg.symbol] = leg.price;
      }
      const buyFee = buyValue * feeRate;
      session.holdings[leg.symbol] = Number(session.holdings[leg.symbol] || 0) + buyQty;
      session.costBasis[leg.symbol] = Number(session.costBasis[leg.symbol] || 0) + buyValue;
      session.cash -= buyValue + buyFee;
      feeForThisRebalance += buyFee;
    }

    for (const symbol of session.symbols) {
      if (session.holdings[symbol] <= 1e-10) {
        session.holdings[symbol] = 0;
        session.costBasis[symbol] = 0;
      }
    }

    if (Math.abs(session.cash) < 1e-8) session.cash = 0;
    session.feesPaid += feeForThisRebalance;

    const symbolsSoldOut = session.symbols.filter((symbol) => {
      const target = Number(targetValues[symbol] || 0);
      const qty = Number(session.holdings[symbol] || 0);
      const basis = Number(session.costBasis?.[symbol] || 0);
      return target <= 1e-6 && qty <= 1e-10 && basis <= 1e-6;
    });
    symbolsSoldOut.forEach((symbol) => removeAssetFromSession(session, symbol));

    const post = getPortfolioValueAtDate(session, date);
    const postTotal = post.total;

    const actualWeights = {};
    let hhi = 0;
    for (const symbol of session.symbols) {
      const w = postTotal > 0 ? (session.holdings[symbol] * post.prices[symbol].price) / postTotal : 0;
      actualWeights[symbol] = w;
      hhi += w ** 2;
    }

    const cashRatio = postTotal > 0 ? session.cash / postTotal : 0;

    session.turnoverSeries.push(turnover);
    session.concentrationSeries.push(hhi);
    session.cashRatioSeries.push(cashRatio);
    session.decisions.push({
      date,
      allocationMode,
      perAssetModes,
      requestedInputs,
      requestedTargets: targetValues,
      requestedWeights: targetWeights,
      actualWeights,
      portfolioValue: postTotal,
      cash: session.cash,
      turnover,
      fee: feeForThisRebalance
    });

    session.snapshots.push({ date, value: postTotal });
    session.stepIndex += 1;

    const nextDate = session.schedule[session.stepIndex] || null;
    let nextPreview = null;
    let nextPreviewInsights = null;
    if (nextDate) {
      try {
        const p = getPortfolioValueAtDate(session, nextDate);
        nextPreview = {
          date: nextDate,
          portfolioValue: p.total,
          prices: Object.fromEntries(Object.entries(p.prices).map(([k, v]) => [k, v.price]))
        };
        nextPreviewInsights = buildPreviewInsights(session, nextDate, {
          total: nextPreview.portfolioValue,
          prices: Object.fromEntries(Object.entries(nextPreview.prices).map(([k, price]) => [k, { price }]))
        });
      } catch (_error) {
        nextPreview = null;
        nextPreviewInsights = null;
      }
    } else {
      nextPreviewInsights = buildPreviewInsights(session, date, post);
    }

    res.json({
      date,
      timelinePoint: { date, value: postTotal },
      portfolioValue: postTotal,
      cash: session.cash,
      holdings: session.holdings,
      costBasis: session.costBasis,
      firstBuyPrice: session.firstBuyPrice,
      realizedProfit: session.realizedProfit,
      feesPaid: session.feesPaid,
      dividendsReceived: Number(session.totalDividendsReceived || 0),
      allocationMode,
      perAssetModes,
      requestedInputs,
      budgetUsed,
      budgetUsedRatio: total > 0 ? budgetUsed / total : 0,
      referencePortfolioValue: total,
      referencePrices: Object.fromEntries(Object.entries(prices).map(([k, v]) => [k, v.price])),
      turnover,
      concentrationHHI: hhi,
      stepIndex: session.stepIndex,
      totalSteps: session.schedule.length,
      nextRebalanceDate: nextDate,
      symbols: session.symbols,
      assets: session.symbols.map((id) => ({ id, ...session.assetMeta[id] })),
      nextPreview,
      nextPreviewInsights
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/simulations/:id/trade', (req, res) => {
  try {
    const session = sessions.get(req.params.id);
    if (!session) return res.status(404).json({ error: 'Simulation not found' });
    if (session.completed) return res.status(400).json({ error: 'Simulation already completed.' });

    const date = session.schedule[session.stepIndex];
    if (!date) return res.status(400).json({ error: 'No active simulation date available.' });
    settleDividendsThrough(session, date);

    const sellSymbol = normalizeSymbol(req.body?.sellSymbol);
    const buySymbol = normalizeSymbol(req.body?.buySymbol);
    const sellAmount = Number(req.body?.sellAmount || 0);
    const buyAmount = Number(req.body?.buyAmount || 0);
    const sellUnits = Number(req.body?.sellUnits || 0);
    const buyUnits = Number(req.body?.buyUnits || 0);
    const sellMode = String(req.body?.sellMode || 'dollars').toLowerCase();
    const buyMode = String(req.body?.buyMode || 'dollars').toLowerCase();
    const liquidateAll = !!req.body?.liquidateAll;

    if (!session.symbols.includes(sellSymbol) || !session.symbols.includes(buySymbol)) {
      return res.status(400).json({ error: 'Sell/Buy symbols must be in your current portfolio asset list.' });
    }
    if (
      sellAmount < 0 ||
      buyAmount < 0 ||
      sellUnits < 0 ||
      buyUnits < 0 ||
      !Number.isFinite(sellAmount) ||
      !Number.isFinite(buyAmount) ||
      !Number.isFinite(sellUnits) ||
      !Number.isFinite(buyUnits)
    ) {
      return res.status(400).json({ error: 'Trade amounts must be valid positive numbers.' });
    }
    if (!['dollars', 'units'].includes(sellMode) || !['dollars', 'units'].includes(buyMode)) {
      return res.status(400).json({ error: 'sellMode and buyMode must be dollars or units.' });
    }

    const current = getPortfolioValueAtDate(session, date);
    const prices = current.prices;
    const preHoldingsQty = Object.fromEntries(session.symbols.map((symbol) => [symbol, Number(session.holdings[symbol] || 0)]));

    const sellPrice = prices[sellSymbol].price;
    const buyPrice = prices[buySymbol].price;
    const sellPositionQty = session.holdings[sellSymbol];
    const sellPositionValue = sellPositionQty * sellPrice;
    const requestedSellQty = liquidateAll ? sellPositionQty : sellMode === 'units' ? sellUnits : sellAmount / Math.max(sellPrice, 1e-12);
    const requestedSell = requestedSellQty * sellPrice;

    if (requestedSell > sellPositionValue + 1e-6) {
      return res.status(400).json({ error: 'Sell amount exceeds current position value.' });
    }

    let feeTotal = 0;

    if (requestedSell > 0) {
      const currentQty = session.holdings[sellSymbol];
      const sellQty = requestedSellQty;
      const sellFee = requestedSell * FEE_RATE;
      if (currentQty > 0) {
        const ratio = Math.max(0, Math.min(1, sellQty / currentQty));
        const prevBasis = Number(session.costBasis[sellSymbol] || 0);
        const soldBasis = Math.max(0, prevBasis * ratio);
        session.costBasis[sellSymbol] = Math.max(0, prevBasis - soldBasis);
        session.realizedProfit[sellSymbol] = Number(session.realizedProfit[sellSymbol] || 0) + requestedSell - soldBasis;
      }
      session.holdings[sellSymbol] -= sellQty;
      session.cash += requestedSell - sellFee;
      feeTotal += sellFee;
    }

    const requestedBuyQty = buyMode === 'units' ? buyUnits : buyAmount / Math.max(buyPrice, 1e-12);
    const requestedBuy = requestedBuyQty * buyPrice;

    if (requestedBuy > 0) {
      const buyFee = requestedBuy * FEE_RATE;
      const cost = requestedBuy + buyFee;
      if (cost > session.cash + 1e-6) {
        return res.status(400).json({ error: 'Not enough cash for this buy order after fees.' });
      }
      const buyQty = requestedBuyQty;
      if (
        (session.holdings[buySymbol] || 0) <= 1e-10 &&
        buyQty > 1e-10 &&
        Number(session.firstBuyPrice?.[buySymbol] || 0) <= 0
      ) {
        session.firstBuyPrice[buySymbol] = buyPrice;
      }
      session.holdings[buySymbol] += buyQty;
      session.costBasis[buySymbol] = (session.costBasis[buySymbol] || 0) + requestedBuy;
      session.cash -= cost;
      feeTotal += buyFee;
    }

    for (const symbol of session.symbols) {
      if (session.holdings[symbol] <= 1e-10) {
        session.holdings[symbol] = 0;
        session.costBasis[symbol] = 0;
      }
    }
    const soldOutSymbols = session.symbols.filter(
      (symbol) =>
        Number(preHoldingsQty[symbol] || 0) > 1e-10 &&
        Number(session.holdings[symbol] || 0) <= 1e-10 &&
        Number(session.costBasis[symbol] || 0) <= 1e-6
    );
    soldOutSymbols.forEach((symbol) => removeAssetFromSession(session, symbol));
    session.feesPaid += feeTotal;
    const post = getPortfolioValueAtDate(session, date);

    const nextDate = session.schedule[session.stepIndex] || null;
    let nextPreview = null;
    let nextPreviewInsights = null;
    if (nextDate) {
      const p = getPortfolioValueAtDate(session, nextDate);
      nextPreview = {
        date: nextDate,
        portfolioValue: p.total,
        prices: Object.fromEntries(Object.entries(p.prices).map(([k, v]) => [k, v.price]))
      };
      nextPreviewInsights = buildPreviewInsights(session, nextDate, p);
    }

    res.json({
      date,
      sellSymbol,
      buySymbol,
      liquidateAll,
      soldValue: requestedSell,
      soldUnits: requestedSellQty,
      boughtValue: requestedBuy,
      boughtUnits: requestedBuyQty,
      feeTotal,
      dividendsReceived: Number(session.totalDividendsReceived || 0),
      cash: session.cash,
      portfolioValue: post.total,
      holdings: session.holdings,
      costBasis: session.costBasis,
      firstBuyPrice: session.firstBuyPrice,
      realizedProfit: session.realizedProfit,
      symbols: session.symbols,
      assets: session.symbols.map((id) => ({ id, ...session.assetMeta[id] })),
      nextPreview,
      nextPreviewInsights
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/simulations/:id/timeline', async (req, res) => {
  try {
    const session = sessions.get(req.params.id);
    if (!session) return res.status(404).json({ error: 'Simulation not found' });
    const defaultEnd = session.schedule[session.stepIndex] || session.endDate;
    const requestedEnd = String(req.query?.endDate || '').trim();
    const end = isValidDateString(requestedEnd) ? requestedEnd : defaultEnd;
    if (end < session.startDate) return res.status(400).json({ error: 'endDate is before simulation startDate' });
    const timeline = buildDailyTimeline(session, end);
    const benchmarkSymbols = (session.benchmarkSymbols && session.benchmarkSymbols.length ? session.benchmarkSymbols : []).slice(0, 8);
    if (!session.benchmarkHistories) session.benchmarkHistories = {};
    const benchmarkSeries = [];

    for (const symbol of benchmarkSymbols) {
      try {
        let history = session.benchmarkHistories[symbol];
        if (!Array.isArray(history) || history.length === 0) {
          history = await fetchYahooHistory(symbol, session.startDate, session.endDate);
          session.benchmarkHistories[symbol] = history;
        }
        const start = getNearestPrice(history, session.startDate, 'adjClose');
        if (!start || !(start.price > 0)) continue;
        const points = timeline
          .map((pt) => {
            const p = getPriceOnOrBefore(history, pt.date, 'adjClose');
            if (!p || !(p.price > 0)) return null;
            return { date: pt.date, value: session.initialCash * (p.price / start.price) };
          })
          .filter(Boolean);
        if (points.length >= 2) benchmarkSeries.push({ symbol, timeline: points });
      } catch (_error) {
        // Skip benchmark symbol if history is unavailable.
      }
    }
    res.json({
      simulationId: session.id,
      startDate: session.startDate,
      endDate: end,
      timeline,
      benchmarkSeries
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/simulations/:id/replay', (req, res) => {
  try {
    const session = sessions.get(req.params.id);
    if (!session) return res.status(404).json({ error: 'Simulation not found' });

    const symbols = [...session.symbols];
    const allDates = new Set();
    symbols.forEach((symbol) => {
      const history = session.histories[symbol] || [];
      history.forEach((row) => {
        if (row.date >= session.startDate && row.date <= session.endDate) allDates.add(row.date);
      });
    });

    const dates = [...allDates].sort((a, b) => (a < b ? -1 : 1));
    const frames = [];
    const ptr = Object.fromEntries(symbols.map((s) => [s, 0]));

    for (const date of dates) {
      const prices = {};
      for (const symbol of symbols) {
        const history = session.histories[symbol] || [];
        let i = ptr[symbol] || 0;
        while (i + 1 < history.length && history[i + 1].date <= date) i += 1;
        ptr[symbol] = i;
        if (history[i] && history[i].date <= date) {
          prices[symbol] = Number(history[i].close || history[i].adjClose || 0);
        } else {
          prices[symbol] = 0;
        }
      }
      frames.push({ date, prices });
    }

    res.json({
      simulationId: session.id,
      startDate: session.startDate,
      endDate: session.endDate,
      symbols,
      frames
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/simulations/:id/projection', async (req, res) => {
  try {
    const session = sessions.get(req.params.id);
    if (!session) return res.status(404).json({ error: 'Simulation not found' });

    const lastSnapshot = session.snapshots.length ? session.snapshots[session.snapshots.length - 1] : null;
    const currentDate = lastSnapshot ? lastSnapshot.date : session.startDate;
    const currentPoint = getPortfolioValueAtDate(session, currentDate);
    const currentValue = currentPoint.total;

    const remainingSchedule = session.schedule.filter((d) => d >= currentDate);
    const projectionDates = uniqueSortedDates([currentDate, ...remainingSchedule, session.endDate]);
    const projectedTimeline = projectionDates.map((date) => {
      const p = getPortfolioValueAtDate(session, date);
      return { date, value: p.total };
    });

    const projectedEndValue = projectedTimeline.length
      ? projectedTimeline[projectedTimeline.length - 1].value
      : currentValue;
    const projectedReturnToEnd = currentValue > 0 ? projectedEndValue / currentValue - 1 : 0;

    const benchmarkSymbols = (session.benchmarkSymbols && session.benchmarkSymbols.length ? session.benchmarkSymbols : []).slice(0, 8);
    const benchmarkProjection = [];

    for (const symbol of benchmarkSymbols) {
      try {
        const h = await fetchYahooHistory(symbol, currentDate, session.endDate);
        const start = getNearestPrice(h, currentDate, 'adjClose');
        if (!start) {
          benchmarkProjection.push({ symbol, ok: false, series: [], projectedReturnToEnd: null });
          continue;
        }

        const series = projectionDates.map((date) => {
          const p = getPriceOnOrBefore(h, date, 'adjClose');
          const value = p ? currentValue * (p.price / start.price) : null;
          return { date, value };
        }).filter((x) => x.value != null);

        const projectedEnd = series.length ? series[series.length - 1].value : null;
        const projectedReturn = projectedEnd != null && currentValue > 0 ? projectedEnd / currentValue - 1 : null;

        benchmarkProjection.push({
          symbol,
          ok: projectedReturn != null,
          projectedReturnToEnd: projectedReturn,
          series
        });
      } catch (error) {
        benchmarkProjection.push({ symbol, ok: false, projectedReturnToEnd: null, series: [], error: error.message });
      }
    }

    res.json({
      simulationId: session.id,
      currentDate,
      endDate: session.endDate,
      currentValue,
      projectedEndValue,
      projectedReturnToEnd,
      periodsRemaining: Math.max(0, projectionDates.length - 1),
      projectedTimeline,
      benchmarkProjection
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/simulations/:id/finish', async (req, res) => {
  try {
    const session = sessions.get(req.params.id);
    if (!session) return res.status(404).json({ error: 'Simulation not found' });

    const finalDate = session.endDate;
    settleDividendsThrough(session, finalDate);
    const final = getPortfolioValueAtDate(session, finalDate);

    const finalValue = final.total;
    const totalReturn = finalValue / session.initialCash - 1;
    const cagr = calcCagr(session.initialCash, finalValue, session.startDate, session.endDate);

    const seriesValues = session.snapshots.map((s) => s.value).concat(finalValue);
    const maxDrawdown = calculateMaxDrawdown(seriesValues);
    const annualizedVol = calcAnnualizedVolFromSeries(seriesValues);

    const finalWeightsPreview = {};
    for (const symbol of session.symbols) {
      finalWeightsPreview[symbol] = finalValue > 0 ? (session.holdings[symbol] * final.prices[symbol].price) / finalValue : 0;
    }
    const finalConcentration = Object.values(finalWeightsPreview).reduce((s, w) => s + (w || 0) ** 2, 0);
    const tradeActivity = Math.min(1, Number(session.decisions?.length || 0) / Math.max(1, Number(session.schedule?.length || 1)));
    const topWeightsByDecision = (session.decisions || []).map((d) => {
      const vals = Object.values(d?.actualWeights || {}).map((v) => Number(v || 0));
      return vals.length ? Math.max(...vals) : 0;
    });
    const avgTopWeight = topWeightsByDecision.length
      ? topWeightsByDecision.reduce((s, v) => s + v, 0) / topWeightsByDecision.length
      : Object.values(finalWeightsPreview).reduce((m, v) => Math.max(m, Number(v || 0)), 0);
    const turnoverStd = session.turnoverSeries.length ? stdDev(session.turnoverSeries) : 0;
    const feeIntensity = session.decisions.length
      ? session.decisions.reduce((s, d) => s + Number(d?.fee || 0) / Math.max(1, Number(d?.portfolioValue || 1)), 0) /
        session.decisions.length
      : 0;
    let decisionDrift = 0;
    let decisionDriftCount = 0;
    let directionFlipRate = 0;
    let flipChecks = 0;
    if (session.decisions.length >= 2) {
      const symbolsUniverse = [...new Set(session.decisions.flatMap((d) => Object.keys(d?.actualWeights || {})))];
      const changesBySymbol = {};
      symbolsUniverse.forEach((s) => {
        changesBySymbol[s] = [];
      });
      for (let i = 1; i < session.decisions.length; i += 1) {
        const prev = session.decisions[i - 1]?.actualWeights || {};
        const curr = session.decisions[i]?.actualWeights || {};
        let stepAbs = 0;
        let stepN = 0;
        symbolsUniverse.forEach((sym) => {
          const delta = Number(curr[sym] || 0) - Number(prev[sym] || 0);
          stepAbs += Math.abs(delta);
          stepN += 1;
          changesBySymbol[sym].push(delta);
        });
        if (stepN > 0) {
          decisionDrift += stepAbs / stepN;
          decisionDriftCount += 1;
        }
      }
      symbolsUniverse.forEach((sym) => {
        const arr = changesBySymbol[sym];
        for (let i = 1; i < arr.length; i += 1) {
          const a = Number(arr[i - 1] || 0);
          const b = Number(arr[i] || 0);
          if (Math.abs(a) < 1e-4 || Math.abs(b) < 1e-4) continue;
          flipChecks += 1;
          if ((a > 0 && b < 0) || (a < 0 && b > 0)) directionFlipRate += 1;
        }
      });
    }
    decisionDrift = decisionDriftCount > 0 ? decisionDrift / decisionDriftCount : 0;
    directionFlipRate = flipChecks > 0 ? directionFlipRate / flipChecks : 0;

    const avgTurnover = session.turnoverSeries.length
      ? session.turnoverSeries.reduce((s, v) => s + v, 0) / session.turnoverSeries.length
      : Math.min(1, tradeActivity * 0.65);
    const avgConcentration = session.concentrationSeries.length
      ? session.concentrationSeries.reduce((s, v) => s + v, 0) / session.concentrationSeries.length
      : finalConcentration;
    const avgCashRatio = session.cashRatioSeries.length
      ? session.cashRatioSeries.reduce((s, v) => s + v, 0) / session.cashRatioSeries.length
      : session.cash / Math.max(finalValue, 1);

    const profile = classifyInvestor({
      avgConcentration,
      avgTurnover,
      avgCashRatio,
      annualizedVol: annualizedVol,
      maxDrawdown,
      tradeActivity,
      turnoverStd,
      avgTopWeight,
      feeIntensity,
      decisionDrift,
      directionFlipRate
    });

    const benchmarkSymbols = (session.benchmarkSymbols && session.benchmarkSymbols.length ? session.benchmarkSymbols : []).slice(0, 8);
    const benchmarkComparisons = [];
    const benchmarkSeries = [];
    for (const symbol of benchmarkSymbols) {
      try {
        const h = await fetchYahooHistory(symbol, session.startDate, session.endDate);
        const start = getNearestPrice(h, session.startDate, 'adjClose');
        const end = getPriceOnOrBefore(h, session.endDate, 'adjClose');
        const totalReturn = start && end ? end.price / start.price - 1 : null;
        benchmarkComparisons.push({ symbol, totalReturn, ok: totalReturn != null });

        if (start) {
          const seriesPoints = [];
          for (const point of session.snapshots.concat([{ date: session.endDate, value: finalValue }])) {
            const p = getPriceOnOrBefore(h, point.date, 'adjClose');
            if (!p) continue;
            const value = session.initialCash * (p.price / start.price);
            seriesPoints.push({ date: point.date, value });
          }
          benchmarkSeries.push({ symbol, points: seriesPoints });
        }
      } catch (error) {
        benchmarkComparisons.push({ symbol, totalReturn: null, ok: false, error: error.message });
      }
    }

    session.completed = true;

    const finalWeights = finalWeightsPreview;

    const timeline = session.snapshots.concat([{ date: session.endDate, value: finalValue }]);

    res.json({
      simulationId: session.id,
      startDate: session.startDate,
      endDate: session.endDate,
      finalValue,
      totalReturn,
      cagr,
      maxDrawdown,
      annualizedVolatility: annualizedVol,
      feesPaid: session.feesPaid,
      dividendsReceived: Number(session.totalDividendsReceived || 0),
      benchmark: benchmarkComparisons[0] || { symbol: 'SPY', totalReturn: null, ok: false },
      benchmarkComparisons,
      benchmarkSeries,
      finalWeights,
      timeline,
      behavior: {
        avgTurnover,
        avgConcentrationHHI: avgConcentration,
        avgCashRatio,
        rebalancesCompleted: session.decisions.length
      },
      investorProfile: profile,
      guidance: [
        'This simulator is educational and not financial advice.',
        'Repeat the simulation across different years to reduce period bias.',
        'Compare your behavior metrics against your risk tolerance survey.'
      ]
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Investment simulator running on http://localhost:${PORT}`);
});
