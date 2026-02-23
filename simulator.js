const simStartForm = document.getElementById('simStartForm');
const simStartSubmitBtn = simStartForm?.querySelector('button[type="submit"]');
const commentaryLead = document.getElementById('commentaryLead');
const commentaryStatus = document.getElementById('commentaryStatus');
const commentaryList = document.getElementById('commentaryList');
const briefingSearchInput = document.getElementById('briefingSearchInput');
const briefingSearchBtn = document.getElementById('briefingSearchBtn');
const briefingSearchStatus = document.getElementById('briefingSearchStatus');
const briefingSearchResults = document.getElementById('briefingSearchResults');
const slideSetup = document.getElementById('slideSetup');
const slideGame = document.getElementById('slideGame');
const slideResult = document.getElementById('slideResult');
const slideInvestor = document.getElementById('slideInvestor');
const stepSetup = document.getElementById('stepSetup');
const stepGame = document.getElementById('stepGame');
const stepResult = document.getElementById('stepResult');
const stepInvestor = document.getElementById('stepInvestor');
const simPanel = document.getElementById('simPanel');
const simOuterCard = simPanel?.closest('.card');
const simTitle = document.getElementById('simTitle');
const simNextDate = document.getElementById('simNextDate');
const simQuickNav = document.getElementById('simQuickNav');
const simChartsSection = document.getElementById('simChartsSection');
const simControlsSection = document.getElementById('simControlsSection');
const simFloatingActions = document.getElementById('simFloatingActions');
const allocationRows = document.getElementById('allocationRows');
const rebalanceBtn = document.getElementById('rebalanceBtn');
const finishBtn = document.getElementById('finishBtn');
const backToSetupBtn = document.getElementById('backToSetupBtn');
const autoPlayBtn = document.getElementById('autoPlayBtn');
const tradeSellSymbol = document.getElementById('tradeSellSymbol');
const tradeSellAmount = document.getElementById('tradeSellAmount');
const tradeLiquidateAll = document.getElementById('tradeLiquidateAll');
const tradeBuySymbol = document.getElementById('tradeBuySymbol');
const tradeBuyAmount = document.getElementById('tradeBuyAmount');
const executeTradeBtn = document.getElementById('executeTradeBtn');
const resultPanel = document.getElementById('resultPanel');
const resultCards = document.getElementById('resultCards');
const benchmarkList = document.getElementById('benchmarkList');
const resultHeadline = document.getElementById('resultHeadline');
const resultEyebrow = document.getElementById('resultEyebrow');
const resultSubline = document.getElementById('resultSubline');
const resultEdgeChip = document.getElementById('resultEdgeChip');
const resultHighlights = document.getElementById('resultHighlights');
const equityChart = document.getElementById('equityChart');
const equityLegend = document.getElementById('equityLegend');
const allocationChart = document.getElementById('allocationChart');
const budgetSummary = document.getElementById('budgetSummary');
const budgetHint = document.getElementById('budgetHint');
const budgetFill = document.getElementById('budgetFill');
const periodDecisionTimer = document.getElementById('periodDecisionTimer');
const timeflowLabel = document.getElementById('timeflowLabel');
const timeflowPercent = document.getElementById('timeflowPercent');
const timeflowFill = document.getElementById('timeflowFill');
const timeflowTicks = document.getElementById('timeflowTicks');
const timeflowChart = document.getElementById('timeflowChart');
const timeflowLegend = document.getElementById('timeflowLegend');
const fluctuationView = document.getElementById('fluctuationView');
const chartBenchmarkFilter = document.getElementById('chartBenchmarkFilter');
const timeflowEvents = document.getElementById('timeflowEvents');
const floatingTimeLabel = document.getElementById('floatingTimeLabel');
const floatingTimePercent = document.getElementById('floatingTimePercent');
const floatingTimeFill = document.getElementById('floatingTimeFill');
const floatingTimeTicks = document.getElementById('floatingTimeTicks');
const periodTitle = document.getElementById('periodTitle');
const periodCards = document.getElementById('periodCards');
const holdingsTable = document.getElementById('holdingsTable');
const periodPanel = document.getElementById('periodPanel');
const actionCashValue = document.querySelector('[data-action-cash-value]');
const actionCashFill = document.querySelector('[data-action-cash-fill]');
const actionTimeFill = document.querySelector('[data-action-time-fill]');
const replayToggleBtn = document.getElementById('replayToggleBtn');
const replayStatusLabel = document.getElementById('replayStatusLabel');
const replayDurationSelect = document.getElementById('replayDurationSelect');
const equalSplitBtn = document.getElementById('equalSplitBtn');
const normalizeBtn = document.getElementById('normalizeBtn');
const currentMixBtn = document.getElementById('currentMixBtn');
const randomizeBtn = document.getElementById('randomizeBtn');
const clearTargetsBtn = document.getElementById('clearTargetsBtn');
const allocationSearch = document.getElementById('allocationSearch');
const showOnlyActiveBtn = document.getElementById('showOnlyActiveBtn');
const simAddType = document.getElementById('simAddType');
const simAddSymbolWrap = document.getElementById('simAddSymbolWrap');
const simAddSymbol = document.getElementById('simAddSymbol');
const simAddMultiplierWrap = document.getElementById('simAddMultiplierWrap');
const simAddMultiplier = document.getElementById('simAddMultiplier');
const simAddAssetBtn = document.getElementById('simAddAssetBtn');
const allocationSortBy = document.getElementById('allocationSortBy');
const allocationSortDir = document.getElementById('allocationSortDir');
const benchmarkSelect = document.getElementById('benchmarkSelect');
const addBenchmarkBtn = document.getElementById('addBenchmarkBtn');
const clearBenchmarkBtn = document.getElementById('clearBenchmarkBtn');
const benchmarkChosen = document.getElementById('benchmarkChosen');
const backToGameBtn = document.getElementById('backToGameBtn');
const newGameBtn = document.getElementById('newGameBtn');
const investorTypeBtn = document.getElementById('investorTypeBtn');
const backToResultBtn = document.getElementById('backToResultBtn');
const backToGameFromInvestorBtn = document.getElementById('backToGameFromInvestorBtn');
const newGameFromInvestorBtn = document.getElementById('newGameFromInvestorBtn');
const investorPanel = document.getElementById('investorPanel');
const investorTypeTitle = document.getElementById('investorTypeTitle');
const investorTypeSummary = document.getElementById('investorTypeSummary');
const investorTypeBadge = document.getElementById('investorTypeBadge');
const investorAxisSummary = document.getElementById('investorAxisSummary');
const investorAxisChips = document.getElementById('investorAxisChips');
const investorCubeCode = document.getElementById('investorCubeCode');
const axis3dStage = document.getElementById('axis3dStage');
const axis3dCanvas = document.getElementById('axis3dCanvas');
const axis3dHoverTip = document.getElementById('axis3dHoverTip');
const axisRiskScoreValue = document.getElementById('axisRiskScoreValue');
const axisControlScoreValue = document.getElementById('axisControlScoreValue');
const axisReactivityScoreValue = document.getElementById('axisReactivityScoreValue');
const investorWhyList = document.getElementById('investorWhyList');
const investorHabitsList = document.getElementById('investorHabitsList');
const investorContextList = document.getElementById('investorContextList');
const investorForwardList = document.getElementById('investorForwardList');
const investorBestFitList = document.getElementById('investorBestFitList');
const investorPortfolioMixList = document.getElementById('investorPortfolioMixList');
const investorStrengthsList = document.getElementById('investorStrengthsList');
const investorWeaknessesList = document.getElementById('investorWeaknessesList');
const investorMbtiList = document.getElementById('investorMbtiList');
const investorPopular = document.getElementById('investorPopular');

// quiz elements (may be null on non-quiz pages)
const quizIntro = document.getElementById('quizIntro');
const startQuizBtn = document.getElementById('startQuizBtn');
const quizSection = document.getElementById('quizSection');
const quizQuestionEl = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizPrevBtn = document.getElementById('quizPrevBtn');
const quizProgress = document.getElementById('quizProgress');
const quizProgressFill = document.getElementById('quizProgressFill');
const quizSeeResultBtn = document.getElementById('quizSeeResultBtn');
const quizResultSection = document.getElementById('quizResultSection');
const restartQuizBtn = document.getElementById('restartQuizBtn');
const shareResultBtn = document.getElementById('shareResultBtn');
const shareResultMenu = document.getElementById('shareResultMenu');
const shareResultLinkBtn = document.getElementById('shareResultLinkBtn');
const shareResultImageBtn = document.getElementById('shareResultImageBtn');
const setupAllocationRows = document.getElementById('setupAllocationRows');
let sharePreviewBackdrop = null;
let sharePreviewImage = null;
let sharePreviewRatio = null;
let sharePreviewDownloadBtn = null;
let sharePreviewDataUrl = '';
let sharePreviewFileName = '';
let sharePreviewMode = 'square';

// ---------- quiz question bank ----------
// 5 questions per axis, plus 5 general behavioral/psychological questions.
const quizQuestions = [];
const QUIZ_LIKERT_LABELS = [
  'Very true for me',
  'Mostly true',
  'In-between',
  'Mostly not true',
  'Not true at all'
];

function addAxisQuestions(axis, questions) {
  questions.forEach((q) => {
    const agreeIsPositive = String(q.pos || '').toLowerCase() === 'agree';
    const scoreScale = agreeIsPositive ? [1, 0.75, 0.5, 0.25, 0] : [0, 0.25, 0.5, 0.75, 1];
    quizQuestions.push({
      axis,
      text: q.text,
      options: QUIZ_LIKERT_LABELS.map((label, idx) => ({ label, score: scoreScale[idx] }))
    });
  });
}

// risk axis
addAxisQuestions('risk', [
  { text: 'I can stay confident during big ups and downs if the long-term upside is strong.', pos: 'Agree', neg: 'Disagree' },
  { text: 'I avoid uncertain outcomes even when the possible reward is high.', pos: 'Disagree', neg: 'Agree' },
  { text: 'In everyday life, I enjoy choices with uncertain but potentially big payoff.', pos: 'Agree', neg: 'Disagree' },
  { text: 'A short-term loss makes me question my whole plan quickly.', pos: 'Disagree', neg: 'Agree' },
  { text: 'I would rather risk being wrong than miss a rare big opportunity.', pos: 'Agree', neg: 'Disagree' }
]);

// control axis
addAxisQuestions('control', [
  { text: 'I prefer making key decisions myself instead of delegating them.', pos: 'Agree', neg: 'Disagree' },
  { text: 'I am comfortable following a simple system without constant adjustments.', pos: 'Disagree', neg: 'Agree' },
  { text: 'In group projects, I naturally take ownership of final decisions.', pos: 'Agree', neg: 'Disagree' },
  { text: 'Automation and checklists usually improve my decision quality.', pos: 'Disagree', neg: 'Agree' },
  { text: 'I often tweak plans as soon as new information appears.', pos: 'Agree', neg: 'Disagree' }
]);

// reactivity axis
addAxisQuestions('reactivity', [
  { text: 'Strong emotions often push me to act faster than planned.', pos: 'Agree', neg: 'Disagree' },
  { text: 'I can stay calm and objective when outcomes turn against me.', pos: 'Disagree', neg: 'Agree' },
  { text: 'Headlines and social buzz can quickly change my decisions.', pos: 'Agree', neg: 'Disagree' },
  { text: 'When stress rises, I still follow my original plan.', pos: 'Disagree', neg: 'Agree' },
  { text: 'After a big win or loss, I feel an urge to do something immediately.', pos: 'Agree', neg: 'Disagree' }
]);

// general behavioral/psychological questions (not scored)
[
  {
    text: 'A friend cancels important plans at the last minute. What is your first reaction?',
    options: ['React immediately and strongly', 'Show frustration quickly', 'Stay neutral until I understand context', 'Pause and ask questions first', 'Respond calmly and revisit later']
  },
  {
    text: 'How do you usually handle an unexpected setback at work or school?',
    options: ['Jump in and improvise fast', 'Act quickly with partial information', 'Take a short pause then decide', 'Make a checklist before acting', 'Wait for full clarity before acting']
  },
  {
    text: 'When you receive conflicting advice from people you trust, what do you do?',
    options: ['Pick one quickly and commit', 'Go with my instinct after brief review', 'Mix both views and test', 'Gather more evidence first', 'Delay action until consensus is clear']
  },
  {
    text: 'In uncertain situations, which statement sounds most like you?',
    options: ['Action creates clarity', 'Early action beats perfect analysis', 'Balance action and reflection', 'Careful analysis reduces regret', 'I avoid acting until uncertainty drops']
  },
  {
    text: 'When you make a mistake in public, what is most like you?',
    options: ['Recover fast and move on', 'Own it and correct quickly', 'Reflect before responding', 'Need time before re-engaging', 'Withdraw until confidence returns']
  }
].forEach((q) => {
  quizQuestions.push({
    axis: 'general',
    text: q.text,
    options: q.options.map((label, idx) => ({ label, score: 1 - (idx / 4) }))
  });
});

// shuffle the array to mix axis questions
quizQuestions.sort(() => Math.random() - 0.5);

const setupAllocationSummary = document.getElementById('setupAllocationSummary');
const setupAllocBlock = document.getElementById('setupAllocBlock');
const setupPieWrap = document.getElementById('setupPieWrap');
const setupTogglePieBtn = document.getElementById('setupTogglePieBtn');
const setupAiComboBtn = document.getElementById('setupAiComboBtn');
const setupAiSplitBtn = document.getElementById('setupAiSplitBtn');
const setupPieChart = document.getElementById('setupPieChart');
const setupPieLegend = document.getElementById('setupPieLegend');
const setupEqualSplitBtn = document.getElementById('setupEqualSplitBtn');
const setupRandomSplitBtn = document.getElementById('setupRandomSplitBtn');
const setupCashbarFill = document.getElementById('setupCashbarFill');
const setupStep1 = document.getElementById('setupStep1');
const setupStep2 = document.getElementById('setupStep2');
const setupStep3 = document.getElementById('setupStep3');
const setupCardSettings = document.getElementById('setupCardSettings');
const setupCardPortfolio = document.getElementById('setupCardPortfolio');
const setupCardBenchmark = document.getElementById('setupCardBenchmark');
const setupCardSummary = document.getElementById('setupCardSummary');
const setupToggleSettings = document.getElementById('setupToggleSettings');
const setupTogglePortfolio = document.getElementById('setupTogglePortfolio');
const setupToggleBenchmark = document.getElementById('setupToggleBenchmark');
const setupToggleSummary = document.getElementById('setupToggleSummary');
const settingsNextBtn = document.getElementById('settingsNextBtn');
const portfolioNextBtn = document.getElementById('portfolioNextBtn');
const benchmarkNextBtn = document.getElementById('benchmarkNextBtn');
const summarySettings = document.getElementById('summarySettings');
const summaryPortfolio = document.getElementById('summaryPortfolio');
const summaryBenchmarks = document.getElementById('summaryBenchmarks');
const setupSettingsPreview = document.getElementById('setupSettingsPreview');
const setupPortfolioPreview = document.getElementById('setupPortfolioPreview');
const setupBenchmarkPreview = document.getElementById('setupBenchmarkPreview');
const checkSettings = document.getElementById('checkSettings');
const checkPortfolio = document.getElementById('checkPortfolio');
const checkBenchmark = document.getElementById('checkBenchmark');
const checkSummary = document.getElementById('checkSummary');

const assetType = document.getElementById('assetType');
const assetSymbolWrap = document.getElementById('assetSymbolWrap');
const assetSymbol = document.getElementById('assetSymbol');
const assetSearchDropdown = document.getElementById('assetSearchDropdown');
const assetMultiplierWrap = document.getElementById('assetMultiplierWrap');
const assetMultiplier = document.getElementById('assetMultiplier');
const addAssetBtn = document.getElementById('addAssetBtn');
const assetList = document.getElementById('assetList');
const portfolioQuickPicks = document.getElementById('portfolioQuickPicks');

let simulationState = null;
let latestFinalResult = null;
let selectedAssets = [];
let previewState = { portfolioValue: 0, prices: {}, date: null };
let latestInsights = null;
let holdingTrendBySymbol = {};
let assetReasonBySymbol = {};
let closedHoldingsCache = {};
let timeflowLog = [];
let timeflowSeries = [];
let selectedBenchmarks = [];
let setupAllocations = {};
let setupPrices = {};
let assetSearchResults = [];
let assetSearchIndex = -1;
let assetSearchTimer = null;
let autoPlayTimer = null;
let autoPlayBusy = false;
let autoPlayDelayMs = 1200;
let showHeldOnly = false;
let tradeAmountModal = null;
let timeflowDailyCache = [];
let timeflowDailyCacheEndDate = null;
let timeflowBenchmarkDailyCache = [];
let timeflowAnimFrame = 0;
let timeflowLastPortfolioPointCount = 0;
let timeflowLastEndDate = '';
let timeflowLastMode = 'weekly';
let timeflowLastFilter = 'all';
let replayFrames = [];
let replayTimer = null;
let replayDurationMs = 120000;
let replayElapsedMs = 0;
let replayStartPerfMs = 0;
let replayStartSimMs = 0;
let replayEndSimMs = 0;
let replayCurrentTs = 0;
const RECOMMENDED_ASSET_POOL = ['SPY', 'QQQ', 'VTI', 'BND', 'TLT', 'GLD'];
const AI_COMBINATION_BLUEPRINT = [
  { symbol: 'SPY', weight: 0.28 },
  { symbol: 'QQQ', weight: 0.16 },
  { symbol: 'VTI', weight: 0.12 },
  { symbol: 'BND', weight: 0.16 },
  { symbol: 'TLT', weight: 0.1 },
  { symbol: 'GLD', weight: 0.1 },
  { symbol: 'BTC-USD', weight: 0.08 }
];
const AI_COMBINATION_FALLBACKS = [
  { symbol: 'DIA', weight: 0.12 },
  { symbol: 'IWM', weight: 0.08 },
  { symbol: 'VEA', weight: 0.1 },
  { symbol: 'EEM', weight: 0.08 },
  { symbol: 'AGG', weight: 0.12 }
];
const SETUP_TRADE_FEE_RATE = 0.001; // match server FEE_RATE (0.10%)
let setupStepHoldTimeout = null;
let setupStepHoldInterval = null;
let setupStepSuppressClick = false;
let setupStage = 'settings';
let setupValidated = {
  settings: false,
  portfolio: false,
  benchmark: false,
  summary: false
};
let setupSummaryReady = false;
let toastHost = null;
let toastTimer = null;
let floatingActionsDocked = false;
let startTransitionOverlay = null;
let commentaryBaseLead = '';
let commentaryBasePoints = [];
let marketBriefReqSeq = 0;
let marketSearchReqSeq = 0;
const PERIOD_DECISION_LIMIT_MS = 60 * 1000;
let periodDecisionDeadlineMs = 0;
let periodDecisionTimerId = null;
let periodDecisionPeriodKey = '';
let periodDecisionAdvanceBusy = false;
const axis3dState = {
  rotX: -22,
  rotY: 28,
  dragging: false,
  startX: 0,
  startY: 0,
  baseRotX: -22,
  baseRotY: 28,
  scores: { aggressive: 50, internal: 50, emotional: 50 },
  projectedCorners: []
};
const comparisonChartState = new WeakMap();
const comparisonChartTooltip = new WeakMap();

function isSettingsComplete() {
  const startDate = String(document.getElementById('simStartDate')?.value || '');
  const endDate = String(document.getElementById('simEndDate')?.value || '');
  const frequency = String(document.getElementById('simFrequency')?.value || '');
  const cash = getInitialCashValue();
  return !!startDate && !!endDate && startDate < endDate && !!frequency && Number.isFinite(cash) && cash > 0;
}

function isPortfolioComplete() {
  if (!selectedAssets.length) return false;
  const snap = getSetupAllocationSnapshot();
  return snap.allocated > 0 && snap.affordable;
}

function isBenchmarkComplete() {
  return true;
}

function updateSetupChecks() {
  const settingsOk = isSettingsComplete();
  const portfolioOk = isPortfolioComplete();
  const benchmarkOk = isBenchmarkComplete();
  const summaryOk = settingsOk && portfolioOk && benchmarkOk;

  const apply = (el, ok) => {
    if (!el) return;
    el.classList.toggle('done', !!ok);
    el.textContent = ok ? '?' : '○';
  };

  apply(checkSettings, setupValidated.settings && settingsOk);
  apply(checkPortfolio, setupValidated.portfolio && portfolioOk);
  apply(checkBenchmark, setupValidated.benchmark && benchmarkOk);
  apply(checkSummary, setupValidated.summary && summaryOk);

  if (settingsNextBtn) settingsNextBtn.disabled = !settingsOk;
  if (portfolioNextBtn) portfolioNextBtn.disabled = !portfolioOk;
  if (benchmarkNextBtn) benchmarkNextBtn.disabled = !(settingsOk && portfolioOk && benchmarkOk);
  if (simStartSubmitBtn) {
    simStartSubmitBtn.disabled = !summaryOk;
    simStartSubmitBtn.title = summaryOk
      ? ''
      : 'Complete settings and portfolio allocation before starting.';
  }
}

function showSlide(which) {
  if (which !== 'game') stopAutoPlay(true);
  if (which !== 'game') stopReplay(true);
  if (which !== 'game') {
    simOuterCard?.classList.remove(
      'sim-profit-glow',
      'sim-loss-glow',
      'sim-ended-glow',
      'sim-ended-tone-calm',
      'sim-ended-tone-balanced',
      'sim-ended-tone-bold'
    );
  }
  [slideSetup, slideGame, slideResult, slideInvestor].forEach((el) => el?.classList.remove('active'));
  [stepSetup, stepGame, stepResult, stepInvestor].forEach((el) => el?.classList.remove('active'));

  if (which === 'setup') {
    slideSetup?.classList.add('active');
    stepSetup?.classList.add('active');
    simFloatingActions?.classList.add('hidden');
    updateFloatingActionDockState();
  } else if (which === 'game') {
    slideGame?.classList.add('active');
    stepGame?.classList.add('active');
    if (simulationState) simFloatingActions?.classList.remove('hidden');
    updateFloatingActionDockState();
    setTimeout(() => {
      periodPanel?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  } else if (which === 'investor') {
    slideInvestor?.classList.add('active');
    stepInvestor?.classList.add('active');
    simFloatingActions?.classList.add('hidden');
    updateFloatingActionDockState();
    setTimeout(() => {
      renderAxis3dGraph();
      scrollToInvestorIntro();
    }, 0);
  } else {
    slideResult?.classList.add('active');
    stepResult?.classList.add('active');
    simFloatingActions?.classList.add('hidden');
    updateFloatingActionDockState();
  }
}

function scrollToInvestorIntro() {
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function hideShareMenu() {
  shareResultMenu?.classList.add('hidden');
}

function toggleShareMenu() {
  if (!shareResultMenu) return;
  shareResultMenu.classList.toggle('hidden');
}

function ensureSharePreviewModal() {
  if (sharePreviewBackdrop) return;
  sharePreviewBackdrop = document.createElement('div');
  sharePreviewBackdrop.className = 'share-preview-backdrop hidden';
  sharePreviewBackdrop.innerHTML = `
    <div class="share-preview-modal" role="dialog" aria-modal="true" aria-label="Share image preview">
      <div class="share-preview-head">
        <h4>Preview Share Image</h4>
        <button type="button" class="ghost" data-share-close>Close</button>
      </div>
      <div class="share-preview-mode-row">
        <button type="button" class="ghost share-preview-mode-btn active" data-share-mode="square" aria-pressed="true">1:1</button>
        <button type="button" class="ghost share-preview-mode-btn" data-share-mode="portrait" aria-pressed="false">9:18</button>
      </div>
      <p class="share-preview-ratio" data-share-ratio>Aspect ratio: 1:1</p>
      <div class="share-preview-frame">
        <img alt="Result share preview" data-share-preview-image />
      </div>
      <div class="share-preview-actions">
        <button type="button" class="ghost" data-share-cancel>Cancel</button>
        <button type="button" data-share-download>Download Image</button>
      </div>
    </div>
  `;
  document.body.appendChild(sharePreviewBackdrop);
  sharePreviewImage = sharePreviewBackdrop.querySelector('[data-share-preview-image]');
  sharePreviewRatio = sharePreviewBackdrop.querySelector('[data-share-ratio]');
  sharePreviewDownloadBtn = sharePreviewBackdrop.querySelector('[data-share-download]');
  const closeBtn = sharePreviewBackdrop.querySelector('[data-share-close]');
  const cancelBtn = sharePreviewBackdrop.querySelector('[data-share-cancel]');
  const modeButtons = Array.from(sharePreviewBackdrop.querySelectorAll('[data-share-mode]'));

  const closePreview = () => {
    sharePreviewBackdrop?.classList.add('hidden');
    const tradeModalOpen = !!document.querySelector('.trade-modal-backdrop:not(.hidden)');
    if (!tradeModalOpen) document.body.classList.remove('modal-open');
  };

  closeBtn?.addEventListener('click', closePreview);
  cancelBtn?.addEventListener('click', closePreview);
  sharePreviewBackdrop.addEventListener('click', (e) => {
    if (e.target === sharePreviewBackdrop) closePreview();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!sharePreviewBackdrop || sharePreviewBackdrop.classList.contains('hidden')) return;
    closePreview();
  });
  sharePreviewDownloadBtn?.addEventListener('click', () => {
    if (!sharePreviewDataUrl) return;
    const link = document.createElement('a');
    link.download = sharePreviewFileName || 'investolab-result.png';
    link.href = sharePreviewDataUrl;
    link.click();
  });
  modeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = String(btn.getAttribute('data-share-mode') || 'square');
      renderSharePreview(mode);
    });
  });
}

