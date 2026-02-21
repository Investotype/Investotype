(() => {
  const navWrap = document.querySelector('.top-nav-wrap');
  if (!navWrap) return;
  const navDropdown = navWrap.querySelector('.nav-dropdown');
  const navTrigger = navWrap.querySelector('.nav-drop-trigger');
  const backTopBtn = document.createElement('button');
  backTopBtn.type = 'button';
  backTopBtn.className = 'back-top-btn';
  backTopBtn.textContent = 'Back to Top';
  document.body.appendChild(backTopBtn);

  let lastY = window.scrollY || 0;
  let ticking = false;
  const hideThreshold = 10;
  const topLock = 80;
  const mqMobile = window.matchMedia('(max-width: 820px)');

  function updateNav() {
    if (mqMobile.matches) {
      navWrap.classList.remove('is-hidden');
      lastY = window.scrollY || 0;
      if ((window.scrollY || 0) > 520) {
        backTopBtn.classList.add('is-visible');
      } else {
        backTopBtn.classList.remove('is-visible');
      }
      ticking = false;
      return;
    }

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
    if (currentY > 520) {
      backTopBtn.classList.add('is-visible');
    } else {
      backTopBtn.classList.remove('is-visible');
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNav);
      ticking = true;
    }
  }, { passive: true });

  backTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  if (navDropdown && navTrigger) {

    const closeMenu = () => {
      navDropdown.classList.remove('is-open');
      navTrigger.setAttribute('aria-expanded', 'false');
    };

    const openMenu = () => {
      navDropdown.classList.add('is-open');
      navTrigger.setAttribute('aria-expanded', 'true');
    };

    navTrigger.setAttribute('aria-haspopup', 'true');
    navTrigger.setAttribute('aria-expanded', 'false');

    navTrigger.addEventListener('click', (event) => {
      if (!mqMobile.matches) return;
      event.preventDefault();
      if (navDropdown.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener('click', (event) => {
      if (!mqMobile.matches) return;
      if (!navDropdown.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });

    mqMobile.addEventListener('change', () => {
      closeMenu();
      navWrap.classList.remove('is-hidden');
    });
  }
})();
