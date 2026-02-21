(function () {
  function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || '';
  }

  const typeEl = document.getElementById('shared-type');
  const summaryEl = document.getElementById('shared-summary');

  if (!typeEl || !summaryEl) return;

  const investorType = getParam('type') || 'Investor Type';
  const summary = getParam('summary') || 'Take the quiz to discover your investor profile and get portfolio guidance.';

  typeEl.textContent = investorType;
  summaryEl.textContent = summary;
})();