function renderSharePreview(mode = 'square') {
  if (!sharePreviewBackdrop) return;
  sharePreviewMode = mode === 'portrait' ? 'portrait' : 'square';
  const modeButtons = Array.from(sharePreviewBackdrop.querySelectorAll('[data-share-mode]'));
  modeButtons.forEach((btn) => {
    const active = String(btn.getAttribute('data-share-mode') || '') === sharePreviewMode;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  const canvas = buildResultShareCanvas(sharePreviewMode);
  sharePreviewDataUrl = canvas.toDataURL('image/png');
  const suffix = sharePreviewMode === 'portrait' ? '9x18' : '1x1';
  sharePreviewFileName = `investolab-result-${suffix}.png`;
  if (sharePreviewImage) sharePreviewImage.src = sharePreviewDataUrl;
  if (sharePreviewRatio) {
    sharePreviewRatio.textContent = sharePreviewMode === 'portrait' ? 'Aspect ratio: 9:18' : 'Aspect ratio: 1:1';
  }
  if (sharePreviewDownloadBtn) {
    sharePreviewDownloadBtn.textContent = sharePreviewMode === 'portrait' ? 'Download 9:18 Image' : 'Download 1:1 Image';
  }
}

function openSharePreview(mode = 'square') {
  ensureSharePreviewModal();
  renderSharePreview(mode);
  if (sharePreviewBackdrop) sharePreviewBackdrop.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function drawRoundedRect(ctx, x, y, w, h, r) {
  const radius = Math.max(0, Math.min(Number(r || 0), Math.min(w, h) / 2));
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';
  for (const w of words) {
    const next = current ? `${current} ${w}` : w;
    if (ctx.measureText(next).width <= maxWidth) current = next;
    else {
      if (current) lines.push(current);
      current = w;
    }
  }
  if (current) lines.push(current);
  const trimmed = lines.slice(0, Math.max(1, maxLines));
  trimmed.forEach((line, idx) => ctx.fillText(line, x, y + idx * lineHeight));
}

function drawShareAxisBars(ctx, x, y, width, mode) {
  const clampPct = (value) => Math.max(0, Math.min(100, Number(value || 0)));
  const scores = axis3dState?.scores || {};
  const rows = [
    {
      title: 'Risk Axis',
      left: 'Conservative',
      right: 'Aggressive',
      value: clampPct(scores.aggressive),
      color: '#2563eb'
    },
    {
      title: 'Control Axis',
      left: 'Passive',
      right: 'Active',
      value: clampPct(scores.internal),
      color: '#0d9488'
    },
    {
      title: 'Reactivity Axis',
      left: 'Rational',
      right: 'Emotional',
      value: clampPct(scores.emotional),
      color: '#ea580c'
    }
  ];

  const rowHeight = mode === 'portrait' ? 170 : 128;
  const gap = mode === 'portrait' ? 22 : 18;
  const trackH = mode === 'portrait' ? 24 : 20;
  const labelYGap = mode === 'portrait' ? 46 : 38;

  rows.forEach((row, idx) => {
    const top = y + idx * (rowHeight + gap);
    ctx.fillStyle = '#0f172a';
    ctx.font = mode === 'portrait' ? '700 32px Manrope, sans-serif' : '700 26px Manrope, sans-serif';
    ctx.fillText(row.title, x, top + 34);

    const pctText = `${Math.round(row.value)}%`;
    ctx.fillStyle = row.color;
    ctx.font = mode === 'portrait' ? '700 28px Manrope, sans-serif' : '700 22px Manrope, sans-serif';
    const pctWidth = ctx.measureText(pctText).width;
    ctx.fillText(pctText, x + width - pctWidth, top + 34);

    const trackY = top + 52;
    drawRoundedRect(ctx, x, trackY, width, trackH, 999);
    ctx.fillStyle = '#e2e8f0';
    ctx.fill();

    const fillW = Math.max(8, (row.value / 100) * width);
    drawRoundedRect(ctx, x, trackY, fillW, trackH, 999);
    const fillGrad = ctx.createLinearGradient(x, trackY, x + fillW, trackY);
    fillGrad.addColorStop(0, row.color);
    fillGrad.addColorStop(1, '#ffffff');
    ctx.fillStyle = fillGrad;
    ctx.fill();

    const dotX = x + (row.value / 100) * width;
    ctx.beginPath();
    ctx.fillStyle = row.color;
    ctx.arc(dotX, trackY + trackH / 2, mode === 'portrait' ? 11 : 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#475569';
    ctx.font = mode === 'portrait' ? '600 24px Manrope, sans-serif' : '600 19px Manrope, sans-serif';
    ctx.fillText(row.left, x, trackY + labelYGap);
    const rightW = ctx.measureText(row.right).width;
    ctx.fillText(row.right, x + width - rightW, trackY + labelYGap);
  });

  return rows.length * rowHeight + (rows.length - 1) * gap;
}

function buildResultShareCanvas(mode = 'square') {
  const width = 1080;
  const height = mode === 'portrait' ? 2160 : 1080; // 9:18 or 1:1
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Unable to build share image.');

  const grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0, '#eef8ff');
  grad.addColorStop(1, '#ffffff');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  const pad = 72;
  const cardW = width - pad * 2;
  let y = pad;

  ctx.fillStyle = '#0f766e';
  ctx.font = '700 28px Manrope, sans-serif';
  ctx.fillText('InvestoType Result', pad, y);
  y += 44;

  const title = String(investorTypeTitle?.textContent || 'Investor Analysis').trim();
  const badge = String(investorTypeBadge?.textContent || '').trim();
  const summary = String(investorTypeSummary?.textContent || '').trim();
  const bestFit =
    String(investorBestFitList?.querySelector('li strong')?.textContent || investorBestFitList?.querySelector('li')?.textContent || '-').trim();

  drawRoundedRect(ctx, pad, y, cardW, 190, 24);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = '#dbe7f7';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#0f172a';
  ctx.font = '800 44px Manrope, sans-serif';
  ctx.fillText(title, pad + 26, y + 58);
  if (badge) {
    ctx.fillStyle = '#1d4ed8';
    ctx.font = '700 24px Manrope, sans-serif';
    ctx.fillText(badge, pad + 26, y + 95);
  }
  ctx.fillStyle = '#334155';
  ctx.font = '600 24px Manrope, sans-serif';
  drawWrappedText(ctx, summary, pad + 26, y + 132, cardW - 52, 30, 2);
  y += 222;

  const axisCardH = mode === 'portrait' ? 700 : 470;
  drawRoundedRect(ctx, pad, y, cardW, axisCardH, 24);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = '#dbe7f7';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#0f172a';
  ctx.font = '700 30px Manrope, sans-serif';
  ctx.fillText('3 Axis Profile Bars', pad + 24, y + 44);
  drawShareAxisBars(ctx, pad + 24, y + 70, cardW - 48, mode);
  y += axisCardH + 26;

  drawRoundedRect(ctx, pad, y, cardW, 150, 24);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = '#dbe7f7';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#0f172a';
  ctx.font = '700 30px Manrope, sans-serif';
  ctx.fillText('Best-Suiting Investment', pad + 24, y + 48);
  ctx.fillStyle = '#1e293b';
  ctx.font = '600 26px Manrope, sans-serif';
  drawWrappedText(ctx, bestFit, pad + 24, y + 92, cardW - 48, 32, 2);

  return canvas;
}

function downloadResultShareImage(mode = 'square') {
  const canvas = buildResultShareCanvas(mode);
  const link = document.createElement('a');
  const suffix = mode === 'portrait' ? '9x18' : '1x1';
  link.download = `investolab-result-${suffix}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

async function copyResultLink() {
  const text = window.location.href;
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
    else throw new Error('Clipboard API unavailable');
    printOutput({ message: 'Share link copied to clipboard.' });
  } catch (_error) {
    window.prompt('Copy this link:', text);
  }
}

function updateFloatingActionDockState() {
  if (!simFloatingActions) return;

  const shouldShow =
    !!simulationState &&
    !!slideGame?.classList.contains('active') &&
    !simPanel?.classList.contains('hidden') &&
    !simFloatingActions.classList.contains('hidden');

  if (!shouldShow) {
    simFloatingActions.classList.remove('docked');
    floatingActionsDocked = false;
    if (simFloatingActions.parentElement !== document.body) document.body.appendChild(simFloatingActions);
    return;
  }

  const anchor = simControlsSection;
  if (!anchor) return;

  const anchorRect = anchor.getBoundingClientRect();
  const barHeight = Math.max(56, simFloatingActions.offsetHeight || 0);
  const threshold = window.innerHeight - barHeight - 16;
  const shouldDock = anchorRect.top <= threshold;

  if (shouldDock && !floatingActionsDocked) {
    if (simFloatingActions.parentElement !== anchor) anchor.prepend(simFloatingActions);
    simFloatingActions.classList.add('docked');
    floatingActionsDocked = true;
    return;
  }

  if (!shouldDock && floatingActionsDocked) {
    simFloatingActions.classList.remove('docked');
    if (simFloatingActions.parentElement !== document.body) document.body.appendChild(simFloatingActions);
    floatingActionsDocked = false;
  }
}

function ensureToastHost() {
  if (toastHost) return toastHost;
  toastHost = document.createElement('div');
  toastHost.className = 'sim-toast-host';
  document.body.appendChild(toastHost);
  return toastHost;
}

function showToast(message, type = 'info') {
  const text = String(message || '').trim();
  if (!text) return;
  const host = ensureToastHost();
  host.innerHTML = '';
  const item = document.createElement('div');
  item.className = `sim-toast ${type}`;
  item.textContent = text;
  host.appendChild(item);
  item.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    item.classList.remove('show');
    setTimeout(() => {
      if (host.contains(item)) host.removeChild(item);
    }, 180);
  }, type === 'error' ? 2600 : 1800);
}

function ensureStartTransitionOverlay() {
  if (startTransitionOverlay) return startTransitionOverlay;
  const el = document.createElement('div');
  el.className = 'time-warp-overlay hidden';
  el.innerHTML = `
    <div class="time-warp-core">
      <div class="time-warp-title">Simulating Time...</div>
      <div class="time-warp-sub">Loading market movement across your timeline</div>
      <div class="time-warp-track"><div class="time-warp-fill"></div></div>
    </div>
  `;
  document.body.appendChild(el);
  startTransitionOverlay = el;
  return el;
}

function playStartTransition(durationMs = 1250) {
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const duration = reducedMotion ? 120 : Math.max(320, Number(durationMs || 1250));
  const fadeMs = reducedMotion ? 80 : 260;
  const overlay = ensureStartTransitionOverlay();
  overlay.classList.remove('hidden');
  requestAnimationFrame(() => overlay.classList.add('show'));
  return new Promise((resolve) => {
    setTimeout(() => {
      overlay.classList.remove('show');
      setTimeout(() => {
        overlay.classList.add('hidden');
        resolve();
      }, fadeMs);
    }, duration);
  });
}

function getInvestorTypePlaybook(type) {
  switch (String(type || '')) {
    case 'The Quant':
      return {
        summary:
          'Aggressive, self-directed, and analytical. You treat markets like a solvable system and stay composed under pressure.',
        context: [
          'In life, you prefer evidence over impulse and trust your own frameworks.',
          'At work, you thrive in data-heavy, high-accountability environments.',
          'In school or learning, you build deep models and test assumptions.'
        ],
        strengths: [
          'Strong discipline during volatility.',
          'Independent thinking with systematic decision-making.',
          'Can capture opportunities without panic behavior.'
        ],
        weaknesses: [
          'Risk of overconfidence in personal models.',
          'May underestimate regime shifts not seen in prior data.',
          'Can become too complex for practical execution.'
        ],
        mbti: [
          'INTJ: strategic, analytical, system-driven decision maker.',
          'INTP: logic-first problem solver who optimizes models.',
          'ENTJ: structured executor with high ownership and control.'
        ],
        popularInvestors: [
          { label: 'Jim Simons', desc: 'Model-driven and systematic approach to markets.' },
          { label: 'Cliff Asness', desc: 'Quantitative, factor-based investing discipline.' },
          { label: 'Ed Thorp', desc: 'Probability-first, risk-aware trading pioneer.' }
        ],
        forward: [
          'Keep strict model governance and risk budgets.',
          'Stress-test assumptions across multiple market regimes.',
          'Limit complexity to what you can execute consistently.'
        ]
      };
    case 'Active Conviction Investor':
      return {
        summary:
          'Aggressive and highly self-directed, but emotionally reactive under stress. You move fast on conviction and can swing hard.',
        context: [
          'In life, you act decisively and prefer control over outcomes.',
          'At work, you are entrepreneurial but may push too hard through volatility.',
          'In school or learning, you pursue mastery quickly and competitively.'
        ],
        strengths: [
          'High initiative and conviction.',
          'Willingness to act where others hesitate.',
          'Strong ownership of decisions.'
        ],
        weaknesses: [
          'Can override rules during emotional periods.',
          'Higher drawdown risk from concentrated conviction.',
          'May trade too large after wins/losses.'
        ],
        mbti: [
          'ENTJ: decisive and forceful when conviction is high.',
          'ESTP: fast-acting, opportunistic, thrives in rapid feedback.',
          'ENFJ: strong conviction and influence, but can react emotionally under stress.'
        ],
        popularInvestors: [
          { label: 'Bill Ackman', desc: 'High-conviction style with concentrated positions.' },
          { label: 'Carl Icahn', desc: 'Assertive, active, conviction-led approach.' },
          { label: 'Dan Loeb', desc: 'Decisive, thesis-driven positioning.' }
        ],
        forward: [
          'Use pre-committed position-size and stop rules.',
          'Add cool-down periods after large P/L swings.',
          'Split entries/exits into staged decisions.'
        ]
      };
    case 'Tactical Trend Analyst':
      return {
        summary:
          'Aggressive with an external/trend lens and rational execution. You adapt quickly without losing structure.',
        context: [
          'In life, you are adaptive and pragmatic with changing conditions.',
          'At work, you excel in dynamic roles requiring fast tactical changes.',
          'In school or learning, you iterate quickly and optimize as new info appears.'
        ],
        strengths: [
          'Strong regime awareness and flexibility.',
          'Good balance of speed and logic.',
          'Can reduce emotional errors compared with pure momentum chasing.'
        ],
        weaknesses: [
          'Can over-rotate in noisy markets.',
          'May sacrifice compounding by changing too often.',
          'Requires discipline to keep a long-term core.'
        ],
        mbti: [
          'ENTP: adaptive, pattern-seeking, and comfortable with changing conditions.',
          'ESTP: tactical, fast-moving, pragmatic operator.',
          'INTJ: strategic adaptation while preserving analytical discipline.'
        ],
        popularInvestors: [
          { label: 'Stanley Druckenmiller', desc: 'Adaptive tactical macro and trend positioning.' },
          { label: 'Paul Tudor Jones', desc: 'Regime-aware, tactical trading style.' },
          { label: 'Bruce Kovner', desc: 'Systematic risk controls with tactical adaptation.' }
        ],
        forward: [
          'Anchor portfolio with a stable core allocation.',
          'Use clear criteria for trend confirmation and invalidation.',
          'Limit turnover and avoid reacting to single-day noise.'
        ]
      };
    case 'Aggressive Reactive Trader':
      return {
        summary:
          'Aggressive, externally influenced, and emotionally reactive. You are the highest-upside and highest-whipsaw profile.',
        context: [
          'In life, you are excitement-seeking and opportunity-driven.',
          'At work, you may excel in fast action but dislike slow process.',
          'In school or learning, you often chase high-reward paths over steady routines.'
        ],
        strengths: [
          'Can capture explosive upside early.',
          'High willingness to take calculated shots.',
          'Comfort with volatility and uncertainty.'
        ],
        weaknesses: [
          'Very high drawdown and overtrading risk.',
          'Prone to panic-buy and panic-sell cycles.',
          'Can abandon strategy after emotional swings.'
        ],
        mbti: [
          'ESTP: thrill-seeking tactical risk taker.',
          'ENFP: highly opportunity-driven, momentum-sensitive style.',
          'ENTP: bold experimentation with high variance outcomes.'
        ],
        popularInvestors: [
          { label: 'Cathie Wood', desc: 'High-volatility thematic conviction style.' },
          { label: 'Chamath Palihapitiya', desc: 'High-beta thematic and narrative-driven bets.' },
          { label: 'Masayoshi Son', desc: 'Aggressive upside-seeking capital deployment.' }
        ],
        forward: [
          'Cut position sizes and enforce hard loss limits.',
          'Use a checklist before any new high-volatility trade.',
          'Keep a non-negotiable passive core for stability.'
        ]
      };
    case 'Conservative Researcher':
      return {
        summary:
          'Conservative, internally driven, and rational. You research deeply, move carefully, and prioritize long-term capital protection.',
        context: [
          'In life, you are methodical and low-drama in important decisions.',
          'At work, you are reliable, detail-oriented, and process-heavy.',
          'In school or learning, you value depth, evidence, and mastery.'
        ],
        strengths: [
          'Excellent discipline and downside control.',
          'Strong independent judgment rooted in analysis.',
          'Low probability of panic behavior.'
        ],
        weaknesses: [
          'Can be too slow to add risk in bull markets.',
          'May miss momentum-led upside phases.',
          'Can overanalyze instead of acting.'
        ],
        mbti: [
          'ISTJ: disciplined, methodical, and process-first.',
          'INTJ: long-range planner with strong analytical control.',
          'INTP: deep researcher, careful evidence-based thinker.'
        ],
        popularInvestors: [
          { label: 'Benjamin Graham', desc: 'Deep research and margin-of-safety discipline.' },
          { label: 'Seth Klarman', desc: 'Risk-aware, research-intensive value process.' },
          { label: 'Howard Marks', desc: 'Rational cycle analysis and risk-first framework.' }
        ],
        forward: [
          'Define triggers for gradually increasing risk when conditions improve.',
          'Maintain diversification while preserving research standards.',
          'Avoid excessive cash drag in persistent uptrends.'
        ]
      };
    case 'Defensive Active Allocator':
      return {
        summary:
          'Conservative and self-directed, but emotionally sensitive under stress. You want control and safety, yet volatility can still pull reactions.',
        context: [
          'In life, you prepare carefully but may second-guess in uncertainty.',
          'At work, you prefer control and structure, yet stress can cause quick pivots.',
          'In school or learning, you do best with clear frameworks and milestones.'
        ],
        strengths: [
          'Strong risk awareness and planning instinct.',
          'Ownership mindset with deliberate decision intent.',
          'Can be highly resilient with proper guardrails.'
        ],
        weaknesses: [
          'Can overreact defensively after losses.',
          'May switch plans too quickly under pressure.',
          'Can become inconsistent across market regimes.'
        ],
        mbti: [
          'ISFJ: safety-oriented and consistency-driven, sensitive to stress.',
          'ISTJ: structured and responsible, but can become rigid in uncertainty.',
          'INFJ: thoughtful and cautious with strong downside awareness.'
        ],
        popularInvestors: [
          { label: 'Jeremy Grantham', desc: 'Risk-aware and valuation-disciplined with caution bias.' },
          { label: 'Jean-Marie Eveillard', desc: 'Capital preservation with independent decisions.' },
          { label: 'Francois Rochon', desc: 'Defensive quality focus with process discipline.' }
        ],
        forward: [
          'Automate more of your allocation decisions.',
          'Use fixed rebalance dates and avoid ad hoc shifts.',
          'Set stress-time rules before volatility starts.'
        ]
      };
    case 'Passive Rational Allocator':
      return {
        summary:
          'Conservative, externally anchored, and rational. You are ideal for long-horizon, low-friction compounding.',
        context: [
          'In life, you favor consistency and avoid unnecessary complexity.',
          'At work, you deliver steadily with process and patience.',
          'In school or learning, you progress methodically and reliably.'
        ],
        strengths: [
          'Low-cost, low-noise investing temperament.',
          'Strong behavioral stability across cycles.',
          'Excellent fit for passive long-term wealth building.'
        ],
        weaknesses: [
          'May miss selective active opportunities.',
          'Can become too passive during major structural shifts.',
          'May under-engage with portfolio improvement decisions.'
        ],
        mbti: [
          'ISTJ: stable, routine-oriented, and rules-based.',
          'ISFJ: patient and consistent with long-term commitments.',
          'INTJ: strategic simplicity with disciplined execution.'
        ],
        popularInvestors: [
          { label: 'Jack Bogle', desc: 'Passive indexing and low-cost compounding philosophy.' },
          { label: 'Burton Malkiel', desc: 'Evidence-based, market-efficiency approach.' },
          { label: 'David Swensen', desc: 'Disciplined allocation and long-horizon policy focus.' }
        ],
        forward: [
          'Continue broad indexing with periodic rebalancing.',
          'Keep costs low and avoid frequent tactical changes.',
          'Use automation for contributions and allocation maintenance.'
        ]
      };
    case 'Passive Emotional Allocator':
      return {
        summary:
          'Conservative, externally guided, and emotionally reactive. Simplicity and emotional protection should be top priorities.',
        context: [
          'In life, uncertainty can feel stressful, so you seek trusted structure.',
          'At work, you perform best with clear systems and low ambiguity.',
          'In school or learning, guided frameworks and routine support your consistency.'
        ],
        strengths: [
          'Strong awareness of personal risk boundaries.',
          'Open to structured advice and simple plans.',
          'Can succeed with hands-off systems.'
        ],
        weaknesses: [
          'Most vulnerable to fear-based timing errors.',
          'Can exit good strategies during normal drawdowns.',
          'May overconsume headlines and short-term noise.'
        ],
        mbti: [
          'ISFP: values low-stress paths and emotional comfort.',
          'ESFJ: prefers trusted guidance and social proof.',
          'INFP: values personal safety and can react strongly to uncertainty.'
        ],
        popularInvestors: [
          { label: 'John Bogle', desc: 'Simple, hands-off investing frameworks for long-term savers.' },
          { label: 'Charles Ellis', desc: 'Focus on winning by avoiding mistakes and staying invested.' },
          { label: 'Christine Benz', desc: 'Practical, behavior-aware portfolio simplification.' }
        ],
        forward: [
          'Default to automated index-based contributions.',
          'Reduce discretionary trading and decision frequency.',
          'Use guardrails: no major allocation changes during market panic days.'
        ]
      };
    default:
      return {
        summary:
          'You combine steady core behavior with moderate tactical flexibility.',
        context: [
          'In life, you balance structure and adaptability.',
          'At work, you can operate across both process and execution.',
          'In school or learning, you adapt while retaining consistency.'
        ],
        strengths: [
          'Versatile behavior across changing conditions.',
          'Moderate risk style can improve consistency.',
          'Less extreme bias than one-sided profiles.'
        ],
        weaknesses: [
          'May be unclear on when to be offensive vs defensive.',
          'Could drift without explicit rules.',
          'Can produce average outcomes without a clear edge.'
        ],
        mbti: [
          'INTJ: balanced planner with strategic flexibility.',
          'ENTP: adaptable thinker with tactical curiosity.',
          'ISTJ: structured operator with steady execution.'
        ],
        popularInvestors: [
          { label: 'Howard Marks', desc: 'Balances opportunity-seeking with risk control.' },
          { label: 'Ray Dalio', desc: 'Blends diversified structure with tactical adjustments.' },
          { label: 'Seth Klarman', desc: 'Flexible and risk-aware decision-making.' }
        ],
        forward: [
          'Define explicit rules for risk-on and risk-off shifts.',
          'Keep the majority of assets in a durable core allocation.',
          'Review behavior metrics monthly to avoid drift.'
        ]
      };
  }
}

function getInvestorTone(type) {
  const t = String(type || '');
  if (['Conservative Researcher', 'Passive Rational Allocator', 'Passive Emotional Allocator', 'Defensive Active Allocator'].includes(t)) return 'calm';
  if (['The Quant', 'Active Conviction Investor', 'Tactical Trend Analyst', 'Aggressive Reactive Trader'].includes(t)) return 'bold';
  return 'balanced';
}

function getInvestorTypeInvestmentPlan(type) {
  switch (String(type || '')) {
    case 'The Quant':
      return {
        bestFit: [
          'Invesco S&P 500 Quality ETF (SPHQ).',
          'Broad equity core (VTI, SPY) with systematic satellite tilts.',
          'Managed futures/trend overlays for diversification by regime.'
        ],
        bestFitWhy: 'It matches your rules-based style with a quality tilt and disciplined exposure.',
        mix: [
          '45% Broad US Equity (VTI/SPY)',
          '20% International Equity (VEA/EEM)',
          '15% Bonds (BND/TLT)',
          '10% Alternatives (managed futures/market neutral)',
          '10% Tactical sleeve (quant rules, strict risk budget)'
        ]
      };
    case 'Active Conviction Investor':
      return {
        bestFit: [
          'Invesco QQQ Trust (QQQ).',
          'Sector ETFs for concentrated themes without single-name blowup risk.',
          'Protective hedges (cash/TLT/puts) when concentration rises.'
        ],
        bestFitWhy: 'It fits your high-conviction growth preference while staying liquid and easy to size.',
        mix: [
          '35% Broad Equity Core (VTI/SPY)',
          '25% Concentrated Conviction Basket (5-10 positions)',
          '15% Sector/Thematic ETFs',
          '15% Bonds/Defensive Assets (BND/TLT/GLD)',
          '10% Cash buffer for drawdown control'
        ]
      };
    case 'Tactical Trend Analyst':
      return {
        bestFit: [
          'SPDR S&P 500 ETF Trust (SPY).',
          'Volatility-aware strategies with rebalance triggers.',
          'Liquid macro assets (equities, treasuries, gold) for regime shifts.'
        ],
        bestFitWhy: 'It supports trend-based entries and exits with deep liquidity and reliable pricing.',
        mix: [
          '40% Strategic Core Equity (VTI/SPY)',
          '25% Tactical Trend Sleeve (rule-based rotation)',
          '15% Treasuries (TLT/IEF)',
          '10% Gold/Commodity diversifier (GLD/DBC)',
          '10% Cash for tactical entry opportunities'
        ]
      };
    case 'Aggressive Reactive Trader':
      return {
        bestFit: [
          'Technology Select Sector SPDR Fund (XLK).',
          'Small capped crypto exposure only within strict position sizing.',
          'Rules-based stop and de-risk framework before each trade.'
        ],
        bestFitWhy: 'It gives high-beta upside in one liquid vehicle that is easier to risk-manage than single stocks.',
        mix: [
          '30% Broad Equity Core (SPY/VTI)',
          '20% Growth/Tech ETFs (QQQ/SMH)',
          '15% Satellite high-beta ideas',
          '15% Defensive ballast (BND/TLT/GLD)',
          '15% Cash risk buffer',
          '5% Speculative sleeve cap (crypto/options-like)'
        ]
      };
    case 'Conservative Researcher':
      return {
        bestFit: [
          'Schwab U.S. Dividend Equity ETF (SCHD).',
          'Investment-grade bonds and treasuries for capital stability.',
          'Gold as modest hedge against regime stress.'
        ],
        bestFitWhy: 'It aligns with your preference for quality businesses, income, and steadier drawdowns.',
        mix: [
          '30% Broad Equity (VTI/SPY)',
          '20% Quality/Dividend Equity (SCHD/QUAL)',
          '35% Bonds (BND/TLT)',
          '10% Gold (GLD)',
          '5% Cash reserve'
        ]
      };
    case 'Defensive Active Allocator':
      return {
        bestFit: [
          'iShares Core U.S. Aggregate Bond ETF (AGG).',
          'Short/intermediate bonds to reduce drawdown sensitivity.',
          'Defensive sectors (healthcare, staples, utilities).'
        ],
        bestFitWhy: 'It helps stabilize returns and reduce volatility while you make selective active decisions.',
        mix: [
          '30% Broad Equity Core',
          '15% Defensive Sector ETFs',
          '35% Bonds (focus on intermediate duration)',
          '10% Gold/real assets',
          '10% Cash for emotional stability during volatility'
        ]
      };
    case 'Passive Rational Allocator':
      return {
        bestFit: [
          'Vanguard Total Stock Market ETF (VTI).',
          'Target-date or balanced index funds for automation.',
          'Periodic rebalance with minimal discretionary changes.'
        ],
        bestFitWhy: 'It gives broad diversification at very low cost, ideal for consistent long-term compounding.',
        mix: [
          '55% Global Equity Index (US + International)',
          '30% Bond Index (aggregate + treasury blend)',
          '10% Real assets (GLD/REIT index)',
          '5% Cash for short-term flexibility'
        ]
      };
    case 'Passive Emotional Allocator':
      return {
        bestFit: [
          'iShares Core Conservative Allocation ETF (AOK).',
          'Automatic DCA into broad index funds to reduce timing stress.',
          'Higher bond/cash share to improve staying power.'
        ],
        bestFitWhy: 'It uses a built-in conservative mix that can reduce stress during market swings.',
        mix: [
          '40% Broad Equity Index',
          '40% Bonds (aggregate + treasury)',
          '15% Cash reserve',
          '5% Gold/defensive diversifier'
        ]
      };
    default:
      return {
        bestFit: [
          'Vanguard Total Stock Market ETF (VTI).',
          'Balanced exposure across equities, bonds, and diversifiers.',
          'Rules-based rebalancing over discretionary timing.'
        ],
        bestFitWhy: 'It is a simple, diversified core holding that fits most long-term investors.',
        mix: [
          '50% Equity Index',
          '30% Bonds',
          '10% Diversifiers',
          '10% Cash/tactical reserve'
        ]
      };
  }
}

function axisCodeFromLabel(label, axis) {
  const raw = String(label || '').toLowerCase();
  if (axis === 'risk') return raw.includes('aggressive') ? 'A' : 'C';
  if (axis === 'control') return raw.includes('internal') || raw.includes('active') ? 'I' : 'E';
  if (axis === 'reactivity') return raw.includes('emotional') ? 'E' : 'R';
  return '';
}

function axisLabelFromCode(axis, code) {
  if (axis === 'risk') return code === 'A' ? 'Aggressive' : 'Conservative';
  if (axis === 'control') return code === 'I' ? 'Active' : 'Passive';
  if (axis === 'reactivity') return code === 'E' ? 'Emotional' : 'Rational';
  return '';
}

function getAxisCodes(profile) {
  const code = String(profile?.code || '').trim().toUpperCase();
  const parts = code.split('-');
  if (parts.length === 3) {
    return {
      risk: parts[0] === 'A' ? 'A' : 'C',
      control: parts[1] === 'I' ? 'I' : 'E',
      reactivity: parts[2] === 'E' ? 'E' : 'R'
    };
  }
  return {
    risk: axisCodeFromLabel(profile?.axes?.risk, 'risk') || 'C',
    control: axisCodeFromLabel(profile?.axes?.control, 'control') || 'E',
    reactivity: axisCodeFromLabel(profile?.axes?.reactivity, 'reactivity') || 'R'
  };
}

function getCubeCode(risk, control, reactivity) {
  return `${risk || 'C'}-${control || 'E'}-${reactivity || 'R'}`;
}

// derive likely MBTI suggestions strictly from the three axis codes
// codes are of the form risk-control-reactivity where each letter is
// A/C, I/E and E/R respectively.  We mirror the hard?coded lists used
// in `getInvestorTypePlaybook(...)` for each cube code so that the MBTI
// shown on the analysis page is driven only by the axis mix.  This way
// if the axes change (either via a new simulation or manual override)
// the MBTI list will update automatically instead of remaining tied to
// the type string that the server chose earlier.
function getMbtiFromAxisCodes(axisCodes = {}) {
  const code = getCubeCode(axisCodes.risk, axisCodes.control, axisCodes.reactivity);
  const mbtiByCode = {
    'A-I-R': ['INTJ', 'INTP', 'ENTJ'],
    'A-I-E': ['ENTJ', 'ESTP', 'ENFJ'],
    'A-E-R': ['ENTP', 'ESTP', 'INTJ'],
    'A-E-E': ['ESTP', 'ENFP', 'ENTP'],
    'C-I-R': ['ISTJ', 'INTJ', 'INTP'],
    'C-I-E': ['ISFJ', 'ISTJ', 'INFJ'],
    'C-E-R': ['ISTJ', 'ISFJ', 'INTJ'],
    'C-E-E': ['ISFP', 'ESFJ', 'INFP']
  };
  return mbtiByCode[code] || [];
}

const MBTI_SUMMARY_BY_TYPE = {
  INTJ: 'Strategic and independent. You prefer structured plans and long-term thinking.',
  INTP: 'Analytical and curious. You like to test ideas before committing capital.',
  ENTJ: 'Decisive and goal-driven. You move quickly when a strategy looks strong.',
  ESTP: 'Action-oriented and bold. You adapt quickly and are comfortable with fast change.',
  ENFJ: 'People-aware and proactive. You balance conviction with social signals.',
  ENTP: 'Opportunity-seeking and flexible. You enjoy exploring multiple paths.',
  ISTJ: 'Methodical and disciplined. You value consistency, rules, and reliability.',
  INFJ: 'Insightful and deliberate. You look for meaning and pattern before acting.',
  ISFJ: 'Protective and steady. You prefer stable systems and downside awareness.',
  ISFP: 'Practical and responsive. You decide from present context and risk comfort.',
  ESFJ: 'Supportive and orderly. You prefer clear plans and stable progress.',
  INFP: 'Values-driven and reflective. You need alignment before taking risk.'
};

function renderMbtiSummaryList(mbtiList = []) {
  if (!investorMbtiList) return;
  const list = (Array.isArray(mbtiList) ? mbtiList : [])
    .map((x) => String(x || '').trim().toUpperCase())
    .filter(Boolean);
  investorMbtiList.innerHTML = list
    .map((type) => `<li><strong>${escapeHtml(type)}</strong><span class="mbti-summary"> - ${escapeHtml(MBTI_SUMMARY_BY_TYPE[type] || 'Profile summary unavailable.')}</span></li>`)
    .join('');
}

function rotate3D(point, rxDeg, ryDeg) {
  const rx = (rxDeg * Math.PI) / 180;
  const ry = (ryDeg * Math.PI) / 180;
  const cosX = Math.cos(rx);
  const sinX = Math.sin(rx);
  const cosY = Math.cos(ry);
  const sinY = Math.sin(ry);
  const y1 = point.y * cosX - point.z * sinX;
  const z1 = point.y * sinX + point.z * cosX;
  const x2 = point.x * cosY + z1 * sinY;
  const z2 = -point.x * sinY + z1 * cosY;
  return { x: x2, y: y1, z: z2 };
}

function ensureAxis3dCanvasSize() {
  if (!axis3dCanvas || !axis3dStage) return { w: 0, h: 0 };
  const rect = axis3dStage.getBoundingClientRect();
  const cssW = Math.max(220, Math.floor(rect.width - 10));
  const cssH = Math.max(180, Math.floor(rect.height - 10));
  const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  const targetW = Math.floor(cssW * dpr);
  const targetH = Math.floor(cssH * dpr);
  if (axis3dCanvas.width !== targetW || axis3dCanvas.height !== targetH) {
    axis3dCanvas.width = targetW;
    axis3dCanvas.height = targetH;
  }
  return { w: targetW, h: targetH };
}

function setAxis3dHover(content, x, y) {
  if (!axis3dHoverTip || !axis3dStage) return;
  axis3dHoverTip.innerHTML = content;
  axis3dHoverTip.classList.remove('hidden');
  axis3dHoverTip.style.left = `${x}px`;
  axis3dHoverTip.style.top = `${y}px`;
}

function hideAxis3dHover() {
  if (!axis3dHoverTip) return;
  axis3dHoverTip.classList.add('hidden');
}

function cornerMetaFromPoint(p) {
  const risk = p.x >= 0 ? 'A' : 'C';
  const control = p.y >= 0 ? 'I' : 'E';
  const react = p.z >= 0 ? 'E' : 'R';
  const code = `${risk}-${control}-${react}`;
  const explanation = {
    'A-I-R': 'Aggressive, Active, Rational',
    'A-I-E': 'Aggressive, Active, Emotional',
    'A-E-R': 'Aggressive, Passive, Rational',
    'A-E-E': 'Aggressive, Passive, Emotional',
    'C-I-R': 'Conservative, Active, Rational',
    'C-I-E': 'Conservative, Active, Emotional',
    'C-E-R': 'Conservative, Passive, Rational',
    'C-E-E': 'Conservative, Passive, Emotional'
  }[code];
  return { code, explanation: explanation || 'Unclassified profile' };
}

function updateAxis3dHover(clientX, clientY) {
  if (!axis3dCanvas || !axis3dStage || !axis3dState.projectedCorners.length) return;
  const rect = axis3dCanvas.getBoundingClientRect();
  const dpr = axis3dCanvas.width / Math.max(1, rect.width);
  const x = (clientX - rect.left) * dpr;
  const y = (clientY - rect.top) * dpr;
  let best = null;
  let bestD2 = Infinity;
  axis3dState.projectedCorners.forEach((c) => {
    const dx = c.x - x;
    const dy = c.y - y;
    const d2 = dx * dx + dy * dy;
    if (d2 < bestD2) {
      bestD2 = d2;
      best = c;
    }
  });
  if (!best || bestD2 > (16 * dpr) ** 2) {
    hideAxis3dHover();
    return;
  }
  const stageRect = axis3dStage.getBoundingClientRect();
  const localX = clientX - stageRect.left;
  const localY = clientY - stageRect.top;
  setAxis3dHover(`<strong>${best.explanation}</strong>`, localX, localY);
}

function renderAxis3dGraph() {
  if (!axis3dCanvas) return;
  const { w, h } = ensureAxis3dCanvasSize();
  if (w <= 0 || h <= 0) return;
  const ctx = axis3dCanvas.getContext('2d');
  if (!ctx) return;
  ctx.clearRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2;
  const unit = Math.min(w, h) * 0.23;
  const perspective = unit * 3.4;
  const transform = (p) => {
    const r = rotate3D(p, axis3dState.rotX, axis3dState.rotY);
    const s = perspective / (perspective + r.z * unit);
    return { x: cx + r.x * unit * s, y: cy - r.y * unit * s, z: r.z };
  };
  const drawSegment = (a, b, color, width = 1, alpha = 1, dash = null, glow = 0) => {
    const p1 = transform(a);
    const p2 = transform(b);
    ctx.save();
    if (dash) ctx.setLineDash(dash);
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    if (glow > 0) {
      ctx.shadowBlur = glow;
      ctx.shadowColor = color;
    }
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    ctx.restore();
    return { p1, p2 };
  };
  const drawArrow = (from, to, color) => {
    const seg = drawSegment(from, to, color, 2.5, 0.92, null, 8);
    const a = Math.atan2(seg.p2.y - seg.p1.y, seg.p2.x - seg.p1.x);
    const len = Math.max(6, Math.min(11, w * 0.015));
    ctx.save();
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.95;
    ctx.beginPath();
    ctx.moveTo(seg.p2.x, seg.p2.y);
    ctx.lineTo(seg.p2.x - len * Math.cos(a - 0.35), seg.p2.y - len * Math.sin(a - 0.35));
    ctx.lineTo(seg.p2.x - len * Math.cos(a + 0.35), seg.p2.y - len * Math.sin(a + 0.35));
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };
  const drawPillLabel = (text, p, fg = '#0f172a', bg = 'rgba(255,255,255,0.92)', border = 'rgba(148,163,184,0.45)') => {
    const padX = 6;
    const padY = 4;
    ctx.save();
    ctx.font = `${Math.max(9, Math.floor(w * 0.014))}px ui-sans-serif, system-ui`;
    const tw = ctx.measureText(text).width;
    const x = p.x + (p.x >= cx ? 6 : -(tw + padX * 2 + 6));
    const y = p.y - 9;
    const bw = tw + padX * 2;
    const bh = 17 + padY * 0.6;
    ctx.fillStyle = bg;
    ctx.strokeStyle = border;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x, y, bw, bh, 7);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = fg;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x + padX, y + bh / 2 + 0.5);
    ctx.restore();
  };

  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#f8fbff');
  bg.addColorStop(1, '#edf3ff');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  const nebula = ctx.createRadialGradient(cx - unit * 0.35, cy - unit * 0.42, 12, cx, cy, unit * 2);
  nebula.addColorStop(0, 'rgba(59,130,246,0.18)');
  nebula.addColorStop(0.5, 'rgba(14,165,233,0.08)');
  nebula.addColorStop(1, 'rgba(14,165,233,0)');
  ctx.fillStyle = nebula;
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < 32; i += 1) {
    const sx = ((Math.sin((i + 1) * 12.9898) * 43758.5453) % 1 + 1) % 1;
    const sy = ((Math.sin((i + 1) * 78.233) * 12345.6789) % 1 + 1) % 1;
    const r = 0.5 + ((Math.sin((i + 1) * 4.17) + 1) * 0.5) * 1.4;
    ctx.fillStyle = 'rgba(148,163,184,0.22)';
    ctx.beginPath();
    ctx.arc(sx * w, sy * h, r, 0, Math.PI * 2);
    ctx.fill();
  }

  for (const t of [-0.6, -0.3, 0, 0.3, 0.6]) {
    drawSegment({ x: -1, y: t, z: -1 }, { x: 1, y: t, z: -1 }, '#c7d2fe', 1, 0.24, [3, 4]);
    drawSegment({ x: t, y: -1, z: -1 }, { x: t, y: 1, z: -1 }, '#c7d2fe', 1, 0.24, [3, 4]);
    drawSegment({ x: -1, y: -1, z: t }, { x: 1, y: -1, z: t }, '#cbd5e1', 1, 0.18, [2, 5]);
  }

  const cubePts = [
    { x: -1, y: -1, z: -1 }, { x: 1, y: -1, z: -1 }, { x: 1, y: 1, z: -1 }, { x: -1, y: 1, z: -1 },
    { x: -1, y: -1, z: 1 }, { x: 1, y: -1, z: 1 }, { x: 1, y: 1, z: 1 }, { x: -1, y: 1, z: 1 }
  ];
  const edges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
  edges.forEach(([a, b]) => {
    const za = rotate3D(cubePts[a], axis3dState.rotX, axis3dState.rotY).z;
    const zb = rotate3D(cubePts[b], axis3dState.rotX, axis3dState.rotY).z;
    const depthAlpha = 0.24 + ((za + zb + 2) / 4) * 0.32;
    drawSegment(cubePts[a], cubePts[b], '#64748b', 1.2, depthAlpha);
  });

  // Full axes (negative to positive)
  drawArrow({ x: -1.22, y: 0, z: 0 }, { x: 1.22, y: 0, z: 0 }, '#2563eb'); // Risk
  drawArrow({ x: 0, y: -1.22, z: 0 }, { x: 0, y: 1.22, z: 0 }, '#0f766e'); // Control
  drawArrow({ x: 0, y: 0, z: -1.22 }, { x: 0, y: 0, z: 1.22 }, '#dc2626'); // Reactivity

  const endpointLabels = [
    { p: { x: 1.29, y: 0, z: 0 }, t: 'Aggressive', c: '#1d4ed8' },
    { p: { x: -1.29, y: 0, z: 0 }, t: 'Conservative', c: '#1d4ed8' },
    { p: { x: 0, y: 1.29, z: 0 }, t: 'Active', c: '#0f766e' },
    { p: { x: 0, y: -1.29, z: 0 }, t: 'Passive', c: '#0f766e' },
    { p: { x: 0, y: 0, z: 1.29 }, t: 'Emotional', c: '#dc2626' },
    { p: { x: 0, y: 0, z: -1.29 }, t: 'Rational', c: '#dc2626' }
  ];
  endpointLabels.forEach((item) => {
    drawPillLabel(item.t, transform(item.p), item.c, 'rgba(255,255,255,0.9)', 'rgba(203,213,225,0.8)');
  });

  // Store projected corners for hover
  axis3dState.projectedCorners = cubePts.map((c) => {
    const p = transform(c);
    const meta = cornerMetaFromPoint(c);
    return { x: p.x, y: p.y, code: meta.code, explanation: meta.explanation, z: p.z };
  });

  axis3dState.projectedCorners.sort((a, b) => a.z - b.z).forEach((c) => {
    const radius = Math.max(2.4, Math.min(5.5, w * 0.0065 + c.z * 0.9));
    ctx.fillStyle = `rgba(100,116,139,${0.4 + (c.z + 1) * 0.15})`;
    ctx.strokeStyle = 'rgba(255,255,255,0.78)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(c.x, c.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  const scores = axis3dState.scores;
  const pr = { x: scores.aggressive / 50 - 1, y: 0, z: 0 };
  const pc = { x: 0, y: scores.internal / 50 - 1, z: 0 };
  const pe = { x: 0, y: 0, z: scores.emotional / 50 - 1 };
  const rr = transform(pr);
  const rc = transform(pc);
  const re = transform(pe);

  const glow = ctx.createRadialGradient(cx, cy, 10, cx, cy, unit * 1.2);
  glow.addColorStop(0, 'rgba(56,189,248,0.2)');
  glow.addColorStop(1, 'rgba(56,189,248,0)');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.moveTo(rr.x, rr.y);
  ctx.lineTo(rc.x, rc.y);
  ctx.lineTo(re.x, re.y);
  ctx.closePath();
  ctx.fill();

  const profileFill = ctx.createLinearGradient(rr.x, rr.y, re.x, re.y);
  profileFill.addColorStop(0, 'rgba(37,99,235,0.24)');
  profileFill.addColorStop(0.5, 'rgba(15,118,110,0.18)');
  profileFill.addColorStop(1, 'rgba(220,38,38,0.24)');
  ctx.fillStyle = profileFill;
  ctx.beginPath();
  ctx.moveTo(rr.x, rr.y);
  ctx.lineTo(rc.x, rc.y);
  ctx.lineTo(re.x, re.y);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = 'rgba(30,64,175,0.9)';
  ctx.lineWidth = 2.2;
  ctx.shadowBlur = 8;
  ctx.shadowColor = 'rgba(59,130,246,0.34)';
  ctx.beginPath();
  ctx.moveTo(rr.x, rr.y);
  ctx.lineTo(rc.x, rc.y);
  ctx.lineTo(re.x, re.y);
  ctx.closePath();
  ctx.stroke();
  ctx.shadowBlur = 0;

  [rr, rc, re].forEach((p) => {
    ctx.strokeStyle = 'rgba(148,163,184,0.36)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  });

  [
    { p: rr, c: '#2563eb', t: `Aggressive ${Math.round(scores.aggressive)}%` },
    { p: rc, c: '#0f766e', t: `Active ${Math.round(scores.internal)}%` },
    { p: re, c: '#dc2626', t: `Emotional ${Math.round(scores.emotional)}%` }
  ].forEach((n) => {
    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowColor = n.c;
    ctx.fillStyle = n.c;
    ctx.beginPath();
    ctx.arc(n.p.x, n.p.y, Math.max(4.5, Math.min(7.2, w * 0.0092)), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    drawPillLabel(n.t, n.p, '#0f172a', 'rgba(255,255,255,0.95)', 'rgba(148,163,184,0.65)');
  });
}

function initAxis3dInteractivity() {
  if (!axis3dStage || axis3dStage.dataset.bound === '1') return;
  axis3dStage.dataset.bound = '1';

  axis3dStage.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    axis3dState.dragging = true;
    axis3dState.startX = e.clientX;
    axis3dState.startY = e.clientY;
    axis3dState.baseRotX = axis3dState.rotX;
    axis3dState.baseRotY = axis3dState.rotY;
    axis3dStage.classList.add('dragging');
    axis3dStage.setPointerCapture?.(e.pointerId);
  });
  axis3dStage.addEventListener('pointermove', (e) => {
    if (axis3dState.dragging) {
      e.preventDefault();
      const dx = e.clientX - axis3dState.startX;
      const dy = e.clientY - axis3dState.startY;
      axis3dState.rotY = axis3dState.baseRotY + dx * 0.34;
      axis3dState.rotX = Math.max(-80, Math.min(80, axis3dState.baseRotX - dy * 0.28));
      renderAxis3dGraph();
      hideAxis3dHover();
      return;
    }
    updateAxis3dHover(e.clientX, e.clientY);
  });
  const stop = () => {
    axis3dState.dragging = false;
    axis3dStage.classList.remove('dragging');
  };
  axis3dStage.addEventListener('pointerup', stop);
  axis3dStage.addEventListener('pointercancel', stop);
  axis3dStage.addEventListener('mouseleave', () => {
    stop();
    hideAxis3dHover();
  });
}

function deriveAxisScoresFallback(axisCodes, metrics = {}) {
  const clamp = (v) => Math.max(0, Math.min(100, Number(v || 0)));
  const avgTurnover = Math.max(0, Number(metrics.avgTurnover || 0));
  const avgConcentration = Math.max(0, Number(metrics.avgConcentration || 0));
  const avgCashRatio = Math.max(0, Number(metrics.avgCashRatio || 0));
  const vol = Math.max(0, Number(metrics.vol || 0));
  const maxDrawdown = Math.max(0, Number(metrics.maxDrawdown || 0));
  const rebalances = Math.max(0, Number(metrics.rebalances || 0));

  // Dynamic fallback from observed behavior (avoids fixed 30/70).
  const aggressiveRaw =
    vol * 110 + maxDrawdown * 95 + avgConcentration * 55 + Math.max(0, 0.2 - avgCashRatio) * 90 + rebalances * 1.2;
  const internalRaw = avgTurnover * 120 + avgConcentration * 65 + rebalances * 1.4;
  const emotionalRaw = avgTurnover * 105 + maxDrawdown * 95 + vol * 60;

  const toPct = (raw, mid, scale = 16) => clamp(100 / (1 + Math.exp(-(raw - mid) / scale)));
  const aggressive = toPct(aggressiveRaw, 58);
  const internal = toPct(internalRaw, 48);
  const emotional = toPct(emotionalRaw, 52);

  const bias = (code, pct) => {
    if (Number.isFinite(pct)) return pct;
    return code ? 60 : 40;
  };

  return {
    riskAggressive: bias(axisCodes.risk === 'A', aggressive),
    controlInternal: bias(axisCodes.control === 'I', internal),
    reactivityEmotional: bias(axisCodes.reactivity === 'E', emotional)
  };
}

function setAxisGridScores(axisScores, axisCodes, metrics = {}) {
  const fallback = deriveAxisScoresFallback(axisCodes, metrics);
  const inputAggressive = Number(axisScores?.riskAggressive);
  const inputInternal = Number(axisScores?.controlInternal);
  const inputEmotional = Number(axisScores?.reactivityEmotional);
  const hasInputScores = Number.isFinite(inputAggressive) && Number.isFinite(inputInternal) && Number.isFinite(inputEmotional);
  const hasBehaviorMetrics = [
    Number(metrics?.avgTurnover || 0),
    Number(metrics?.avgConcentration || 0),
    Number(metrics?.avgCashRatio || 0),
    Number(metrics?.vol || 0),
    Number(metrics?.maxDrawdown || 0),
    Number(metrics?.rebalances || 0)
  ].some((value) => value > 0);
  const neutralInput =
    hasInputScores &&
    Math.abs(inputAggressive - 50) < 0.01 &&
    Math.abs(inputInternal - 50) < 0.01 &&
    Math.abs(inputEmotional - 50) < 0.01;
  const useFallback = !hasInputScores || (neutralInput && hasBehaviorMetrics);
  const aggressive = Math.max(0, Math.min(100, useFallback ? fallback.riskAggressive : inputAggressive));
  const internal = Math.max(0, Math.min(100, useFallback ? fallback.controlInternal : inputInternal));
  const emotional = Math.max(0, Math.min(100, useFallback ? fallback.reactivityEmotional : inputEmotional));

  if (axisRiskScoreValue) axisRiskScoreValue.textContent = `A ${Math.round(aggressive)}% | C ${Math.round(100 - aggressive)}%`;
  if (axisControlScoreValue) axisControlScoreValue.textContent = `I ${Math.round(internal)}% | E ${Math.round(100 - internal)}%`;
  if (axisReactivityScoreValue) axisReactivityScoreValue.textContent = `E ${Math.round(emotional)}% | R ${Math.round(100 - emotional)}%`;
  axis3dState.scores = { aggressive, internal, emotional };
  renderAxis3dGraph();

  // keep MBTI list in sync with whatever axes we just painted
  if (investorMbtiList) {
    const dynamicMbti = getMbtiFromAxisCodes(axisCodes);
    renderMbtiSummaryList(dynamicMbti);
  }

  return { aggressive, internal, emotional };
}

function renderInvestorTypePage(result) {
  if (!result) return;
  const isQuizAnalysis = String(result?.analysisSource || '').toLowerCase() === 'quiz' || !!quizResultSection;
  const type = String(result?.investorProfile?.type || 'Passive Rational Allocator');
  const code = String(result?.investorProfile?.code || '').trim();
  const axes = result?.investorProfile?.axes || {};
  const axisCodes = getAxisCodes(result?.investorProfile || {});
  const axisScores = result?.investorProfile?.axisScores || {};
  const recommendation = String(result?.investorProfile?.recommendation || '').trim();
  const profile = getInvestorTypePlaybook(type);
  const investmentPlan = getInvestorTypeInvestmentPlan(type);
  const behavior = result?.behavior || {};
  const reasons = [];
  const habits = [];

  const avgTurnover = Number(behavior?.avgTurnover || 0);
  const avgConcentration = Number(behavior?.avgConcentrationHHI || 0);
  const avgCashRatio = Number(behavior?.avgCashRatio || 0);
  const maxDrawdown = Number(result?.maxDrawdown || 0);
  const vol = Number(result?.annualizedVolatility || 0);
  const rebalances = Number(behavior?.rebalancesCompleted || 0);
  const activeCode = code || getCubeCode(axisCodes.risk, axisCodes.control, axisCodes.reactivity);
  const riskLabel = String(axes?.risk || axisLabelFromCode('risk', axisCodes.risk));
  const controlLabel = String(axes?.control || axisLabelFromCode('control', axisCodes.control));
  const reactLabel = String(axes?.reactivity || axisLabelFromCode('reactivity', axisCodes.reactivity));

  if (isQuizAnalysis) {
    const riskPct = Number(result?.investorProfile?.axisScores?.riskAggressive || 50);
    const controlPct = Number(result?.investorProfile?.axisScores?.controlInternal || 50);
    const reactPct = Number(result?.investorProfile?.axisScores?.reactivityEmotional || 50);
    const strongestAxisLabel = String(result?.quizMeta?.strongestAxis || 'Risk');
    const strongestAxisPct = Number(result?.quizMeta?.strongestAxisPct || 50);
    const questionCount = Number(result?.quizMeta?.questionCount || 20);

    reasons.push(`Quiz source: ${questionCount} answers were used to classify your profile.`);
    reasons.push(`Axis outcome: ${[riskLabel, controlLabel, reactLabel].filter(Boolean).join(' | ')}.`);
    reasons.push(`Risk leaning scored ${Math.round(riskPct)}% toward Aggressive versus Conservative.`);
    reasons.push(`Control leaning scored ${Math.round(controlPct)}% toward Active versus Passive.`);
    reasons.push(`Reactivity leaning scored ${Math.round(reactPct)}% toward Emotional versus Rational.`);
    reasons.push(`Your strongest signal was on the ${strongestAxisLabel} axis (${Math.round(strongestAxisPct)}% away from neutral).`);

    habits.push(
      riskPct >= 60
        ? 'You show higher comfort with uncertainty and potential upside.'
        : riskPct <= 40
        ? 'You prioritize stability and downside protection.'
        : 'You balance upside interest with stability.'
    );
    habits.push(
      controlPct >= 60
        ? 'You prefer direct control and active decision-making.'
        : controlPct <= 40
        ? 'You prefer simpler structures and lower intervention.'
        : 'You alternate between active and passive approaches.'
    );
    habits.push(
      reactPct >= 60
        ? 'Short-term volatility is more likely to influence your choices.'
        : reactPct <= 40
        ? 'You tend to stay process-driven during stress.'
        : 'You show mixed emotional and analytical reactions.'
    );
    habits.push('Quiz-based habits reflect preference signals, not live trading behavior.');
    habits.push('Simulation analysis can complement this with real decision evidence.');
  } else {
    reasons.push(`Investor profile: ${[riskLabel, controlLabel, reactLabel].filter(Boolean).join(' | ')}.`);
    reasons.push(`Average turnover was ${toPercent(avgTurnover)}, signaling ${avgTurnover > 0.6 ? 'high trading activity' : avgTurnover < 0.25 ? 'disciplined low turnover' : 'moderate trading activity'}.`);
    reasons.push(`Average concentration (HHI) was ${avgConcentration.toFixed(3)}, indicating ${avgConcentration > 0.45 ? 'concentrated positioning' : avgConcentration < 0.3 ? 'broad diversification' : 'balanced concentration'}.`);
    reasons.push(`Average cash ratio stayed at ${toPercent(avgCashRatio)}, which ${avgCashRatio > 0.35 ? 'tilts defensive' : avgCashRatio < 0.12 ? 'keeps most capital deployed' : 'keeps moderate reserve cash'}.`);
    reasons.push(`Risk profile showed max drawdown ${toPercent(maxDrawdown)} and annualized volatility ${toPercent(vol)}.`);
    reasons.push(`You made ${rebalances} rebalance decisions during this simulation.`);

    habits.push(
      avgTurnover > 0.6
        ? 'You trade frequently and react fast to market moves.'
        : avgTurnover < 0.25
        ? 'You show patient, low-turnover behavior.'
        : 'You rebalance at a moderate pace without overtrading.'
    );
    habits.push(
      avgConcentration > 0.45
        ? 'You tend to concentrate into a few high-conviction positions.'
        : avgConcentration < 0.3
        ? 'You keep positions diversified across assets.'
        : 'You balance conviction and diversification.'
    );
    habits.push(
      avgCashRatio > 0.35
        ? 'You keep a meaningful cash buffer and prioritize downside protection.'
        : avgCashRatio < 0.12
        ? 'You stay mostly invested and accept market exposure.'
        : 'You maintain moderate cash flexibility while staying invested.'
    );
    habits.push(
      vol > 0.3 || maxDrawdown > 0.22
        ? 'Your risk pattern shows larger swings; position sizing discipline matters.'
        : 'Your risk pattern is relatively controlled compared to aggressive profiles.'
    );
    habits.push(
      rebalances >= 10
        ? 'You are highly engaged and review portfolio decisions often.'
        : rebalances <= 3
        ? 'You make fewer, broader allocation decisions.'
        : 'You maintain consistent decision discipline over time.'
    );
  }

  const forward = [
    ...profile.forward,
    recommendation ? recommendation : null
  ].filter(Boolean);

  if (investorTypeTitle) investorTypeTitle.textContent = `You are ${type}.`;
  if (investorTypeBadge) {
    const tone = getInvestorTone(type);
    investorTypeBadge.className = `investor-type-badge ${tone}`;
    investorTypeBadge.textContent = type;
  }
  if (investorTypeSummary) {
    investorTypeSummary.textContent =
      `${profile.summary} Your current axis mix is ${riskLabel}, ${controlLabel}, and ${reactLabel}. ` +
      `In practice, this means your decisions are most influenced by ${axisCodes.risk === 'A' ? 'upside-seeking risk appetite' : 'capital-protection priorities'}, ` +
      `${axisCodes.control === 'I' ? 'self-directed active calls' : 'passive structure and market-following behavior'}, and ` +
      `${axisCodes.reactivity === 'E' ? 'emotion-driven responses to volatility' : 'logic-first responses during stress'}.`;
  }
  if (investorAxisSummary) {
    investorAxisSummary.textContent =
      `This model uses 3 axes to explain behavior: Risk (Stomach), Control (Brain), and Reactivity (Heart). ` +
      `You are currently ${riskLabel} on risk, ${controlLabel} on control style, and ${reactLabel} on reactivity.`;
  }
  const resolvedAxisScores = setAxisGridScores(axisScores, axisCodes, {
    avgTurnover,
    avgConcentration,
    avgCashRatio,
    vol,
    maxDrawdown,
    rebalances
  });
  if (investorAxisChips) {
    const dot = (pct) => `${Math.max(0, Math.min(100, Number(pct || 0))).toFixed(1)}%`;
    const riskAgg = resolvedAxisScores.aggressive;
    const controlInt = resolvedAxisScores.internal;
    const reactEmo = resolvedAxisScores.emotional;
    investorAxisChips.innerHTML = [
      `<div class="investor-axis-chip"><strong>Risk Axis</strong> ${riskLabel}. ` +
        `${axisCodes.risk === 'A' ? 'You tolerate larger swings for higher upside.' : 'You prioritize steadier capital preservation.'} ` +
        `Evidence: vol ${toPercent(vol)}, max drawdown ${toPercent(maxDrawdown)}, cash ratio ${toPercent(avgCashRatio)}.` +
        `<div class="axis-chip-bar"><span>Conservative</span><div class="axis-chip-track"><div class="axis-chip-you" style="left:${dot(
          riskAgg
        )};">You</div><div class="axis-chip-dot" style="left:${dot(riskAgg)};"></div></div><span>Aggressive</span></div></div>`,
      `<div class="investor-axis-chip"><strong>Control Axis</strong> ${controlLabel}. ` +
        `${axisCodes.control === 'I' ? 'You prefer to actively direct decisions yourself.' : 'You rely more on passive structure and market drift.'} ` +
        `Evidence: turnover ${toPercent(avgTurnover)}, concentration HHI ${avgConcentration.toFixed(3)}.` +
        `<div class="axis-chip-bar"><span>Passive</span><div class="axis-chip-track"><div class="axis-chip-you" style="left:${dot(
          controlInt
        )};">You</div><div class="axis-chip-dot" style="left:${dot(controlInt)};"></div></div><span>Active</span></div></div>`,
      `<div class="investor-axis-chip"><strong>Reactivity Axis</strong> ${reactLabel}. ` +
        `${axisCodes.reactivity === 'E' ? 'Short-term volatility has stronger emotional impact on your decisions.' : 'You stay more analytical during drawdowns.'} ` +
        `Evidence: turnover ${toPercent(avgTurnover)} under drawdown ${toPercent(maxDrawdown)}.` +
        `<div class="axis-chip-bar"><span>Rational</span><div class="axis-chip-track"><div class="axis-chip-you" style="left:${dot(
          reactEmo
        )};">You</div><div class="axis-chip-dot" style="left:${dot(reactEmo)};"></div></div><span>Emotional</span></div></div>`
    ].join('');
  }
  if (investorCubeCode) investorCubeCode.textContent = `${riskLabel} | ${controlLabel} | ${reactLabel}`;
  if (investorWhyList) investorWhyList.innerHTML = reasons.map((x) => `<li>${escapeHtml(x)}</li>`).join('');
  if (investorHabitsList) investorHabitsList.innerHTML = habits.map((x) => `<li>${escapeHtml(x)}</li>`).join('');
  if (investorContextList) investorContextList.innerHTML = (profile.context || []).map((x) => `<li>${escapeHtml(x)}</li>`).join('');
  if (investorForwardList) investorForwardList.innerHTML = forward.map((x) => `<li>${escapeHtml(x)}</li>`).join('');
  if (investorBestFitList) {
    const bestFitOptions = Array.isArray(investmentPlan.bestFit) ? investmentPlan.bestFit.filter(Boolean) : [];
    const selectedBestFit = bestFitOptions.length ? bestFitOptions[0] : 'Vanguard Total Stock Market ETF (VTI).';
    const selectedWhy = String(investmentPlan.bestFitWhy || 'It aligns well with your investor profile.').trim();
    investorBestFitList.innerHTML =
      `<li><strong>${escapeHtml(selectedBestFit)}</strong><span class="best-fit-why">Why this fits: ${escapeHtml(selectedWhy)}</span></li>`;
  }
  if (investorPortfolioMixList) {
    investorPortfolioMixList.innerHTML = (investmentPlan.mix || []).map((x) => `<li>${escapeHtml(x)}</li>`).join('');
  }
  if (investorStrengthsList) {
    investorStrengthsList.innerHTML = (profile.strengths || []).map((x) => `<li>${escapeHtml(x)}</li>`).join('');
  }
  if (investorWeaknessesList) {
    investorWeaknessesList.innerHTML = (profile.weaknesses || []).map((x) => `<li>${escapeHtml(x)}</li>`).join('');
  }
  if (investorMbtiList) {
    // mbti suggestions are now driven entirely by the axis mix rather
    // than the fixed investor "type".  this keeps the list in sync
    // if the underlying axes values change for any reason.
    const dynamicMbti = getMbtiFromAxisCodes(axisCodes);
    const list = dynamicMbti.length ? dynamicMbti : (profile.mbti || []);
    renderMbtiSummaryList(list);
  }
  if (investorPopular) {
    investorPopular.innerHTML = (profile.popularInvestors || [])
      .map((x) => `<div class="investor-alike-item"><strong>${escapeHtml(x.label)}</strong><p>${escapeHtml(x.desc)}</p></div>`)
      .join('');
  }
}

