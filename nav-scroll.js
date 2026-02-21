(() => {
  const navWrap = document.querySelector('.top-nav-wrap');
  if (!navWrap) return;

  let lastY = window.scrollY || 0;
  let ticking = false;
  const hideThreshold = 10;
  const topLock = 80;

  function updateNav() {
    const currentY = window.scrollY || 0;
    const delta = currentY - lastY;

    if (currentY <= topLock) {
      navWrap.classList.remove('is-hidden');
    } else if (delta > hideThreshold) {
      navWrap.classList.add('is-hidden');
      lastY = currentY;
    } else if (delta < -hideThreshold) {
      navWrap.classList.remove('is-hidden');
      lastY = currentY;
    }

    if (Math.abs(delta) <= hideThreshold) {
      lastY = currentY;
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNav);
      ticking = true;
    }
  }, { passive: true });
})();
