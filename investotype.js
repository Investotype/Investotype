// twenty questions with five-answer scales mapped to four dimensions
// each question object contains a dimension and options scored 1-5
const questions = [
  { dimension: 'risk', text: 'If your investment drops 30% quickly, what would you do?', options: ['Sell right away', 'Sell most of it', 'Wait and see', 'Buy a little more', 'Buy a lot more'] },
  { dimension: 'risk', text: 'Would you borrow money to invest for bigger returns?', options: ['Never', 'Almost never', 'Maybe a little', 'Yes with rules', 'Yes, I am comfortable'] },
  { dimension: 'risk', text: 'What feels worse to you?', options: ['Losing money', 'Short-term losses', 'Both feel the same', 'Missing gains', 'Missing a huge winner'] },
  { dimension: 'risk', text: 'Could you stay calm if your portfolio was down 50%?', options: ['No way', 'Probably not', 'Not sure', 'Probably yes', 'Yes'] },
  { dimension: 'risk', text: 'Which approach sounds most like you?', options: ['Protect money first', 'Mostly safe', 'Balanced', 'Mostly growth', 'Maximum growth'] },

  { dimension: 'growth', text: 'How important is long-term growth for you?', options: ['Not important', 'A little important', 'Somewhat important', 'Very important', 'Most important'] },
  { dimension: 'growth', text: 'When you earn returns, do you reinvest them?', options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
  { dimension: 'growth', text: 'Would you pick a newer risky company over a stable big company?', options: ['Never', 'Unlikely', 'Depends', 'Likely', 'Yes, often'] },
  { dimension: 'growth', text: 'Your main goal is to:', options: ['Avoid losses', 'Grow steadily', 'Balance both', 'Beat the market', 'Grow as fast as possible'] },
  { dimension: 'growth', text: 'Would you accept weak years if long-term gains could be higher?', options: ['No', 'Rarely', 'Sometimes', 'Usually', 'Yes'] },

  { dimension: 'control', text: 'How involved do you want to be in your investments?', options: ['Not involved at all', 'A little involved', 'Somewhat involved', 'Very involved', 'Fully in control'] },
  { dimension: 'control', text: 'Would you let an advisor make trades without asking you first?', options: ['Yes always', 'Usually yes', 'Sometimes', 'Usually no', 'Never'] },
  { dimension: 'control', text: 'If an investment starts going wrong, what do you do first?', options: ['Ask someone else', 'Look for advice', 'Review and decide', 'Act quickly myself', 'Follow my own plan immediately'] },
  { dimension: 'control', text: 'How comfortable are you letting others pick your strategy?', options: ['Very comfortable', 'Comfortable', 'Neutral', 'Uncomfortable', 'Very uncomfortable'] },
  { dimension: 'control', text: 'Whose opinion matters most when investing?', options: ['Advisor opinions', 'Analyst opinions', 'Both equally', 'My own research', 'My own conviction'] },

  { dimension: 'analysis', text: 'Before buying, how often do you check company basics (sales, profit, debt)?', options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
  { dimension: 'analysis', text: 'How often do you invest based only on gut feeling?', options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'] },
  { dimension: 'analysis', text: 'What influences your buy decisions the most?', options: ['Social media hype', 'Popular stories', 'Mixed reasons', 'Trends and numbers', 'Mostly numbers and value'] },
  { dimension: 'analysis', text: 'How often do you follow big economy news (rates, inflation, jobs)?', options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Regularly'] },
  { dimension: 'analysis', text: 'Would you buy a stock just because it is going viral?', options: ['Yes right away', 'Probably', 'Maybe', 'Probably not', 'No, I need clear reasons'] }
];

let currentQuestion = 0;
const answers = [];
let shuffledQuestions = [];

function shuffleQuestions(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  return copy;
}

function showQuestion(index) {
  const container = document.getElementById('question-container');
  if (!container) return;

  const q = shuffledQuestions[index];
  const pct = Math.round((index / questions.length) * 100);

  const progressBar = document.getElementById('progress');
  if (progressBar) progressBar.style.width = pct + '%';

  const counter = document.getElementById('question-counter');
  if (counter) counter.textContent = `Question ${index + 1} of ${questions.length}`;

  container.innerHTML = '';
  const p = document.createElement('p');
  p.textContent = q.text;
  container.appendChild(p);

  q.options.forEach((optText, i) => {
    const selectOption = () => {
      answers[index] = { dimension: q.dimension, score: i + 1 };
      if (currentQuestion < questions.length - 1) {
        currentQuestion += 1;
        showQuestion(currentQuestion);
      } else {
        showResult();
      }
    };

    const div = document.createElement('div');
    div.className = 'option-label';
    div.textContent = optText;
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');
    div.addEventListener('click', selectOption);
    div.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectOption();
      }
    });
    container.appendChild(div);
  });

  const prev = document.getElementById('prev-btn');
  if (prev) prev.style.display = index > 0 ? 'inline-block' : 'none';
}

function setupPrevButton() {
  const prevBtn = document.getElementById('prev-btn');
  if (!prevBtn) return;
  prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
      currentQuestion -= 1;
      showQuestion(currentQuestion);
    }
  });
}

function startQuiz() {
  setupPrevButton();
  shuffledQuestions = shuffleQuestions(questions);
  showQuestion(0);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startQuiz);
} else {
  startQuiz();
}