function playInvestorTypeReveal(options = {}) {
  const titleBase = String(options.titleBase || 'You are a');
  const subtitle = String(options.subtitle || 'Analyzing your simulation behavior profile');
  const overlay = ensureStartTransitionOverlay();
  const titleEl = overlay.querySelector('.time-warp-title');
  const subEl = overlay.querySelector('.time-warp-sub');
  const trackEl = overlay.querySelector('.time-warp-track');
  const prevTitle = titleEl?.textContent || '';
  const prevSub = subEl?.textContent || '';
  const prevTrackDisplay = trackEl?.style.display || '';
  const fadeMs = 260;
  const totalMs = 2000;
  const dots = ['.', '..', '...', '.'];
  let dotIdx = 0;
  let dotsTimer = null;

  if (titleEl) titleEl.textContent = `${titleBase}${dots[dotIdx]}`;
  if (subEl) subEl.textContent = subtitle;
  if (trackEl) trackEl.style.display = '';
  dotsTimer = setInterval(() => {
    dotIdx = (dotIdx + 1) % dots.length;
    if (titleEl) titleEl.textContent = `${titleBase}${dots[dotIdx]}`;
  }, 260);
  overlay.classList.remove('hidden');
  requestAnimationFrame(() => overlay.classList.add('show'));

  return new Promise((resolve) => {
    setTimeout(() => {
      if (dotsTimer) {
        clearInterval(dotsTimer);
        dotsTimer = null;
      }
      overlay.classList.remove('show');
      setTimeout(() => {
        overlay.classList.add('hidden');
        if (titleEl) titleEl.textContent = prevTitle || 'Simulating Time...';
        if (subEl) subEl.textContent = prevSub || 'Loading market movement across your timeline';
        if (trackEl) trackEl.style.display = prevTrackDisplay;
        resolve();
      }, fadeMs);
    }, totalMs);
  });
}

