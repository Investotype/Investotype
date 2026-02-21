(function () {
  function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || '';
  }

  const typeEl = document.getElementById('shared-type');
  const summaryEl = document.getElementById('shared-summary');
  const detailsEl = document.getElementById('shared-details');
  const shareBtn = document.getElementById('share-link-btn');
  const shareImageBtn = document.getElementById('share-image-btn');
  const shareStatus = document.getElementById('share-link-status');
  const shareImagePanel = document.getElementById('share-image-panel');
  const shareImagePreview = document.getElementById('share-image-preview');
  const shareImageFormat = document.getElementById('share-image-format');
  const shareImageOpen = document.getElementById('share-image-open');
  const shareImageDownload = document.getElementById('share-image-download');

  if (!typeEl || !summaryEl || !detailsEl) return;

  const typeByCombo = {
    'low-low': 'Capital Defender',
    'low-mid': 'Income Investor',
    'low-high': 'Balanced Growth Investor',
    'mid-low': 'Index Investor',
    'mid-mid': 'Quality Growth Investor',
    'mid-high': 'Tactical Investor',
    'high-low': 'Innovation Investor',
    'high-mid': 'Aggressive Investor',
    'high-high': 'Alternative Investor'
  };

  const comboByType = Object.keys(typeByCombo).reduce((acc, combo) => {
    acc[typeByCombo[combo]] = combo;
    return acc;
  }, {});

  const detailsByCombo = {
    'low-low': {
      coreValues: 'Capital protection, consistency, downside control, and calm decisions under pressure.',
      tradeoff: 'You would rather be slightly late to upside than be exposed to major downside shocks.',
      advice: 'Run a fortress portfolio: dominant Treasuries and investment-grade bonds, with only selective defensive equities.',
      examples: 'Warren Buffett (defensive periods), Howard Marks, and Benjamin Graham.',
      strengths: 'Excellent downside control and lower panic-selling risk.',
      weaknesses: 'Can underperform in strong growth rallies and hold excess cash too long.',
      bestInvestment: 'Johnson & Johnson (JNJ)'
    },
    'low-mid': {
      coreValues: 'Predictability, steady output, and risk-managed progress.',
      tradeoff: 'You would rather take stable compounding than chase uncertain breakout gains.',
      advice: 'Build around dividend quality, selective REITs, and bond ballast.',
      examples: 'Income-focused portfolio managers and conservative Buffett-style dividend allocators.',
      strengths: 'Stable income orientation and patience in sideways markets.',
      weaknesses: 'Yield-chasing risk and slower upside capture in innovation-led rallies.',
      bestInvestment: 'PepsiCo (PEP)'
    },
    'low-high': {
      coreValues: 'Disciplined ambition, balance, and risk-aware execution.',
      tradeoff: 'You would rather compound steadily with controls than swing for extreme outcomes.',
      advice: 'Keep a balanced core and add elite quality compounders with disciplined rebalancing.',
      examples: 'Ray Dalio and David Swensen-style portfolio construction.',
      strengths: 'Strong offense-defense balance and steadier compounding.',
      weaknesses: 'Can look conservative during momentum surges.',
      bestInvestment: 'Microsoft (MSFT)'
    },
    'mid-low': {
      coreValues: 'Simplicity, process discipline, low friction, and consistency.',
      tradeoff: 'You would rather follow a proven system than rely on short-term forecasts.',
      advice: 'Automate contributions, hold broad ETFs, and rebalance on schedule.',
      examples: 'John Bogle followers and Buffett guidance for most investors.',
      strengths: 'Cost efficiency and reduced behavioral mistakes.',
      weaknesses: 'Limited tactical flexibility and potential index concentration.',
      bestInvestment: 'Vanguard Total Stock Market ETF (VTI)'
    },
    'mid-mid': {
      coreValues: 'Quality standards, durable moats, and high signal-to-noise decisions.',
      tradeoff: 'You would rather wait for great opportunities than settle for average ones.',
      advice: 'Concentrate on proven compounders with structural demand and strong execution.',
      examples: 'Peter Lynch, Philip Fisher, and quality-focused long-horizon investors.',
      strengths: 'Upside capture with quality filtering.',
      weaknesses: 'Valuation risk if entry discipline slips.',
      bestInvestment: 'Microsoft (MSFT)'
    },
    'mid-high': {
      coreValues: 'Adaptability, responsiveness, and evidence-based action.',
      tradeoff: 'You would rather adjust quickly to new data than stay rigid for consistency alone.',
      advice: 'Maintain a strategic core with a tactical sleeve and strict rules.',
      examples: 'Jim Simons, Cliff Asness, and macro risk-framework allocators.',
      strengths: 'Regime adaptability and proactive risk control.',
      weaknesses: 'Complexity risk and potential overfitting.',
      bestInvestment: 'Apple (AAPL)'
    },
    'high-low': {
      coreValues: 'Innovation, first-mover conviction, and long-horizon asymmetry.',
      tradeoff: 'You would rather tolerate volatility now than miss category-defining winners.',
      advice: 'Use a hard-capped moonshot sleeve around a stable core.',
      examples: 'Cathie Wood and venture-style growth allocators.',
      strengths: 'Potential to capture nonlinear winners early.',
      weaknesses: 'Large drawdown risk without strict sizing discipline.',
      bestInvestment: 'Tesla (TSLA)'
    },
    'high-mid': {
      coreValues: 'Speed, decisiveness, and high-upside execution.',
      tradeoff: 'You would rather act quickly on conviction than wait for perfect certainty.',
      advice: 'Use strict stop rules and hard position limits in speculative sleeves.',
      examples: 'Aggressive tactical traders and Soros-style conviction frameworks.',
      strengths: 'Fast opportunity capture in momentum phases.',
      weaknesses: 'Overtrading and leverage creep risk.',
      bestInvestment: 'Advanced Micro Devices (AMD)'
    },
    'high-high': {
      coreValues: 'Independent thinking, multi-engine diversification, and non-consensus positioning.',
      tradeoff: 'You would rather be differently positioned than closely match the crowd.',
      advice: 'Use a liquid core and layer alternatives/macros with thesis discipline.',
      examples: 'Ray Dalio diversification mindset and alternative-focused allocators.',
      strengths: 'Broader diversification across return drivers.',
      weaknesses: 'Complexity and hidden exposure risk.',
      bestInvestment: 'Nvidia (NVDA)'
    }
  };

  const investorType = getParam('type') || 'Investor Type';
  const summaryParam = getParam('summary') || 'Take the quiz to discover your investor profile and get portfolio guidance.';
  const comboParam = getParam('combo');
  const combo = comboParam && detailsByCombo[comboParam] ? comboParam : (comboByType[investorType] || 'mid-mid');
  const details = detailsByCombo[combo] || detailsByCombo['mid-mid'];
  const parts = combo.split('-');
  const riskBand = parts[0] || 'mid';
  const growthBand = parts[1] || 'mid';
  const summary = combo
    ? `${investorType}: a ${riskBand}-risk, ${growthBand}-growth investor style focused on ${riskBand === 'low' ? 'capital stability' : riskBand === 'mid' ? 'balanced compounding' : 'higher upside opportunities'}.`
    : summaryParam;

  typeEl.textContent = investorType;
  summaryEl.textContent = summary;

  function addSection(title, text) {
    const titleEl = document.createElement('div');
    titleEl.className = 'result-section-title';
    titleEl.textContent = title;
    detailsEl.appendChild(titleEl);

    const textEl = document.createElement('p');
    textEl.className = 'result-copy';
    textEl.textContent = text;
    detailsEl.appendChild(textEl);
  }

  addSection('Your Core Values', details.coreValues);
  addSection('Your Tradeoff', details.tradeoff);
  addSection('What You Should Invest In', details.advice);
  addSection('Popular Investors with Similar Style', details.examples);
  addSection('Core Strengths', details.strengths);
  addSection('Main Weaknesses to Manage', details.weaknesses);
  addSection('Best Investment Match', details.bestInvestment);

  const canonicalUrl =
    `${window.location.origin}${window.location.pathname}` +
    `?type=${encodeURIComponent(investorType)}` +
    `&summary=${encodeURIComponent(summary)}` +
    `&combo=${encodeURIComponent(combo)}`;

  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const text = `${investorType}: ${summary}`;
      try {
        if (navigator.share) {
          await navigator.share({ title: 'My Investotype Result', text, url: canonicalUrl });
          if (shareStatus) shareStatus.textContent = 'Shared successfully.';
          return;
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(`${text}\n\n${canonicalUrl}`);
          if (shareStatus) shareStatus.textContent = 'Result link copied to clipboard.';
        } else if (shareStatus) {
          shareStatus.textContent = 'Sharing is not supported in this browser.';
        }
      } catch (err) {
        if (shareStatus) shareStatus.textContent = 'Share canceled.';
      }
    });
  }

  function drawWrapped(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
    const words = String(text || '').split(/\s+/);
    const lines = [];
    let current = '';
    words.forEach((word) => {
      const test = current ? `${current} ${word}` : word;
      if (ctx.measureText(test).width <= maxWidth) {
        current = test;
      } else if (current) {
        lines.push(current);
        current = word;
      } else {
        lines.push(word);
        current = '';
      }
    });
    if (current) lines.push(current);
    const limited = lines.slice(0, maxLines);
    if (lines.length > maxLines && limited.length > 0) {
      limited[limited.length - 1] += '...';
    }
    limited.forEach((line, idx) => {
      ctx.fillText(line, x, y + idx * lineHeight);
    });
  }

  function createShareCanvas(ratio) {
    const isStory = ratio === '9:18';
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = isStory ? 2160 : 1080;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    const bg = ctx.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, '#071621');
    bg.addColorStop(0.6, '#0d2a39');
    bg.addColorStop(1, '#15374a');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    const padX = 90;
    const yScale = isStory ? 2 : 1;
    const y = {
      label: Math.round(120 * yScale),
      type: Math.round(225 * yScale),
      summary: Math.round(320 * yScale),
      bestLabel: Math.round(560 * yScale),
      bestName: Math.round(640 * yScale),
      site: h - 82
    };

    ctx.fillStyle = '#8ff9de';
    ctx.font = '700 38px "Space Grotesk", "Sora", sans-serif';
    ctx.fillText('INVESTOTYPE RESULT', padX, y.label);

    ctx.fillStyle = '#e8fbff';
    ctx.font = '800 68px "Space Grotesk", "Sora", sans-serif';
    drawWrapped(ctx, investorType, padX, y.type, w - padX * 2, isStory ? 86 : 76, 2);

    ctx.fillStyle = '#d5eef6';
    ctx.font = '500 30px "Sora", sans-serif';
    drawWrapped(ctx, summary, padX, y.summary, w - padX * 2, isStory ? 52 : 46, isStory ? 7 : 5);

    ctx.fillStyle = '#9bd2e3';
    ctx.font = '600 34px "Sora", sans-serif';
    ctx.fillText('Best investment match', padX, y.bestLabel);
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 50px "Space Grotesk", "Sora", sans-serif';
    drawWrapped(ctx, details.bestInvestment, padX, y.bestName, w - padX * 2, isStory ? 68 : 56, 2);

    ctx.fillStyle = '#8ff9de';
    ctx.font = '700 30px "Space Grotesk", "Sora", sans-serif';
    ctx.fillText('investotype.github.io/Investotype', padX, y.site);
    return canvas;
  }

  let generatedDataUrl = '';
  let generatedFilename = 'investotype-result-1x1.png';

  function ensureImage(forceRebuild) {
    if (generatedDataUrl && !forceRebuild) return;
    const ratio = shareImageFormat ? shareImageFormat.value : '1:1';
    const safeRatio = ratio.replace(':', 'x');
    generatedFilename = `investotype-${investorType.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${safeRatio}.png`;
    const canvas = createShareCanvas(ratio);
    generatedDataUrl = canvas.toDataURL('image/png');
    if (shareImagePreview) shareImagePreview.src = generatedDataUrl;
    if (shareImagePanel) shareImagePanel.style.display = 'block';
  }

  if (shareImageBtn) {
    shareImageBtn.addEventListener('click', () => {
      ensureImage();
      if (shareStatus) shareStatus.textContent = 'Image ready. You can open or download it.';
    });
  }

  if (shareImageFormat) {
    shareImageFormat.addEventListener('change', () => {
      ensureImage(true);
    });
  }

  if (shareImageOpen) {
    shareImageOpen.addEventListener('click', () => {
      ensureImage();
      if (!generatedDataUrl) return;
      const popup = window.open(generatedDataUrl, '_blank', 'noopener,noreferrer');
      if (!popup) window.location.href = generatedDataUrl;
    });
  }

  if (shareImageDownload) {
    shareImageDownload.addEventListener('click', () => {
      ensureImage();
      if (!generatedDataUrl) return;
      const a = document.createElement('a');
      a.href = generatedDataUrl;
      a.download = generatedFilename;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  }
})();
