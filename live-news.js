(function () {
  const RSS2JSON = 'https://api.rss2json.com/v1/api.json?rss_url=';
  const FEEDS = [
    { name: 'MarketWatch', url: 'https://www.marketwatch.com/rss/topstories' },
    { name: 'Yahoo Finance S&P 500', url: 'https://feeds.finance.yahoo.com/rss/2.0/headline?s=%5EGSPC&region=US&lang=en-US' },
    { name: 'Yahoo Finance Nasdaq', url: 'https://feeds.finance.yahoo.com/rss/2.0/headline?s=%5EIXIC&region=US&lang=en-US' },
    { name: 'Federal Reserve', url: 'https://www.federalreserve.gov/feeds/press_monetary.xml' }
  ];

  function cleanHtml(input) {
    return (input || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function formatDate(value) {
    const dt = value ? new Date(value) : new Date();
    if (Number.isNaN(dt.getTime())) return '';
    return dt.toLocaleString(undefined, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  async function fetchFeed(feed) {
    const endpoint = RSS2JSON + encodeURIComponent(feed.url);
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error('Feed unavailable');
    const data = await res.json();
    if (!data || !Array.isArray(data.items)) return [];
    return data.items.slice(0, 8).map((item) => ({
      title: cleanHtml(item.title),
      link: item.link,
      date: item.pubDate || item.pubDateStr || '',
      description: cleanHtml(item.description || item.content || ''),
      source: feed.name
    }));
  }

  function dedupe(items) {
    const seen = new Set();
    return items.filter((item) => {
      const key = item.link || item.title;
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function rankRecent(items) {
    return [...items].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  }

  function renderNewsCard(item) {
    return `
      <article class="news-item">
        <h2><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></h2>
        <p>${item.description || 'Open the source to read the full update.'}</p>
        <p class="news-meta">Source: ${item.source}${item.date ? ' | ' + formatDate(item.date) : ''}</p>
      </article>
    `;
  }

  function pickByKeywords(items, keywords, limit) {
    const matched = items.filter((item) => {
      const text = `${item.title} ${item.description}`.toLowerCase();
      return keywords.some((k) => text.includes(k));
    });
    return matched.slice(0, limit);
  }

  function renderRecommendedSection(title, subtitle, items) {
    const cards = items.length
      ? items.map((item) => `<p><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a> <span class="news-meta">(${item.source})</span></p>`).join('')
      : '<p>No fresh matching items found right now. Check the main News page for latest headlines.</p>';

    return `
      <article class="news-item">
        <h2>${title}</h2>
        <p>${subtitle}</p>
        ${cards}
      </article>
    `;
  }

  async function loadLiveNews() {
    const status = document.getElementById('live-news-status');
    const newsContainer = document.getElementById('news-feed-live');
    const recStatus = document.getElementById('recommended-news-status');
    const recContainer = document.getElementById('recommended-feed-live');

    const hasNews = !!newsContainer;
    const hasRecommended = !!recContainer;
    if (!hasNews && !hasRecommended) return;

    try {
      const allResults = await Promise.all(FEEDS.map((feed) => fetchFeed(feed).catch(() => [])));
      const merged = dedupe(rankRecent(allResults.flat()));
      const latest = merged.slice(0, 12);

      if (hasNews) {
        if (latest.length) {
          newsContainer.innerHTML = latest.map(renderNewsCard).join('');
          if (status) status.textContent = `Live headlines from multiple sources. Last refreshed: ${formatDate(new Date())}`;
        } else {
          newsContainer.innerHTML = '<article class="news-item"><h2>Live feed temporarily unavailable</h2><p>Please refresh in a few minutes.</p></article>';
          if (status) status.textContent = 'Could not fetch live items at the moment.';
        }
      }

      if (hasRecommended) {
        const conservative = pickByKeywords(latest, ['fed', 'rate', 'inflation', 'cpi', 'pce', 'treasury', 'bond'], 4);
        const balanced = pickByKeywords(latest, ['market', 'index', 'economy', 'earnings', 'stocks'], 4);
        const growth = pickByKeywords(latest, ['ai', 'tech', 'semiconductor', 'nvidia', 'nasdaq', 'innovation'], 4);

        recContainer.innerHTML = [
          renderRecommendedSection(
            'For Capital Preserver / Income Defender',
            'Prioritize policy, inflation, and rates news to protect downside and understand bond/income risk.',
            conservative
          ),
          renderRecommendedSection(
            'For Balanced Builder / Core Indexer',
            'Focus on broad market, macro, and earnings context to keep rebalancing decisions disciplined.',
            balanced
          ),
          renderRecommendedSection(
            'For Quality Grower / Tactical Analyzer / Visionary Venture',
            'Track innovation, tech leadership, and regime signals to manage growth exposure and timing risk.',
            growth
          )
        ].join('');

        if (recStatus) recStatus.textContent = `Recommendations generated from live headlines. Last refreshed: ${formatDate(new Date())}`;
      }
    } catch (err) {
      if (hasNews && newsContainer) {
        newsContainer.innerHTML = '<article class="news-item"><h2>Live feed unavailable</h2><p>Data provider did not respond. Please try again shortly.</p></article>';
      }
      if (status) status.textContent = 'Could not load live data right now.';
      if (recStatus) recStatus.textContent = 'Could not generate recommendations from live data right now.';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadLiveNews);
  } else {
    loadLiveNews();
  }
})();