function isEditableElement(target) {
  if (!target || !(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
}

function scrollToSimulationSection(key) {
  const map = {
    snapshot: periodPanel,
    adjustment: allocationRows,
    charts: simChartsSection,
    controls: simControlsSection
  };
  const el = map[key];
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getInitialCashInput() {
  return document.getElementById('simInitialCash');
}

function parseCashInput(value) {
  const raw = String(value ?? '').replace(/,/g, '').trim();
  const n = Number(raw);
  return Number.isFinite(n) ? n : 0;
}

function formatCashInputValue(value) {
  const n = Math.max(0, Math.round(Number(value || 0)));
  return n.toLocaleString('en-US');
}

function getInitialCashValue() {
  return parseCashInput(getInitialCashInput()?.value || 0);
}

function getSetupFeeRate() {
  return Math.max(0, Number(SETUP_TRADE_FEE_RATE || 0));
}

function estimateSetupFee(allocated) {
  return Math.max(0, Number(allocated || 0) * getSetupFeeRate());
}

function getSetupMaxInvestable(cash) {
  const c = Math.max(0, Number(cash || 0));
  const rate = getSetupFeeRate();
  return rate > 0 ? c / (1 + rate) : c;
}

function refreshSetupSummary() {
  if (!summarySettings || !summaryPortfolio || !summaryBenchmarks) return;
  const startDate = String(document.getElementById('simStartDate')?.value || '-');
  const endDate = String(document.getElementById('simEndDate')?.value || '-');
  const frequency = String(document.getElementById('simFrequency')?.value || '-');
  const cash = getInitialCashValue();
  if (setupSettingsPreview) setupSettingsPreview.textContent = `${startDate} -> ${endDate} | ${frequency} | ${toCurrency(cash)}`;

  const plan = getSetupAllocationPlan();
  const picks = selectedAssets.map((sym) => {
    const p = plan[sym] || { mode: 'dollars', value: 0 };
    const modeLabel = p.mode === 'units' ? 'units' : 'USD';
    return `${tokenToLabel(sym)} ${Number(p.value || 0).toFixed(2)} ${modeLabel}`;
  });
  const totalAllocated = roundCurrency(selectedAssets.reduce((sum, sym) => sum + getSetupAllocationDollars(sym, plan[sym]), 0));
  const estimatedFee = roundCurrency(estimateSetupFee(totalAllocated));
  const remainingCash = Math.max(0, roundCurrency(cash - totalAllocated - estimatedFee));
  if (setupPortfolioPreview) {
    setupPortfolioPreview.textContent = `${selectedAssets.length} assets | ${toCurrency(totalAllocated)} allocated | ${toCurrency(estimatedFee)} est. fee | ${toCurrency(remainingCash)} cash left`;
  }

  const bm = getSelectedBenchmarks().map((sym) => optionLabelForBenchmark(sym));
  if (setupBenchmarkPreview) {
    setupBenchmarkPreview.textContent = bm.length
      ? bm.join(', ')
      : 'No benchmarks selected.';
  }

  if (!setupSummaryReady) {
    summarySettings.textContent = '';
    summaryPortfolio.textContent = '';
    summaryBenchmarks.textContent = '';
    updateSetupChecks();
    return;
  }

  summarySettings.textContent = `${startDate} to ${endDate} | ${frequency} | ${toCurrency(cash)}`;
  summaryPortfolio.textContent = picks.length ? picks.join(' | ') : 'No portfolio assets selected.';
  summaryBenchmarks.textContent = bm.length ? bm.join(' | ') : 'No benchmarks selected.';
  updateSetupChecks();
}

function setSetupStepIndicator(stage) {
  const steps = [setupStep1, setupStep2, setupStep3];
  steps.forEach((el) => {
    el?.classList.remove('active', 'completed');
  });
  if (stage === 'settings') {
    setupStep1?.classList.add('active');
    return;
  }
  if (stage === 'portfolio') {
    setupStep1?.classList.add('completed');
    setupStep2?.classList.add('active');
    return;
  }
  if (stage === 'benchmark') {
    setupStep1?.classList.add('completed');
    setupStep2?.classList.add('completed');
    setupStep3?.classList.add('active');
    return;
  }
  setupStep1?.classList.add('completed');
  setupStep2?.classList.add('completed');
  setupStep3?.classList.add('completed');
}

function setSetupStage(nextStage) {
  const allowed = new Set(['settings', 'portfolio', 'benchmark', 'summary']);
  let stage = allowed.has(nextStage) ? nextStage : 'settings';
  if ((stage === 'portfolio' || stage === 'benchmark' || stage === 'summary') && !isSettingsComplete()) {
    printError('Complete Simulation Settings before moving to the next stage.');
    stage = 'settings';
  }
  if ((stage === 'benchmark' || stage === 'summary') && !isPortfolioComplete()) {
    printError('Complete Create Portfolio before moving to the next stage.');
    stage = 'portfolio';
  }
  setupStage = stage;
  const cards = [
    ['settings', setupCardSettings],
    ['portfolio', setupCardPortfolio],
    ['benchmark', setupCardBenchmark],
    ['summary', setupCardSummary]
  ];
  cards.forEach(([key, card]) => {
    card?.classList.toggle('expanded', key === stage);
  });
  setSetupStepIndicator(stage);
  updateSetupChecks();
  if (stage === 'summary') refreshSetupSummary();
}

function renderCashFloat(cashAmount = 0, portfolioValue = 0) {
  const cashValues = document.querySelectorAll('[data-panel-cash]');
  const cashPcts = document.querySelectorAll('[data-panel-cash-pct]');
  if (!cashValues.length && !cashPcts.length) return;

  const cash = Math.max(0, Number(cashAmount || 0));
  const total = Math.max(0, Number(portfolioValue || 0));
  const pct = total > 0 ? Math.max(0, Math.min(1, cash / total)) : 0;
  cashValues.forEach((el) => {
    el.textContent = toCurrency(cash);
  });
  cashPcts.forEach((el) => {
    el.textContent = `${(pct * 100).toFixed(2)}% of portfolio`;
  });
}

function renderActionCashBar(cashAmount = 0, portfolioValue = 0) {
  if (!actionCashValue || !actionCashFill) return;
  const cash = Math.max(0, Number(cashAmount || 0));
  const total = Math.max(0, Number(portfolioValue || 0));
  const pct = total > 0 ? Math.max(0, Math.min(1, cash / total)) : 0;
  actionCashValue.textContent = `${toCurrency(cash)} (${(pct * 100).toFixed(2)}%)`;
  actionCashFill.style.width = `${(pct * 100).toFixed(2)}%`;
}

function renderActionTimeBar(percent = 0) {
  if (!actionTimeFill) return;
  const pct = Math.max(0, Math.min(100, Number(percent || 0)));
  actionTimeFill.style.width = `${pct.toFixed(2)}%`;
}

function getRemainingTargetCash() {
  const total = Math.max(0, Number(previewState.portfolioValue || 0));
  const targets = collectTargets();
  const used = Object.values(targets).reduce((sum, entry) => sum + Math.max(0, Number(entry?.value || 0)), 0);
  return Math.max(0, total - used);
}

function ensureTradeAmountModal() {
  if (tradeAmountModal) return tradeAmountModal;

  const backdrop = document.createElement('div');
  backdrop.className = 'trade-modal-backdrop hidden';
  backdrop.innerHTML = `
    <div class="trade-modal" role="dialog" aria-modal="true" aria-labelledby="tradeModalTitle">
      <h4 id="tradeModalTitle">Adjust Amount</h4>
      <div class="trade-modal-metrics">
        <div class="trade-metric">
          <span>Cash On Hand</span>
          <strong data-modal-cash>$0.00</strong>
        </div>
        <div class="trade-metric">
          <span>Current Value</span>
          <strong data-modal-current>$0.00</strong>
        </div>
        <div class="trade-metric">
          <span>Planned Value</span>
          <strong data-modal-target>$0.00</strong>
        </div>
      </div>
      <label>
        Amount
        <div class="trade-amount-row">
          <input data-modal-input type="number" min="0" step="1" value="0" />
          <select data-modal-mode aria-label="Amount mode">
            <option value="dollars">USD</option>
            <option value="units">Units</option>
          </select>
        </div>
        <div class="trade-unit-inline" data-modal-unit-inline>Unit Price: -</div>
      </label>
      <div class="trade-modal-actions">
        <button type="button" class="ghost" data-modal-cancel>Cancel</button>
        <button type="button" class="ghost hidden" data-modal-sell-all>Sell All</button>
        <button type="button" data-modal-confirm>Apply</button>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);
  const input = backdrop.querySelector('[data-modal-input]');
  const modeSelect = backdrop.querySelector('[data-modal-mode]');
  const cashMetric = backdrop.querySelector('[data-modal-cash]');
  const currentMetric = backdrop.querySelector('[data-modal-current]');
  const targetMetric = backdrop.querySelector('[data-modal-target]');
  const unitPriceInline = backdrop.querySelector('[data-modal-unit-inline]');
  const cancel = backdrop.querySelector('[data-modal-cancel]');
  const sellAll = backdrop.querySelector('[data-modal-sell-all]');
  const confirm = backdrop.querySelector('[data-modal-confirm]');
  let current = {
    max: 0,
    maxUnits: null,
    unitPrice: null,
    mode: 'dollars',
    supportsUnits: false,
    apply: null,
    title: 'Adjust Amount',
    action: 'buy',
    baseTargetValue: 0
  };

  const round2 = (v) => Math.round(Number(v || 0) * 100) / 100;

  const clampToMax = () => {
    const mode = String(modeSelect?.value || 'dollars');
    const maxForMode = mode === 'units' && Number.isFinite(current.maxUnits) ? Number(current.maxUnits) : Number(current.max || 0);
    const raw = Number(input?.value || 0);
    const safe = Math.max(0, Math.min(Number.isFinite(raw) ? raw : 0, Math.max(0, maxForMode)));
    const rounded = round2(safe);
    if (input) input.value = rounded.toFixed(2);
    return rounded;
  };

  const getModeMax = () => {
    const mode = String(modeSelect?.value || 'dollars');
    return mode === 'units' && Number.isFinite(current.maxUnits) ? Number(current.maxUnits) : Number(current.max || 0);
  };

  const setDefaultAmountForMode = (mode) => {
    if (!input) return;
    const unitPrice = Math.max(0, Number(current.unitPrice || 0));
    const desired = mode === 'units' ? 1 : unitPrice > 0 ? unitPrice : 100;
    input.value = Number(desired).toFixed(2);
    clampToMax();
  };

  const getAmountAsDollars = () => {
    const amount = clampToMax();
    const mode = String(modeSelect?.value || 'dollars');
    const unitPrice = Number(current.unitPrice || 0);
    return mode === 'units' ? amount * unitPrice : amount;
  };

  const updateLiveTargetMetric = () => {
    if (!targetMetric) return;
    const base = Math.max(0, Number(current.baseTargetValue || 0));
    const dollars = Math.max(0, Number(getAmountAsDollars() || 0));
    const action = String(current.action || 'buy').toLowerCase();
    const projected = action === 'sell' ? Math.max(0, base - dollars) : base + dollars;
    targetMetric.textContent = toCurrency(projected);
  };

  const updateModeView = () => {
    const mode = String(modeSelect?.value || 'dollars');
    if (input) {
      const unitPrice = Math.max(0, Number(current.unitPrice || 0));
      const dollarStep = unitPrice > 0 ? Math.max(0.01, round2(unitPrice)) : 0.01;
      input.step = mode === 'units' ? '1' : String(dollarStep);
    }
    setDefaultAmountForMode(mode);
    updateLiveTargetMetric();
  };

  const close = () => {
    backdrop.classList.add('hidden');
    document.body.classList.remove('modal-open');
  };

  const open = (options) => {
    current = { ...current, ...options };
    const max = Math.max(0, Number(current.max || 0));
    const maxUnits = Number.isFinite(current.maxUnits) ? Math.max(0, Number(current.maxUnits)) : null;
    const title = current.title || 'Adjust Amount';
    const applyLabel = current.confirmLabel || 'Apply';
    const supportsUnits = !!current.supportsUnits && Number.isFinite(maxUnits) && maxUnits > 0;
    const isSell = String(current.action || 'buy').toLowerCase() === 'sell';

    const titleEl = backdrop.querySelector('#tradeModalTitle');
    if (titleEl) titleEl.textContent = title;
    if (confirm) confirm.textContent = applyLabel;
    if (sellAll) sellAll.classList.toggle('hidden', !(isSell && max > 0));
    if (modeSelect) modeSelect.classList.toggle('hidden', !supportsUnits);
    if (modeSelect) modeSelect.value = supportsUnits ? String(current.mode || 'dollars') : 'dollars';
    if (cashMetric) cashMetric.textContent = toCurrency(Number(current.cash || 0));
    if (currentMetric) currentMetric.textContent = toCurrency(Number(current.currentValue || 0));
    if (targetMetric) targetMetric.textContent = toCurrency(Number(current.targetValue || 0));
    if (unitPriceInline) {
      const p = Number(current.unitPrice || 0);
      unitPriceInline.textContent = p > 0 ? `Unit Price: ${toCurrency(p)} / unit` : 'Unit Price: -';
    }
    if (input) {
      const unitPrice = Math.max(0, Number(current.unitPrice || 0));
      input.value = modeSelect?.value === 'units' ? '1.00' : Number(unitPrice > 0 ? unitPrice : 100).toFixed(2);
      input.max = String(max);
      input.step = '0.01';
    }
    current.maxUnits = maxUnits;
    current.supportsUnits = supportsUnits;
    updateModeView();

    backdrop.classList.remove('hidden');
    document.body.classList.add('modal-open');
    setTimeout(() => {
      input?.focus();
      input?.select?.();
    }, 0);
  };

  input?.addEventListener('input', () => {
    clampToMax();
    updateLiveTargetMetric();
  });
  modeSelect?.addEventListener('change', updateModeView);
  cancel?.addEventListener('click', close);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });
  document.addEventListener('keydown', (e) => {
    if (!backdrop.classList.contains('hidden') && e.key === 'Escape') close();
  });
  confirm?.addEventListener('click', () => {
    const amount = clampToMax();
    if (!(amount > 0)) {
      close();
      return;
    }
    const mode = String(modeSelect?.value || 'dollars');
    const unitPrice = Number(current.unitPrice || 0);
    const units = mode === 'units' ? amount : unitPrice > 0 ? amount / unitPrice : null;
    const dollars = mode === 'units' ? amount * unitPrice : amount;
    if (typeof current.apply === 'function') current.apply({ dollars, units, mode });
    close();
  });
  sellAll?.addEventListener('click', () => {
    const maxForMode = Math.max(0, Number(getModeMax() || 0));
    if (!input) return;
    input.value = round2(maxForMode).toFixed(2);
    clampToMax();
    updateLiveTargetMetric();
  });

  tradeAmountModal = { open, close };
  return tradeAmountModal;
}

function updateAutoPlayButton() {
  if (!autoPlayBtn) return;
  const running = !!autoPlayTimer;
  autoPlayBtn.textContent = running ? 'Pause' : 'Automate';
  autoPlayBtn.classList.toggle('active', running);
  if (simulationState?.nextRebalanceDate) {
    rebalanceBtn.disabled = running;
    if (executeTradeBtn) executeTradeBtn.disabled = running;
  }
}

function setReplayStatus(text) {
  if (replayStatusLabel) replayStatusLabel.textContent = text;
}

function parseDateToUtcMs(dateStr) {
  return Date.parse(`${String(dateStr)}T00:00:00Z`);
}

function toIsoDateUtc(ms) {
  return new Date(ms).toISOString().slice(0, 10);
}

function getReplayRatio() {
  if (!(replayEndSimMs > replayStartSimMs)) return 0;
  const current = Math.max(replayStartSimMs, Math.min(replayEndSimMs, replayCurrentTs || replayStartSimMs));
  return (current - replayStartSimMs) / (replayEndSimMs - replayStartSimMs);
}

function renderReplayChartProgress() {
  if (!simulationState?.simulationId || timeflowDailyCache.length < 2) return;
  const mode = String(fluctuationView?.value || (simulationState?.frequency === 'weekly' ? 'weekly' : 'daily'));
  const toWeekly = (series) => {
    const buckets = new Map();
    (series || []).forEach((p) => {
      const d = new Date(String(p.date) + 'T00:00:00Z');
      const day = d.getUTCDay();
      const mondayOffset = day === 0 ? -6 : 1 - day;
      const monday = new Date(d.getTime() + mondayOffset * 24 * 60 * 60 * 1000);
      const key = monday.toISOString().slice(0, 10);
      buckets.set(key, { date: p.date, value: p.value });
    });
    return [...buckets.values()].sort((a, b) => (a.date < b.date ? -1 : 1));
  };
  const toMonthly = (series) => {
    const buckets = new Map();
    (series || []).forEach((p) => {
      const d = new Date(String(p.date) + 'T00:00:00Z');
      const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
      buckets.set(key, { date: p.date, value: p.value });
    });
    return [...buckets.values()].sort((a, b) => (a.date < b.date ? -1 : 1));
  };

  const currentDate = previewState?.date || toIsoDateUtc(replayCurrentTs || replayStartSimMs || Date.now());
  const base = mode === 'weekly'
    ? toWeekly(timeflowDailyCache)
    : mode === 'monthly'
    ? toMonthly(timeflowDailyCache)
    : timeflowDailyCache;
  const series = base.filter((p) => p.date <= currentDate);

  if (!series.length) {
    drawLineChart(timeflowChart, [{ date: currentDate, value: previewState.portfolioValue || 0 }, { date: currentDate, value: previewState.portfolioValue || 0 }]);
    return;
  }
  const next = [...series];
  const last = next[next.length - 1];
  if (last.date === currentDate) {
    last.value = Number(previewState.portfolioValue || last.value || 0);
  } else {
    next.push({ date: currentDate, value: Number(previewState.portfolioValue || 0) });
  }
  if (next.length < 2) next.push({ ...next[0] });
  drawLineChart(timeflowChart, next);
}

function stopReplay(silent = false) {
  if (replayTimer) {
    clearInterval(replayTimer);
    replayTimer = null;
  }
  if (replayToggleBtn) replayToggleBtn.textContent = 'Start Real-Time Replay';
  if (!silent) setReplayStatus('Replay: paused');
  renderTimeflow();
}

function interpolateReplayPrices(targetTs) {
  if (!replayFrames.length) return null;
  if (targetTs <= replayFrames[0].ts) return replayFrames[0];
  const tail = replayFrames[replayFrames.length - 1];
  if (targetTs >= tail.ts) return tail;

  let lo = 0;
  let hi = replayFrames.length - 1;
  while (lo + 1 < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (replayFrames[mid].ts <= targetTs) lo = mid;
    else hi = mid;
  }

  const left = replayFrames[lo];
  const right = replayFrames[hi];
  const span = Math.max(1, right.ts - left.ts);
  const t = Math.max(0, Math.min(1, (targetTs - left.ts) / span));
  const symbols = simulationState?.symbols || Object.keys({ ...(left.prices || {}), ...(right.prices || {}) });
  const prices = {};
  symbols.forEach((symbol) => {
    const l = Number(left.prices?.[symbol] ?? 0);
    const r = Number(right.prices?.[symbol] ?? l);
    prices[symbol] = l + (r - l) * t;
  });

  return { date: toIsoDateUtc(targetTs), prices };
}

function applyReplayTimestamp(targetTs) {
  if (!simulationState || !replayFrames.length) return;
  const frame = interpolateReplayPrices(targetTs);
  if (!frame) return;
  replayCurrentTs = Math.max(replayStartSimMs, Math.min(replayEndSimMs, targetTs));
  const prices = frame.prices || {};
  const holdings = simulationState.holdings || {};
  const cash = Number(simulationState.cash || 0);
  let total = cash;
  Object.entries(holdings).forEach(([symbol, qty]) => {
    total += Number(qty || 0) * Number(prices[symbol] || 0);
  });
  previewState = {
    portfolioValue: total,
    prices,
    date: frame.date || previewState.date || toIsoDateUtc(replayCurrentTs)
  };
  updateBudgetPreview();
  renderActionCashBar(cash, total);
  renderTimeflow();
  renderReplayChartProgress();
  const pct = (getReplayRatio() * 100).toFixed(2);
  setReplayStatus(`Replay: ${previewState.date || '-'} (${pct}%)`);
}

function startReplay() {
  if (!simulationState || replayFrames.length < 2) return;
  if (replayTimer) return;

  stopAutoPlay(true);
  if (replayElapsedMs >= replayDurationMs) replayElapsedMs = 0;
  replayStartPerfMs = performance.now() - replayElapsedMs;
  if (replayToggleBtn) replayToggleBtn.textContent = 'Pause Replay';

  const tick = () => {
    const elapsed = Math.max(0, performance.now() - replayStartPerfMs);
    replayElapsedMs = Math.min(replayDurationMs, elapsed);
    const ratio = replayDurationMs > 0 ? replayElapsedMs / replayDurationMs : 1;
    const targetTs = replayStartSimMs + (replayEndSimMs - replayStartSimMs) * ratio;
    applyReplayTimestamp(targetTs);

    if (ratio >= 1) {
      stopReplay(true);
      setReplayStatus(`Replay complete: ${toIsoDateUtc(replayEndSimMs)}`);
    }
  };

  tick();
  replayTimer = setInterval(tick, 1000);
}

async function loadReplayFrames() {
  if (!simulationState?.simulationId) {
    replayFrames = [];
    replayElapsedMs = 0;
    replayCurrentTs = 0;
    replayStartSimMs = 0;
    replayEndSimMs = 0;
    stopReplay(true);
    setReplayStatus('Replay: paused');
    renderTimeflow();
    return;
  }
  try {
    const data = await apiGet(`/api/simulations/${simulationState.simulationId}/replay`);
    replayFrames = (Array.isArray(data?.frames) ? data.frames : [])
      .map((f) => {
        const ts = parseDateToUtcMs(f.date);
        return Number.isFinite(ts) ? { ...f, ts } : null;
      })
      .filter(Boolean)
      .sort((a, b) => a.ts - b.ts);
    replayStartSimMs = replayFrames[0]?.ts || parseDateToUtcMs(simulationState.startDate);
    replayEndSimMs = replayFrames[replayFrames.length - 1]?.ts || parseDateToUtcMs(simulationState.endDate);
    replayCurrentTs = replayStartSimMs || 0;
    replayElapsedMs = 0;
    stopReplay(true);
    if (replayFrames.length) applyReplayTimestamp(replayStartSimMs);
    const start = replayFrames[0]?.date || simulationState.startDate || '-';
    const end = replayFrames[replayFrames.length - 1]?.date || simulationState.endDate || '-';
    setReplayStatus(`Replay: paused (${start} to ${end})`);
    if (replayToggleBtn) replayToggleBtn.disabled = replayFrames.length < 2;
  } catch (_error) {
    replayFrames = [];
    replayElapsedMs = 0;
    replayCurrentTs = 0;
    replayStartSimMs = 0;
    replayEndSimMs = 0;
    setReplayStatus('Replay unavailable');
    if (replayToggleBtn) replayToggleBtn.disabled = true;
  }
}

function stopAutoPlay(silent = false) {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
  autoPlayBusy = false;
  updateAutoPlayButton();
  if (!silent) printOutput({ message: 'Auto simulation paused.' });
}

function formatPeriodCountdown(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function renderPeriodDecisionTimer(msLeft, active = false) {
  if (!periodDecisionTimer) return;
  const text = active ? `Period timer: ${formatPeriodCountdown(msLeft)}` : 'Period timer: --:--';
  periodDecisionTimer.textContent = text;
  periodDecisionTimer.classList.toggle('critical', active && msLeft <= 15000);
}

function stopPeriodDecisionTimer(resetDisplay = true) {
  if (periodDecisionTimerId) {
    clearInterval(periodDecisionTimerId);
    periodDecisionTimerId = null;
  }
  periodDecisionDeadlineMs = 0;
  periodDecisionPeriodKey = '';
  if (resetDisplay) renderPeriodDecisionTimer(0, false);
}

function getPeriodDecisionKey() {
  if (!simulationState) return '';
  return `${simulationState.simulationId || ''}:${simulationState.stepIndex || 0}:${simulationState.nextRebalanceDate || ''}`;
}

async function handlePeriodDecisionTimeout() {
  if (periodDecisionAdvanceBusy || !simulationState || !hasRemainingSteps()) return;
  periodDecisionAdvanceBusy = true;
  try {
    printOutput({ message: 'Decision time expired. Advancing to next period.' });
    pushTimeflowEvent(`Decision time expired at step ${(simulationState.stepIndex || 0) + 1}. Advanced automatically.`);
    await advanceSimulationPeriod(true);
  } catch (error) {
    printError(error.message);
  } finally {
    periodDecisionAdvanceBusy = false;
  }
}

function tickPeriodDecisionTimer() {
  if (!simulationState || !hasRemainingSteps()) {
    stopPeriodDecisionTimer(true);
    return;
  }
  const msLeft = Math.max(0, periodDecisionDeadlineMs - Date.now());
  renderPeriodDecisionTimer(msLeft, true);
  if (msLeft <= 0) {
    stopPeriodDecisionTimer(false);
    handlePeriodDecisionTimeout().catch(() => {});
  }
}

function syncPeriodDecisionTimer() {
  if (!simulationState || !hasRemainingSteps()) {
    stopPeriodDecisionTimer(true);
    return;
  }
  const nextKey = getPeriodDecisionKey();
  if (periodDecisionPeriodKey !== nextKey || periodDecisionDeadlineMs <= 0) {
    periodDecisionPeriodKey = nextKey;
    periodDecisionDeadlineMs = Date.now() + PERIOD_DECISION_LIMIT_MS;
  }
  if (!periodDecisionTimerId) {
    periodDecisionTimerId = setInterval(tickPeriodDecisionTimer, 250);
  }
  tickPeriodDecisionTimer();
}

function hasReachedEndDate() {
  if (!simulationState) return false;
  const total = Math.max(1, Number(simulationState.totalSteps || 1));
  const completed = Math.max(0, Number(simulationState.stepIndex || 0));
  if (completed >= total) return true;
  return !simulationState.nextRebalanceDate;
}

function hasRemainingSteps() {
  if (!simulationState) return false;
  const total = Math.max(1, Number(simulationState.totalSteps || 1));
  const completed = Math.max(0, Number(simulationState.stepIndex || 0));
  return !!simulationState.nextRebalanceDate && completed < total;
}

async function advanceSimulationPeriod(fromAuto = false) {
  if (!simulationState || autoPlayBusy) return false;
  if (!hasRemainingSteps()) {
    if (fromAuto) stopAutoPlay(true);
    return false;
  }

  autoPlayBusy = true;
  try {
    const targets = collectTargets();
    const budget = updateBudgetPreview();
    if (budget.isOver) {
      throw new Error('Total target value cannot exceed current portfolio value.');
    }

    const result = await postRebalanceWithBudgetGuard(simulationState.simulationId, targets);

    simulationState.cash = Number(result.cash ?? simulationState.cash ?? 0);
    if (result.holdings && typeof result.holdings === 'object') simulationState.holdings = result.holdings;
    if (result.costBasis && typeof result.costBasis === 'object') simulationState.costBasis = result.costBasis;
    if (result.firstBuyPrice && typeof result.firstBuyPrice === 'object') simulationState.firstBuyPrice = result.firstBuyPrice;
    if (result.realizedProfit && typeof result.realizedProfit === 'object') simulationState.realizedProfit = result.realizedProfit;
    if (Array.isArray(result.symbols)) simulationState.symbols = result.symbols;
    if (Array.isArray(result.assets)) {
      simulationState.assets = result.assets;
      syncAllocationRowsWithAssets(result.assets);
      populateTradeSymbols();
    }
    simulationState.nextRebalanceDate = result.nextRebalanceDate;
    if (result.nextPreview) applyPreview(result.nextPreview);
    renderPeriodInsights(result.nextPreviewInsights || null);
    resetRowTargetsToCurrentHoldings();
    updateBudgetPreview();
    simulationState.stepIndex = result.stepIndex;
    simulationState.totalSteps = result.totalSteps;
    updateSimPanel();
    await updateTimeflowComparisonChart();
    const hop = simulationState.frequency === 'daily' ? '1 day' : simulationState.frequency === 'weekly' ? '1 week' : '1 month';
    pushTimeflowEvent(`Advanced ${hop} to ${result.nextRebalanceDate || simulationState.endDate}.`);

    if (!fromAuto) {
      printOutput({
        message: 'Rebalance submitted.',
        date: result.date,
        budgetUsed: toCurrency(result.budgetUsed),
        budgetUsedRatio: toPercent(result.budgetUsedRatio),
        portfolioValueAfterTrade: toCurrency(result.portfolioValue),
        cash: toCurrency(result.cash),
        turnover: toPercent(result.turnover),
        nextRebalanceDate: result.nextRebalanceDate
      });
    }

    if (!result.nextRebalanceDate) {
      if (fromAuto) printOutput({ message: 'Auto simulation reached final period. Click Skip to Result.' });
      stopAutoPlay(true);
    }
    return true;
  } finally {
    autoPlayBusy = false;
  }
}

function startAutoPlay() {
  if (!simulationState) return;
  if (!hasRemainingSteps()) {
    printError('No remaining periods. Click Skip to Result.');
    return;
  }
  if (autoPlayTimer) return;

  autoPlayTimer = setInterval(async () => {
    if (autoPlayBusy) return;
    try {
      await advanceSimulationPeriod(true);
    } catch (error) {
      stopAutoPlay(true);
      printError(error.message);
    }
  }, autoPlayDelayMs);
  updateAutoPlayButton();
  printOutput({ message: 'Auto simulation started. Press Pause to stop.' });
}

function toPercent(v) {
  const n = Number(v || 0);
  const safe = Math.abs(n) < 0.00005 ? 0 : n;
  return `${(safe * 100).toFixed(2)}%`;
}

function toCurrency(v) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(v);
}

function roundCurrency(v) {
  return Math.round(Number(v || 0) * 100) / 100;
}

function toSignedPercent(v) {
  if (!Number.isFinite(v)) return 'N/A';
  if (Math.abs(v) < 1e-10) return toPercent(0);
  return `${v > 0 ? '+' : '-'}${toPercent(Math.abs(v))}`;
}

function escapeHtml(raw) {
  return String(raw || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeToken(token) {
  return String(token || '').trim().toUpperCase();
}

function toTitleFromKey(key) {
  return String(key || '')
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .trim()
    .replace(/^./, (c) => c.toUpperCase());
}

function setCommentaryStatus(text, isError = false) {
  if (!commentaryStatus) return;
  commentaryStatus.textContent = text || '';
  commentaryStatus.classList.toggle('error', !!isError);
}

function setMovementCommentary(lead, points = []) {
  if (commentaryLead) commentaryLead.textContent = lead || 'Portfolio commentary will appear here.';
  if (!commentaryList) return;
  commentaryList.innerHTML = (points || [])
    .filter(Boolean)
    .map((line) => `<div class="commentary-item">${escapeHtml(line)}</div>`)
    .join('');
}

function setBriefingSearchStatus(text, isError = false) {
  if (!briefingSearchStatus) return;
  briefingSearchStatus.textContent = text || '';
  briefingSearchStatus.classList.toggle('error', !!isError);
}

function clearBriefingSearchResults() {
  if (briefingSearchResults) briefingSearchResults.innerHTML = '';
}

function renderBriefingSearchResults(result) {
  if (!briefingSearchResults) return;
  if (!result || !result.asset) {
    briefingSearchResults.innerHTML = '';
    return;
  }

  const asset = result.asset;
  const lines = [];
  lines.push(
    `${asset.symbol}: period ${toSignedPercent(Number(asset.periodReturn || 0))}, latest daily ${toSignedPercent(
      Number(asset.dailyReturn || 0)
    )}.`
  );
  if (asset.earningsDate) lines.push(`Earnings timing: around ${asset.earningsDate}.`);
  if (asset.latestDividend?.date && Number(asset.latestDividend?.amount) > 0) {
    lines.push(`Latest dividend: ${toCurrency(Number(asset.latestDividend.amount || 0))} on ${asset.latestDividend.date}.`);
  }
  if (asset.inPortfolio) {
    lines.push(
      `In your portfolio now: ${Number(asset.quantity || 0).toFixed(4)} units, ${toCurrency(Number(asset.value || 0))} (${toPercent(
        Number(asset.weight || 0)
      )} weight).`
    );
  } else {
    lines.push('Not currently in your portfolio.');
  }

  const news = Array.isArray(asset.headlines) ? asset.headlines.slice(0, 3) : [];
  const newsHtml = news.length
    ? news
        .map((h) => {
          const meta = [h.publisher, h.date].filter(Boolean).join(' | ');
          return `<div class="briefing-search-item news"><span>${escapeHtml(h.title || '')}</span>${
            meta ? `<small>${escapeHtml(meta)}</small>` : ''
          }</div>`;
        })
        .join('')
    : '<div class="briefing-search-item">No matching headlines were returned for this period.</div>';

  briefingSearchResults.innerHTML = `
    <div class="briefing-search-head">
      <strong>${escapeHtml(asset.displayName || asset.symbol)}</strong>
      <span>${escapeHtml(asset.symbol || '')}</span>
    </div>
    ${lines.map((line) => `<div class="briefing-search-item">${escapeHtml(line)}</div>`).join('')}
    ${newsHtml}
  `;
}

async function runBriefingSearch() {
  if (!simulationState?.simulationId) {
    setBriefingSearchStatus('Start a simulation first to use market intel search.', true);
    return;
  }
  const query = String(briefingSearchInput?.value || '').trim();
  if (!query) {
    setBriefingSearchStatus('Enter a symbol or company name (example: AAPL or Microsoft).', true);
    clearBriefingSearchResults();
    return;
  }
  const reqId = ++marketSearchReqSeq;
  if (briefingSearchBtn) briefingSearchBtn.disabled = true;
  setBriefingSearchStatus(`Searching market intel for "${query}"...`, false);

  const activeDate = String(latestInsights?.date || simulationState?.nextRebalanceDate || simulationState?.endDate || '');
  const sinceDate = String(latestInsights?.sinceDate || simulationState?.startDate || '');

  try {
    const result = await apiPost(`/api/simulations/${simulationState.simulationId}/market-search`, {
      query,
      date: activeDate,
      sinceDate
    });
    if (reqId !== marketSearchReqSeq) return;
    renderBriefingSearchResults(result);
    setBriefingSearchStatus(`Search result for "${result.asset?.symbol || query}" loaded.`, false);
  } catch (error) {
    if (reqId !== marketSearchReqSeq) return;
    clearBriefingSearchResults();
    setBriefingSearchStatus(`Search unavailable: ${error.message}`, true);
  } finally {
    if (reqId === marketSearchReqSeq && briefingSearchBtn) briefingSearchBtn.disabled = false;
  }
}

function printOutput(obj) {
  if (obj == null) return;
  if (typeof obj === 'string') {
    setCommentaryStatus(obj, false);
    showToast(obj, 'info');
    return;
  }
  const message = obj.message || 'Update received.';
  const details = Object.entries(obj)
    .filter(([k]) => k !== 'message')
    .slice(0, 2)
    .map(([k, v]) =>
      `${toTitleFromKey(k)}: ${
        typeof v === 'number'
          ? Number(v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
          : String(v)
      }`
    );
  setCommentaryStatus(details.length ? `${message} ${details.join(' | ')}` : message, false);
  showToast(message, 'info');
}

function printError(message) {
  setCommentaryStatus(`Error: ${message}`, true);
  showToast(`Error: ${message}`, 'error');
}

function getPointAtOrBefore(points, date) {
  const rows = Array.isArray(points) ? points : [];
  const d = String(date || '');
  if (!d) return null;
  let chosen = null;
  for (const row of rows) {
    const rd = String(row?.date || '');
    if (!rd || rd > d) continue;
    chosen = row;
  }
  return chosen;
}

function buildBenchmarkMarketContext(insights) {
  const rows = Array.isArray(timeflowBenchmarkDailyCache) ? timeflowBenchmarkDailyCache : [];
  const endDate = String(insights?.date || '');
  const startDate = String(insights?.sinceDate || '');
  if (!rows.length || !endDate) return null;

  const withReturns = rows
    .map((b) => {
      const points = Array.isArray(b?.timeline) ? b.timeline : [];
      const endPt = getPointAtOrBefore(points, endDate);
      const startPt = getPointAtOrBefore(points, startDate) || points[0];
      const ret =
        startPt && endPt && Number(startPt.value || 0) > 0
          ? Number(endPt.value || 0) / Number(startPt.value || 0) - 1
          : null;
      return { symbol: String(b?.symbol || ''), ret };
    })
    .filter((x) => x.symbol && Number.isFinite(x.ret));

  if (!withReturns.length) return null;
  withReturns.sort((a, b) => Number(b.ret) - Number(a.ret));
  const avg = withReturns.reduce((s, x) => s + Number(x.ret), 0) / withReturns.length;
  const top = withReturns[0];
  const bottom = withReturns[withReturns.length - 1];
  return { avg, top, bottom, rows: withReturns };
}

function buildMovementCommentary(insights, prevInsights = null) {
  if (!insights) {
    commentaryBaseLead = 'Start a simulation to see plain-language explanations for portfolio changes.';
    commentaryBasePoints = [];
    setMovementCommentary('Start a simulation to see plain-language explanations for portfolio changes.', []);
    return;
  }

  const periodReturn = Number(insights.periodReturn || 0);
  const startValue = Number(insights.referenceValue || 0);
  const endValue = Number(insights.portfolioValue || 0);
  const dir = periodReturn > 0 ? 'up' : periodReturn < 0 ? 'down' : 'flat';
  const lead = `Since ${insights.sinceDate || 'start'}, your portfolio is ${dir} ${Math.abs(periodReturn * 100).toFixed(2)}% (${toCurrency(startValue)} to ${toCurrency(endValue)}).`;

  const points = [];
  const holdings = [...(insights.holdings || [])].filter((h) => Number(h.value || 0) > 0);
  const topByValue = holdings.slice().sort((a, b) => (b.value || 0) - (a.value || 0)).slice(0, 2);
  if (topByValue.length) {
    points.push(`Largest exposures right now: ${topByValue.map((h) => `${h.symbol} (${toPercent(h.weight || 0)})`).join(', ')}.`);
  }

  const cash = Number(insights.cash || 0);
  const cashRatioRaw = endValue > 0 ? cash / endValue : 0;
  const cashRatio = Math.abs(cashRatioRaw) < 0.00005 ? 0 : cashRatioRaw;
  if (cashRatio > 0.3) {
    points.push(`Cash is ${toPercent(cashRatio)} of portfolio, which can dampen both gains and losses.`);
  } else if (cashRatio >= 0 && cashRatio < 0.05) {
    points.push(`Cash is low (${toPercent(cashRatio)}), so results are driven mostly by market moves in holdings.`);
  } else if (cashRatio < 0) {
    points.push(`Cash is near zero (${toPercent(cashRatio)}). Minor negative cash can come from rounding/fees and should not block advancing.`);
  } else {
    points.push(`Cash is ${toPercent(cashRatio)}, giving a balance between risk and flexibility.`);
  }

  if (periodReturn > 0.01) {
    points.push('Portfolio gained this period because your selected assets rose more than your cash drag.');
  } else if (periodReturn < -0.01) {
    points.push('Portfolio fell this period because held assets declined over the rebalance interval.');
  } else {
    points.push('Portfolio was mostly stable this period with modest net movement.');
  }

  const bench = buildBenchmarkMarketContext(insights);
  if (bench) {
    const marketTone = bench.avg > 0.01 ? 'risk-on' : bench.avg < -0.01 ? 'risk-off' : 'mixed';
    points.push(
      `Market context (${insights.sinceDate} to ${insights.date}): ${marketTone}. Avg benchmark move ${toSignedPercent(
        bench.avg
      )}; best ${bench.top.symbol} ${toSignedPercent(bench.top.ret)}, weakest ${bench.bottom.symbol} ${toSignedPercent(bench.bottom.ret)}.`
    );
    const edge = periodReturn - bench.avg;
    points.push(
      Number.isFinite(edge)
        ? edge > 0
          ? `You outperformed the benchmark basket by ${toSignedPercent(edge)} this period.`
          : edge < 0
          ? `You underperformed the benchmark basket by ${toPercent(Math.abs(edge))} this period.`
          : 'You moved roughly in line with benchmarks this period.'
        : 'Benchmark comparison unavailable for this period.'
    );
  }

  if (prevInsights) {
    const prevMap = Object.fromEntries((prevInsights.holdings || []).map((h) => [String(h.symbol || ''), h]));
    const current = [...(insights.holdings || [])].filter((h) => Number(h.value || 0) > 0);
    const movers = current
      .map((h) => {
        const prev = prevMap[String(h.symbol || '')];
        const prevPrice = Number(prev?.price || 0);
        const currPrice = Number(h.price || 0);
        const ret = prevPrice > 0 ? currPrice / prevPrice - 1 : null;
        return { symbol: String(h.symbol || ''), ret, weight: Number(h.weight || 0) };
      })
      .filter((m) => m.symbol && Number.isFinite(m.ret))
      .sort((a, b) => Math.abs(Number(b.ret)) - Math.abs(Number(a.ret)))
      .slice(0, 2);

    if (movers.length) {
      points.push(
        `Largest movers in your holdings: ${movers
          .map((m) => `${m.symbol} ${toSignedPercent(m.ret)} at ${toPercent(m.weight)} weight`)
          .join(', ')}.`
      );
    }

    const highConvictionWinner = movers.find((m) => m.ret > 0.04 && m.weight > 0.3);
    const sharpLoser = movers.find((m) => m.ret < -0.04 && m.weight > 0.15);
    if (highConvictionWinner) {
      points.push(
        `Decision watch: ${highConvictionWinner.symbol} is a large winner and now concentrated. Consider trimming to manage single-asset risk.`
      );
    }
    if (sharpLoser) {
      points.push(
        `Decision watch: ${sharpLoser.symbol} dropped materially at meaningful weight. Re-check thesis before adding; avoid averaging down automatically.`
      );
    }
  }

  if (cashRatio > 0.2 && periodReturn > 0) {
    points.push('Action cue: market was positive while you held sizeable cash; scaling in over 2-3 steps may reduce timing risk.');
  } else if (cashRatio < 0.05 && periodReturn < 0) {
    points.push('Action cue: low cash with falling market increases portfolio sensitivity; consider building a small liquidity buffer.');
  }

  commentaryBaseLead = lead;
  commentaryBasePoints = [...points];
  setMovementCommentary(commentaryBaseLead, commentaryBasePoints);
}

async function enrichCommentaryWithMarketIntel(insights) {
  if (!simulationState?.simulationId || !insights?.date) return;
  const reqId = ++marketBriefReqSeq;
  try {
    const qs = `?date=${encodeURIComponent(String(insights.date || ''))}&sinceDate=${encodeURIComponent(
      String(insights.sinceDate || '')
    )}`;
    const briefing = await apiGet(`/api/simulations/${simulationState.simulationId}/market-briefing${qs}`);
    if (reqId !== marketBriefReqSeq) return;

    const assets = Array.isArray(briefing?.assets) ? briefing.assets : [];
    const byWeight = assets
      .filter((a) => Number(a?.weight || 0) > 0.01)
      .sort((a, b) => Number(b.weight || 0) - Number(a.weight || 0))
      .slice(0, 3);
    const byMove = assets
      .filter((a) => Number.isFinite(Number(a?.periodReturn)))
      .sort((a, b) => Math.abs(Number(b.periodReturn || 0)) - Math.abs(Number(a.periodReturn || 0)));

    const extra = [];
    if (byMove.length) {
      const strongest = byMove[0];
      extra.push(
        `Market pulse: biggest move in your tracked assets was ${strongest.symbol} at ${toSignedPercent(
          Number(strongest.periodReturn || 0)
        )} since ${briefing.sinceDate}.`
      );
    }

    byWeight.forEach((a) => {
      const perf = Number.isFinite(Number(a?.periodReturn)) ? toSignedPercent(Number(a.periodReturn || 0)) : 'N/A';
      const daily = Number.isFinite(Number(a?.dailyReturn)) ? toSignedPercent(Number(a.dailyReturn || 0)) : 'N/A';
      const earnings =
        a?.earningsDate && String(a.earningsDate) >= String(briefing.date)
          ? `next earnings around ${a.earningsDate}`
          : 'no upcoming earnings date available';
      extra.push(
        `${a.symbol}: period ${perf}, latest daily ${daily}, weight ${toPercent(Number(a.weight || 0))}, ${earnings}.`
      );
    });

    const topHeadlineItems = byWeight
      .map((a) => {
        const h = Array.isArray(a?.headlines) ? a.headlines[0] : null;
        if (!h?.title) return null;
        const src = h.publisher ? ` (${h.publisher}${h.date ? `, ${h.date}` : ''})` : '';
        return `${a.symbol} news: ${h.title}${src}`;
      })
      .filter(Boolean)
      .slice(0, 3);

    if (topHeadlineItems.length) {
      extra.push(...topHeadlineItems);
    } else {
      extra.push('No fresh symbol-specific headlines were returned for your top holdings right now.');
    }

    setMovementCommentary(commentaryBaseLead, [...commentaryBasePoints, ...extra]);
  } catch (_error) {
    if (reqId !== marketBriefReqSeq) return;
    setMovementCommentary(commentaryBaseLead, [
      ...commentaryBasePoints,
      'Live market news/earnings briefing is temporarily unavailable.'
    ]);
  }
}

async function apiPost(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

async function apiGet(url) {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

function updateAssetControls() {
  if (!assetType || !assetSymbolWrap || !assetMultiplierWrap) return;
  const type = assetType.value;
  assetSymbolWrap.classList.toggle('hidden', type === 'cash' || type === 'savings');
  assetMultiplierWrap.classList.toggle('hidden', !(type === 'leverage' || type === 'option'));
}

function updateSimAddControls() {
  if (!simAddType) return;
  const type = simAddType.value;
  simAddSymbolWrap?.classList.toggle('hidden', type === 'cash' || type === 'savings');
  simAddMultiplierWrap?.classList.toggle('hidden', !(type === 'leverage' || type === 'option'));
}

function isUsExchange(exchange) {
  const ex = String(exchange || '').toUpperCase();
  if (!ex) return false;
  const usHints = ['NASDAQ', 'NYSE', 'AMEX', 'ARCA', 'BATS', 'NYSEARCA', 'NMS', 'NGM', 'NYQ', 'PCX', 'OTC'];
  return usHints.some((hint) => ex.includes(hint));
}

function pickPreferredListing(response) {
  if (!response || typeof response !== 'object') return null;
  const best = response.best || null;
  const matches = Array.isArray(response.matches) ? response.matches : [];
  const pool = [best, ...matches].filter(Boolean);
  if (!pool.length) return null;
  const us = pool.find((m) => isUsExchange(m.exchange));
  return us || best || pool[0];
}

function normalizeCryptoSymbol(rawInput) {
  const raw = String(rawInput || '').trim();
  if (!raw) return null;
  const norm = raw.toUpperCase().replace(/\s+/g, '');
  const aliases = {
    BTC: 'BTC-USD',
    BITCOIN: 'BTC-USD',
    XBT: 'BTC-USD',
    ETH: 'ETH-USD',
    ETHEREUM: 'ETH-USD',
    SOL: 'SOL-USD',
    SOLANA: 'SOL-USD',
    ADA: 'ADA-USD',
    CARDANO: 'ADA-USD',
    DOGE: 'DOGE-USD',
    DOGECOIN: 'DOGE-USD',
    XRP: 'XRP-USD',
    RIPPLE: 'XRP-USD',
    LTC: 'LTC-USD',
    LITECOIN: 'LTC-USD',
    BNB: 'BNB-USD',
    AVAX: 'AVAX-USD'
  };
  if (aliases[norm]) return aliases[norm];
  if (/^[A-Z0-9.-]+-USD$/.test(norm)) return norm;
  if (/^[A-Z]{2,10}$/.test(norm)) return `${norm}-USD`;
  return null;
}

async function resolveSymbolInput(rawInput, type) {
  const raw = String(rawInput || '').trim();
  if (!raw) throw new Error('Please enter a symbol or company name.');

  if (type === 'crypto') {
    const crypto = normalizeCryptoSymbol(raw);
    if (crypto) return { symbol: crypto, matchedFrom: null };
  }

  const upper = normalizeToken(raw);
  if (/^[A-Z0-9^][A-Z0-9.^=\/-]{0,24}$/.test(upper)) {
    try {
      await apiPost('/api/assets/validate', { token: upper });
      return { symbol: upper, matchedFrom: null };
    } catch (_error) {
      // Fall through to fuzzy/name resolution (e.g., "APPL" -> "AAPL").
    }
  }

  const response = await apiPost('/api/assets/resolve', {
    query: raw,
    preferBond: type === 'bond'
  });

  const picked = pickPreferredListing(response);
  if (!picked?.symbol) {
    throw new Error(`No matching symbol found for "${raw}".`);
  }

  return {
    symbol: normalizeToken(picked.symbol),
    matchedFrom: {
      query: raw,
      symbol: normalizeToken(picked.symbol),
      name: picked.longname || picked.shortname || picked.symbol
    }
  };
}

async function searchSymbolOptions(rawInput, type) {
  const raw = String(rawInput || '').trim();
  if (!raw) return [];

  const response = await apiPost('/api/assets/resolve', {
    query: raw,
    preferBond: type === 'bond'
  });

  const list = [];
  if (response?.best?.symbol) list.push(response.best);
  for (const m of response?.matches || []) {
    if (!list.some((x) => x.symbol === m.symbol)) list.push(m);
  }
  list.sort((a, b) => {
    const au = isUsExchange(a.exchange) ? 1 : 0;
    const bu = isUsExchange(b.exchange) ? 1 : 0;
    return bu - au;
  });
  return list.slice(0, 8);
}

function hideAssetSearchDropdown() {
  assetSearchDropdown?.classList.add('hidden');
  assetSearchResults = [];
  assetSearchIndex = -1;
}

function applyAssetSearchSelection(option) {
  if (!option) return;
  assetSymbol.value = option.symbol || '';
  hideAssetSearchDropdown();
}

function renderAssetSearchDropdown() {
  if (!assetSearchDropdown) return;
  if (!assetSearchResults.length) {
    hideAssetSearchDropdown();
    return;
  }

  assetSearchDropdown.classList.remove('hidden');
  assetSearchDropdown.innerHTML = assetSearchResults
    .map((opt, i) => {
      const name = opt.longname || opt.shortname || opt.symbol;
      const sub = [opt.symbol, opt.exchange, opt.quoteType].filter(Boolean).join(' ? ');
      return `<button type="button" class="search-option ${i === assetSearchIndex ? 'active' : ''}" data-search-index="${i}">
        <div class="search-option-title">${name}</div>
        <div class="search-option-sub">${sub}</div>
      </button>`;
    })
    .join('');
}

function tokenToLabel(token) {
  if (token === 'CASH') return 'Cash';
  if (token === 'SAVINGS') return 'Savings';
  if (token.startsWith('BOND:')) return `Bond ${token.split(':')[1]}`;
  if (token.startsWith('LEVERAGE:')) {
    const p = token.split(':');
    return `${p[2]}x ${p[1]}`;
  }
  if (token.startsWith('CALL:')) {
    const p = token.split(':');
    return `Call-like ${p[1]} x${p[2]}`;
  }
  return token;
}

async function buildAssetTokenFromInputs(type, rawSymbolInput, rawMultiplierInput) {
  let token = '';
  let matchInfo = null;

  if (type === 'cash') {
    token = 'CASH';
  } else if (type === 'savings') {
    token = 'SAVINGS';
  } else {
    const resolved = await resolveSymbolInput(rawSymbolInput, type);
    matchInfo = resolved.matchedFrom;

    if (type === 'stock' || type === 'crypto') {
      token = resolved.symbol;
    } else if (type === 'bond') {
      token = `BOND:${resolved.symbol}`;
    } else if (type === 'leverage') {
      const mult = Number(rawMultiplierInput || 0);
      if (!Number.isFinite(mult) || mult <= 1) throw new Error('Multiplier must be greater than 1.');
      token = `LEVERAGE:${resolved.symbol}:${mult}`;
    } else {
      const mult = Number(rawMultiplierInput || 0);
      if (!Number.isFinite(mult) || mult <= 1) throw new Error('Multiplier must be greater than 1.');
      token = `CALL:${resolved.symbol}:${mult}`;
    }
  }

  return { token: normalizeToken(token), matchInfo };
}

function renderAssetList() {
  assetList.innerHTML = '';
  const hasAssets = selectedAssets.length > 0;
  setupAllocBlock?.classList.toggle('hidden', !hasAssets);
  setupTogglePieBtn?.classList.toggle('hidden', !hasAssets);
  setupAllocations = Object.fromEntries(Object.entries(setupAllocations || {}).filter(([sym]) => selectedAssets.includes(sym)));
  setupPrices = Object.fromEntries(Object.entries(setupPrices || {}).filter(([sym]) => selectedAssets.includes(sym)));
  if (!hasAssets) {
    assetList.innerHTML = '<div class="asset-empty">No assets added yet.</div>';
    setupPieWrap?.classList.add('hidden');
    if (setupTogglePieBtn) setupTogglePieBtn.textContent = 'Show Chart';
    renderSetupAllocationRows();
    refreshSetupSummary();
    return;
  }

  selectedAssets.forEach((token) => {
    const chip = document.createElement('div');
    chip.className = 'asset-chip';
    chip.innerHTML = `<span>${tokenToLabel(token)}</span>`;
    assetList.appendChild(chip);
  });
  renderSetupAllocationRows();
  refreshSetupPrices().catch(() => {});
  refreshSetupSummary();
}

function getSetupStartDate() {
  const fromInput = String(document.getElementById('simStartDate')?.value || '').trim();
  if (fromInput) return fromInput;
  return toIsoDateUtc(Date.now());
}

function pickRandomRecommendedAsset() {
  if (!RECOMMENDED_ASSET_POOL.length) return 'SPY';
  const idx = Math.floor(Math.random() * RECOMMENDED_ASSET_POOL.length);
  return RECOMMENDED_ASSET_POOL[Math.max(0, Math.min(RECOMMENDED_ASSET_POOL.length - 1, idx))];
}

function seedRecommendedAssetIfEmpty(silent = false) {
  if (selectedAssets.length) return;
  const token = pickRandomRecommendedAsset();
  selectedAssets = [token];
  if (!setupAllocations[token]) setupAllocations[token] = { mode: 'dollars', value: 0 };
  renderAssetList();
  if (!silent) printOutput({ message: `Recommended starter added: ${tokenToLabel(token)}.` });
}

async function refreshSetupPrices(tokens = null) {
  const list = Array.isArray(tokens) ? tokens : [...selectedAssets];
  if (!list.length) {
    setupPrices = {};
    return;
  }

  const date = getSetupStartDate();
  const updates = {};
  await Promise.all(
    list.map(async (token) => {
      try {
        const response = await apiPost('/api/assets/price', { token, date });
        updates[token] = Math.max(0, Number(response?.price || 0));
      } catch (_error) {
        updates[token] = 0;
      }
    })
  );
  setupPrices = { ...setupPrices, ...updates };
  updateSetupAllocationSummary();
}

function renderSetupAllocationRows() {
  if (!setupAllocationRows || !setupAllocationSummary) return;

  setupAllocationRows.innerHTML = '';
  if (!selectedAssets.length) {
    setupAllocationRows.innerHTML = '<div class="asset-empty">Add assets to set initial allocation.</div>';
    const cash = getInitialCashValue();
    setupAllocationSummary.textContent = `Allocated: ${toCurrency(0)} | Cash Left: ${toCurrency(cash)}`;
    if (setupCashbarFill) setupCashbarFill.style.width = '100%';
    drawDonutChart(setupPieChart, {}, {}, setupPieLegend);
    refreshSetupSummary();
    return;
  }

  selectedAssets.forEach((symbol) => {
    const row = document.createElement('div');
    row.className = 'setup-alloc-row';
    const current = setupAllocations[symbol] || { mode: 'dollars', value: 0 };
    const price = Math.max(0, Number(setupPrices[symbol] || 0));
    const value = Math.max(0, Number(current.value || 0));
    const unitsOwned = current.mode === 'units' ? value : price > 0 ? value / price : 0;
    const mode = current.mode === 'units' ? 'units' : 'dollars';
    row.innerHTML = `
      <div class="setup-alloc-meta">
        <strong>${tokenToLabel(symbol)}</strong>
        <div class="setup-alloc-stats">
          <span>Unit Price: <b data-setup-price="${symbol}">${price > 0 ? `${toCurrency(price)}` : '-'}</b></span>
          <span>Units Owned: <b data-setup-units="${symbol}">${Number(unitsOwned || 0).toFixed(2)}</b></span>
          <span>Total: <b data-setup-target="${symbol}">${Number(value || 0).toFixed(2)} ${mode === 'units' ? 'units' : 'USD'}</b></span>
        </div>
      </div>
      <div class="setup-alloc-inputs">
        <div class="setup-stepper">
          <button type="button" class="ghost setup-step-btn" data-setup-dec="${symbol}" aria-label="Decrease allocation">-</button>
          <button type="button" class="ghost setup-step-btn" data-setup-inc="${symbol}" aria-label="Increase allocation">+</button>
        </div>
        <button type="button" class="ghost setup-adjust-btn" data-adjust-alloc="${symbol}">Adjust</button>
        <button type="button" class="ghost setup-remove-btn" data-remove-alloc="${symbol}">Remove</button>
      </div>
    `;
    setupAllocationRows.appendChild(row);
  });

  updateSetupAllocationSummary();
}

function getSetupAllocationPlan() {
  const map = {};
  selectedAssets.forEach((symbol) => {
    const existing = setupAllocations?.[symbol] || { mode: 'dollars', value: 0 };
    const mode = String(existing.mode || 'dollars') === 'units' ? 'units' : 'dollars';
    const amount = Math.max(0, Number(existing.value || 0));
    map[symbol] = { mode, value: Number.isFinite(amount) ? amount : 0 };
  });
  return map;
}

function getSetupAllocationDollars(symbol, planEntry) {
  const p = planEntry || { mode: 'dollars', value: 0 };
  if (p.mode === 'units') {
    const price = Number(setupPrices[symbol] || 0);
    return Math.max(0, Number(p.value || 0) * Math.max(0, price));
  }
  return Math.max(0, Number(p.value || 0));
}

function getSetupMaxDollarsForSymbol(symbol) {
  const snap = getSetupAllocationSnapshot();
  const current = setupAllocations[symbol] || { mode: 'dollars', value: 0 };
  const unitPrice = Math.max(0, Number(setupPrices[symbol] || 0));
  const currentDollars = current.mode === 'units'
    ? Math.max(0, Number(current.value || 0)) * unitPrice
    : Math.max(0, Number(current.value || 0));
  const others = Math.max(0, Number(snap.allocated || 0) - currentDollars);
  return Math.max(0, Number(snap.maxInvestable || 0) - others);
}

function clampSetupAllocation(symbol, mode, value) {
  const normalizedMode = mode === 'units' ? 'units' : 'dollars';
  const raw = Math.max(0, Number(value || 0));
  const maxDollars = getSetupMaxDollarsForSymbol(symbol);
  if (normalizedMode === 'units') {
    const unitPrice = Math.max(0, Number(setupPrices[symbol] || 0));
    if (unitPrice <= 0) return { mode: 'units', value: Number(raw.toFixed(2)) };
    const maxUnits = maxDollars / unitPrice;
    return { mode: 'units', value: Number(Math.max(0, Math.min(raw, maxUnits)).toFixed(2)) };
  }
  return { mode: 'dollars', value: Number(Math.max(0, Math.min(raw, maxDollars)).toFixed(2)) };
}

function getSetupStepAmount(symbol, mode) {
  const unitPrice = Math.max(0, Number(setupPrices[symbol] || 0));
  if (mode === 'units') return 1;
  return unitPrice > 0 ? Math.max(0.01, Math.round(unitPrice * 100) / 100) : 100;
}

function applySetupStepChange(token, direction) {
  if (!token || !selectedAssets.includes(token)) return;
  const current = setupAllocations[token] || { mode: 'dollars', value: 0 };
  const mode = current.mode === 'units' ? 'units' : 'dollars';
  const step = getSetupStepAmount(token, mode);
  const signed = direction < 0 ? -step : step;
  const next = Math.max(0, Number(current.value || 0) + signed);
  setupAllocations[token] = clampSetupAllocation(token, mode, next);
  renderSetupAllocationRows();
}

function clearSetupStepHold() {
  if (setupStepHoldTimeout) {
    clearTimeout(setupStepHoldTimeout);
    setupStepHoldTimeout = null;
  }
  if (setupStepHoldInterval) {
    clearInterval(setupStepHoldInterval);
    setupStepHoldInterval = null;
  }
}

function updateSetupAllocationSummary() {
  const plan = getSetupAllocationPlan();
  setupAllocations = { ...setupAllocations, ...plan };
  const cash = getInitialCashValue();
  const allocated = selectedAssets.reduce((sum, sym) => sum + getSetupAllocationDollars(sym, plan[sym]), 0);

  selectedAssets.forEach((sym) => {
    const price = Math.max(0, Number(setupPrices[sym] || 0));
    const rowPlan = plan[sym] || { mode: 'dollars', value: 0 };
    const inputValue = Math.max(0, Number(rowPlan.value || 0));
    const unitsOwned = rowPlan.mode === 'units' ? inputValue : price > 0 ? inputValue / price : 0;
    const priceEl = setupAllocationRows?.querySelector(`[data-setup-price="${sym}"]`);
    const unitsEl = setupAllocationRows?.querySelector(`[data-setup-units="${sym}"]`);
    const targetEl = setupAllocationRows?.querySelector(`[data-setup-target="${sym}"]`);
    if (priceEl) priceEl.textContent = price > 0 ? `${toCurrency(price)}` : '-';
    if (unitsEl) unitsEl.textContent = Number(unitsOwned || 0).toFixed(2);
    if (targetEl) targetEl.textContent = `${Number(inputValue || 0).toFixed(2)} ${rowPlan.mode === 'units' ? 'units' : 'USD'}`;
  });

  const snap = getSetupAllocationSnapshot();
  const estimatedFee = snap.estimatedFee;
  const cashLeft = snap.cashLeft;
  setupAllocationSummary.textContent = `Allocated: ${toCurrency(snap.allocated)} | Estimated Fee: ${toCurrency(estimatedFee)} | Cash Left: ${toCurrency(cashLeft)}`;
  setupAllocationSummary.classList.toggle('error', !snap.affordable);
  if (setupCashbarFill) {
    const totalSpend = snap.totalSpend;
    const pct = cash > 0 ? Math.max(0, Math.min(100, (totalSpend / cash) * 100)) : 0;
    setupCashbarFill.style.width = `${pct.toFixed(2)}%`;
  }
  const weights = {};
  const amountMap = {};
  if (cash > 0) {
    selectedAssets.forEach((sym) => {
      const dollars = getSetupAllocationDollars(sym, plan[sym]);
      if (dollars > 0.0001) {
        weights[sym] = dollars / cash;
        amountMap[sym] = dollars;
      }
    });
    if (cashLeft > 0.0001) {
      weights.__CASH_LEFT__ = cashLeft / cash;
      amountMap.__CASH_LEFT__ = cashLeft;
    }
    if (estimatedFee > 0.0001) {
      weights.__FEE__ = estimatedFee / cash;
      amountMap.__FEE__ = estimatedFee;
    }
  }
  if (!setupPieWrap?.classList.contains('hidden')) {
    drawDonutChart(setupPieChart, weights, { ...getAssetLabelMap(), __CASH_LEFT__: 'Cash Left', __FEE__: 'Estimated Fee' }, {
      legendEl: setupPieLegend,
      amountMap,
      totalValue: cash,
      centerTop: 'Portfolio Mix',
      centerBottom: toCurrency(allocated)
    });
  }
  refreshSetupSummary();
}


function applySetupEqualSplit() {
  if (!selectedAssets.length) return;
  const investable = getSetupMaxInvestable(getInitialCashValue());
  const each = selectedAssets.length ? investable / selectedAssets.length : 0;
  selectedAssets.forEach((sym) => {
    setupAllocations[sym] = { mode: 'dollars', value: each };
  });
  renderSetupAllocationRows();
}

function applySetupNormalize100() {
  const plan = getSetupAllocationPlan();
  const total = selectedAssets.reduce((s, sym) => s + getSetupAllocationDollars(sym, plan[sym]), 0);
  const cash = getSetupMaxInvestable(getInitialCashValue());
  if (!(total > 0)) return;
  selectedAssets.forEach((sym) => {
    const dollars = getSetupAllocationDollars(sym, plan[sym]);
    setupAllocations[sym] = { mode: 'dollars', value: (dollars / total) * cash };
  });
  renderSetupAllocationRows();
}

function applySetupRandomSplit() {
  if (!selectedAssets.length) return;
  const cash = getSetupMaxInvestable(getInitialCashValue());
  const raw = selectedAssets.map(() => Math.random() + 0.05);
  const sum = raw.reduce((s, v) => s + v, 0) || 1;
  selectedAssets.forEach((sym, i) => {
    setupAllocations[sym] = { mode: 'dollars', value: (raw[i] / sum) * cash };
  });
  renderSetupAllocationRows();
}

function getAiSplitScoreForSymbol(symbol) {
  const s = String(symbol || '').toUpperCase();
  if (s === 'CASH') return 0.8;
  if (s.includes('SPY') || s.includes('VTI') || s.includes('VOO') || s.includes('QQQ')) return 3.0;
  if (s.includes('BND') || s.includes('TLT') || s.includes('IEF') || s.includes('AGG')) return 2.0;
  if (s.includes('GLD') || s.includes('SLV')) return 1.2;
  if (s.includes('BTC') || s.includes('ETH') || s.includes('SOL')) return 1.0;
  return 1.6;
}

function allocateByWeightsInCents(items, cash) {
  const totalCents = Math.max(0, Math.round(Number(cash || 0) * 100));
  if (!Array.isArray(items) || !items.length || totalCents <= 0) {
    return Object.fromEntries((items || []).map((it) => [it.symbol, 0]));
  }

  const safe = items.map((it) => ({
    symbol: String(it.symbol || ''),
    weight: Math.max(0, Number(it.weight || 0))
  }));
  const weightSum = safe.reduce((sum, it) => sum + it.weight, 0) || 1;
  const withFractions = safe.map((it, idx) => {
    const exact = (it.weight / weightSum) * totalCents;
    const floor = Math.floor(exact);
    return { ...it, idx, cents: floor, frac: exact - floor };
  });

  let remaining = totalCents - withFractions.reduce((sum, it) => sum + it.cents, 0);
  withFractions.sort((a, b) => (b.frac - a.frac) || (a.idx - b.idx));
  for (let i = 0; i < withFractions.length && remaining > 0; i += 1, remaining -= 1) {
    withFractions[i].cents += 1;
  }

  return Object.fromEntries(withFractions.map((it) => [it.symbol, Number((it.cents / 100).toFixed(2))]));
}

function applySetupAiSplit() {
  if (!selectedAssets.length) return;
  const cash = getSetupMaxInvestable(getInitialCashValue());
  if (!(cash > 0)) return;
  const raw = selectedAssets.map((sym) => {
    const base = getAiSplitScoreForSymbol(sym);
    const noise = 0.85 + Math.random() * 0.3;
    return Math.max(0.05, base * noise);
  });
  const sum = raw.reduce((s, v) => s + v, 0) || 1;
  const items = selectedAssets.map((sym, i) => ({ symbol: sym, weight: raw[i] / sum }));
  const allocation = allocateByWeightsInCents(items, cash);
  selectedAssets.forEach((sym) => {
    setupAllocations[sym] = { mode: 'dollars', value: Number(allocation[sym] || 0) };
  });
  renderSetupAllocationRows();
}

async function buildAiCombinationSelection() {
  const date = getSetupStartDate();
  const pool = [...AI_COMBINATION_BLUEPRINT, ...AI_COMBINATION_FALLBACKS];
  const checked = await Promise.all(pool.map(async (item) => {
    try {
      const response = await apiPost('/api/assets/price', { token: item.symbol, date });
      const price = Number(response?.price || 0);
      if (!(price > 0)) return null;
      return { symbol: item.symbol, weight: Number(item.weight || 0), price };
    } catch (_error) {
      return null;
    }
  }));

  const available = checked.filter(Boolean);
  if (!available.length) return [];

  const preferredOrder = pool.map((p) => p.symbol);
  available.sort((a, b) => preferredOrder.indexOf(a.symbol) - preferredOrder.indexOf(b.symbol));
  const selected = available.slice(0, 6);
  const totalWeight = selected.reduce((sum, it) => sum + Math.max(0.0001, Number(it.weight || 0)), 0) || 1;
  return selected.map((it) => ({
    symbol: it.symbol,
    price: it.price,
    weight: Math.max(0, Number(it.weight || 0)) / totalWeight
  }));
}

async function applySetupAiCombination() {
  const cash = getSetupMaxInvestable(getInitialCashValue());
  if (!(cash > 0)) {
    printError('Enter Initial Virtual Cash before using AI Combination.');
    return;
  }

  const picks = await buildAiCombinationSelection();
  if (!picks.length) {
    printError('AI Combination could not find assets with historical data for the selected start date.');
    return;
  }

  selectedAssets = picks.map((p) => p.symbol);
  setupPrices = Object.fromEntries(picks.map((p) => [p.symbol, p.price]));
  setupAllocations = {};
  const allocation = allocateByWeightsInCents(picks.map((p) => ({ symbol: p.symbol, weight: p.weight })), cash);
  picks.forEach((p) => {
    setupAllocations[p.symbol] = { mode: 'dollars', value: Number(allocation[p.symbol] || 0) };
  });

  renderAssetList();
  printOutput({
    message: 'AI Combination applied.',
    picks: selectedAssets.join(', ')
  });
}

function getHoldingForSymbol(symbol) {
  const fromInsights = (latestInsights?.holdings || []).find((h) => h.symbol === symbol) || null;
  const insightQty = Number(fromInsights?.quantity);
  const stateQty = Number(simulationState?.holdings?.[symbol]);
  const qty = Number.isFinite(insightQty) ? insightQty : Number.isFinite(stateQty) ? stateQty : 0;

  const replayPrice = Number(previewState?.prices?.[symbol]);
  const insightPrice = Number(fromInsights?.price);
  const price = Number.isFinite(replayPrice) && replayPrice > 0 ? replayPrice : Number.isFinite(insightPrice) ? insightPrice : 0;

  const value = qty * price;
  const stateCostBasis = Number(simulationState?.costBasis?.[symbol]);
  const insightAvg = Number(fromInsights?.avgBuyPrice);
  const costBasis = Number.isFinite(stateCostBasis)
    ? Math.max(0, stateCostBasis)
    : Number.isFinite(insightAvg)
    ? Math.max(0, insightAvg * qty)
    : 0;
  const avgBuyPrice = qty > 0 ? costBasis / qty : 0;

  const stateFirstBuy = Number(simulationState?.firstBuyPrice?.[symbol]);
  const insightFirstBuy = Number(fromInsights?.firstBuyPrice);
  const firstBuyPrice = Number.isFinite(insightFirstBuy) && insightFirstBuy > 0
    ? insightFirstBuy
    : Number.isFinite(stateFirstBuy) && stateFirstBuy > 0
    ? stateFirstBuy
    : 0;

  const total = Number(previewState?.portfolioValue || 0);
  const weight = total > 0 ? value / total : 0;
  return { symbol, quantity: qty, price, value, weight, avgBuyPrice, firstBuyPrice };
}

function getHoldingValue(symbol) {
  return Number(getHoldingForSymbol(symbol)?.value || 0);
}

function getHoldingTrend(symbol) {
  return Number(holdingTrendBySymbol?.[symbol] || 0);
}

function updateHoldOnlyButton() {
  if (!showOnlyActiveBtn) return;
  showOnlyActiveBtn.textContent = `Show Held Only: ${showHeldOnly ? 'On' : 'Off'}`;
}

function filterAllocationRows() {
  const rows = [...allocationRows.querySelectorAll('.alloc-row')];
  const query = String(allocationSearch?.value || '')
    .trim()
    .toLowerCase();

  rows.forEach((row) => {
    const symbol = row.dataset.symbol || '';
    const label = row.querySelector('.alloc-asset')?.textContent || symbol;
    const text = `${symbol} ${label}`.toLowerCase();
    const matchesText = !query || text.includes(query);
    const holdingOk = !showHeldOnly || getHoldingValue(symbol) > 0.01;
    row.classList.toggle('hidden', !(matchesText && holdingOk));
  });
}

function getVisibleAllocationRows() {
  return [...allocationRows.querySelectorAll('.alloc-row')].filter((row) => !row.classList.contains('hidden'));
}

function isRowTargeted(row) {
  return row?.dataset?.manualTarget === '1';
}

function getRowProfitValue(symbol) {
  const holding = getHoldingForSymbol(symbol) || {};
  const qty = Number(holding.quantity || 0);
  const currentValue = Number(holding.value || 0);
  const stateBasis = Number(simulationState?.costBasis?.[symbol]);
  const avgBuy = Number(holding.avgBuyPrice || 0);
  const firstBuy = Number(holding.firstBuyPrice || 0);
  const fallbackBasisPerUnit = avgBuy > 0 ? avgBuy : firstBuy > 0 ? firstBuy : 0;
  const fallbackBasis = Math.max(0, fallbackBasisPerUnit * qty);
  const basis = Number.isFinite(stateBasis) && stateBasis > 0 ? Math.max(0, stateBasis) : fallbackBasis;
  const realized = Number(simulationState?.realizedProfit?.[symbol] || 0);
  return currentValue - basis + realized;
}

function applyAllocationSort() {
  if (!allocationRows) return;
  const rows = [...allocationRows.querySelectorAll('.alloc-row')];
  if (!rows.length) return;

  const sortBy = String(allocationSortBy?.value || 'current_value');
  const dir = String(allocationSortDir?.value || 'desc') === 'asc' ? 1 : -1;
  const collator = new Intl.Collator(undefined, { sensitivity: 'base', numeric: true });

  const keyFor = (row) => {
    const symbol = row.dataset.symbol || '';
    if (sortBy === 'name') {
      const name = row.querySelector('.alloc-asset')?.textContent || symbol;
      return { type: 'text', value: name.trim() };
    }
    if (sortBy === 'profit') {
      return { type: 'num', value: getRowProfitValue(symbol) };
    }
    if (sortBy === 'target_value') {
      return { type: 'num', value: Number(row.dataset.targetDollars || 0) };
    }
    return { type: 'num', value: getHoldingValue(symbol) };
  };

  rows.sort((a, b) => {
    const ka = keyFor(a);
    const kb = keyFor(b);
    if (ka.type === 'text' || kb.type === 'text') {
      return collator.compare(String(ka.value || ''), String(kb.value || '')) * dir;
    }
    const av = Number(ka.value || 0);
    const bv = Number(kb.value || 0);
    if (Math.abs(av - bv) <= 1e-10) {
      const an = a.querySelector('.alloc-asset')?.textContent || a.dataset.symbol || '';
      const bn = b.querySelector('.alloc-asset')?.textContent || b.dataset.symbol || '';
      return collator.compare(an, bn);
    }
    return (av - bv) * dir;
  });

  rows.forEach((row) => allocationRows.appendChild(row));
}

function isRowAdjusting(row) {
  return true;
}

function setRowAdjusting(row, enabled) {
  if (!row) return;
  row.dataset.adjusting = '1';
  row.classList.add('is-adjusting');
  const decisionFields = row.querySelector('.decision-fields');
  if (decisionFields) decisionFields.classList.remove('hidden');
}

function getAssetLabelMap() {
  const map = {};
  for (const asset of simulationState?.assets || []) {
    map[asset.id] = asset.displayName || asset.label || asset.id;
  }
  return map;
}

function getAssetDisplayName(symbol) {
  const map = getAssetLabelMap();
  return map[symbol] || symbol;
}

function populateTradeSymbols() {
  const assets = simulationState?.assets || [];
  const options = assets
    .map((a) => `<option value="${a.id}">${a.label}</option>`)
    .join('');
  if (tradeSellSymbol) tradeSellSymbol.innerHTML = options;
  if (tradeBuySymbol) tradeBuySymbol.innerHTML = options;
}

function renderAllocationRows(assets) {
  allocationRows.innerHTML = '';

  assets.forEach((asset) => {
    const displayName = asset.displayName || asset.label || asset.id;
    const symbol = asset.symbol || asset.baseSymbol || asset.id;
    const initials = (displayName.match(/[A-Za-z0-9]/g) || ['?']).slice(0, 2).join('').toUpperCase();
    const safeName = escapeHtml(displayName);
    const safeSymbol = escapeHtml(symbol);
    const safeLogo = escapeHtml(asset.logoUrl || '');
    const row = document.createElement('div');
    row.className = 'alloc-row';
    row.dataset.symbol = asset.id;
    row.dataset.targetDollars = '0';
    row.dataset.manualTarget = '0';

    row.innerHTML = `
      <div class="alloc-main">
        <div class="alloc-logo-wrap">
          ${
            asset.logoUrl
              ? `<img src="${safeLogo}" alt="${safeName}" class="alloc-logo" loading="lazy" referrerpolicy="no-referrer" />`
              : `<div class="alloc-logo-fallback">${initials}</div>`
          }
        </div>
        <div class="alloc-info">
          <div class="alloc-title-row">
            <div class="alloc-asset">${safeName}</div>
          </div>
          <div class="alloc-symbol">${safeSymbol}</div>
          <div class="alloc-meta" data-meta>Price: <span class="alloc-price-inline">- <span class="alloc-price-trend flat" data-price-trend></span></span></div>
          <div class="alloc-profit-line" data-asset-profit>Profit: -</div>
          <div class="alloc-reason-line" data-asset-reason>Why: -</div>
        </div>
      </div>
      <div class="decision-box">
        <div class="decision-fields">
          <div class="decision-metrics">
            <div class="decision-metric">
              <span>Cash On Hand</span>
              <strong data-panel-cash>${toCurrency(0)}</strong>
              <small data-panel-cash-pct>0.00% of portfolio</small>
            </div>
            <div class="decision-metric">
              <span>Current Value</span>
              <strong data-panel-current>${toCurrency(0)}</strong>
              <small data-panel-current-units>0.00 units</small>
            </div>
            <div class="decision-metric">
              <span>Planned Value</span>
              <strong data-panel-target>${toCurrency(0)}</strong>
              <small data-panel-target-units>0.00 units</small>
            </div>
          </div>
          <div class="decision-trade-row">
            <div class="decision-actions">
              <button type="button" class="mini-btn decision-buy">Buy</button>
              <button type="button" class="mini-btn decision-sell">Sell</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const decisionBuyBtn = row.querySelector('.decision-buy');
    const decisionSellBtn = row.querySelector('.decision-sell');

    const setDollarTarget = (dollarValue) => {
      row.dataset.targetDollars = String(Math.max(0, Number(dollarValue || 0)));
      row.dataset.manualTarget = '1';
      updateBudgetPreview();
    };

    if (Number(row.dataset.targetDollars || 0) <= 0) {
      row.dataset.targetDollars = String(Math.max(0, getHoldingValue(asset.id)));
    }

    decisionBuyBtn?.addEventListener('click', () => {
      const remainingCash = getRemainingTargetCash();
      if (!(remainingCash > 0)) {
        return printError('No cash available to buy right now.');
      }
      const unitPrice = Number(previewState.prices?.[asset.id] || 0);
      const maxUnits = unitPrice > 0 ? remainingCash / unitPrice : null;
      ensureTradeAmountModal().open({
        title: `Buy ${displayName}`,
        confirmLabel: 'Buy',
        action: 'buy',
        max: remainingCash,
        maxUnits,
        unitPrice,
        supportsUnits: unitPrice > 0,
        mode: 'dollars',
        cash: remainingCash,
        currentValue: Math.max(0, getHoldingValue(asset.id)),
        baseTargetValue: Math.max(0, Number(row.dataset.targetDollars || 0)),
        targetValue: Math.max(0, Number(row.dataset.targetDollars || 0)),
        apply: ({ dollars }) => {
          const capped = Math.min(Number(dollars || 0), getRemainingTargetCash());
          if (!(capped > 0)) return;
          setDollarTarget(Number(row.dataset.targetDollars || 0) + capped);
        }
      });
    });

    decisionSellBtn?.addEventListener('click', () => {
      const currentHolding = Math.max(0, getHoldingValue(asset.id));
      if (!(currentHolding > 0)) {
        return printError('No current value available to sell for this asset.');
      }
      const holdingQty = Number(getHoldingForSymbol(asset.id)?.quantity || 0);
      const unitPrice = Number(previewState.prices?.[asset.id] || 0);
      ensureTradeAmountModal().open({
        title: `Sell ${displayName}`,
        confirmLabel: 'Sell',
        action: 'sell',
        max: currentHolding,
        maxUnits: holdingQty > 0 ? holdingQty : null,
        unitPrice,
        supportsUnits: holdingQty > 0 && unitPrice > 0,
        mode: 'dollars',
        cash: Math.max(0, getRemainingTargetCash()),
        currentValue: currentHolding,
        baseTargetValue: Math.max(0, Number(row.dataset.targetDollars || 0)),
        targetValue: Math.max(0, Number(row.dataset.targetDollars || 0)),
        apply: ({ dollars }) => {
          const capped = Math.min(Number(dollars || 0), Math.max(0, getHoldingValue(asset.id)));
          if (!(capped > 0)) return;
          setDollarTarget(Math.max(0, Number(row.dataset.targetDollars || 0) - capped));
        }
      });
    });

    setRowAdjusting(row, true);
    allocationRows.appendChild(row);
  });

  updateBudgetPreview();
  filterAllocationRows();
}

function buildRandomWeightVector(count) {
  const raw = Array.from({ length: count }, () => Math.random() + 0.05);
  const sum = raw.reduce((s, v) => s + v, 0) || 1;
  const budgetUse = 0.8 + Math.random() * 0.18; // 80% to 98%
  return raw.map((v) => (v / sum) * budgetUse);
}

function applyRandomStartingAllocation() {
  const rows = [...allocationRows.querySelectorAll('.alloc-row')];
  if (!rows.length) return;

  const total = previewState.portfolioValue || 0;
  const weights = buildRandomWeightVector(rows.length);
  rows.forEach((row, idx) => {
    row.dataset.targetDollars = String(Math.max(0, total * weights[idx]));
    row.dataset.manualTarget = '1';
  });

  updateBudgetPreview();
}

function applySetupAllocationToGameRows() {
  const rows = [...allocationRows.querySelectorAll('.alloc-row')];
  if (!rows.length) return false;

  const plan = getSetupAllocationPlan();
  const total = rows.reduce((sum, row) => {
    const symbol = row.dataset.symbol;
    const entry = plan[symbol];
    if (!entry) return sum;
    if (entry.mode === 'units') {
      const setupPrice = Number(setupPrices[symbol] || 0);
      const livePrice = Number(previewState?.prices?.[symbol] || 0);
      const price = setupPrice > 0 ? setupPrice : livePrice;
      return sum + Math.max(0, Number(entry.value || 0)) * Math.max(0, price);
    }
    return sum + Math.max(0, Number(entry.value || 0));
  }, 0);
  if (total <= 0) return false;

  rows.forEach((row) => {
    const symbol = row.dataset.symbol;
    const entry = plan[symbol] || { mode: 'dollars', value: 0 };
    let dollars = 0;
    if (entry.mode === 'units') {
      const setupPrice = Number(setupPrices[symbol] || 0);
      const livePrice = Number(previewState?.prices?.[symbol] || 0);
      const price = setupPrice > 0 ? setupPrice : livePrice;
      dollars = Math.max(0, Number(entry.value || 0)) * Math.max(0, price);
    } else {
      dollars = Math.max(0, Number(entry.value || 0));
    }
    row.dataset.targetDollars = String(dollars);
    row.dataset.manualTarget = '1';
  });

  updateBudgetPreview();
  return true;
}

function collectTargets(forceDatasetTargets = false) {
  const rows = allocationRows.querySelectorAll('.alloc-row');
  const targets = {};

  rows.forEach((row) => {
    const symbol = row.dataset.symbol;
    const value = forceDatasetTargets
      ? Number(row.dataset.targetDollars || 0)
      : isRowTargeted(row)
      ? Number(row.dataset.targetDollars || 0)
      : Math.max(0, getHoldingValue(symbol));
    targets[symbol] = { mode: 'dollars', value: Number.isFinite(value) ? Math.max(0, value) : 0 };
  });

  return targets;
}

function sumDollarTargets(targets) {
  return Object.values(targets || {}).reduce((sum, target) => {
    const mode = String(target?.mode || 'dollars').toLowerCase();
    if (mode !== 'dollars') return sum;
    return sum + Math.max(0, Number(target?.value || 0));
  }, 0);
}

function scaleDollarTargetsToBudget(targets, budget) {
  const source = targets || {};
  const safeBudget = Math.max(0, Number(budget || 0));
  const total = sumDollarTargets(source);
  if (!(total > safeBudget)) return source;
  const budgetWithBuffer = Math.max(0, safeBudget - 0.01);
  const scale = total > 0 ? budgetWithBuffer / total : 0;
  const scaled = {};
  Object.entries(source).forEach(([symbol, target]) => {
    const mode = String(target?.mode || 'dollars').toLowerCase();
    const value = Math.max(0, Number(target?.value || 0));
    scaled[symbol] = mode === 'dollars' ? { mode: 'dollars', value: value * scale } : { mode, value };
  });
  return scaled;
}

function forceReduceDollarTargetsByOneCent(targets) {
  const source = targets || {};
  const entries = Object.entries(source)
    .map(([symbol, target]) => ({
      symbol,
      mode: String(target?.mode || 'dollars').toLowerCase(),
      value: Math.max(0, Number(target?.value || 0))
    }))
    .sort((a, b) => b.value - a.value);

  const scaled = {};
  entries.forEach((entry) => {
    if (entry.mode === 'dollars') {
      const reduced = Math.max(0, entry.value - 0.01);
      scaled[entry.symbol] = { mode: 'dollars', value: reduced };
    } else {
      scaled[entry.symbol] = { mode: entry.mode, value: entry.value };
    }
  });
  return scaled;
}

async function postRebalanceWithBudgetGuard(simulationId, targets, extraPayload = {}) {
  try {
    return await apiPost(`/api/simulations/${simulationId}/rebalance`, { targets, ...extraPayload });
  } catch (error) {
    const message = String(error?.message || '').toLowerCase();
    const isBudgetError = message.includes('cannot exceed current portfolio value');
    if (!isBudgetError) throw error;

    const budget = Math.max(0, Number(previewState?.portfolioValue || 0)) + Math.max(0, -Number(simulationState?.cash || 0));
    const normalizedTargets = scaleDollarTargetsToBudget(targets, budget);
    const before = sumDollarTargets(targets);
    const afterNormalized = sumDollarTargets(normalizedTargets);
    const fallbackTargets = forceReduceDollarTargetsByOneCent(normalizedTargets);
    const afterFallback = sumDollarTargets(fallbackTargets);

    if (afterNormalized < before - 1e-6) {
      return await apiPost(`/api/simulations/${simulationId}/rebalance`, { targets: normalizedTargets, ...extraPayload });
    }
    if (afterFallback < before - 1e-6 || afterFallback < afterNormalized - 1e-6) {
      return await apiPost(`/api/simulations/${simulationId}/rebalance`, { targets: fallbackTargets, ...extraPayload });
    }
    throw error;
  }
}

function getBudgetTolerance() {
  const rowCount = allocationRows ? allocationRows.querySelectorAll('.alloc-row').length : 0;
  // Tiny per-row allowance for floating-point/cents drift.
  return Math.max(0.05, rowCount * 0.02);
}

function updateBudgetPreview() {
  const targets = collectTargets();
  const total = previewState.portfolioValue || 0;

  let used = 0;
  let currentInvested = 0;
  const rows = allocationRows.querySelectorAll('.alloc-row');

  rows.forEach((row) => {
    const symbol = row.dataset.symbol;
    const mode = targets[symbol]?.mode || 'dollars';
    const inputValue = targets[symbol]?.value || 0;
    const price = previewState.prices?.[symbol] || 0;
    const estimate = Math.max(0, Number(inputValue || 0));
    if (isRowTargeted(row)) row.dataset.targetDollars = String(estimate);
    const shownTarget = isRowTargeted(row)
      ? estimate
      : Math.max(0, Number(row.dataset.targetDollars || 0));
    const currentHolding = getHoldingValue(symbol);
    const holdingQty = Number(getHoldingForSymbol(symbol)?.quantity || 0);
    used += estimate;
    currentInvested += currentHolding;

    const meta = row.querySelector('[data-meta]');
    const currentDollarsEl = row.querySelector('[data-current-dollars]');
    const currentUnitsEl = row.querySelector('[data-current-units]');
    const panelCurrentEl = row.querySelector('[data-panel-current]');
    const panelCurrentUnitsEl = row.querySelector('[data-panel-current-units]');
    const panelTargetEl = row.querySelector('[data-panel-target]');
    const panelTargetUnitsEl = row.querySelector('[data-panel-target-units]');
    const assetProfitEl = row.querySelector('[data-asset-profit]');
    const assetReasonEl = row.querySelector('[data-asset-reason]');
    const delta = shownTarget - currentHolding;
    const action = !isRowTargeted(row) ? '' : delta > 1 ? `Buy ${toCurrency(delta)}` : delta < -1 ? `Sell ${toCurrency(Math.abs(delta))}` : 'Keep';
    if (currentDollarsEl) currentDollarsEl.textContent = toCurrency(currentHolding);
    if (currentUnitsEl) currentUnitsEl.textContent = `${holdingQty.toFixed(2)} units`;
    if (panelCurrentEl) panelCurrentEl.textContent = toCurrency(currentHolding);
    if (panelCurrentUnitsEl) panelCurrentUnitsEl.textContent = `${holdingQty.toFixed(2)} units`;
    if (panelTargetEl) panelTargetEl.textContent = toCurrency(shownTarget);
    if (panelTargetUnitsEl) {
      const targetUnits = price > 0 ? shownTarget / price : 0;
      panelTargetUnitsEl.textContent = `${targetUnits.toFixed(2)} units`;
    }
    if (assetProfitEl) {
      const holding = getHoldingForSymbol(symbol) || {};
      const avgBuy = Number(holding.avgBuyPrice || 0);
      const firstBuy = Number(holding.firstBuyPrice || 0);
      const stateBasis = Number(simulationState?.costBasis?.[symbol]);
      const fallbackBasisPerUnit = avgBuy > 0 ? avgBuy : firstBuy > 0 ? firstBuy : 0;
      const fallbackBasis = Math.max(0, fallbackBasisPerUnit * holdingQty);
      const costBasis = Number.isFinite(stateBasis) && stateBasis > 0 ? Math.max(0, stateBasis) : fallbackBasis;
      const profit = currentHolding - costBasis;
      const profitPct = costBasis > 0 ? profit / costBasis : 0;
      const cls = profit > 0.01 ? 'up' : profit < -0.01 ? 'down' : 'flat';
      assetProfitEl.classList.remove('up', 'down', 'flat');
      assetProfitEl.classList.add(cls);
      if (holdingQty <= 1e-10) {
        assetProfitEl.textContent = 'Profit: -';
      } else {
        const sign = profit >= 0 ? '+' : '-';
        const pctText = costBasis > 0 ? ` (${sign}${toPercent(Math.abs(profitPct))})` : '';
        assetProfitEl.textContent = `Profit: ${sign}${toCurrency(Math.abs(profit))}${pctText}`;
      }
    }
    if (meta) {
      const trend = getHoldingTrend(symbol);
      const arrow = trend > 0 ? '↑' : trend < 0 ? '↓' : '';
      const trendClass = trend > 0 ? 'up' : trend < 0 ? 'down' : 'flat';
      const priceText = price ? toCurrency(price) : '-';
      meta.innerHTML = `Price: <span class="alloc-price-inline">${priceText} <span class="alloc-price-trend ${trendClass}" data-price-trend>${arrow}</span></span>${action ? ` | Action: ${action}` : ''}`;
    }
    if (assetReasonEl) {
      assetReasonEl.textContent = `Why: ${assetReasonBySymbol[symbol] || 'No material move this period.'}`;
    }
    row.classList.toggle('action-buy', isRowTargeted(row) && delta > 1);
    row.classList.toggle('action-sell', isRowTargeted(row) && delta < -1);
    row.classList.toggle('action-keep', !isRowTargeted(row) || Math.abs(delta) <= 1);
  });

  const usedRounded = roundCurrency(used);
  const currentPortfolioRounded = roundCurrency(currentInvested);
  const pct = currentPortfolioRounded > 0 ? usedRounded / currentPortfolioRounded : 0;
  const tolerance = getBudgetTolerance();
  const isOver = usedRounded > currentPortfolioRounded + tolerance;
  budgetSummary.textContent = `Allocated Value: ${toCurrency(usedRounded)} / ${toCurrency(currentPortfolioRounded)} (${toPercent(pct)})`;
  if (isOver) {
    budgetHint.textContent = `Over budget by ${toCurrency(usedRounded - currentPortfolioRounded)}. Use Sell/Clear controls before advancing.`;
  } else {
    budgetHint.textContent = `Remaining cash plan: ${toCurrency(Math.max(currentPortfolioRounded - usedRounded, 0))}`;
  }
  renderCashFloat(Math.max(total - used, 0), total);
  if (!latestInsights) renderActionCashBar(simulationState?.cash || 0, previewState.portfolioValue || 0);

  const fillPct = Math.max(0, Math.min(100, pct * 100));
  budgetFill.style.width = `${fillPct}%`;
  budgetFill.classList.toggle('over', isOver);
  applyAllocationSort();

  return { used, total, currentPortfolio: currentInvested, pct, isOver, tolerance };
}

function applyPreview(preview) {
  if (!preview) return;
  previewState = {
    portfolioValue: preview.portfolioValue || 0,
    prices: preview.prices || {},
    date: preview.date || null
  };
  updateBudgetPreview();
}

function resetRowTargetsToCurrentHoldings() {
  const rows = [...allocationRows.querySelectorAll('.alloc-row')];
  rows.forEach((row) => {
    const symbol = row.dataset.symbol;
    row.dataset.targetDollars = String(Math.max(0, getHoldingValue(symbol)));
    row.dataset.manualTarget = '0';
  });
}

function renderPeriodInsights(insights) {
  if (!insights) {
    periodCards.innerHTML = '';
    holdingsTable.innerHTML = '';
    latestInsights = null;
    marketBriefReqSeq += 1;
    marketSearchReqSeq += 1;
    clearBriefingSearchResults();
    setBriefingSearchStatus('Search any asset for period performance, earnings timing, and headlines at this simulation step.');
    holdingTrendBySymbol = {};
    assetReasonBySymbol = {};
    drawCompactTimeflowChart(timeflowChart, timeflowSeries);
    buildMovementCommentary(null);
    filterAllocationRows();
    renderCashFloat(simulationState?.cash || 0, previewState.portfolioValue || 0);
    renderActionCashBar(simulationState?.cash || 0, previewState.portfolioValue || 0);
    updateOverallPnLGlow();
    return;
  }

  const prevInsights = latestInsights;
  const incomingHoldings = Array.isArray(insights.holdings) ? insights.holdings : [];
  const mergedHoldings = [...incomingHoldings];
  const liveSymbolSet = new Set(mergedHoldings.map((h) => String(h.symbol || '')));

  // Persist sold/closed rows in the "What Happened" table until the simulation ends.
  mergedHoldings.forEach((h) => {
    const symbol = String(h.symbol || '');
    if (!symbol) return;
    const isClosed = !!h.closed || Number(h.quantity || 0) <= 1e-10;
    const hasHistory = Number(h.firstBuyPrice || 0) > 0 || Number(h.realizedProfit || 0) !== 0;
    const firstBuyFallback = Number(simulationState?.firstBuyPrice?.[symbol] || 0);
    if (isClosed && hasHistory) {
      closedHoldingsCache[symbol] = {
        symbol,
        quantity: 0,
        price: 0,
        value: 0,
        weight: 0,
        avgBuyPrice: 0,
        firstBuyPrice: Number(h.firstBuyPrice || firstBuyFallback || 0),
        realizedProfit: Number(h.realizedProfit || 0),
        closed: true
      };
    }
  });

  Object.entries(closedHoldingsCache).forEach(([symbol, entry]) => {
    if (liveSymbolSet.has(symbol)) return;
    mergedHoldings.push({ ...entry, closed: true });
  });

  const prevHoldingsMap = Object.fromEntries((prevInsights?.holdings || []).map((h) => [h.symbol, h]));
  const prevValueMap = Object.fromEntries((latestInsights?.holdings || []).map((h) => [h.symbol, Number(h.value || 0)]));
  const nextValueMap = Object.fromEntries((mergedHoldings || []).map((h) => [h.symbol, Number(h.value || 0)]));
  const symbols = new Set([
    ...Object.keys(prevValueMap),
    ...Object.keys(nextValueMap),
    ...((simulationState?.symbols || []).map((s) => String(s)))
  ]);
  const nextTrend = {};
  const nextReasons = {};
  const assetMetaById = Object.fromEntries((simulationState?.assets || []).map((a) => [String(a.id), a]));
  const periodStart = prevInsights?.date || insights.sinceDate || null;
  const periodEnd = insights.date || null;
  const periodLabel = periodStart && periodEnd ? `${periodStart} to ${periodEnd}` : periodEnd || periodStart || 'this period';
  symbols.forEach((symbol) => {
    const prev = Number(prevValueMap[symbol] || 0);
    const curr = Number(nextValueMap[symbol] || 0);
    if (curr > prev + 0.01) nextTrend[symbol] = 1;
    else if (curr < prev - 0.01) nextTrend[symbol] = -1;
    else nextTrend[symbol] = 0;

    const currentHolding = (mergedHoldings || []).find((h) => h.symbol === symbol) || null;
    const prevHolding = prevHoldingsMap[symbol] || null;
    const prevPrice = Number(prevHolding?.price || 0);
    const currPrice = Number(currentHolding?.price || 0);
    const prevQty = Number(prevHolding?.quantity || 0);
    const currQty = Number(currentHolding?.quantity || 0);
    const priceRet = prevPrice > 0 ? currPrice / prevPrice - 1 : 0;
    const qtyDelta = currQty - prevQty;
    const meta = assetMetaById[String(symbol)] || {};
    const type = String(meta.type || '').toLowerCase();

    if (currQty <= 1e-10 && prevQty > 1e-10) {
      nextReasons[symbol] = `From ${periodLabel}, you fully exited this position, so value moved to zero after selling.`;
    } else if (type === 'cash') {
      if (Math.abs(qtyDelta) > 1e-8) {
        nextReasons[symbol] = `From ${periodLabel}, cash value changed because you moved money in/out, not from market price changes.`;
      } else {
        nextReasons[symbol] = `From ${periodLabel}, cash stayed stable because cash does not track market price moves.`;
      }
    } else if (type === 'savings') {
      if (Math.abs(qtyDelta) > 1e-8) {
        nextReasons[symbol] = `From ${periodLabel}, savings changed from your deposits/withdrawals plus small interest accrual.`;
      } else {
        nextReasons[symbol] = `From ${periodLabel}, savings moved gradually due to interest accrual rather than market volatility.`;
      }
    } else if (Math.abs(priceRet) > 0.0005) {
      const moveWord = priceRet > 0 ? 'rose' : 'fell';
      const valueWord = priceRet > 0 ? 'up' : 'down';
      const tradeImpact = Math.abs(qtyDelta) > 1e-8
        ? qtyDelta > 0
          ? ' You bought more units, which amplified that move.'
          : ' You sold units, which reduced your exposure during that move.'
        : '';
      const structureImpact = type === 'leverage'
        ? ' This leveraged product magnifies underlying market swings.'
        : type === 'option'
        ? ' This option-like product is highly sensitive to market moves and decay.'
        : '';
      nextReasons[symbol] = `From ${periodLabel}, market price ${moveWord} ${toPercent(Math.abs(priceRet))}, pushing your position ${valueWord}.${tradeImpact}${structureImpact}`;
    } else if (Math.abs(qtyDelta) > 1e-8) {
      nextReasons[symbol] = qtyDelta > 0
        ? `From ${periodLabel}, value increased mainly because you bought more units while market price stayed mostly flat.`
        : `From ${periodLabel}, value decreased mainly because you sold units while market price stayed mostly flat.`;
    } else {
      nextReasons[symbol] = `From ${periodLabel}, there was no material market move and no position change.`;
    }
  });
  holdingTrendBySymbol = nextTrend;
  assetReasonBySymbol = nextReasons;

  latestInsights = { ...insights, holdings: mergedHoldings };
  if (insights.date) {
    const point = { date: insights.date, value: Number(insights.portfolioValue || 0) };
    const idx = timeflowSeries.findIndex((x) => x.date === point.date);
    if (idx >= 0) timeflowSeries[idx] = point;
    else timeflowSeries.push(point);
    timeflowSeries.sort((a, b) => (a.date < b.date ? -1 : 1));
    drawCompactTimeflowChart(timeflowChart, timeflowSeries);
  }

  const toChangeMeta = (current, previous, epsilon = 1e-9) => {
    if (!Number.isFinite(previous)) return null;
    const diff = Number(current || 0) - Number(previous || 0);
    const cls = diff > epsilon ? 'up' : diff < -epsilon ? 'down' : 'flat';
    const arrow = cls === 'up' ? '↑' : cls === 'down' ? '↓' : '→';
    let pct = 0;
    if (Math.abs(previous || 0) > epsilon) pct = diff / Math.abs(previous);
    else if (Math.abs(current || 0) > epsilon) pct = Math.sign(diff || current);
    return { cls, arrow, pct };
  };
  const renderChange = (current, previous, epsilon = 1e-9) => {
    const meta = toChangeMeta(current, previous, epsilon);
    if (!meta) return '<span class="change-chip flat">-</span>';
    const sign = meta.pct > 0 ? '+' : meta.pct < 0 ? '-' : '';
    return `<span class="change-chip ${meta.cls}">${meta.arrow} ${sign}${toPercent(Math.abs(meta.pct))}</span>`;
  };

  const prevPeriodReturn = Number(prevInsights?.periodReturn);
  const prevPortfolioValue = Number(prevInsights?.portfolioValue);
  const prevCash = Number(prevInsights?.cash);
  periodCards.innerHTML = [
    ['Period Return', toPercent(insights.periodReturn || 0), insights.periodReturn || 0, prevPeriodReturn],
    ['Current Value', toCurrency(insights.portfolioValue || 0), insights.portfolioValue || 0, prevPortfolioValue],
    ['Cash', toCurrency(insights.cash || 0), insights.cash || 0, prevCash]
  ]
    .map(([label, valueText, currentVal, prevVal]) => `<div class="metric-card"><div class="metric-label">${label}</div><div class="metric-value">${valueText}</div><div class="metric-delta">${renderChange(currentVal, prevVal, 1e-6)}</div></div>`)
    .join('');

  const rows = (mergedHoldings || [])
    .filter((h) => !!h.closed || Number(h.value || 0) > 0.01 || Math.abs(Number(h.realizedProfit || 0)) > 0.005 || Number(h.quantity || 0) > 1e-8)
    .map((h) => {
      const currentValue = Number(h.value || 0);
      const qty = Number(h.quantity || 0);
      const avgBuy = Number(h.avgBuyPrice || 0);
      const costBasis = Math.max(0, avgBuy * qty);
      const realizedProfit = Number(h.realizedProfit || 0);
      const profit = currentValue - costBasis + realizedProfit;
      const avgBoughtPrice = Number(avgBuy || 0);
      const profitClass = profit > 0.01 ? 'up' : profit < -0.01 ? 'down' : 'flat';
      const prev = prevHoldingsMap[h.symbol] || null;
      const prevQty = Number(prev?.quantity);
      const prevPrice = Number(prev?.price);
      const prevValue = Number(prev?.value);
      const prevWeight = Number(prev?.weight);
      const prevAvgBuy = Number(prev?.avgBuyPrice || 0);
      const prevRealized = Number(prev?.realizedProfit || 0);
      const prevCostBasis = Number.isFinite(prevQty) ? Math.max(0, prevAvgBuy * prevQty) : NaN;
      const prevProfit = Number.isFinite(prevValue) ? prevValue - prevCostBasis + prevRealized : NaN;
      return `<div class="holdings-row"><div>${escapeHtml(getAssetDisplayName(h.symbol))} <span class="muted-inline">(${escapeHtml(h.symbol)})</span></div><div><div>${toCurrency(h.price || 0)}</div><div class="cell-delta">${renderChange(h.price || 0, prevPrice, 1e-9)}</div></div><div>${avgBoughtPrice > 0 ? toCurrency(avgBoughtPrice) : '-'}</div><div><div>${qty.toFixed(2)}</div><div class="cell-delta">${renderChange(qty, prevQty, 1e-9)}</div></div><div><div>${toCurrency(currentValue)}</div><div class="cell-delta">${renderChange(currentValue, prevValue, 1e-6)}</div></div><div><span class="holdings-change ${profitClass}">${profit >= 0 ? '+' : '-'}${toCurrency(Math.abs(profit))}</span><div class="cell-delta">${renderChange(profit, prevProfit, 1e-6)}</div></div><div><div>${toPercent(h.weight || 0)}</div><div class="cell-delta">${renderChange(h.weight || 0, prevWeight, 1e-9)}</div></div></div>`;
    })
    .join('');

  holdingsTable.innerHTML = `<div class="holdings-table"><div class="holdings-head"><div>Asset</div><div>Price</div><div>Average Bought Price</div><div>Qty</div><div>Value</div><div>Profit</div><div>Weight</div></div>${rows || '<div class="holdings-row"><div>No positions</div><div>-</div><div>-</div><div>-</div><div>-</div><div>-</div><div>-</div></div>'}</div>`;
  buildMovementCommentary(insights, prevInsights);
  enrichCommentaryWithMarketIntel(insights).catch(() => {});
  // Repaint per-row profit/metrics using the just-updated latestInsights snapshot.
  updateBudgetPreview();
  filterAllocationRows();
  renderCashFloat(insights.cash || 0, insights.portfolioValue || previewState.portfolioValue || 0);
  renderActionCashBar(insights.cash || 0, insights.portfolioValue || previewState.portfolioValue || 0);
  updateOverallPnLGlow();
}

function setAllRowsToWeight(targetWeights) {
  const rows = [...allocationRows.querySelectorAll('.alloc-row')];
  const total = previewState.portfolioValue || 0;
  rows.forEach((row) => {
    const symbol = row.dataset.symbol;
    const w = Math.max(0, Number(targetWeights[symbol] || 0));
    setRowAdjusting(row, true);
    row.dataset.targetDollars = String(w * total);
    row.dataset.manualTarget = '1';
  });
  updateBudgetPreview();
}

function applyEqualSplit() {
  const rows = [...allocationRows.querySelectorAll('.alloc-row')];
  if (!rows.length) return;
  const w = 1 / rows.length;
  const map = Object.fromEntries(rows.map((row) => [row.dataset.symbol, w]));
  setAllRowsToWeight(map);
}

function applyNormalizeTo100() {
  const targets = collectTargets();
  const rows = [...allocationRows.querySelectorAll('.alloc-row')];
  if (!rows.length) return;

  const total = Object.values(targets)
    .filter((t) => t.mode === 'dollars')
    .reduce((s, t) => s + t.value, 0);

  if (total <= 0) return applyEqualSplit();

  const scaled = {};
  rows.forEach((row) => {
    const symbol = row.dataset.symbol;
    const t = targets[symbol];
    scaled[symbol] = t.mode === 'dollars' ? t.value / total : 0;
  });
  setAllRowsToWeight(scaled);
}

function applyCurrentMix() {
  if (!latestInsights?.holdings?.length) return;
  const weights = {};
  latestInsights.holdings.forEach((h) => {
    weights[h.symbol] = h.weight || 0;
  });
  setAllRowsToWeight(weights);
}

function clearTargets() {
  const rows = [...allocationRows.querySelectorAll('.alloc-row')];
  rows.forEach((row) => {
    setRowAdjusting(row, true);
    row.dataset.targetDollars = String(Math.max(0, getHoldingValue(row.dataset.symbol)));
    row.dataset.manualTarget = '0';
  });
  updateBudgetPreview();
}

function getSelectedBenchmarks() {
  const values = selectedBenchmarks.map((x) => String(x || '').trim().toUpperCase()).filter(Boolean);
  return values;
}

function optionLabelForBenchmark(symbol) {
  if (!benchmarkSelect) return symbol;
  const opt = [...benchmarkSelect.options].find((o) => o.value === symbol);
  return opt ? opt.textContent : symbol;
}

function renderSelectedBenchmarks() {
  if (!benchmarkChosen) return;
  if (!selectedBenchmarks.length) {
    benchmarkChosen.innerHTML = '<div class="asset-empty">No benchmark selected.</div>';
    renderChartBenchmarkFilterOptions();
    if (simulationState?.simulationId) updateTimeflowComparisonChart().catch(() => {});
    refreshSetupSummary();
    return;
  }
  benchmarkChosen.innerHTML = selectedBenchmarks
    .map((sym) => `<div class="asset-chip"><span>${optionLabelForBenchmark(sym)}</span><button type="button" data-bm-remove="${sym}">Remove</button></div>`)
    .join('');
  renderChartBenchmarkFilterOptions();
  if (simulationState?.simulationId) updateTimeflowComparisonChart().catch(() => {});
  refreshSetupSummary();
}

function renderChartBenchmarkFilterOptions(extraSymbols = []) {
  if (!chartBenchmarkFilter) return;
  const previous = String(chartBenchmarkFilter.value || 'all');
  const selected = getSelectedBenchmarks();
  const extra = (Array.isArray(extraSymbols) ? extraSymbols : []).map((x) => String(x || '').trim().toUpperCase()).filter(Boolean);
  const symbols = [...new Set([...selected, ...extra])];
  const options = ['<option value="all">All Selected Indexes</option>', '<option value="none">Portfolio Only</option>'];
  symbols.forEach((sym) => {
    options.push(`<option value="${escapeHtml(sym)}">${escapeHtml(optionLabelForBenchmark(sym))}</option>`);
  });
  chartBenchmarkFilter.innerHTML = options.join('');
  if (previous && [...chartBenchmarkFilter.options].some((o) => o.value === previous)) {
    chartBenchmarkFilter.value = previous;
  } else {
    chartBenchmarkFilter.value = symbols.length ? 'all' : 'none';
  }
  chartBenchmarkFilter.disabled = symbols.length === 0;
}

function stopTimeflowAnimation() {
  if (timeflowAnimFrame) {
    cancelAnimationFrame(timeflowAnimFrame);
    timeflowAnimFrame = 0;
  }
}

function sliceSeriesByProgress(points, progress) {
  const series = Array.isArray(points) ? points : [];
  if (series.length < 2) return series;
  const p = Math.max(0, Math.min(1, Number(progress || 0)));
  if (p >= 0.9999) return series;
  const pos = p * (series.length - 1);
  const idx = Math.floor(pos);
  const frac = pos - idx;
  const out = series.slice(0, idx + 1);
  const left = series[idx];
  const right = series[Math.min(series.length - 1, idx + 1)];
  if (right && frac > 1e-6) {
    out.push({
      date: right.date,
      value: Number(left.value || 0) + (Number(right.value || 0) - Number(left.value || 0)) * frac
    });
  } else if (out.length < 2) {
    out.push({ ...right });
  }
  return out.length >= 2 ? out : series.slice(0, 2);
}

function drawTimeflowComparisonAnimated(portfolioSeries, benchmarkSeries, options = {}) {
  const portfolio = Array.isArray(portfolioSeries) ? portfolioSeries : [];
  const benchmarks = Array.isArray(benchmarkSeries) ? benchmarkSeries : [];
  if (portfolio.length < 2) return;

  stopTimeflowAnimation();
  const animate = !!options.animate;
  const startProgress = Math.max(0, Math.min(1, Number(options.startProgress || 0)));
  if (!animate || startProgress >= 0.9999) {
    drawComparisonChart(timeflowChart, portfolio, benchmarks, timeflowLegend, options.chartOptions || {});
    return;
  }

  const durationMs = Math.max(420, Number(options.durationMs || 760));
  const t0 = performance.now();
  const easeOutCubic = (t) => 1 - (1 - t) ** 3;

  const tick = (now) => {
    const t = Math.max(0, Math.min(1, (now - t0) / durationMs));
    const progress = startProgress + (1 - startProgress) * easeOutCubic(t);
    const pSeries = sliceSeriesByProgress(portfolio, progress);
    const bSeries = benchmarks
      .map((s) => ({ symbol: s.symbol, points: sliceSeriesByProgress(s.points || [], progress) }))
      .filter((s) => Array.isArray(s.points) && s.points.length >= 2);
    drawComparisonChart(timeflowChart, pSeries, bSeries, timeflowLegend, options.chartOptions || {});
    if (t < 1) {
      timeflowAnimFrame = requestAnimationFrame(tick);
    } else {
      timeflowAnimFrame = 0;
      drawComparisonChart(timeflowChart, portfolio, benchmarks, timeflowLegend, options.chartOptions || {});
    }
  };

  timeflowAnimFrame = requestAnimationFrame(tick);
}

function pushTimeflowEvent(text) {
  // Event log display removed for simpler UI.
  return;
}

function renderTimeflow() {
  if (!simulationState) {
    if (timeflowLabel) timeflowLabel.textContent = 'Time Progress: 0 / 0';
    if (timeflowPercent) timeflowPercent.textContent = '0.00%';
    if (timeflowFill) timeflowFill.style.width = '0%';
    if (floatingTimeLabel) floatingTimeLabel.textContent = 'Time Progress: 0 / 0';
    if (floatingTimePercent) floatingTimePercent.textContent = '0.00%';
    if (floatingTimeFill) floatingTimeFill.style.width = '0%';
    if (floatingTimeTicks) floatingTimeTicks.textContent = '';
    if (timeflowTicks) timeflowTicks.textContent = '';
    if (timeflowEvents) timeflowEvents.textContent = '';
    if (timeflowLegend) timeflowLegend.innerHTML = '';
    drawCompactTimeflowChart(timeflowChart, []);
    renderActionTimeBar(0);
    return;
  }

  if (replayFrames.length >= 2 && replayStartSimMs > 0 && replayEndSimMs > replayStartSimMs) {
    const ratio = Math.max(0, Math.min(1, getReplayRatio()));
    const pct = ratio * 100;
    const start = toIsoDateUtc(replayStartSimMs);
    const now = toIsoDateUtc(replayCurrentTs || replayStartSimMs);
    const end = toIsoDateUtc(replayEndSimMs);

    if (timeflowLabel) timeflowLabel.textContent = `Time Progress: ${now}`;
    if (timeflowPercent) timeflowPercent.textContent = `${pct.toFixed(2)}%`;
    if (timeflowFill) timeflowFill.style.width = `${pct}%`;
    if (floatingTimeLabel) floatingTimeLabel.textContent = `Time Progress: ${now}`;
    if (floatingTimePercent) floatingTimePercent.textContent = `${pct.toFixed(2)}%`;
    if (floatingTimeFill) floatingTimeFill.style.width = `${pct}%`;
    if (floatingTimeTicks) floatingTimeTicks.innerHTML = `<span>Start: ${start}</span><span>Current: ${now}</span><span>End: ${end}</span>`;
    renderActionTimeBar(pct);
    if (timeflowTicks) timeflowTicks.innerHTML = `<span>Start: ${start}</span><span>Current: ${now}</span><span>End: ${end}</span>`;
    if (timeflowEvents) timeflowEvents.textContent = '';
    return;
  }

  const total = Math.max(1, Number(simulationState.totalSteps || 1));
  const completed = Math.max(0, Number(simulationState.stepIndex || 0));
  const ended = !hasRemainingSteps() || completed >= total;
  const shownCompleted = ended ? total : Math.min(completed, total);
  const pct = Math.max(0, Math.min(100, (shownCompleted / total) * 100));
  const unit = simulationState.frequency === 'daily' ? 'days' : simulationState.frequency === 'weekly' ? 'weeks' : 'months';

  if (timeflowLabel) timeflowLabel.textContent = `Time Progress: ${shownCompleted} / ${total} ${unit}`;
  if (timeflowPercent) timeflowPercent.textContent = `${pct.toFixed(2)}%`;
  if (timeflowFill) timeflowFill.style.width = `${pct}%`;
  if (floatingTimeLabel) floatingTimeLabel.textContent = `Time Progress: ${shownCompleted} / ${total} ${unit}`;
  if (floatingTimePercent) floatingTimePercent.textContent = `${pct.toFixed(2)}%`;
  if (floatingTimeFill) floatingTimeFill.style.width = `${pct}%`;
  renderActionTimeBar(pct);

  const currentDate = String(latestInsights?.date || previewState?.date || simulationState.startDate || '-');
  const start = simulationState.startDate || '-';
  const end = simulationState.endDate || '-';
  if (timeflowTicks) timeflowTicks.innerHTML = `<span>Start: ${start}</span><span>Current: ${currentDate}</span><span>End: ${end}</span>`;
  if (floatingTimeTicks) floatingTimeTicks.innerHTML = `<span>Start: ${start}</span><span>Current: ${currentDate}</span><span>End: ${end}</span>`;
  if (timeflowEvents) timeflowEvents.textContent = '';
  drawCompactTimeflowChart(timeflowChart, timeflowSeries);
}

function syncAllocationRowsWithAssets(assets = []) {
  const desired = (assets || []).map((a) => a.id).sort();
  const current = [...allocationRows.querySelectorAll('.alloc-row')].map((r) => r.dataset.symbol).sort();
  if (desired.length !== current.length) {
    renderAllocationRows(assets || []);
    return;
  }
  for (let i = 0; i < desired.length; i += 1) {
    if (desired[i] !== current[i]) {
      renderAllocationRows(assets || []);
      return;
    }
  }
}

async function refreshSimulationState() {
  if (!simulationState?.simulationId) return;
  const state = await apiGet(`/api/simulations/${simulationState.simulationId}`);
  simulationState = { ...simulationState, ...state };
  syncAllocationRowsWithAssets(state.assets || []);
  populateTradeSymbols();
  if (state.preview) applyPreview(state.preview);
  renderPeriodInsights(state.previewInsights || null);
  updateSimPanel();
  renderTimeflow();
  await updateTimeflowComparisonChart();
}

function updateSimPanel() {
  if (!simulationState) {
    simPanel.classList.add('hidden');
    simFloatingActions?.classList.add('hidden');
    updateFloatingActionDockState();
    stopAutoPlay(true);
    stopReplay(true);
    if (autoPlayBtn) autoPlayBtn.disabled = true;
    if (finishBtn) finishBtn.disabled = true;
    if (replayToggleBtn) replayToggleBtn.disabled = true;
    renderCashFloat(0, 0);
    renderActionCashBar(0, 0);
    if (investorTypeBtn) investorTypeBtn.disabled = true;
    stopPeriodDecisionTimer(true);
    return;
  }

  simPanel.classList.remove('hidden');
  if (slideGame?.classList.contains('active')) simFloatingActions?.classList.remove('hidden');
  else simFloatingActions?.classList.add('hidden');
  updateFloatingActionDockState();
  if (simTitle) simTitle.textContent = '';

  const finishedByDate = hasReachedEndDate();
  const canAdvance = hasRemainingSteps();

  if (canAdvance) {
    const stepLabel = `Step ${Math.min((simulationState.stepIndex || 0) + 1, simulationState.totalSteps || 1)} of ${simulationState.totalSteps || 1}`;
    simNextDate.textContent = `${stepLabel} | Next rebalance date: ${simulationState.nextRebalanceDate}`;
    periodTitle.textContent = `What Happened Since Last Rebalance (${simulationState.nextRebalanceDate})`;
    rebalanceBtn.textContent = 'Advance to Next Period';
    rebalanceBtn.disabled = false;
    finishBtn.disabled = false;
    if (autoPlayBtn) autoPlayBtn.disabled = false;
    if (replayToggleBtn) replayToggleBtn.disabled = false;
    if (executeTradeBtn) executeTradeBtn.disabled = false;
    syncPeriodDecisionTimer();
  } else {
    simNextDate.textContent = finishedByDate
      ? `Simulation reached end date (${simulationState.endDate}). You can view results.`
      : 'No remaining rebalance dates. You can finish and analyze.';
    periodTitle.textContent = 'Current Period Snapshot';
    rebalanceBtn.textContent = 'View Result';
    rebalanceBtn.disabled = false;
    finishBtn.disabled = false;
    if (autoPlayBtn) autoPlayBtn.disabled = true;
    if (replayToggleBtn) replayToggleBtn.disabled = false;
    if (executeTradeBtn) executeTradeBtn.disabled = true;
    stopAutoPlay(true);
    stopPeriodDecisionTimer(true);
  }

  renderTimeflow();
  renderCashFloat(simulationState.cash || latestInsights?.cash || 0, previewState.portfolioValue || 0);
  renderActionCashBar(simulationState.cash || latestInsights?.cash || 0, previewState.portfolioValue || 0);
  updateOverallPnLGlow();
  if (investorTypeBtn) investorTypeBtn.disabled = hasRemainingSteps() && !latestFinalResult;
}

function updateOverallPnLGlow() {
  simPanel?.classList.remove('profit-glow', 'loss-glow');
  if (!simOuterCard) return;
  simOuterCard.classList.remove(
    'sim-profit-glow',
    'sim-loss-glow',
    'sim-ended-glow',
    'sim-ended-tone-calm',
    'sim-ended-tone-balanced',
    'sim-ended-tone-bold'
  );
  if (!simulationState) return;
  if (!slideGame?.classList.contains('active')) return;

  const total = Math.max(1, Number(simulationState.totalSteps || 1));
  const completed = Math.max(0, Number(simulationState.stepIndex || 0));
  const ended = !hasRemainingSteps() || completed >= total;
  if (ended) {
    simOuterCard.classList.add('sim-ended-glow');
    const tone = getInvestorTone(latestFinalResult?.investorProfile?.type || '');
    simOuterCard.classList.add(`sim-ended-tone-${tone}`);
  }

  const base = Number(simulationState.initialCash || 0);
  const current = Number(latestInsights?.portfolioValue ?? previewState?.portfolioValue ?? 0);
  if (!(base > 0) || !Number.isFinite(current)) return;

  const diff = current - base;
  if (diff > 0.01) simOuterCard.classList.add('sim-profit-glow');
  else if (diff < -0.01) simOuterCard.classList.add('sim-loss-glow');
}

function renderResultCards(result) {
  const totalReturn = Number(result.totalReturn || 0);
  const firstBenchmark = Array.isArray(result.benchmarkComparisons) ? result.benchmarkComparisons.find((b) => Number.isFinite(Number(b?.totalReturn))) : null;
  const edge = firstBenchmark ? totalReturn - Number(firstBenchmark.totalReturn) : NaN;
  const edgeClass = edge > 1e-10 ? 'up' : edge < -1e-10 ? 'down' : 'flat';
  const beatMessage = Number.isFinite(edge)
    ? edge > 1e-10
      ? `You beat ${firstBenchmark.symbol} by ${toSignedPercent(edge)}.`
      : edge < -1e-10
      ? `You trailed ${firstBenchmark.symbol} by ${toPercent(Math.abs(edge))}.`
      : `You matched ${firstBenchmark.symbol}.`
    : 'No benchmark with valid return was available for comparison.';

  if (resultEyebrow) resultEyebrow.textContent = 'Final Performance';
  if (resultHeadline) resultHeadline.textContent = 'Simulation Complete';
  if (resultSubline) {
    resultSubline.textContent = beatMessage;
  }
  if (resultEdgeChip) {
    resultEdgeChip.className = `result-edge-chip ${edgeClass}`;
    resultEdgeChip.textContent = Number.isFinite(edge)
      ? edge > 1e-10
        ? `Beat ${firstBenchmark.symbol} by ${toSignedPercent(edge)}`
        : edge < -1e-10
        ? `Trailed ${firstBenchmark.symbol} by ${toPercent(Math.abs(edge))}`
        : `Matched ${firstBenchmark.symbol}`
      : 'Edge: N/A';
  }

  const highlights = [
    ['Final Value', toCurrency(result.finalValue), 'flat'],
    ['Total Return', toSignedPercent(totalReturn), edgeClass],
    ['Index Outcome', Number.isFinite(edge) ? toSignedPercent(edge) : 'N/A', edgeClass]
  ];
  if (resultHighlights) {
    resultHighlights.innerHTML = highlights
      .map(([label, value, cls]) => `<div class="result-highlight ${cls}"><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></div>`)
      .join('');
  }

  const items = [
    ['CAGR', toPercent(result.cagr)],
    ['Max Drawdown', toPercent(result.maxDrawdown)],
    ['Volatility', toPercent(result.annualizedVolatility)],
    ['Fees Paid', toCurrency(result.feesPaid || 0)],
    ['Dividends Received', toCurrency(result.dividendsReceived || 0)],
    ['Rebalances Completed', String(result?.behavior?.rebalancesCompleted ?? 0)],
    ['Average Cash Ratio', toPercent(result?.behavior?.avgCashRatio || 0)]
  ];

  resultCards.innerHTML = items
    .map(([label, value]) => `<div class="metric-card"><div class="metric-label">${label}</div><div class="metric-value">${value}</div></div>`)
    .join('');
}

function renderProjectionCards(proj) {
  const projected = Number(proj.projectedReturnToEnd || 0);
  const edgeClass = projected > 1e-10 ? 'up' : projected < -1e-10 ? 'down' : 'flat';
  if (resultEyebrow) resultEyebrow.textContent = 'Live Projection';
  if (resultHeadline) resultHeadline.textContent = 'Result Preview';
  if (resultSubline) resultSubline.textContent = 'Forward projection from current state to simulation end date.';
  if (resultEdgeChip) {
    resultEdgeChip.className = `result-edge-chip ${edgeClass}`;
    resultEdgeChip.textContent = `Projected Return: ${toSignedPercent(projected)}`;
  }
  if (resultHighlights) {
    resultHighlights.innerHTML = [
      ['Current Value', toCurrency(proj.currentValue), 'flat'],
      ['Projected End Value', toCurrency(proj.projectedEndValue), 'flat'],
      ['Periods Remaining', String(proj.periodsRemaining || 0), 'flat']
    ]
      .map(([label, value, cls]) => `<div class="result-highlight ${cls}"><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></div>`)
      .join('');
  }

  const items = [
    ['Current Date', proj.currentDate],
    ['End Date', proj.endDate],
    ['Projected Return To End', toPercent(proj.projectedReturnToEnd || 0)],
    ['Current Value', toCurrency(proj.currentValue)],
    ['Projected End Value', toCurrency(proj.projectedEndValue)],
    ['Periods Remaining', String(proj.periodsRemaining || 0)],
    ['Frequency', String(simulationState?.frequency || '-')]
  ];

  resultCards.innerHTML = items
    .map(([label, value]) => `<div class="metric-card"><div class="metric-label">${label}</div><div class="metric-value">${value}</div></div>`)
    .join('');
}

function renderBenchmarkComparison(result) {
  const rows = Array.isArray(result.benchmarkComparisons) ? result.benchmarkComparisons : [];
  if (!rows.length) {
    benchmarkList.innerHTML = '<div class="metric-label">No benchmark data available.</div>';
    return;
  }

  const ours = Number(result.totalReturn || 0);
  benchmarkList.className = 'benchmark-list';
  benchmarkList.innerHTML = rows
    .map((b) => {
      const ret = b.totalReturn == null ? null : Number(b.totalReturn);
      const delta = ret == null ? null : ours - ret;
      const status = ret == null ? 'N/A' : toPercent(ret);
      const diff = delta == null ? 'N/A' : toSignedPercent(delta);
      const cls = delta == null ? 'flat' : delta > 1e-10 ? 'up' : delta < -1e-10 ? 'down' : 'flat';
      return `<div class="benchmark-row"><div><span class="benchmark-badge">${escapeHtml(b.symbol)}</span><small class="benchmark-caption">Benchmark Return</small></div><div class="benchmark-return">${escapeHtml(status)}</div><div class="benchmark-edge ${cls}">${escapeHtml(diff)}</div></div>`;
    })
    .join('');
}

function renderProjectionBenchmarkComparison(proj) {
  const rows = Array.isArray(proj.benchmarkProjection) ? proj.benchmarkProjection : [];
  if (!rows.length) {
    benchmarkList.innerHTML = '<div class="metric-label">No benchmark projection available.</div>';
    return;
  }

  const ours = Number(proj.projectedReturnToEnd || 0);
  benchmarkList.className = 'benchmark-list';
  benchmarkList.innerHTML = rows
    .map((b) => {
      const ret = b.projectedReturnToEnd == null ? null : Number(b.projectedReturnToEnd);
      const delta = ret == null ? null : ours - ret;
      const status = ret == null ? 'N/A' : toPercent(ret);
      const diff = delta == null ? 'N/A' : toSignedPercent(delta);
      const cls = delta == null ? 'flat' : delta > 1e-10 ? 'up' : delta < -1e-10 ? 'down' : 'flat';
      return `<div class="benchmark-row"><div><span class="benchmark-badge">${escapeHtml(b.symbol)}</span><small class="benchmark-caption">Projected Benchmark</small></div><div class="benchmark-return">${escapeHtml(status)}</div><div class="benchmark-edge ${cls}">${escapeHtml(diff)}</div></div>`;
    })
    .join('');
}

async function ensureFinalResult() {
  if (latestFinalResult?.investorProfile) return latestFinalResult;
  if (!simulationState?.simulationId) throw new Error('No simulation in progress.');
  if (hasRemainingSteps()) {
    throw new Error('Complete all rebalance periods first, then open analysis.');
  }
  const finalResult = await apiPost(`/api/simulations/${simulationState.simulationId}/finish`, {});
  latestFinalResult = finalResult;
  return finalResult;
}

async function updateTimeflowComparisonChart() {
  if (!simulationState?.simulationId) {
    stopTimeflowAnimation();
    drawCompactTimeflowChart(timeflowChart, []);
    if (timeflowLegend) timeflowLegend.innerHTML = '';
    timeflowDailyCache = [];
    timeflowDailyCacheEndDate = null;
    timeflowBenchmarkDailyCache = [];
    timeflowLastPortfolioPointCount = 0;
    timeflowLastEndDate = '';
    return;
  }

  const mode = String(fluctuationView?.value || (simulationState?.frequency === 'weekly' ? 'weekly' : 'daily'));
  const toWeekly = (series) => {
    const buckets = new Map();
    (series || []).forEach((p) => {
      const d = new Date(String(p.date) + 'T00:00:00Z');
      const day = d.getUTCDay();
      const mondayOffset = day === 0 ? -6 : 1 - day;
      const monday = new Date(d.getTime() + mondayOffset * 24 * 60 * 60 * 1000);
      const key = monday.toISOString().slice(0, 10);
      buckets.set(key, { date: p.date, value: p.value });
    });
    return [...buckets.values()].sort((a, b) => (a.date < b.date ? -1 : 1));
  };
  const toMonthly = (series) => {
    const buckets = new Map();
    (series || []).forEach((p) => {
      const d = new Date(String(p.date) + 'T00:00:00Z');
      const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
      buckets.set(key, { date: p.date, value: p.value });
    });
    return [...buckets.values()].sort((a, b) => (a.date < b.date ? -1 : 1));
  };
  const applyMode = (series) => {
    if (mode === 'weekly') return toWeekly(series);
    if (mode === 'monthly') return toMonthly(series);
    return series;
  };
  const getFilteredBenchmarks = (series) => {
    const rows = Array.isArray(series) ? series : [];
    const filter = String(chartBenchmarkFilter?.value || 'all');
    if (filter === 'none') return [];
    if (filter === 'all') return rows;
    return rows.filter((row) => String(row.symbol || '').toUpperCase() === filter.toUpperCase());
  };
  const renderCombinedChart = (portfolioDaily, benchmarkDaily) => {
    const plottedPortfolio = applyMode(portfolioDaily || []);
    if (plottedPortfolio.length < 2) return false;
    const plottedBenchmarks = getFilteredBenchmarks(benchmarkDaily || [])
      .map((row) => ({
        symbol: row.symbol,
        points: applyMode(Array.isArray(row.timeline) ? row.timeline : [])
      }))
      .filter((row) => row.points.length >= 2);
    const filterValue = String(chartBenchmarkFilter?.value || 'all');
    const modeValue = mode;
    const currentCount = plottedPortfolio.length;
    const isNewPeriod = !!timeflowLastEndDate && timeflowLastEndDate !== visibleEndDate;
    const canAnimateTail = isNewPeriod && currentCount > 2 && timeflowLastPortfolioPointCount > 1;
    const startProgress = canAnimateTail
      ? Math.max(0, Math.min(0.98, (timeflowLastPortfolioPointCount - 1) / Math.max(1, currentCount - 1)))
      : 0;
    const shouldAnimate = canAnimateTail && modeValue === timeflowLastMode && filterValue === timeflowLastFilter;

    const rebalanceDates = (timeflowSeries || []).map((p) => String(p.date || '')).filter(Boolean);
    drawTimeflowComparisonAnimated(plottedPortfolio, plottedBenchmarks, {
      animate: shouldAnimate,
      startProgress,
      durationMs: 760,
      chartOptions: { rebalanceDates, interactive: true }
    });
    timeflowLastPortfolioPointCount = currentCount;
    timeflowLastEndDate = visibleEndDate;
    timeflowLastMode = modeValue;
    timeflowLastFilter = filterValue;
    return true;
  };

  const visibleEndDate =
    String(
      latestInsights?.date ||
      previewState?.date ||
      simulationState?.nextRebalanceDate ||
      simulationState?.startDate ||
      simulationState?.endDate ||
      ''
    ).trim();

  if (timeflowDailyCache.length >= 2 && timeflowDailyCacheEndDate === visibleEndDate) {
    if (renderCombinedChart(timeflowDailyCache, timeflowBenchmarkDailyCache)) return;
  }
  try {
    const qs = visibleEndDate ? `?endDate=${encodeURIComponent(visibleEndDate)}` : '';
    const data = await apiGet(`/api/simulations/${simulationState.simulationId}/timeline${qs}`);
    const daily = Array.isArray(data?.timeline) ? data.timeline : [];
    const benchmarkDaily = Array.isArray(data?.benchmarkSeries)
      ? data.benchmarkSeries.map((row) => ({
          symbol: row.symbol,
          timeline: Array.isArray(row.timeline) ? row.timeline : []
        }))
      : [];
    renderChartBenchmarkFilterOptions(benchmarkDaily.map((row) => row.symbol));
    timeflowDailyCache = daily;
    timeflowBenchmarkDailyCache = benchmarkDaily;
    timeflowDailyCacheEndDate = String(data?.endDate || visibleEndDate || '').trim() || null;
    if (renderCombinedChart(daily, benchmarkDaily)) return;
  } catch (_error) {
    // Fall back to checkpoint chart below.
  }
  drawCompactTimeflowChart(timeflowChart, timeflowSeries);
  if (timeflowLegend) {
    timeflowLegend.innerHTML = '<span class="legend-item"><span class="legend-dot" style="background:#0f766e"></span>Portfolio</span>';
  }
}

function getScaledCanvasContext(canvas) {
  if (!canvas) return null;
  const rect = canvas.getBoundingClientRect();
  const cssW = Math.max(120, Math.floor(rect.width || canvas.clientWidth || canvas.width || 300));
  const attrH = Number(canvas.getAttribute('height') || 0);
  const cssH = Math.max(90, Math.floor(rect.height || attrH || canvas.clientHeight || canvas.height || 180));
  const dpr = Math.max(1.25, Math.min(3, window.devicePixelRatio || 1));
  const pxW = Math.floor(cssW * dpr);
  const pxH = Math.floor(cssH * dpr);

  if (canvas.width !== pxW || canvas.height !== pxH) {
    canvas.width = pxW;
    canvas.height = pxH;
  }

  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w: cssW, h: cssH };
}

function ensureComparisonTooltip(canvas) {
  if (!canvas) return null;
  const existing = comparisonChartTooltip.get(canvas);
  if (existing && existing.isConnected) return existing;
  const host = canvas.closest('.chart-card');
  if (!host) return null;
  host.classList.add('chart-card-interactive');
  const tip = document.createElement('div');
  tip.className = 'chart-hover-tip hidden';
  host.appendChild(tip);
  comparisonChartTooltip.set(canvas, tip);
  return tip;
}

function hideComparisonTooltip(canvas) {
  const tip = comparisonChartTooltip.get(canvas);
  if (!tip) return;
  tip.classList.add('hidden');
}

function bindComparisonChartInteraction(canvas) {
  if (!canvas || canvas.dataset.cmpInteractiveBound === '1') return;
  canvas.dataset.cmpInteractiveBound = '1';
  canvas.style.cursor = 'crosshair';

  canvas.addEventListener('mousemove', (e) => {
    const state = comparisonChartState.get(canvas);
    const tip = ensureComparisonTooltip(canvas);
    if (!state || !tip) return;
    const { pointsBySeries, pad, w, h } = state;
    const portfolio = pointsBySeries[0];
    if (!portfolio?.chartPoints?.length) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x < pad || x > w - pad || y < pad * 0.4 || y > h - pad * 0.1) {
      hideComparisonTooltip(canvas);
      return;
    }

    let bestIndex = 0;
    let bestDx = Infinity;
    portfolio.chartPoints.forEach((p, i) => {
      const dx = Math.abs(p.x - x);
      if (dx < bestDx) {
        bestDx = dx;
        bestIndex = i;
      }
    });

    const date = portfolio.points?.[bestIndex]?.date || portfolio.chartPoints?.[bestIndex]?.date || '-';
    const lines = pointsBySeries
      .map((s) => {
        const p = s.points?.[bestIndex] || s.points?.[s.points.length - 1];
        const value = p ? toCurrency(Number(p.value || 0)) : '-';
        const color = s.color || '#0f766e';
        return `<div class="chart-hover-line"><span class="dot" style="background:${color}"></span><span>${escapeHtml(s.name)}: ${escapeHtml(value)}</span></div>`;
      })
      .join('');
    tip.innerHTML = `<div class="chart-hover-date">${escapeHtml(date)}</div>${lines}`;

    const tipRect = tip.getBoundingClientRect();
    const offsetLeft = 12;
    const offsetTop = 12;
    let left = x + offsetLeft;
    let top = y + offsetTop;
    const maxLeft = rect.width - tipRect.width - 8;
    const maxTop = rect.height - tipRect.height - 8;
    if (left > maxLeft) left = Math.max(8, x - tipRect.width - 10);
    if (top > maxTop) top = Math.max(8, y - tipRect.height - 10);
    tip.style.left = `${left}px`;
    tip.style.top = `${top}px`;
    tip.classList.remove('hidden');
  });

  canvas.addEventListener('mouseleave', () => {
    hideComparisonTooltip(canvas);
  });
}

