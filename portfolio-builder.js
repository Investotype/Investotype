(function () {
  const bestInvestmentByCombo = {
    'low-low': 'Johnson & Johnson (JNJ)',
    'low-mid': 'PepsiCo (PEP)',
    'low-high': 'Microsoft (MSFT)',
    'mid-low': 'Vanguard Total Stock Market ETF (VTI)',
    'mid-mid': 'Microsoft (MSFT)',
    'mid-high': 'Apple (AAPL)',
    'high-low': 'Tesla (TSLA)',
    'high-mid': 'Advanced Micro Devices (AMD)',
    'high-high': 'Nvidia (NVDA)'
  };

  function getRiskBandFromCombo(combo) {
    const risk = String(combo || '').split('-')[0];
    return risk || 'mid';
  }

  async function renderLiveSnapshot(combo, target) {
    if (!target) return;
    const instrument = bestInvestmentByCombo[combo] || 'Microsoft (MSFT)';
    const ticker = typeof getTickerFromInstrument === 'function' ? getTickerFromInstrument(instrument) : '';
    const growthReason = typeof getStyleGrowthReason === 'function'
      ? getStyleGrowthReason(combo, instrument)
      : 'This recommendation aligns with your risk/growth profile and position sizing style.';

    target.innerHTML =
      `<p class="portfolio-copy"><strong>Best-fit investment:</strong> ${instrument}</p>` +
      `<p class="portfolio-copy" id="direct-live-line">Loading latest market snapshot...</p>` +
      `<p class="portfolio-copy"><strong>Why this can grow for your type:</strong> ${growthReason}</p>`;

    if (!ticker || typeof fetchTickerSnapshot !== 'function' || typeof formatPrice !== 'function' || typeof formatPercent !== 'function') {
      const line = document.getElementById('direct-live-line');
      if (line) line.textContent = 'Live snapshot is currently unavailable.';
      return;
    }

    try {
      const snap = await fetchTickerSnapshot(ticker);
      const line = document.getElementById('direct-live-line');
      if (!line) return;
      if (!snap) {
        line.textContent = `Live snapshot is temporarily unavailable for ${ticker}.`;
        return;
      }
      line.textContent = `${ticker} now: ${formatPrice(snap.price, snap.currency)} | 1D: ${formatPercent(snap.dayPct)} | 1M: ${formatPercent(snap.monthPct)}`;
    } catch (err) {
      const line = document.getElementById('direct-live-line');
      if (line) line.textContent = `Live snapshot is temporarily unavailable for ${ticker}.`;
    }
  }

  function setupDirectPlanner() {
    const btn = document.getElementById('direct-plan-btn');
    const type = document.getElementById('direct-investor-type');
    const budgetInput = document.getElementById('direct-budget');
    const currencyInput = document.getElementById('direct-currency');
    const out = document.getElementById('direct-portfolio-result');
    const snapshot = document.getElementById('direct-live-snapshot');

    if (!btn || !type || !budgetInput || !currencyInput || !out || !snapshot) return;

    renderLiveSnapshot(type.value || 'mid-mid', snapshot);

    type.addEventListener('change', () => {
      renderLiveSnapshot(type.value || 'mid-mid', snapshot);
    });

    btn.addEventListener('click', () => {
      const combo = type.value || 'mid-mid';
      const riskBand = getRiskBandFromCombo(combo);
      const budget = parseFloat(budgetInput.value) || 0;
      const currency = currencyInput.value || 'USD';
      renderLiveSnapshot(combo, snapshot);
      if (typeof renderPortfolioRecommendation !== 'function') {
        out.textContent = 'Portfolio engine is not available right now. Please refresh and try again.';
        return;
      }
      renderPortfolioRecommendation({ combo, riskBand, budget, currency, out });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupDirectPlanner);
  } else {
    setupDirectPlanner();
  }
})();