function showResult() {
  const progress = document.getElementById('progress');
  const container = document.getElementById('question-container');
  const resultDiv = document.getElementById('result');
  const prevBtn = document.getElementById('prev-btn');
  if (progress) progress.style.width = '100%';
  if (container) container.style.display = 'none';
  if (prevBtn) prevBtn.style.display = 'none';
  if (!resultDiv) return;
  resultDiv.style.display = 'block';

  const totals = { risk: 0, growth: 0, control: 0, analysis: 0 };
  const counts = { risk: 0, growth: 0, control: 0, analysis: 0 };
  answers.forEach((a) => {
    if (!a) return;
    totals[a.dimension] += a.score;
    counts[a.dimension] += 1;
  });

  const avg = {};
  Object.keys(totals).forEach((d) => {
    avg[d] = counts[d] ? totals[d] / counts[d] : 3;
  });

  function letter(dim, lowLetter, highLetter) {
    if (avg[dim] <= 2) return lowLetter;
    if (avg[dim] >= 4) return highLetter;
    return lowLetter;
  }

  const riskBand = avg.risk <= 2 ? 'low' : avg.risk >= 4 ? 'high' : 'mid';
  const growthBand = avg.growth <= 2 ? 'low' : avg.growth >= 4 ? 'high' : 'mid';
  const combo = `${riskBand}-${growthBand}`;

  const typeLookup = {
    'low-low': {
      emoji: 'CP',
      name: 'Capital Defender',
      desc: 'You are an ultra-defensive allocator. You would rather miss a bull run than suffer a severe drawdown, and your default mode is survival first, returns second.',
      coreValues: 'Capital protection, consistency, downside control, and calm decisions under pressure. Outside investing, you are usually the person who prepares backup plans early and avoids unnecessary last-minute risk in work or school projects.',
      tradeoff: 'You would rather be slightly late to upside than be exposed to major downside shocks.',
      advice: 'Run a fortress portfolio: dominant Treasuries and investment-grade bonds, with only selective defensive equities. Your mission is to stay unbreakable in market shocks.',
      examples: 'Popular investors with similar mindset: Warren Buffett (defensive periods), Howard Marks, and Bill Gates portfolio style through large, durable businesses and conservative position sizing.',
      strengths: 'Your biggest edge is psychological durability. You panic less, preserve optionality, and avoid catastrophic portfolio damage when others are forced out.',
      weaknesses: 'Your core risk is chronic underexposure to growth. In long risk-on cycles, opportunity cost can quietly become your largest loss.',
      bestInvestment: { name: 'Johnson & Johnson (JNJ)', summary: 'A defensive cash-flow machine that fits your capital-protection-first DNA.' }
    },
    'low-mid': {
      emoji: 'ID',
      name: 'Income Investor',
      desc: 'You are a cash-flow maximalist. Predictable income and controlled volatility matter more to you than chasing explosive upside.',
      coreValues: 'Predictability, steady output, long-term sustainability, and risk-managed progress. Outside investing, you prefer routines that reliably produce results and you naturally prioritize consistency over flashy one-off wins in class or at work.',
      tradeoff: 'You would rather take stable compounding than chase uncertain breakout gains.',
      advice: 'Build around dividend quality: utilities, dividend ETFs, and durable REITs with bond support. Treat yield sustainability as sacred and avoid fragile high-yield traps.',
      examples: 'Popular investors with similar mindset: Bill Gross (income focus), Warren Buffett income holdings, and dividend-growth managers like Jeremy Siegel.',
      strengths: 'You excel at building portfolios that pay through noise. Your framework is often easier to hold than pure growth during turbulent markets.',
      weaknesses: 'Overpaying for yield can quietly destroy total return. You can also lag badly when innovation leadership dominates indices.',
      bestInvestment: { name: 'PepsiCo (PEP)', summary: 'Durable dividends and recession-resistant demand match your income defense style.' }
    },
    'low-high': {
      emoji: 'BB',
      name: 'Balanced Growth Investor',
      desc: 'You are a precision allocator: growth-focused, but never reckless. You want upside with guardrails, not chaos.',
      coreValues: 'Disciplined ambition, quality growth, balance, and risk-aware execution. Outside investing, you usually set stretch goals with checkpoints and choose the strongest high-upside option that still has controlled downside.',
      tradeoff: 'You would rather compound steadily with controls than swing for extreme outcomes.',
      advice: 'Keep a balanced core, then add elite quality compounders. You target consistent hits over heroic bets, and rebalance with discipline.',
      examples: 'Popular investors with similar mindset: Ray Dalio (balance and risk budgeting), David Swensen-style allocation, and balanced family office investors.',
      strengths: 'You combine offense and defense with unusual consistency. That balance helps you survive rough regimes without giving up compounding.',
      weaknesses: 'You may look ¡°too cautious¡± during euphoric phases and underperform pure momentum chases.',
      bestInvestment: { name: 'Microsoft (MSFT)', summary: 'High-quality growth with discipline-friendly stability fits your precision style.' }
    },
    'mid-low': {
      emoji: 'CI',
      name: 'Index Investor',
      desc: 'You are rules-first and ego-last. You trust systems, automation, and repetition over prediction and emotional market calls.',
      coreValues: 'Simplicity, process discipline, low friction, and long-term consistency. Outside investing, you perform best with repeatable systems and checklists, and you get frustrated when people complicate workflows that are already effective.',
      tradeoff: 'You would rather follow a proven system than rely on short-term forecasts.',
      advice: 'Automate contributions, hold broad market ETFs, and rebalance on schedule. Your edge is relentless consistency, not flashy timing.',
      examples: 'Popular investors with similar mindset: John Bogle followers, Warren Buffett advice for most investors, and Bill Gates style of long-horizon compounding.',
      strengths: 'You minimize behavioral blowups, fee drag, and churn. Over long horizons, process discipline can beat most inconsistent active investors.',
      weaknesses: 'Over-passivity can hide concentration risk and delay necessary strategic adjustments.',
      bestInvestment: { name: 'Vanguard Total Stock Market ETF (VTI)', summary: 'Broad, low-cost exposure perfectly matches your rules-based compounding engine.' }
    },
    'mid-mid': {
      emoji: 'QG',
      name: 'Quality Growth Investor',
      desc: 'You chase growth, but only with elite business quality. You want companies with real moats, pricing power, and durable cash-generation.',
      coreValues: 'Quality standards, selective conviction, durability, and high signal-to-noise decisions. Outside investing, you would rather do fewer things at a higher standard, and you often pause instead of forcing decisions when options feel mediocre.',
      tradeoff: 'You would rather wait for great opportunities than settle for average ones.',
      advice: 'Concentrate on proven compounders with structural demand and execution quality. You prioritize return quality over story-driven hype.',
      examples: 'Popular investors with similar mindset: Peter Lynch, Philip Fisher, and Bill Gates-like focus on durable technology ecosystems.',
      strengths: 'You capture secular upside while avoiding most low-grade speculation traps.',
      weaknesses: 'Great businesses can still be terrible buys at euphoric valuations.',
      bestInvestment: { name: 'Microsoft (MSFT)', summary: 'A textbook moat compounder that matches your quality-first growth mandate.' }
    },
    'mid-high': {
      emoji: 'TA',
      name: 'Tactical Investor',
      desc: 'You are an adaptive operator. You actively reposition when market regime changes and prefer evidence over narratives.',
      coreValues: 'Adaptability, responsiveness, evidence-based action, and strategic flexibility. Outside investing, you quickly update plans when new information appears and you lose patience with teams that keep executing on outdated assumptions.',
      tradeoff: 'You would rather adjust quickly to new data than stay rigid for consistency alone.',
      advice: 'Keep a strategic core, but run an active tactical sleeve with hard rules. Rotate fast when data confirms a regime shift.',
      examples: 'Popular investors with similar mindset: Jim Simons systematic style, Cliff Asness factor approach, and Ray Dalio macro risk framework.',
      strengths: 'You can avoid some of the worst drawdowns and exploit trend persistence faster than static portfolios.',
      weaknesses: 'Signal overload and overfitting can turn a sharp process into noisy overtrading.',
      bestInvestment: { name: 'Apple (AAPL)', summary: 'Deep liquidity and quality fundamentals make it ideal for tactical regime management.' }
    },
    'high-low': {
      emoji: 'VV',
      name: 'Innovation Investor',
      desc: 'You hunt asymmetric breakthroughs. You accept brutal volatility in exchange for the chance to own nonlinear winners early.',
      coreValues: 'Innovation, first-mover conviction, long-horizon upside, and transformative potential. Outside investing, you are often early to new ideas and willing to look wrong for a while if the long-term thesis still makes sense in work or school initiatives.',
      tradeoff: 'You would rather tolerate volatility now than miss category-defining future winners.',
      advice: 'Run a stable base, then allocate a hard-capped moonshot sleeve to frontier themes. You win by catching rare outliers, not by being average.',
      examples: 'Popular investors with similar mindset: Cathie Wood, early-stage venture allocators, and Bill Gates style interest in long-horizon technological transformation.',
      strengths: 'When right, a few winners can define your entire return profile.',
      weaknesses: 'Without ruthless sizing discipline, narrative blowups can erase years of progress.',
      bestInvestment: { name: 'Tesla (TSLA)', summary: 'High-volatility, high-upside innovation exposure fits your moonshot conviction profile.' }
    },
    'high-mid': {
      emoji: 'HR',
      name: 'Aggressive Investor',
      desc: 'You thrive in chaos and move fast. You are comfortable with violent swings and pursue momentum where others freeze.',
      coreValues: 'Speed, decisiveness, competitive edge, and high-upside execution. Outside investing, in fast project environments you prefer acting on strong conviction and adjusting in real time rather than waiting for perfect clarity.',
      tradeoff: 'You would rather act quickly on strong conviction than wait for perfect certainty.',
      advice: 'Use a strict speculative sleeve with hard stops and strict sizing. Your edge is speed, but your survival depends on discipline.',
      examples: 'Popular investors with similar mindset: George Soros-style conviction sizing (with strict risk control), aggressive momentum traders, and macro-tactical investors.',
      strengths: 'You can capture short, explosive opportunities that slower investors routinely miss.',
      weaknesses: 'Overtrading and leverage creep can destroy performance faster than stock selection errors.',
      bestInvestment: { name: 'Advanced Micro Devices (AMD)', summary: 'High-beta momentum profile aligns with your fast, aggressive execution style.' }
    },
    'high-high': {
      emoji: 'AE',
      name: 'Alternative Investor',
      desc: 'You are a contrarian multi-asset builder. You intentionally mix uncorrelated bets to profit when consensus frameworks break.',
      coreValues: 'Independent thinking, diversification by design, resilience, and non-consensus opportunity seeking. Outside investing, you naturally challenge default assumptions and build backup paths in work or school projects before most people notice concentration risk.',
      tradeoff: 'You would rather be differently positioned than closely match the crowd.',
      advice: 'Build a liquid core, then layer alternatives and macro diversifiers aggressively. You are designing for non-consensus outcomes, not benchmark comfort.',
      examples: 'Popular investors with similar mindset: Ray Dalio (diversification across drivers), Bill Gates multi-asset orientation, and alternative-focused institutional allocators.',
      strengths: 'You can build true diversification beyond stock-bond orthodoxy.',
      weaknesses: 'Complexity can become fake diversification if each sleeve is not thesis-driven and monitored.',
      bestInvestment: { name: 'Nvidia (NVDA)', summary: 'Pairs high-growth leadership with your multi-engine, non-consensus portfolio philosophy.' }
    }
  };

  const info = typeLookup[combo] || { emoji: 'UN', name: 'Unknown', desc: '', advice: '', examples: '' };
  resultDiv.innerHTML = '';

  const resText = document.createElement('div');
  resText.className = 'result-type';
  resText.textContent = info.name;
  resultDiv.appendChild(resText);
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const typeTitle = document.createElement('div');
  typeTitle.className = 'result-section-title';
  typeTitle.textContent = 'What type of investor are you';
  resultDiv.appendChild(typeTitle);

  const descP = document.createElement('p');
  descP.className = 'result-copy';
  descP.textContent = info.desc || '';
  resultDiv.appendChild(descP);

  const bestFitTitle = document.createElement('div');
  bestFitTitle.className = 'result-section-title';
  bestFitTitle.textContent = 'Best Investment Match';
  resultDiv.appendChild(bestFitTitle);

  const bestFitText = document.createElement('p');
  bestFitText.className = 'result-copy';
  const bestInvestmentName = info.bestInvestment ? info.bestInvestment.name : 'Microsoft (MSFT)';
  bestFitText.innerHTML = `The investment that best suits you is <span class="investment-name-highlight">${bestInvestmentName}</span>.`;
  resultDiv.appendChild(bestFitText);

  const bestFitSummary = document.createElement('p');
  bestFitSummary.className = 'result-copy';
  bestFitSummary.textContent = info.bestInvestment
    ? info.bestInvestment.summary
    : 'This is a high-quality, liquid investment that generally fits balanced long-term growth behavior.';
  resultDiv.appendChild(bestFitSummary);

  const valuesTitle = document.createElement('div');
  valuesTitle.className = 'result-section-title';
  valuesTitle.textContent = 'Your core values';
  resultDiv.appendChild(valuesTitle);

  const valuesP = document.createElement('p');
  valuesP.className = 'result-copy';
  valuesP.textContent = info.coreValues || 'Discipline, consistency, and long-term focus.';
  resultDiv.appendChild(valuesP);

  const tradeoffP = document.createElement('p');
  tradeoffP.className = 'result-copy';
  tradeoffP.textContent = info.tradeoff || 'You would rather follow your plan than chase noise.';
  resultDiv.appendChild(tradeoffP);


  const behaviorP = document.createElement('p');
  behaviorP.className = 'result-copy';
  behaviorP.textContent =
    riskBand === 'low'
      ? 'In real market stress, your natural advantage is emotional control. You are less likely to panic-sell quality holdings, which improves long-term compounding. The most important thing for your profile is staying sufficiently invested while preserving your discipline.'
      : riskBand === 'mid'
        ? 'In volatile markets, you typically balance caution and opportunity better than most investors. Your success depends on maintaining structure: clear position sizing, rebalancing rules, and avoiding impulsive theme chasing when narratives are loud.'
        : 'During high-volatility phases, you can react quickly and capture large upside, but your outcomes depend heavily on risk control. For your profile, disciplined sizing and strict loss management are as important as selecting high-upside assets.';
  resultDiv.appendChild(behaviorP);

  const investTitle = document.createElement('div');
  investTitle.className = 'result-section-title';
  investTitle.textContent = 'What you should invest in';
  resultDiv.appendChild(investTitle);

  const advP = document.createElement('p');
  advP.className = 'result-copy';
  advP.textContent = info.advice || '';
  resultDiv.appendChild(advP);

  const implementationP = document.createElement('p');
  implementationP.className = 'result-copy';
  implementationP.textContent =
    'Implementation note: this recommendation is designed to be executable, not theoretical. The right portfolio for your type is one you can hold through both fear and euphoria without abandoning the plan. Consistency of execution is a core return driver.';
  resultDiv.appendChild(implementationP);

  const similarTitle = document.createElement('div');
  similarTitle.className = 'result-section-title';
  similarTitle.textContent = 'Popular investors with similar style';
  resultDiv.appendChild(similarTitle);

  const exP = document.createElement('p');
  exP.className = 'result-copy';
  exP.textContent = info.examples || 'No close match found yet.';
  resultDiv.appendChild(exP);

  const strengthsTitle = document.createElement('div');
  strengthsTitle.className = 'result-section-title';
  strengthsTitle.textContent = 'Core strengths';
  resultDiv.appendChild(strengthsTitle);

  const strengthsP = document.createElement('p');
  strengthsP.className = 'result-copy';
  strengthsP.textContent = info.strengths || '';
  resultDiv.appendChild(strengthsP);


  const weaknessesTitle = document.createElement('div');
  weaknessesTitle.className = 'result-section-title';
  weaknessesTitle.textContent = 'Main weaknesses to manage';
  resultDiv.appendChild(weaknessesTitle);

  const weaknessesP = document.createElement('p');
  weaknessesP.className = 'result-copy';
  weaknessesP.textContent = info.weaknesses || '';
  resultDiv.appendChild(weaknessesP);

  const shareTitle = document.createElement('div');
  shareTitle.className = 'result-section-title';
  shareTitle.textContent = 'Share your result';
  resultDiv.appendChild(shareTitle);

  const shortSummary = `${info.name}: a ${riskBand}-risk, ${growthBand}-growth investor style focused on ${riskBand === 'low' ? 'capital stability' : riskBand === 'mid' ? 'balanced compounding' : 'higher upside opportunities'}.`;
  const shareSummary = document.createElement('p');
  shareSummary.className = 'result-copy';
  shareSummary.textContent = shortSummary;
  resultDiv.appendChild(shareSummary);

  const shareBtn = document.createElement('button');
  shareBtn.type = 'button';
  shareBtn.className = 'primary-btn share-btn';
  shareBtn.textContent = 'Share Link';

  const shareImageBtn = document.createElement('button');
  shareImageBtn.type = 'button';
  shareImageBtn.className = 'primary-btn share-btn';
  shareImageBtn.textContent = 'Share Image';

  const shareActions = document.createElement('div');
  shareActions.className = 'result-share-actions';
  shareActions.appendChild(shareBtn);
  shareActions.appendChild(shareImageBtn);
  resultDiv.appendChild(shareActions);

  const shareImagePanel = document.createElement('div');
  shareImagePanel.className = 'share-image-panel';
  shareImagePanel.style.display = 'none';

  const shareImageTitle = document.createElement('div');
  shareImageTitle.className = 'result-section-title';
  shareImageTitle.textContent = 'Share Image Preview';
  shareImagePanel.appendChild(shareImageTitle);

  const shareFormatWrap = document.createElement('div');
  shareFormatWrap.className = 'share-format-wrap';
  const shareFormatLabel = document.createElement('label');
  shareFormatLabel.className = 'share-format-label';
  shareFormatLabel.setAttribute('for', 'share-format');
  shareFormatLabel.textContent = 'Image ratio';
  const shareFormatSelect = document.createElement('select');
  shareFormatSelect.id = 'share-format';
  shareFormatSelect.className = 'share-format-select';
  shareFormatSelect.innerHTML = '<option value="1:1">1:1</option><option value="9:18">9:18</option>';
  shareFormatWrap.appendChild(shareFormatLabel);
  shareFormatWrap.appendChild(shareFormatSelect);
  shareImagePanel.appendChild(shareFormatWrap);

  const shareImagePreview = document.createElement('img');
  shareImagePreview.className = 'share-image-preview';
  shareImagePreview.alt = 'Generated social image for your Investotype result';
  shareImagePanel.appendChild(shareImagePreview);

  const shareImageActions = document.createElement('div');
  shareImageActions.className = 'share-image-actions';

  const shareImageDownload = document.createElement('button');
  shareImageDownload.type = 'button';
  shareImageDownload.className = 'primary-btn';
  shareImageDownload.textContent = 'Download Image';
  shareImageActions.appendChild(shareImageDownload);

  const shareImageOpen = document.createElement('button');
  shareImageOpen.type = 'button';
  shareImageOpen.className = 'primary-btn';
  shareImageOpen.textContent = 'Open Image';
  shareImageActions.appendChild(shareImageOpen);

  shareImagePanel.appendChild(shareImageActions);
  const shareImageHint = document.createElement('p');
  shareImageHint.className = 'result-copy';
  shareImageHint.style.marginTop = '0.6rem';
  shareImageHint.textContent = 'If you opened this page in Instagram or another in-app browser, tap Open Image and long-press to save.';
  shareImagePanel.appendChild(shareImageHint);
  resultDiv.appendChild(shareImagePanel);
  let generatedShareCanvas = null;
  let generatedShareDataUrl = '';
  let generatedShareFilename = 'investotype-result.png';
  let generatedShareBlobUrl = '';

  function generateShareImage() {
    const bestSummary = info.bestInvestment
      ? info.bestInvestment.summary
      : 'Balanced quality growth potential with durable business strength.';
    generatedShareCanvas = createShareImageCanvas({
      typeName: info.name,
      bestInvestmentName,
      bestSummary,
      shortSummary,
      ratio: shareFormatSelect.value
    });
    generatedShareDataUrl = generatedShareCanvas.toDataURL('image/png');
    const safeType = info.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const safeRatio = shareFormatSelect.value.replace(':', 'x');
    generatedShareFilename = `investotype-${safeType}-${safeRatio}.png`;

    shareImagePreview.src = generatedShareDataUrl;
    shareImagePanel.style.display = 'block';
    shareImageBtn.textContent = 'Image Ready';

    if (generatedShareBlobUrl) {
      URL.revokeObjectURL(generatedShareBlobUrl);
      generatedShareBlobUrl = '';
    }
    if (generatedShareCanvas.toBlob) {
      generatedShareCanvas.toBlob((blob) => {
        if (!blob) return;
        generatedShareBlobUrl = URL.createObjectURL(blob);
      }, 'image/png');
    }
  }

  function isInAppBrowser() {
    const ua = navigator.userAgent || '';
    return /(Instagram|FBAN|FBAV|Line|KAKAOTALK|Twitter|TikTok|Snapchat)/i.test(ua);
  }

  shareBtn.onclick = async () => {
    const shareText = `I am a ${info.name} on Investotype. ${shortSummary}`;
    const spacedShareMessage = `${shareText}\n\n${shortSummary}`;
    const basePath = window.location.pathname.replace(/[^/]*$/, '');
    const shareUrl =
      `${window.location.origin}${basePath}share.html` +
      `?type=${encodeURIComponent(info.name)}` +
      `&summary=${encodeURIComponent(shortSummary)}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'My Investotype Result', text: spacedShareMessage, url: shareUrl });
        shareBtn.textContent = 'Shared';
        return;
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(`${spacedShareMessage}\n\n${shareUrl}`);
        shareBtn.textContent = 'Copied to Clipboard';
      } else {
        shareBtn.textContent = 'Copy not supported';
      }
    } catch (err) {
      shareBtn.textContent = 'Share canceled';
    }
  };

  shareImageBtn.onclick = () => {
    generateShareImage();
    shareImagePanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  shareFormatSelect.onchange = () => {
    if (shareImagePanel.style.display !== 'none') {
      shareImageBtn.click();
    }
  };

  shareImageOpen.onclick = () => {
    if (!generatedShareDataUrl) {
      generateShareImage();
    }
    const urlToOpen = generatedShareBlobUrl || generatedShareDataUrl;
    if (!urlToOpen) return;
    if (isInAppBrowser()) {
      window.location.href = urlToOpen;
      return;
    }
    const popup = window.open(urlToOpen, '_blank', 'noopener,noreferrer');
    if (!popup) {
      window.location.href = urlToOpen;
    }
  };

  shareImageDownload.onclick = () => {
    if (!generatedShareCanvas) {
      generateShareImage();
    }
    if (isInAppBrowser()) {
      const urlToOpen = generatedShareBlobUrl || generatedShareDataUrl;
      if (!urlToOpen) return;
      window.location.href = urlToOpen;
      return;
    }
    if (generatedShareCanvas.toBlob) {
      generatedShareCanvas.toBlob((blob) => {
        if (!blob) {
          const fallback = document.createElement('a');
          fallback.href = generatedShareDataUrl;
          fallback.download = generatedShareFilename;
          document.body.appendChild(fallback);
          fallback.click();
          fallback.remove();
          return;
        }
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = generatedShareFilename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(blobUrl), 1500);
      }, 'image/png');
      return;
    }

    const a = document.createElement('a');
    a.href = generatedShareDataUrl;
    a.download = generatedShareFilename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  launchConfetti();

  const instr = document.createElement('p');
  instr.textContent = 'To receive a tailored portfolio suggestion, enter your budget and currency below, then click "Generate Portfolio". (Scroll down if necessary.)';
  instr.style.marginTop = '10px';
  resultDiv.appendChild(instr);

  const newsLink = document.createElement('p');
  newsLink.style.marginTop = '6px';
  newsLink.innerHTML = 'Recommended reading for your profile: <a href="./recommended-news.html" style="color:#93ffd8;">Open For Your Type</a>';
  resultDiv.appendChild(newsLink);

  const planning = document.getElementById('planning');
  if (planning) {
    planning.style.display = 'block';
  }

  const planBtn = document.getElementById('plan-btn');
  if (planBtn) {
    planBtn.onclick = () => {
      const budget = parseFloat((document.getElementById('budget') || {}).value) || 0;
      const currency = (document.getElementById('currency') || {}).value || 'USD';
      const portfolio = calculatePortfolio(combo, riskBand, budget, currency);
      const out = document.getElementById('portfolio-result');
      if (!out) return;

      out.innerHTML = '';
      out.classList.add('portfolio-readable');

      if (budget <= 0) {
        const warning = document.createElement('p');
        warning.className = 'portfolio-copy';
        warning.textContent = 'Please enter a budget greater than 0 to generate a meaningful portfolio.';
        out.appendChild(warning);
        return;
      }

      let currentSection = null;

      const addHeading = (text) => {
        currentSection = document.createElement('section');
        currentSection.className = 'portfolio-block';
        const h = document.createElement('h4');
        h.className = 'portfolio-section-title';
        h.textContent = text;
        currentSection.appendChild(h);
        out.appendChild(currentSection);
      };

      const addPara = (text, tone = 'default') => {
        const p = document.createElement('p');
        p.className = 'portfolio-copy';
        if (tone !== 'default') p.classList.add(`portfolio-copy-${tone}`);
        p.textContent = text;
        if (currentSection) {
          currentSection.appendChild(p);
        } else {
          out.appendChild(p);
        }
      };

      addHeading(`Market Condition (${portfolio.market.date})`);
      addPara(portfolio.market.summary);

      addHeading('Recommended Allocation (Adjusted for Market Condition)');
      portfolio.allocations.forEach((a) => {
        addPara(`${a.name}: ${formatMoney(a.amount, currency)} (${a.pct}%)`, 'data');
      });

      addHeading('Portfolio Rationale');
      addPara(portfolio.notes);

      addHeading('Detailed Investment Plan');
      portfolio.picks.forEach((pick) => {
        addHeading(pick.name);
        addPara(`Suggested allocation: ${formatMoney(pick.amount, currency)} (${pick.pct}%)`, 'data');
        addPara(`Why this helps your style: ${pick.why}`);
        addPara(`Why this is a strong investment: ${pick.whyGood}`);
      });

      addHeading('Advanced Strategies (Use Only If Suitable)');
      portfolio.advancedOptions.forEach((option) => {
        addPara(`${option.name}: ${formatMoney(option.amount, currency)} (${option.pct}%)`, 'data');
      });
      addPara('If a strategy shows 0%, it is intentionally excluded for your profile.');

      addHeading('Why This Portfolio Is Meaningful');
      addPara(portfolio.conclusion);

      if (portfolio.chartData && window.Chart) {
        const chartContainer = document.createElement('div');
        chartContainer.style.marginTop = '28px';
        chartContainer.innerHTML =
          '<h4 class="portfolio-section-title">Allocation Mix</h4><canvas id="chart-allocation" width="420" height="220"></canvas>' +
          '<h4 class="portfolio-section-title" style="margin-top:18px;">Recommended Investments Breakdown</h4><canvas id="chart-investments" width="420" height="240"></canvas>';
        out.appendChild(chartContainer);

        const allocationCtx = document.getElementById('chart-allocation').getContext('2d');
        new Chart(allocationCtx, {
          type: 'doughnut',
          data: {
            labels: portfolio.chartData.allocationLabels,
            datasets: [
              {
                label: 'Allocation %',
                data: portfolio.chartData.allocationWeights,
                backgroundColor: ['rgba(46,211,191,0.88)', 'rgba(72,193,255,0.88)', 'rgba(255,209,102,0.88)'],
                borderColor: ['#7ff3df', '#a6ddff', '#ffe9ad'],
                borderWidth: 1.5,
                hoverOffset: 6
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { labels: { color: '#d5eef6' }, position: 'bottom' }
            },
            cutout: '58%'
          }
        });

        const investmentsCtx = document.getElementById('chart-investments').getContext('2d');
        new Chart(investmentsCtx, {
          type: 'bar',
          data: {
            labels: portfolio.chartData.investmentLabels,
            datasets: [
              {
                label: 'Recommended Weight %',
                data: portfolio.chartData.investmentWeights,
                backgroundColor: portfolio.chartData.investmentColors,
                borderRadius: 9,
                borderSkipped: false
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { labels: { color: '#d5eef6' } }
            },
            scales: {
              x: { ticks: { color: '#c7e4ee', maxRotation: 20, minRotation: 0 } },
              y: { beginAtZero: true, max: 100, ticks: { color: '#c7e4ee' }, grid: { color: 'rgba(180,220,232,0.14)' } }
            }
          }
        });
      } else {
        addHeading('Charts');
        addPara('Chart library is unavailable right now, so only text recommendations are shown.');
      }

    };
  }
}

function formatMoney(amount, currency) {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0
    }).format(Number(amount || 0));
  } catch (err) {
    return `${currency} ${Math.round(Number(amount || 0))}`;
  }
}

function calculatePortfolio(combo, riskBand, budget, currency = 'USD') {
  const now = new Date();
  const asOf = now.toISOString().slice(0, 10);
  const marketCondition = {
    date: asOf,
    stance: 'cautious',
    summary: 'Live macro context: inflation trends are improving, but policy-path uncertainty and geopolitical headline risk still support quality bias, diversification, and liquidity discipline.'
  };

  const profileMap = {
    'low-low': {
      allocation: { stocks: 15, bonds: 65, cash: 20 },
      picks: [
        { name: 'U.S. Treasury ETF (IEF)', pct: 30, why: 'Rate-sensitive defensive anchor and strong drawdown control.' },
        { name: 'Investment Grade Bond ETF (LQD)', pct: 25, why: 'Higher income with controlled credit risk.' },
        { name: 'Dividend ETF (SCHD)', pct: 15, why: 'Quality dividend exposure with lower volatility than pure growth baskets.' },
        { name: 'Johnson & Johnson (JNJ)', pct: 10, why: 'Defensive healthcare cash flows and resilient demand.' },
        { name: 'Procter & Gamble (PG)', pct: 10, why: 'Consumer staples pricing power in slowdowns.' },
        { name: 'Cash / Money Market', pct: 10, why: 'Liquidity for optionality and volatility buffering.' }
      ],
      notes: 'This portfolio emphasizes preservation and consistency first, then adds selective equity exposure for inflation-aware compounding.'
    },
    'low-mid': {
      allocation: { stocks: 25, bonds: 55, cash: 20 },
      picks: [
        { name: 'Core Bond ETF (BND)', pct: 28, why: 'Broad fixed-income base for stability and income.' },
        { name: 'Treasury ETF (VGIT)', pct: 22, why: 'Improves portfolio resilience when risk assets weaken.' },
        { name: 'Dividend ETF (VYM)', pct: 15, why: 'Income-focused equities with diversified exposure.' },
        { name: 'Realty Income (O)', pct: 10, why: 'Monthly dividend REIT cash flow profile.' },
        { name: 'PepsiCo (PEP)', pct: 10, why: 'Defensive consumer demand and steady payout history.' },
        { name: 'Cash / T-Bills', pct: 15, why: 'Dry powder and volatility cushion.' }
      ],
      notes: 'Income and downside defense drive this mix. Equity exposure exists, but only in names and sectors with durable payout quality.'
    },
    'low-high': {
      allocation: { stocks: 45, bonds: 40, cash: 15 },
      picks: [
        { name: 'S&P 500 ETF (VOO)', pct: 25, why: 'Low-cost broad U.S. equity base.' },
        { name: 'Microsoft (MSFT)', pct: 10, why: 'High-quality earnings and platform durability.' },
        { name: 'Apple (AAPL)', pct: 10, why: 'Strong ecosystem and free-cash-flow strength.' },
        { name: 'Core Bond ETF (BND)', pct: 25, why: 'Stabilizes total portfolio volatility.' },
        { name: 'Treasury ETF (IEF)', pct: 15, why: 'Adds protection in risk-off periods.' },
        { name: 'Cash / Money Market', pct: 15, why: 'Liquidity for rebalancing opportunities.' }
      ],
      notes: 'You get measured growth potential while keeping meaningful defensive ballast for uncertain market phases.'
    },
    'mid-low': {
      allocation: { stocks: 50, bonds: 35, cash: 15 },
      picks: [
        { name: 'Total Market ETF (VTI)', pct: 30, why: 'Simple, diversified core exposure.' },
        { name: 'International ETF (VXUS)', pct: 10, why: 'Geographic diversification and valuation balance.' },
        { name: 'Microsoft (MSFT)', pct: 10, why: 'Optional single-stock quality satellite.' },
        { name: 'Core Bond ETF (BND)', pct: 20, why: 'Portfolio smoother and income support.' },
        { name: 'Treasury ETF (VGIT)', pct: 15, why: 'Interest-rate and recession hedge component.' },
        { name: 'Cash / T-Bills', pct: 15, why: 'Behavioral and liquidity buffer.' }
      ],
      notes: 'This is a rules-driven compounding structure that minimizes complexity and behavior mistakes.'
    },
    'mid-mid': {
      allocation: { stocks: 60, bonds: 25, cash: 15 },
      picks: [
        { name: 'S&P 500 ETF (VOO)', pct: 25, why: 'Core quality-weighted U.S. market exposure.' },
        { name: 'Microsoft (MSFT)', pct: 12, why: 'Durable enterprise ecosystem and strong margins.' },
        { name: 'Nvidia (NVDA)', pct: 10, why: 'Secular AI and compute demand leadership.' },
        { name: 'Adobe (ADBE)', pct: 8, why: 'Recurring software revenue and pricing power.' },
        { name: 'Core Bond ETF (BND)', pct: 20, why: 'Reduces total portfolio volatility.' },
        { name: 'Cash / Money Market', pct: 25, why: 'Flexibility and drawdown management reserve.' }
      ],
      notes: 'You prioritize high-quality growth while keeping enough defense to stay invested through deep corrections.'
    },
    'mid-high': {
      allocation: { stocks: 65, bonds: 20, cash: 15 },
      picks: [
        { name: 'S&P 500 ETF (VOO)', pct: 22, why: 'Core anchor for long-run market participation.' },
        { name: 'Microsoft (MSFT)', pct: 10, why: 'Quality and resilience across regimes.' },
        { name: 'Apple (AAPL)', pct: 10, why: 'Cash flow depth and ecosystem stickiness.' },
        { name: 'UnitedHealth (UNH)', pct: 8, why: 'Defensive earnings profile relative to cyclicals.' },
        { name: 'Tactical / Factor ETF', pct: 15, why: 'Regime-based adaptation sleeve.' },
        { name: 'Bonds + Cash', pct: 35, why: 'Risk control capital used for tactical redeployment.' }
      ],
      notes: 'This structure allows tactical flexibility while preserving a robust long-term core.'
    },
    'high-low': {
      allocation: { stocks: 70, bonds: 15, cash: 15 },
      picks: [
        { name: 'Core ETF (VOO)', pct: 20, why: 'Keeps base diversification while pursuing upside themes.' },
        { name: 'Nvidia (NVDA)', pct: 15, why: 'AI infrastructure leader with strong demand tailwinds.' },
        { name: 'Tesla (TSLA)', pct: 12, why: 'High-beta innovation exposure with asymmetric potential.' },
        { name: 'Innovation ETF', pct: 13, why: 'Diversifies thematic growth beyond a single name.' },
        { name: 'Core Bond ETF', pct: 15, why: 'Reduces forced selling during volatility shocks.' },
        { name: 'Cash / T-Bills', pct: 25, why: 'Risk control and opportunistic deployment reserve.' }
      ],
      notes: 'You retain high-upside innovation exposure but protect outcomes through explicit diversification and liquidity.'
    },
    'high-mid': {
      allocation: { stocks: 75, bonds: 10, cash: 15 },
      picks: [
        { name: 'S&P 500 ETF (SPY)', pct: 20, why: 'Liquid base position for broad risk exposure.' },
        { name: 'AMD (AMD)', pct: 14, why: 'High-beta semiconductor growth expression.' },
        { name: 'Palantir (PLTR)', pct: 12, why: 'Data/AI optionality with momentum sensitivity.' },
        { name: 'Small-Cap Growth ETF', pct: 14, why: 'Tactical upside with diversified high-beta basket.' },
        { name: 'Short Treasury ETF', pct: 10, why: 'Fast-access defense and collateral-like stability.' },
        { name: 'Cash', pct: 30, why: 'Drawdown control and re-entry flexibility after volatility spikes.' }
      ],
      notes: 'Aggressive return potential is preserved, but downside is managed through strict cash and liquidity allocation.'
    },
    'high-high': {
      allocation: { stocks: 65, bonds: 10, cash: 25 },
      picks: [
        { name: 'Global Equity ETF', pct: 20, why: 'Diversified equity base across regions.' },
        { name: 'Microsoft (MSFT)', pct: 10, why: 'Quality anchor inside growth-heavy mix.' },
        { name: 'Nvidia (NVDA)', pct: 10, why: 'Secular growth engine and innovation beta.' },
        { name: 'REIT ETF (VNQ)', pct: 12, why: 'Real-asset diversification and income component.' },
        { name: 'Commodity ETF', pct: 8, why: 'Inflation and macro diversification driver.' },
        { name: 'Cash / Short T-Bills', pct: 40, why: 'Flexibility for alternative opportunities and risk reset capacity.' }
      ],
      notes: 'This profile uses multiple return engines while preserving a large liquidity buffer for tactical flexibility.'
    }
  };

  const selected = profileMap[combo] || profileMap['mid-mid'];
  const allocation = { ...selected.allocation };

  if (marketCondition.stance === 'cautious') {
    if (riskBand === 'low') {
      allocation.stocks -= 3;
      allocation.bonds += 2;
      allocation.cash += 1;
    } else if (riskBand === 'mid') {
      allocation.stocks -= 5;
      allocation.bonds += 3;
      allocation.cash += 2;
    } else {
      allocation.stocks -= 6;
      allocation.bonds += 2;
      allocation.cash += 4;
    }
  }

  const allocations = [
    { name: 'Stocks', pct: allocation.stocks },
    { name: 'Bonds', pct: allocation.bonds },
    { name: 'Cash', pct: allocation.cash }
  ];

  const getInvestmentMerit = (name) => {
    const n = String(name || '').toLowerCase();
    if (/cash|t-bills|money market/.test(n)) return 'Maintains liquidity and reduces forced selling during volatility.';
    if (/bond|treasury/.test(n)) return 'Provides portfolio ballast, steadier income, and drawdown control.';
    if (/dividend|reit|realty/.test(n)) return 'Adds cash-flow potential and defensive quality within equities.';
    if (/microsoft|apple|pepsi|johnson|procter|unitedhealth/.test(n)) return 'Large-cap quality profile with durable balance-sheet and earnings characteristics.';
    if (/nvidia|tesla|amd|palantir|innovation|small-cap growth/.test(n)) return 'Offers higher upside potential from secular growth or momentum trends.';
    if (/s&p 500|total market|global equity|vti|spy|voo|vxus/.test(n)) return 'Broad diversification lowers single-name risk while capturing market return drivers.';
    if (/commodity/.test(n)) return 'Can diversify inflation and macro shocks that hurt traditional assets.';
    return 'Improves overall portfolio balance by adding a differentiated return driver.';
  };

  const pickBucket = (name) => {
    const n = String(name || '').toLowerCase();
    if (/cash|t-bills|money market/.test(n)) return 'cash';
    if (/bond|treasury/.test(n)) return 'bonds';
    return 'stocks';
  };

  const specializationMode = budget > 0 && budget < 4000;
  let specializedNote = '';
  let finalPicks = selected.picks.map((pick) => ({
    ...pick,
    whyGood: getInvestmentMerit(pick.name)
  }));
  let finalAllocations = allocations;

  if (specializationMode) {
    const nonCash = selected.picks.filter((p) => !/cash|t-bills|money market/i.test(p.name));
    const focusedCount = budget < 1500 ? 2 : 3;
    const focusPct = riskBand === 'low' ? 70 : riskBand === 'mid' ? 80 : 90;
    const reservePct = 100 - focusPct;
    const core = nonCash.slice(0, focusedCount).map((pick) => ({ ...pick }));
    const per = Math.floor(focusPct / core.length);
    let remainder = focusPct - per * core.length;
    core.forEach((pick, idx) => {
      pick.pct = per + (idx === core.length - 1 ? remainder : 0);
    });
    if (reservePct > 0) {
      const reserveName = selected.picks.find((p) => /cash|t-bills|money market/i.test(p.name))?.name || 'Cash / T-Bills';
      core.push({ name: reserveName, pct: reservePct, why: 'Keeps flexibility and reduces concentration shock risk.' });
    }
    finalPicks = core.map((pick) => ({ ...pick, whyGood: getInvestmentMerit(pick.name) }));

    const bucketTotals = { stocks: 0, bonds: 0, cash: 0 };
    finalPicks.forEach((pick) => {
      const bucket = pickBucket(pick.name);
      bucketTotals[bucket] += pick.pct;
    });
    finalAllocations = [
      { name: 'Stocks', pct: bucketTotals.stocks },
      { name: 'Bonds', pct: bucketTotals.bonds },
      { name: 'Cash', pct: bucketTotals.cash }
    ];
    specializedNote = 'Your budget is below the diversification threshold, so this plan is intentionally specialized into fewer high-conviction positions with a liquidity buffer.';
  }

  const computedAllocations = finalAllocations.map((a) => ({
    ...a,
    amount: Math.round((budget * a.pct) / 100)
  }));

  const computedPicks = finalPicks.map((pick) => ({
    ...pick,
    amount: Math.round((budget * pick.pct) / 100)
  }));

  const chartData = {
    allocationLabels: finalAllocations.map((a) => a.name),
    allocationWeights: finalAllocations.map((a) => a.pct),
    investmentLabels: computedPicks.map((p) => p.name),
    investmentWeights: computedPicks.map((p) => p.pct),
    investmentColors: [
      'rgba(46,211,191,0.85)',
      'rgba(72,193,255,0.85)',
      'rgba(255,209,102,0.85)',
      'rgba(247,140,107,0.85)',
      'rgba(183,148,244,0.85)',
      'rgba(125,211,252,0.85)'
    ]
  };

  const advancedMap = {
    'low-low': { leverage: 0, stockOptions: 0, inverseETFs: 0 },
    'low-mid': { leverage: 0, stockOptions: 0, inverseETFs: 0 },
    'low-high': { leverage: 0, stockOptions: 0, inverseETFs: 0 },
    'mid-low': { leverage: 0, stockOptions: 0, inverseETFs: 0 },
    'mid-mid': { leverage: 0, stockOptions: 0, inverseETFs: 0 },
    'mid-high': { leverage: 5, stockOptions: 3, inverseETFs: 2 },
    'high-low': { leverage: 8, stockOptions: 6, inverseETFs: 3 },
    'high-mid': { leverage: 12, stockOptions: 8, inverseETFs: 5 },
    'high-high': { leverage: 10, stockOptions: 10, inverseETFs: 5 }
  };
  const advanced = advancedMap[combo] || advancedMap['mid-mid'];
  const advancedOptions = [
    { name: 'Leverage', pct: advanced.leverage, amount: Math.round((budget * advanced.leverage) / 100) },
    { name: 'Stock Options', pct: advanced.stockOptions, amount: Math.round((budget * advanced.stockOptions) / 100) },
    { name: 'Inverse ETFs', pct: advanced.inverseETFs, amount: Math.round((budget * advanced.inverseETFs) / 100) }
  ];

  return {
    market: marketCondition,
    allocations: computedAllocations,
    notes: specializationMode ? `${selected.notes} ${specializedNote}` : selected.notes,
    picks: computedPicks,
    advancedOptions,
    conclusion: specializationMode
      ? 'This recommendation blends your profile with your current budget reality. A concentrated starter plan is used to avoid fake diversification and keep each position meaningful.'
      : 'This recommendation blends your behavioral profile with the current macro regime. The goal is to give you a portfolio you can realistically hold through uncertainty, so performance comes from disciplined execution rather than reactive decisions.',
    chartData
  };
}

function drawWrappedCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
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

  const limitedLines = lines.slice(0, maxLines);
  if (lines.length > maxLines && limitedLines.length > 0) {
    limitedLines[limitedLines.length - 1] += '...';
  }

  limitedLines.forEach((line, idx) => {
    ctx.fillText(line, x, y + idx * lineHeight);
  });
}

function createShareImageCanvas({ typeName, bestInvestmentName, bestSummary, shortSummary, ratio = '1:1' }) {
  const canvas = document.createElement('canvas');
  const isStory = ratio === '9:18';
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

  const glow = ctx.createRadialGradient(170, 170, 0, 170, 170, isStory ? 420 : 320);
  glow.addColorStop(0, 'rgba(46, 211, 191, 0.35)');
  glow.addColorStop(1, 'rgba(46, 211, 191, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);

  const padX = 90;
  const maxTextWidth = w - padX * 2;
  const yScale = isStory ? 2 : 1;
  const y = {
    label: Math.round(120 * yScale),
    type: Math.round(225 * yScale),
    bestLabel: Math.round(390 * yScale),
    bestName: Math.round(465 * yScale),
    bestSummary: Math.round(560 * yScale),
    line: Math.round(760 * yScale),
    shortSummary: Math.round(820 * yScale),
    site: h - 80
  };

  ctx.fillStyle = '#8ff9de';
  ctx.font = '700 38px "Space Grotesk", "Sora", sans-serif';
  ctx.fillText('INVESTOTYPE RESULT', padX, y.label);

  ctx.fillStyle = '#e8fbff';
  ctx.font = '800 74px "Space Grotesk", "Sora", sans-serif';
  drawWrappedCanvasText(ctx, typeName || 'Investor Type', padX, y.type, maxTextWidth, isStory ? 96 : 84, 2);

  ctx.fillStyle = '#9bd2e3';
  ctx.font = '600 34px "Sora", sans-serif';
  ctx.fillText('Best investment match', padX, y.bestLabel);

  ctx.fillStyle = '#ffffff';
  ctx.font = '700 52px "Space Grotesk", "Sora", sans-serif';
  drawWrappedCanvasText(ctx, bestInvestmentName || 'Microsoft (MSFT)', padX, y.bestName, maxTextWidth, 62, 2);

  ctx.fillStyle = '#d5eef6';
  ctx.font = '500 30px "Sora", sans-serif';
  drawWrappedCanvasText(ctx, bestSummary || '', padX, y.bestSummary, maxTextWidth, isStory ? 48 : 42, isStory ? 5 : 4);

  ctx.strokeStyle = 'rgba(147, 255, 216, 0.35)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(padX, y.line);
  ctx.lineTo(w - padX, y.line);
  ctx.stroke();

  ctx.fillStyle = '#c7e4ee';
  ctx.font = '500 28px "Sora", sans-serif';
  drawWrappedCanvasText(ctx, shortSummary || '', padX, y.shortSummary, maxTextWidth, isStory ? 44 : 38, isStory ? 5 : 4);

  ctx.fillStyle = '#8ff9de';
  ctx.font = '700 30px "Space Grotesk", "Sora", sans-serif';
  ctx.fillText(window.location.host || 'investotype', padX, y.site);

  return canvas;
}

function launchConfetti() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }
  const symbols = ['*', '+', '$', '%', '@'];
  for (let i = 0; i < 20; i += 1) {
    const span = document.createElement('span');
    span.className = 'confetti';
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = Math.random() * 100 + '%';
    document.body.appendChild(span);
    span.addEventListener('animationend', () => span.remove());
  }
}