function buildChartPoints(series, pad, w, h, min, range) {
  return series.map((p, i) => {
    const x = pad + ((w - pad * 2) * i) / Math.max(1, series.length - 1);
    const y = h - pad - ((p.value - min) / range) * (h - pad * 2);
    return { x, y, value: Number(p.value || 0), date: String(p.date || '') };
  });
}

function drawLineChart(canvas, series) {
  if (!canvas || !Array.isArray(series) || series.length < 2) return;

  const scaled = getScaledCanvasContext(canvas);
  if (!scaled) return;
  const { ctx, w, h } = scaled;
  const pad = 34;
  ctx.clearRect(0, 0, w, h);

  const values = series.map((p) => p.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, 1);
  const points = buildChartPoints(series, pad, w, h, min, range);

  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#f8fcff');
  bg.addColorStop(1, '#ffffff');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = '#e5eaf2';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i += 1) {
    const y = pad + ((h - pad * 2) * i) / 4;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(w - pad, y);
    ctx.stroke();
  }

  const area = ctx.createLinearGradient(0, pad, 0, h - pad);
  area.addColorStop(0, 'rgba(15,118,110,0.24)');
  area.addColorStop(1, 'rgba(15,118,110,0.02)');
  ctx.beginPath();
  points.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.lineTo(points[points.length - 1].x, h - pad);
  ctx.lineTo(points[0].x, h - pad);
  ctx.closePath();
  ctx.fillStyle = area;
  ctx.fill();

  ctx.strokeStyle = '#0f766e';
  ctx.lineWidth = 2.8;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.beginPath();
  points.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.stroke();

  const lastPoint = points[points.length - 1];
  ctx.fillStyle = '#0f766e';
  ctx.beginPath();
  ctx.arc(lastPoint.x, lastPoint.y, 3.8, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#667085';
  ctx.font = '12px Manrope';
  ctx.fillText(toCurrency(min), 4, h - pad + 4);
  ctx.fillText(toCurrency(max), 4, pad + 4);
  ctx.fillText(series[0].date, pad, h - 8);
  ctx.fillText(series[series.length - 1].date, w - pad - 72, h - 8);
}

function drawComparisonChart(canvas, portfolioSeries, benchmarkSeries = [], legendElement = equityLegend, options = {}) {
  if (!canvas || !Array.isArray(portfolioSeries) || portfolioSeries.length < 2) return;
  const scaled = getScaledCanvasContext(canvas);
  if (!scaled) return;
  const { ctx, w, h } = scaled;
  const pad = 42;
  ctx.clearRect(0, 0, w, h);
  const rebalanceDateSet = new Set((options?.rebalanceDates || []).map((d) => String(d || '')));
  const formatShortDate = (value) => {
    const d = new Date(`${String(value || '')}T00:00:00Z`);
    if (Number.isNaN(d.getTime())) return String(value || '-');
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  const yTicks = 5;

  const allSeries = [{ name: 'Portfolio', points: portfolioSeries, color: '#0f766e' }];
  const palette = ['#2563eb', '#f59e0b', '#8b5cf6', '#ef4444', '#14b8a6', '#64748b', '#84cc16', '#ec4899'];
  (benchmarkSeries || []).forEach((s, i) => {
    if (Array.isArray(s.points) && s.points.length > 1) {
      allSeries.push({ name: s.symbol, points: s.points, color: palette[i % palette.length] });
    }
  });

  const values = allSeries.flatMap((s) => s.points.map((p) => p.value));
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, 1);
  const pointsBySeries = allSeries.map((s) => ({ ...s, chartPoints: buildChartPoints(s.points, pad, w, h, min, range) }));

  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#f8fcff');
  bg.addColorStop(1, '#ffffff');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = '#dfe8f5';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  for (let i = 0; i < yTicks; i += 1) {
    const y = pad + ((h - pad * 2) * i) / Math.max(1, yTicks - 1);
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(w - pad, y);
    ctx.stroke();

    const tickValue = max - ((max - min) * i) / Math.max(1, yTicks - 1);
    ctx.fillStyle = '#7a8698';
    ctx.font = '600 11px Manrope';
    ctx.fillText(toCurrency(tickValue), 6, y + 4);
  }
  ctx.setLineDash([]);

  const portfolio = pointsBySeries[0];
  if (portfolio?.chartPoints?.length > 1) {
    const area = ctx.createLinearGradient(0, pad, 0, h - pad);
    area.addColorStop(0, 'rgba(15,118,110,0.18)');
    area.addColorStop(1, 'rgba(15,118,110,0.01)');
    ctx.beginPath();
    portfolio.chartPoints.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.lineTo(portfolio.chartPoints[portfolio.chartPoints.length - 1].x, h - pad);
    ctx.lineTo(portfolio.chartPoints[0].x, h - pad);
    ctx.closePath();
    ctx.fillStyle = area;
    ctx.fill();
  }

  pointsBySeries.forEach((s) => {
    ctx.strokeStyle = s.color;
    ctx.lineWidth = s.name === 'Portfolio' ? 2.8 : 2;
    if (s.name !== 'Portfolio') ctx.setLineDash([7, 5]);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    if (s.name === 'Portfolio') {
      ctx.shadowColor = 'rgba(15, 118, 110, 0.18)';
      ctx.shadowBlur = 8;
    }
    ctx.beginPath();
    s.chartPoints.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;

    const last = s.chartPoints[s.chartPoints.length - 1];
    if (last) {
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(last.x, last.y, s.name === 'Portfolio' ? 3.6 : 2.8, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  const portfolioEntry = pointsBySeries[0];
  if (portfolioEntry?.chartPoints?.length && rebalanceDateSet.size) {
    portfolioEntry.chartPoints.forEach((p, i) => {
      const raw = portfolioEntry.points?.[i]?.date || p.date;
      if (!rebalanceDateSet.has(String(raw || ''))) return;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5.1, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3.3, 0, Math.PI * 2);
      ctx.fillStyle = '#0f766e';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6.7, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(15, 118, 110, 0.26)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });
  }

  const midIndex = Math.floor((portfolioSeries.length - 1) / 2);
  const xLabels = [
    { x: pad, align: 'left', text: formatShortDate(portfolioSeries[0]?.date) },
    { x: (w - pad + pad) / 2, align: 'center', text: formatShortDate(portfolioSeries[midIndex]?.date) },
    { x: w - pad, align: 'right', text: formatShortDate(portfolioSeries[portfolioSeries.length - 1]?.date) }
  ];
  ctx.fillStyle = '#667085';
  ctx.font = '600 11px Manrope';
  xLabels.forEach((lbl) => {
    ctx.textAlign = lbl.align;
    ctx.fillText(lbl.text, lbl.x, h - 12);
  });
  ctx.textAlign = 'left';

  if (legendElement) {
    legendElement.innerHTML = allSeries
      .map((s) => `<span class="legend-item"><span class="legend-dot" style="background:${s.color}"></span>${s.name}</span>`)
      .join('');
  }

  comparisonChartState.set(canvas, { pointsBySeries, pad, w, h });
  if (options?.interactive) bindComparisonChartInteraction(canvas);
  else hideComparisonTooltip(canvas);
}

function drawCompactTimeflowChart(canvas, series) {
  if (!canvas) return;
  const scaled = getScaledCanvasContext(canvas);
  if (!scaled) return;
  const { ctx, w, h } = scaled;
  const pad = 18;
  ctx.clearRect(0, 0, w, h);

  if (!Array.isArray(series) || series.length < 2) {
    ctx.fillStyle = '#98a2b3';
    ctx.font = '12px Manrope';
    ctx.fillText('Timeline chart updates as each period passes.', 16, h / 2);
    return;
  }

  const values = series.map((p) => p.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, 1);
  const points = buildChartPoints(series, pad, w, h, min, range);

  ctx.strokeStyle = '#eaf0f7';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 3; i += 1) {
    const y = pad + ((h - pad * 2) * i) / 3;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(w - pad, y);
    ctx.stroke();
  }

  const area = ctx.createLinearGradient(0, pad, 0, h - pad);
  area.addColorStop(0, 'rgba(15,118,110,0.2)');
  area.addColorStop(1, 'rgba(15,118,110,0.02)');
  ctx.beginPath();
  points.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.lineTo(points[points.length - 1].x, h - pad);
  ctx.lineTo(points[0].x, h - pad);
  ctx.closePath();
  ctx.fillStyle = area;
  ctx.fill();

  ctx.strokeStyle = '#0f766e';
  ctx.lineWidth = 2.4;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.beginPath();
  points.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.stroke();

  const last = points[points.length - 1];
  ctx.fillStyle = '#0f766e';
  ctx.beginPath();
  ctx.arc(last.x, last.y, 3.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#667085';
  ctx.font = '11px Manrope';
  ctx.fillText(series[0].date, pad, h - 4);
  ctx.fillText(series[series.length - 1].date, w - pad - 66, h - 4);
}

function drawDonutChart(canvas, weights, labelMap, options = {}) {
  if (!canvas) return;
  const scaled = getScaledCanvasContext(canvas);
  if (!scaled) return;
  const { ctx, w, h } = scaled;
  ctx.clearRect(0, 0, w, h);

  if (!weights) return;
  const entries = Object.entries(weights)
    .filter(([, wt]) => wt > 0.0001)
    .sort((a, b) => Number(b[1] || 0) - Number(a[1] || 0));
  const legendEl = options.legendEl || (canvas === setupPieChart ? setupPieLegend : null);
  const amountMap = options.amountMap || {};
  const totalValue = Number(options.totalValue || 0);
  const centerTop = String(options.centerTop || 'Final Mix');
  const centerBottom = String(options.centerBottom || `${entries.length} assets`);
  if (!entries.length) {
    ctx.fillStyle = '#98a2b3';
    ctx.font = '12px Manrope';
    ctx.textAlign = 'center';
    ctx.fillText('No allocation yet. Add assets to view mix.', w / 2, h / 2);
    ctx.textAlign = 'left';
    if (legendEl) legendEl.innerHTML = '';
    return;
  }

  const useExternalLegend = !!legendEl;
  const legendSpace = useExternalLegend ? 0 : Math.max(170, Math.min(260, w * 0.44));
  const chartSpace = Math.max(140, w - legendSpace - 12);
  const cx = useExternalLegend ? w / 2 : Math.min(chartSpace * 0.54, w * 0.34);
  const cy = h / 2;
  const r = useExternalLegend
    ? Math.max(78, Math.min(Math.min(w, h) * 0.34, 150))
    : Math.max(58, Math.min(110, Math.min(chartSpace, h) * 0.38));
  const inner = Math.max(44, r * 0.6);
  const colors = ['#0f766e', '#14b8a6', '#0891b2', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#64748b'];

  ctx.clearRect(0, 0, w, h);

  let start = -Math.PI / 2;
  entries.forEach(([symbol, weight], i) => {
    const angle = Math.PI * 2 * weight;
    ctx.beginPath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.arc(cx, cy, r, start, start + angle);
    ctx.arc(cx, cy, inner, start + angle, start, true);
    ctx.closePath();
    ctx.shadowColor = 'rgba(15, 23, 42, 0.08)';
    ctx.shadowBlur = 5;
    ctx.fill();
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.lineWidth = 1.3;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
    ctx.stroke();
    start += angle;
  });

  ctx.beginPath();
  ctx.arc(cx, cy, inner - 1, 0, Math.PI * 2);
  const centerBg = ctx.createRadialGradient(cx, cy, Math.max(5, inner * 0.2), cx, cy, inner + 2);
  centerBg.addColorStop(0, '#ffffff');
  centerBg.addColorStop(1, '#f3f8ff');
  ctx.fillStyle = centerBg;
  ctx.fill();
  ctx.strokeStyle = '#dbe7f8';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#64748b';
  ctx.font = '700 11px Manrope';
  ctx.textAlign = 'center';
  ctx.fillText(centerTop, cx, cy - 8);
  ctx.fillStyle = '#0f172a';
  ctx.font = '800 17px Manrope';
  ctx.fillText(centerBottom, cx, cy + 14);
  if (totalValue > 0) {
    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 11px Manrope';
    ctx.fillText(`Total ${toCurrency(totalValue)}`, cx, cy + 32);
  }
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';

  if (useExternalLegend && legendEl) {
    legendEl.innerHTML = entries
      .map(([symbol, weight], i) => {
        const label = labelMap[symbol] || symbol;
        const color = colors[i % colors.length];
        const amount = Number(amountMap[symbol] || 0);
        const amountText = amount > 0 ? toCurrency(amount) : '-';
        return `<span class="legend-item"><span class="legend-dot" style="background:${color}"></span><span class="legend-main">${escapeHtml(label)}</span><span class="legend-metrics">${toPercent(weight)} · ${amountText}</span></span>`;
      })
      .join('');
  } else {
    ctx.font = '12px Manrope';
    ctx.fillStyle = '#334155';
    const legendX = Math.max(cx + r + 18, w * 0.52);
    entries.forEach(([symbol, weight], i) => {
      const y = 26 + i * 18;
      ctx.fillStyle = colors[i % colors.length];
      ctx.fillRect(legendX, y - 8, 10, 10);
      ctx.fillStyle = '#334155';
      const label = labelMap[symbol] || symbol;
      ctx.fillText(`${label} ${toPercent(weight)}`, legendX + 16, y);
    });
  }
}

async function validateSetupAssetToken(token) {
  await apiPost('/api/assets/validate', { token });
  return { ok: true };
}

function getSetupAllocationSnapshot() {
  const cash = roundCurrency(Math.max(0, getInitialCashValue()));
  const plan = getSetupAllocationPlan();
  const allocated = roundCurrency(selectedAssets.reduce((sum, sym) => sum + getSetupAllocationDollars(sym, plan[sym]), 0));
  const estimatedFee = roundCurrency(estimateSetupFee(allocated));
  const totalSpend = roundCurrency(allocated + estimatedFee);
  const maxInvestable = getSetupMaxInvestable(cash);
  const affordable = totalSpend <= cash + 0.01;
  return {
    cash,
    allocated,
    estimatedFee,
    totalSpend,
    maxInvestable,
    affordable,
    investableLeft: Math.max(0, maxInvestable - allocated),
    cashLeft: Math.max(0, roundCurrency(cash - totalSpend)),
    plan
  };
}

async function openSetupAddAmountModal(token, matchInfo = null) {
  if (!token) return;
  const snap = getSetupAllocationSnapshot();
  const cashLeft = Math.max(0, Number(snap.investableLeft || 0));
  const existed = selectedAssets.includes(token);
  await refreshSetupPrices([token]);
  const unitPrice = Math.max(0, Number(setupPrices[token] || 0));
  const maxUnits = unitPrice > 0 ? cashLeft / unitPrice : null;

  ensureTradeAmountModal().open({
    title: `Add ${tokenToLabel(token)} to portfolio`,
    confirmLabel: 'Add',
    action: 'buy',
    max: cashLeft,
    maxUnits,
    unitPrice,
    supportsUnits: unitPrice > 0,
    mode: 'dollars',
    cash: cashLeft,
    currentValue: 0,
    baseTargetValue: 0,
    targetValue: 0,
    apply: ({ dollars, units, mode }) => {
      if (!selectedAssets.includes(token)) selectedAssets.push(token);
      const nextMode = String(mode) === 'units' ? 'units' : 'dollars';
      const nextValue = nextMode === 'units' ? Number(units || 0) : Number(dollars || 0);
      setupAllocations[token] = clampSetupAllocation(token, nextMode, nextValue);
      renderAssetList();
      printOutput({
        message: existed
          ? `${tokenToLabel(token)} updated.`
          : `Added ${tokenToLabel(token)}`,
        token,
        matched: matchInfo
      });
    }
  });
}

async function openSetupAdjustAmountModal(token) {
  if (!token) return;
  await refreshSetupPrices([token]);
  const snap = getSetupAllocationSnapshot();
  const current = setupAllocations[token] || { mode: 'dollars', value: 0 };
  const unitPrice = Math.max(0, Number(setupPrices[token] || 0));
  const currentDollars = current.mode === 'units' ? Math.max(0, Number(current.value || 0)) * unitPrice : Math.max(0, Number(current.value || 0));
  const maxDollars = Math.max(0, Number(snap.maxInvestable || 0) - Math.max(0, Number(snap.allocated || 0) - currentDollars));
  const maxUnits = unitPrice > 0 ? maxDollars / unitPrice : null;

  ensureTradeAmountModal().open({
    title: `Adjust ${tokenToLabel(token)}`,
    confirmLabel: 'Apply',
    action: 'buy',
    max: maxDollars,
    maxUnits,
    unitPrice,
    supportsUnits: unitPrice > 0,
    mode: current.mode === 'units' ? 'units' : 'dollars',
    cash: Math.max(0, Number(snap.cash || 0) - Math.max(0, Number(snap.allocated || 0) - currentDollars)),
    currentValue: currentDollars,
    baseTargetValue: currentDollars,
    targetValue: currentDollars,
    apply: ({ dollars, units, mode }) => {
      const nextMode = String(mode) === 'units' ? 'units' : 'dollars';
      const nextValue = nextMode === 'units' ? Number(units || 0) : Number(dollars || 0);
      setupAllocations[token] = clampSetupAllocation(token, nextMode, nextValue);
      renderSetupAllocationRows();
    }
  });
}

addAssetBtn?.addEventListener('click', async () => {
  try {
    addAssetBtn.disabled = true;
    addAssetBtn.textContent = 'Checking...';

    const raw = String(assetSymbol?.value || '').trim();
    if (!raw) throw new Error('Type an investment name or ticker.');
    let token = normalizeToken(raw);
    let matchInfo = null;
    if (!['CASH', 'SAVINGS'].includes(token) && !token.startsWith('BOND:') && !token.startsWith('LEVERAGE:') && !token.startsWith('CALL:')) {
      const built = await buildAssetTokenFromInputs('stock', raw, null);
      token = built.token;
      matchInfo = built.matchInfo;
    }
    await validateSetupAssetToken(token);
    await openSetupAddAmountModal(token, matchInfo);
    if (assetSymbol) {
      assetSymbol.value = '';
      assetSymbol.focus();
    }
  } catch (error) {
    printError(error.message);
  } finally {
    addAssetBtn.disabled = false;
    addAssetBtn.textContent = 'Add';
  }
});

simAddType?.addEventListener('change', updateSimAddControls);
simAddSymbol?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    simAddAssetBtn?.click();
  }
});
simAddAssetBtn?.addEventListener('click', async () => {
  if (!simulationState?.simulationId) return printError('Start simulation first.');
  try {
    simAddAssetBtn.disabled = true;
    simAddAssetBtn.textContent = 'Adding...';

    const built = await buildAssetTokenFromInputs(simAddType.value, simAddSymbol?.value, simAddMultiplier?.value);
    const token = built.token;
    const result = await apiPost(`/api/simulations/${simulationState.simulationId}/assets`, { token });
    if (result.preview) applyPreview(result.preview);
    if (result.previewInsights) renderPeriodInsights(result.previewInsights);
    await refreshSimulationState();
    if (simAddSymbol) simAddSymbol.value = '';
    printOutput({ message: `Added ${tokenToLabel(token)} to current simulation.` });
  } catch (error) {
    printError(error.message);
  } finally {
    simAddAssetBtn.disabled = false;
    simAddAssetBtn.textContent = 'Add Investment';
  }
});

setupAllocationRows?.addEventListener('click', (e) => {
  const decBtn = e.target.closest('button[data-setup-dec]');
  if (decBtn) {
    if (setupStepSuppressClick) {
      setupStepSuppressClick = false;
      return;
    }
    const token = String(decBtn.dataset.setupDec || '');
    applySetupStepChange(token, -1);
    return;
  }
  const incBtn = e.target.closest('button[data-setup-inc]');
  if (incBtn) {
    if (setupStepSuppressClick) {
      setupStepSuppressClick = false;
      return;
    }
    const token = String(incBtn.dataset.setupInc || '');
    applySetupStepChange(token, 1);
    return;
  }
  const adjustBtn = e.target.closest('button[data-adjust-alloc]');
  if (adjustBtn) {
    const token = String(adjustBtn.dataset.adjustAlloc || '');
    if (token) openSetupAdjustAmountModal(token).catch((error) => printError(error.message));
    return;
  }
  const btn = e.target.closest('button[data-remove-alloc]');
  if (!btn) return;
  const token = String(btn.dataset.removeAlloc || '');
  if (!token) return;
  selectedAssets = selectedAssets.filter((asset) => asset !== token);
  delete setupAllocations[token];
  delete setupPrices[token];
  renderAssetList();
});
setupAllocationRows?.addEventListener('pointerdown', (e) => {
  const decBtn = e.target.closest('button[data-setup-dec]');
  const incBtn = e.target.closest('button[data-setup-inc]');
  const btn = decBtn || incBtn;
  if (!btn) return;

  const token = String((decBtn ? decBtn.dataset.setupDec : incBtn?.dataset.setupInc) || '');
  if (!token) return;
  const direction = decBtn ? -1 : 1;
  clearSetupStepHold();
  setupStepSuppressClick = false;
  setupStepHoldTimeout = setTimeout(() => {
    setupStepSuppressClick = true;
    applySetupStepChange(token, direction);
    setupStepHoldInterval = setInterval(() => {
      applySetupStepChange(token, direction);
    }, 110);
  }, 260);
});
setupAllocationRows?.addEventListener('pointerup', clearSetupStepHold);
setupAllocationRows?.addEventListener('pointerleave', clearSetupStepHold);
setupAllocationRows?.addEventListener('pointercancel', clearSetupStepHold);
document.addEventListener('pointerup', clearSetupStepHold);
portfolioQuickPicks?.addEventListener('click', async (e) => {
  const btn = e.target.closest('button[data-quick-token]');
  if (!btn) return;
  try {
    const token = normalizeToken(btn.dataset.quickToken);
    await validateSetupAssetToken(token);
    await openSetupAddAmountModal(token, null);
  } catch (error) {
    printError(error.message);
  }
});
assetType?.addEventListener('change', updateAssetControls);

assetSymbol?.addEventListener('input', () => {
  const q = assetSymbol.value.trim();
  if (assetSearchTimer) clearTimeout(assetSearchTimer);
  if (!q || q.length < 2) {
    hideAssetSearchDropdown();
    return;
  }

  assetSearchTimer = setTimeout(async () => {
    try {
      assetSearchResults = await searchSymbolOptions(q, 'stock');
      assetSearchIndex = assetSearchResults.length ? 0 : -1;
      renderAssetSearchDropdown();
    } catch (_error) {
      hideAssetSearchDropdown();
    }
  }, 220);
});

assetSymbol?.addEventListener('keydown', (e) => {
  if (!assetSearchResults.length) return;
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    assetSearchIndex = Math.min(assetSearchResults.length - 1, assetSearchIndex + 1);
    renderAssetSearchDropdown();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    assetSearchIndex = Math.max(0, assetSearchIndex - 1);
    renderAssetSearchDropdown();
  } else if (e.key === 'Enter') {
    if (assetSearchIndex >= 0 && assetSearchIndex < assetSearchResults.length) {
      e.preventDefault();
      applyAssetSearchSelection(assetSearchResults[assetSearchIndex]);
    }
  } else if (e.key === 'Escape') {
    hideAssetSearchDropdown();
  }
});

assetSymbol?.addEventListener('blur', () => {
  setTimeout(() => hideAssetSearchDropdown(), 140);
});

assetSearchDropdown?.addEventListener('mousedown', (e) => {
  const btn = e.target.closest('button[data-search-index]');
  if (!btn) return;
  const idx = Number(btn.dataset.searchIndex);
  if (Number.isFinite(idx)) applyAssetSearchSelection(assetSearchResults[idx]);
});

simStartForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const startBtn = simStartForm.querySelector('button[type="submit"]');
  const startBtnLabel = startBtn ? String(startBtn.textContent || 'Start Simulation') : 'Start Simulation';
  try {
    if (startBtn) {
      startBtn.disabled = true;
      startBtn.textContent = 'Launching...';
    }
    if (!selectedAssets.length) throw new Error('Add at least one investment asset before starting.');
    const startDate = document.getElementById('simStartDate').value;
    const endDate = document.getElementById('simEndDate').value;
    if (!startDate || !endDate) throw new Error('Select both start and end dates.');
    if (startDate >= endDate) throw new Error('End date must be after start date.');

    const payload = {
      startDate,
      endDate,
      initialCash: getInitialCashValue(),
      frequency: document.getElementById('simFrequency').value,
      assets: selectedAssets,
      benchmarkSymbols: getSelectedBenchmarks()
    };

    simulationState = await apiPost('/api/simulations/start', payload);
    latestFinalResult = null;
    closedHoldingsCache = {};
    selectedBenchmarks = [...(simulationState.benchmarkSymbols || selectedBenchmarks)];
    renderSelectedBenchmarks();
    timeflowLog = [];
    timeflowSeries = [];
    timeflowDailyCache = [];
    timeflowDailyCacheEndDate = null;
    timeflowBenchmarkDailyCache = [];
    timeflowLastPortfolioPointCount = 0;
    timeflowLastEndDate = '';
    timeflowLastMode = 'weekly';
    timeflowLastFilter = 'all';
    stopTimeflowAnimation();
    renderAllocationRows(simulationState.assets || []);
    populateTradeSymbols();
    applyPreview(simulationState.preview || null);
    const hasSetup = applySetupAllocationToGameRows();
    if (!hasSetup) applyRandomStartingAllocation();
    renderPeriodInsights(simulationState.previewInsights || null);
    updateBudgetPreview();
    const initialTargets = collectTargets(true);
    const seeded = await postRebalanceWithBudgetGuard(simulationState.simulationId, initialTargets);
    simulationState.cash = Number(seeded.cash ?? simulationState.cash ?? 0);
    simulationState.nextRebalanceDate = seeded.nextRebalanceDate;
    simulationState.stepIndex = seeded.stepIndex;
    simulationState.totalSteps = seeded.totalSteps;
    if (seeded.nextPreview) applyPreview(seeded.nextPreview);
    renderPeriodInsights(seeded.nextPreviewInsights || null);
    // After initial buy-in, default plan should track current holdings.
    // This prevents forced sells when market value drops below setup dollars.
    resetRowTargetsToCurrentHoldings();
    updateBudgetPreview();
    await refreshSimulationState();
    resetRowTargetsToCurrentHoldings();
    updateBudgetPreview();
    await playStartTransition(1350);
    showSlide('game');

    printOutput({
      message: 'Simulation started with initial allocation applied.',
      nextRebalanceDate: simulationState.nextRebalanceDate,
      assets: (simulationState.assets || []).map((a) => a.label)
    });
    pushTimeflowEvent(`Simulation started at ${simulationState.startDate}. Initial allocation executed.`);
  } catch (error) {
    printError(error.message);
  } finally {
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.textContent = startBtnLabel;
    }
  }
});

executeTradeBtn?.addEventListener('click', async () => {
  if (!simulationState?.simulationId) return;
  try {
    const payload = {
      sellSymbol: tradeSellSymbol?.value,
      buySymbol: tradeBuySymbol?.value,
      sellAmount: Number(tradeSellAmount?.value || 0),
      buyAmount: Number(tradeBuyAmount?.value || 0),
      liquidateAll: !!tradeLiquidateAll?.checked
    };
    const result = await apiPost(`/api/simulations/${simulationState.simulationId}/trade`, payload);
    simulationState.cash = Number(result.cash ?? simulationState.cash ?? 0);
    if (result.holdings && typeof result.holdings === 'object') simulationState.holdings = result.holdings;
    if (result.costBasis && typeof result.costBasis === 'object') simulationState.costBasis = result.costBasis;
    if (result.firstBuyPrice && typeof result.firstBuyPrice === 'object') simulationState.firstBuyPrice = result.firstBuyPrice;
    if (result.realizedProfit && typeof result.realizedProfit === 'object') simulationState.realizedProfit = result.realizedProfit;
    if (Array.isArray(result.symbols)) simulationState.symbols = result.symbols;
    if (Array.isArray(result.assets)) {
      simulationState.assets = result.assets;
      syncAllocationRowsWithAssets(result.assets);
      populateTradeSymbols();
    }
    if (result.nextPreview) applyPreview(result.nextPreview);
    renderPeriodInsights(result.nextPreviewInsights || null);
    updateSimPanel();
    await updateTimeflowComparisonChart();

    printOutput({
      message: 'Trade executed.',
      date: result.date,
      soldValue: toCurrency(result.soldValue || 0),
      boughtValue: toCurrency(result.boughtValue || 0),
      feeTotal: toCurrency(result.feeTotal || 0),
      cash: toCurrency(result.cash || 0),
      portfolioValue: toCurrency(result.portfolioValue || 0)
    });
  } catch (error) {
    printError(error.message);
  }
});

rebalanceBtn?.addEventListener('click', async () => {
  try {
    if (simulationState && !hasRemainingSteps()) {
      finishBtn?.click();
      return;
    }
    await advanceSimulationPeriod(false);
  } catch (error) {
    printError(error.message);
  }
});

autoPlayBtn?.addEventListener('click', () => {
  if (autoPlayTimer) {
    stopAutoPlay(false);
    return;
  }
  startAutoPlay();
});
replayToggleBtn?.addEventListener('click', () => {
  if (replayTimer) {
    stopReplay(false);
    return;
  }
  startReplay();
});
replayDurationSelect?.addEventListener('change', () => {
  const seconds = Math.max(10, Number(replayDurationSelect.value || 120));
  replayDurationMs = seconds * 1000;
  replayElapsedMs = 0;
  if (replayFrames.length >= 2) {
    replayCurrentTs = replayStartSimMs;
    applyReplayTimestamp(replayStartSimMs);
    const start = replayFrames[0]?.date || simulationState?.startDate || '-';
    const end = replayFrames[replayFrames.length - 1]?.date || simulationState?.endDate || '-';
    setReplayStatus(`Replay: paused (${start} to ${end})`);
  } else {
    setReplayStatus('Replay: paused');
  }
});
fluctuationView?.addEventListener('change', () => {
  updateTimeflowComparisonChart().catch(() => {});
});
chartBenchmarkFilter?.addEventListener('change', () => {
  updateTimeflowComparisonChart().catch(() => {});
});
simQuickNav?.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-jump]');
  if (!btn) return;
  scrollToSimulationSection(String(btn.dataset.jump || ''));
});
document.addEventListener('keydown', (e) => {
  if (!slideGame?.classList.contains('active') || simPanel?.classList.contains('hidden')) return;
  if (isEditableElement(e.target)) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  const key = String(e.key || '').toLowerCase();
  if (key === 'n') {
    if (!rebalanceBtn?.disabled) {
      e.preventDefault();
      rebalanceBtn.click();
    }
    return;
  }
  if (key === 'p') {
    if (!autoPlayBtn?.disabled) {
      e.preventDefault();
      autoPlayBtn.click();
    }
    return;
  }
  if (key === 's') {
    if (!finishBtn?.disabled) {
      e.preventDefault();
      finishBtn.click();
    }
  }
});
allocationSortBy?.addEventListener('change', () => {
  applyAllocationSort();
});
allocationSortDir?.addEventListener('change', () => {
  applyAllocationSort();
});

finishBtn?.addEventListener('click', async () => {
  if (!simulationState) return;
  try {
    const projection = await apiGet(`/api/simulations/${simulationState.simulationId}/projection`);
    if (!hasRemainingSteps()) {
      const finalResult = await ensureFinalResult();
      renderResultCards(finalResult);
      renderBenchmarkComparison(finalResult);
      drawComparisonChart(
        equityChart,
        finalResult.timeline || [],
        (finalResult.benchmarkSeries || []).map((b) => ({ symbol: b.symbol, points: b.points || [] })),
        equityLegend,
        { interactive: true }
      );
      drawDonutChart(allocationChart, finalResult.finalWeights || {}, getAssetLabelMap());
      if (investorTypeBtn) investorTypeBtn.disabled = false;
    } else {
      latestFinalResult = null;
      renderProjectionCards(projection);
      renderProjectionBenchmarkComparison(projection);
      drawComparisonChart(
        equityChart,
        projection.projectedTimeline || [],
        (projection.benchmarkProjection || []).map((b) => ({ symbol: b.symbol, points: b.series || [] })),
        equityLegend,
        { interactive: true }
      );
      drawDonutChart(allocationChart, {}, getAssetLabelMap());
      if (investorTypeBtn) investorTypeBtn.disabled = true;
    }
    showSlide('result');

    printOutput({
      currentValue: toCurrency(projection.currentValue),
      projectedEndValue: toCurrency(projection.projectedEndValue),
      projectedReturnToEnd: toPercent(projection.projectedReturnToEnd || 0),
      periodsRemaining: projection.periodsRemaining
    });

    updateSimPanel();
  } catch (error) {
    printError(error.message);
  }
});

const startDateInput = document.getElementById('simStartDate');
const endDateInput = document.getElementById('simEndDate');
const simFrequencyInput = document.getElementById('simFrequency');
const todayIso = new Date().toISOString().slice(0, 10);
const defaultStartIso = new Date(new Date().setUTCFullYear(new Date().getUTCFullYear() - 3)).toISOString().slice(0, 10);
if (startDateInput) startDateInput.value = defaultStartIso;

function addDaysIso(dateIso, days) {
  const d = new Date(`${dateIso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + Number(days || 0));
  return d.toISOString().slice(0, 10);
}

function addMonthsIso(dateIso, months) {
  const d = new Date(`${dateIso}T00:00:00Z`);
  d.setUTCMonth(d.getUTCMonth() + Number(months || 0));
  return d.toISOString().slice(0, 10);
}

function autoEndDateFromFrequency(startIso, frequency) {
  const f = String(frequency || 'monthly');
  if (!startIso) return todayIso;
  let target = todayIso;
  if (f === 'daily') target = addDaysIso(startIso, 30);
  else if (f === 'weekly') target = addDaysIso(startIso, 7 * 12);
  else target = addMonthsIso(startIso, 12);
  if (target > todayIso) target = todayIso;
  return target;
}

function syncAutoEndDate() {
  if (!startDateInput || !endDateInput) return;
  const start = String(startDateInput.value || '');
  if (!start) return;
  let target = autoEndDateFromFrequency(start, simFrequencyInput?.value || 'monthly');
  if (target <= start) {
    const plusOne = addDaysIso(start, 1);
    target = plusOne > todayIso ? todayIso : plusOne;
  }
  endDateInput.value = target;
}

if (endDateInput) endDateInput.value = autoEndDateFromFrequency(defaultStartIso, simFrequencyInput?.value || 'monthly');
if (startDateInput && endDateInput) {
  startDateInput.max = todayIso;
  endDateInput.max = todayIso;
  endDateInput.min = startDateInput.value || '';
  startDateInput.addEventListener('change', () => {
    endDateInput.min = startDateInput.value || '';
    syncAutoEndDate();
  });
}
equalSplitBtn?.addEventListener('click', applyEqualSplit);
normalizeBtn?.addEventListener('click', applyNormalizeTo100);
currentMixBtn?.addEventListener('click', applyCurrentMix);
randomizeBtn?.addEventListener('click', applyRandomStartingAllocation);
clearTargetsBtn?.addEventListener('click', clearTargets);
allocationSearch?.addEventListener('input', filterAllocationRows);
showOnlyActiveBtn?.addEventListener('click', () => {
  showHeldOnly = !showHeldOnly;
  updateHoldOnlyButton();
  filterAllocationRows();
});
addBenchmarkBtn?.addEventListener('click', () => {
  const symbol = String(benchmarkSelect?.value || '').trim().toUpperCase();
  if (!symbol) return;
  if (!selectedBenchmarks.includes(symbol)) selectedBenchmarks.push(symbol);
  renderSelectedBenchmarks();
});
clearBenchmarkBtn?.addEventListener('click', () => {
  selectedBenchmarks = [];
  renderSelectedBenchmarks();
});
benchmarkChosen?.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-bm-remove]');
  if (!btn) return;
  const sym = btn.dataset.bmRemove;
  selectedBenchmarks = selectedBenchmarks.filter((x) => x !== sym);
  renderSelectedBenchmarks();
});
briefingSearchBtn?.addEventListener('click', () => {
  runBriefingSearch().catch(() => {});
});
briefingSearchInput?.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  e.preventDefault();
  runBriefingSearch().catch(() => {});
});
setupEqualSplitBtn?.addEventListener('click', applySetupEqualSplit);
setupRandomSplitBtn?.addEventListener('click', applySetupRandomSplit);
setupAiComboBtn?.addEventListener('click', async () => {
  if (!setupAiComboBtn) return;
  const original = setupAiComboBtn.textContent;
  setupAiComboBtn.disabled = true;
  setupAiComboBtn.textContent = 'Building...';
  try {
    await applySetupAiCombination();
  } finally {
    setupAiComboBtn.disabled = false;
    setupAiComboBtn.textContent = original || 'AI Combination';
  }
});
setupAiSplitBtn?.addEventListener('click', applySetupAiSplit);
setupTogglePieBtn?.addEventListener('click', () => {
  const isHidden = setupPieWrap?.classList.contains('hidden');
  if (!setupPieWrap || !setupTogglePieBtn) return;
  if (isHidden) {
    setupPieWrap.classList.remove('hidden');
    setupTogglePieBtn.textContent = 'Hide Chart';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateSetupAllocationSummary();
      });
    });
  } else {
    setupPieWrap.classList.add('hidden');
    setupTogglePieBtn.textContent = 'Show Chart';
  }
});
setupToggleSettings?.addEventListener('click', () => setSetupStage('settings'));
setupTogglePortfolio?.addEventListener('click', () => setSetupStage('portfolio'));
setupToggleBenchmark?.addEventListener('click', () => setSetupStage('benchmark'));
setupToggleSummary?.addEventListener('click', () => {
  setupSummaryReady = true;
  refreshSetupSummary();
  setSetupStage('summary');
});
settingsNextBtn?.addEventListener('click', () => {
  const startDate = String(document.getElementById('simStartDate')?.value || '');
  const endDate = String(document.getElementById('simEndDate')?.value || '');
  const cash = getInitialCashValue();
  if (!startDate || !endDate) return printError('Select start and end date first.');
  if (startDate >= endDate) return printError('End date must be after start date.');
  if (!Number.isFinite(cash) || cash <= 0) return printError('Initial cash must be greater than 0.');
  setupValidated.settings = true;
  updateSetupChecks();
  setSetupStage('portfolio');
});
portfolioNextBtn?.addEventListener('click', () => {
  if (!selectedAssets.length) return printError('Add at least one asset to your portfolio.');
  const snap = getSetupAllocationSnapshot();
  const total = snap.allocated;
  if (total <= 0) return printError('Set allocation before continuing.');
  if (!snap.affordable) {
    return printError('Allocation plus estimated fees exceeds initial cash. Reduce amounts before continuing.');
  }
  setupValidated.portfolio = true;
  updateSetupChecks();
  setSetupStage('benchmark');
});
benchmarkNextBtn?.addEventListener('click', () => {
  setupValidated.benchmark = true;
  setupValidated.summary = true;
  setupSummaryReady = true;
  updateSetupChecks();
  refreshSetupSummary();
  setSetupStage('summary');
});
document.getElementById('simStartDate')?.addEventListener('input', () => {
  refreshSetupSummary();
  refreshSetupPrices().catch(() => {});
});
document.getElementById('simEndDate')?.addEventListener('input', refreshSetupSummary);
getInitialCashInput()?.addEventListener('input', () => {
  const input = getInitialCashInput();
  if (!input) return;
  if (String(input.value || '').trim() !== '') {
    input.value = formatCashInputValue(parseCashInput(input.value));
  }
  updateSetupAllocationSummary();
  refreshSetupSummary();
});
getInitialCashInput()?.addEventListener('blur', () => {
  const input = getInitialCashInput();
  if (!input) return;
  if (String(input.value || '').trim() === '') return;
  input.value = formatCashInputValue(parseCashInput(input.value));
});
document.querySelectorAll('[data-add-cash]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const input = getInitialCashInput();
    if (!input) return;
    const add = Math.max(0, Number(btn.getAttribute('data-add-cash') || 0));
    if (!(add > 0)) return;
    const next = parseCashInput(input.value) + add;
    input.value = formatCashInputValue(next);
    updateSetupAllocationSummary();
    refreshSetupSummary();
  });
});
document.getElementById('simFrequency')?.addEventListener('change', () => {
  syncAutoEndDate();
  refreshSetupSummary();
});
window.addEventListener('resize', () => {
  if (!setupPieWrap?.classList.contains('hidden')) {
    updateSetupAllocationSummary();
  }
  renderAxis3dGraph();
  updateFloatingActionDockState();
});
window.addEventListener('scroll', updateFloatingActionDockState, { passive: true });
backToGameBtn?.addEventListener('click', () => {
  showSlide('game');
});
backToResultBtn?.addEventListener('click', () => {
  showSlide('result');
});
backToGameFromInvestorBtn?.addEventListener('click', () => {
  showSlide('game');
});
backToSetupBtn?.addEventListener('click', () => {
  showSlide('setup');
});
investorTypeBtn?.addEventListener('click', async () => {
  try {
    const finalResult = await ensureFinalResult();
    renderInvestorTypePage(finalResult);
    await playInvestorTypeReveal();
    showSlide('investor');
  } catch (error) {
    printError(error.message);
  }
});
newGameBtn?.addEventListener('click', () => {
  simulationState = null;
  latestFinalResult = null;
  previewState = { portfolioValue: 0, prices: {}, date: null };
  latestInsights = null;
  closedHoldingsCache = {};
  timeflowLog = [];
  timeflowSeries = [];
  timeflowDailyCache = [];
  timeflowDailyCacheEndDate = null;
  timeflowBenchmarkDailyCache = [];
  timeflowLastPortfolioPointCount = 0;
  timeflowLastEndDate = '';
  timeflowLastMode = 'weekly';
  timeflowLastFilter = 'all';
  stopTimeflowAnimation();
  replayFrames = [];
  replayElapsedMs = 0;
  replayStartPerfMs = 0;
  replayStartSimMs = 0;
  replayEndSimMs = 0;
  replayCurrentTs = 0;
  stopReplay(true);
  setReplayStatus('Replay: paused');
  marketSearchReqSeq += 1;
  stopPeriodDecisionTimer(true);
  clearBriefingSearchResults();
  setBriefingSearchStatus('Search any asset for period performance, earnings timing, and headlines at this simulation step.');
  simPanel.classList.add('hidden');
  renderTimeflow();
  renderCashFloat(0, 0);
  renderActionCashBar(0, 0);
  selectedAssets = [];
  setupAllocations = {};
  setupPrices = {};
  setupValidated = { settings: false, portfolio: false, benchmark: false, summary: false };
  setupSummaryReady = false;
  setSetupStage('settings');
  refreshSetupSummary();
  if (investorTypeTitle) investorTypeTitle.textContent = 'You are a...';
  if (investorTypeSummary) investorTypeSummary.textContent = 'Complete your simulation result first to generate your analysis.';
  if (investorTypeBadge) {
    investorTypeBadge.className = 'investor-type-badge';
    investorTypeBadge.textContent = 'Type Pending';
  }
  if (investorAxisSummary) investorAxisSummary.textContent = 'Your axis explanation will appear here after analysis.';
  if (investorAxisChips) investorAxisChips.innerHTML = '';
  if (investorBestFitList) investorBestFitList.innerHTML = '';
  if (investorPortfolioMixList) investorPortfolioMixList.innerHTML = '';
  if (investorCubeCode) investorCubeCode.textContent = 'Conservative | Passive | Rational';
  setAxisGridScores(
    { riskAggressive: 50, controlInternal: 50, reactivityEmotional: 50 },
    { risk: 'C', control: 'E', reactivity: 'R' },
    {}
  );
  showSlide('setup');
});
newGameFromInvestorBtn?.addEventListener('click', () => {
  newGameBtn?.click();
});

// quiz event wiring (only active on quiz page)
restartQuizBtn?.addEventListener('click', () => {
  window.location.reload();
});

// quiz state
let quizIndex = 0;
const quizAnswers = [];

function showQuizQuestion() {
  if (!quizSection || !quizQuestionEl || !quizOptions || !quizProgress) return;
  if (quizIndex >= quizQuestions.length) {
    quizIndex = Math.max(0, quizQuestions.length - 1);
    return;
  }
  const q = quizQuestions[quizIndex];
  if (quizSeeResultBtn) quizSeeResultBtn.classList.add('hidden');
  quizProgress.textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
  if (quizProgressFill) {
    const pct = ((quizIndex + 1) / Math.max(1, quizQuestions.length)) * 100;
    quizProgressFill.style.width = `${Math.max(0, Math.min(100, pct)).toFixed(1)}%`;
  }
  if (quizPrevBtn) quizPrevBtn.disabled = quizIndex === 0;
  quizQuestionEl.textContent = q.text;
  quizOptions.innerHTML = '';
  q.options.forEach((option, optionIndex) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'quiz-option';
    btn.textContent = option.label;
    if (quizAnswers[quizIndex] === optionIndex) btn.classList.add('selected');
    btn.addEventListener('click', () => {
      quizAnswers[quizIndex] = optionIndex;
      Array.from(quizOptions.children).forEach((c) => c.classList.remove('selected'));
      btn.classList.add('selected');
      if (quizIndex >= quizQuestions.length - 1) {
        if (quizSeeResultBtn) {
          quizSeeResultBtn.classList.remove('hidden');
          quizSeeResultBtn.disabled = false;
        }
        return;
      }
      quizIndex += 1;
      showQuizQuestion();
    });
    quizOptions.appendChild(btn);
  });
}

function buildQuizResult() {
  const axisCounts = { risk: 0, control: 0, reactivity: 0 };
  const axisTotals = { risk: 0, control: 0, reactivity: 0 };
  quizQuestions.forEach((q, idx) => {
    if (q.axis === 'general') return;
    axisTotals[q.axis] += 1;
    const answerIndex = quizAnswers[idx];
    const answer = Number.isInteger(answerIndex) ? q.options[answerIndex] : null;
    axisCounts[q.axis] += answer?.score || 0.5;
  });
  const riskPct = axisTotals.risk ? (axisCounts.risk / axisTotals.risk) * 100 : 50;
  const controlPct = axisTotals.control ? (axisCounts.control / axisTotals.control) * 100 : 50;
  const reactPct = axisTotals.reactivity ? (axisCounts.reactivity / axisTotals.reactivity) * 100 : 50;

  const axisCodes = {
    risk: riskPct >= 50 ? 'A' : 'C',
    control: controlPct >= 50 ? 'I' : 'E',
    reactivity: reactPct >= 50 ? 'E' : 'R'
  };
  const axesLabel = {
    risk: axisCodes.risk === 'A' ? 'Aggressive' : 'Conservative',
    control: axisCodes.control === 'I' ? 'Active' : 'Passive',
    reactivity: axisCodes.reactivity === 'E' ? 'Emotional' : 'Rational'
  };
  const axisPctMap = {
    risk: riskPct,
    control: controlPct,
    reactivity: reactPct
  };
  const strongestAxis = Object.entries(axisPctMap).sort((a, b) => Math.abs(b[1] - 50) - Math.abs(a[1] - 50))[0] || ['risk', 50];
  const strongestAxisLabel =
    strongestAxis[0] === 'risk'
      ? 'Risk'
      : strongestAxis[0] === 'control'
      ? 'Control'
      : 'Reactivity';

  return {
    investorProfile: {
      type: '',
      code: getCubeCode(axisCodes.risk, axisCodes.control, axisCodes.reactivity),
      axes: axesLabel,
      axisScores: {
        riskAggressive: riskPct,
        riskConservative: 100 - riskPct,
        controlInternal: controlPct,
        controlExternal: 100 - controlPct,
        reactivityEmotional: reactPct,
        reactivityRational: 100 - reactPct
      },
      recommendation: ''
    },
    analysisSource: 'quiz',
    quizMeta: {
      questionCount: quizQuestions.length,
      strongestAxis: strongestAxisLabel,
      strongestAxisPct: Number(strongestAxis[1] || 50)
    },
    behavior: {},
    maxDrawdown: 0,
    annualizedVolatility: 0
  };
}

async function finishQuiz() {
  if (quizSeeResultBtn) {
    quizSeeResultBtn.disabled = true;
    quizSeeResultBtn.textContent = 'Preparing...';
  }
  const fakeResult = buildQuizResult();
  renderInvestorTypePage(fakeResult);
  await playInvestorTypeReveal({
    titleBase: 'Analyzing your quiz',
    subtitle: 'Building your investor profile from 20 answers'
  });
  if (quizSection) quizSection.classList.add('hidden');
  if (quizIntro) quizIntro.classList.add('hidden');
  if (quizResultSection) quizResultSection.classList.remove('hidden');
  scrollToInvestorIntro();
  if (quizSeeResultBtn) {
    quizSeeResultBtn.textContent = 'See Result';
    quizSeeResultBtn.classList.add('hidden');
  }
}

startQuizBtn?.addEventListener('click', () => {
  if (quizIntro) quizIntro.classList.add('hidden');
  if (quizSection) quizSection.classList.remove('hidden');
  quizIndex = 0;
  quizAnswers.length = 0;
  showQuizQuestion();
});

quizPrevBtn?.addEventListener('click', () => {
  if (quizIndex <= 0) return;
  quizIndex -= 1;
  showQuizQuestion();
});

quizSeeResultBtn?.addEventListener('click', () => {
  finishQuiz().catch((error) => {
    printError(error.message);
    if (quizSeeResultBtn) {
      quizSeeResultBtn.disabled = false;
      quizSeeResultBtn.textContent = 'See Result';
    }
  });
});

shareResultBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleShareMenu();
});

function handleShareLinkClick() {
  copyResultLink().catch(() => {});
  hideShareMenu();
}

function handleShareImageClick() {
  try {
    openSharePreview('square');
  } catch (error) {
    printError('Unable to open share image preview.');
  }
  hideShareMenu();
}

shareResultLinkBtn?.addEventListener('click', handleShareLinkClick);
shareResultImageBtn?.addEventListener('click', handleShareImageClick);
shareResultMenu?.addEventListener('click', (e) => {
  const target = e.target;
  if (!(target instanceof Element)) return;
  const linkBtn = target.closest('#shareResultLinkBtn');
  if (linkBtn) {
    e.preventDefault();
    handleShareLinkClick();
    return;
  }
  const imageBtn = target.closest('#shareResultImageBtn');
  if (imageBtn) {
    e.preventDefault();
    handleShareImageClick();
  }
});

document.addEventListener('click', (e) => {
  if (!shareResultMenu || shareResultMenu.classList.contains('hidden')) return;
  const target = e.target;
  if (!(target instanceof Node)) return;
  if (shareResultMenu.contains(target) || shareResultBtn?.contains(target)) return;
  hideShareMenu();
});

updateAssetControls();
updateSimAddControls();
initAxis3dInteractivity();
setAxisGridScores(
  { riskAggressive: 50, controlInternal: 50, reactivityEmotional: 50 },
  { risk: 'C', control: 'E', reactivity: 'R' }
);
const initialCashInput = getInitialCashInput();
if (initialCashInput && String(initialCashInput.value || '').trim() !== '') {
  initialCashInput.value = formatCashInputValue(parseCashInput(initialCashInput.value));
}
renderAssetList();
renderSelectedBenchmarks();
if (simFloatingActions) document.body.appendChild(simFloatingActions);
updateFloatingActionDockState();
setupValidated = { settings: false, portfolio: false, benchmark: false, summary: false };
setupSummaryReady = false;
setSetupStage('settings');
refreshSetupSummary();
if (autoPlayBtn) autoPlayBtn.disabled = true;
if (replayToggleBtn) replayToggleBtn.disabled = true;
if (replayDurationSelect) {
  replayDurationSelect.value = '120';
  replayDurationMs = 120000;
}
if (allocationSortBy) allocationSortBy.value = 'current_value';
if (allocationSortDir) allocationSortDir.value = 'desc';
if (fluctuationView) fluctuationView.value = 'weekly';
setReplayStatus('Replay: paused');
updateHoldOnlyButton();
updateAutoPlayButton();
showSlide('setup');


