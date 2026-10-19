(() => {
  const root = document.querySelector('.hero');
  if (!root) return;

  const slides = [...root.querySelectorAll('.slide')];
  const dots = [...root.querySelectorAll('.hero__dot')];
  const live = root.querySelector('.hero__slides');
  const prev = root.querySelector('.hero__prev');
  const next = root.querySelector('.hero__next');
  const pause = root.querySelector('.hero__pause');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const DELAY = 6500;
  let index = 0;
  let timer = null;
  let userPaused = reduceMotion.matches;
  let hovering = false;

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, n) => {
      const active = n === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
    });
    dots.forEach((dot, n) => dot.setAttribute('aria-current', String(n === index)));
  }

  function schedule() {
    clearTimeout(timer);
    if (userPaused || hovering || document.hidden) return;
    timer = setTimeout(() => { show(index + 1); schedule(); }, DELAY);
  }

  function goTo(i) { show(i); schedule(); }

  prev.addEventListener('click', () => goTo(index - 1));
  next.addEventListener('click', () => goTo(index + 1));
  dots.forEach((dot, n) => dot.addEventListener('click', () => goTo(n)));

  pause.addEventListener('click', () => {
    userPaused = !userPaused;
    pause.setAttribute('aria-pressed', String(userPaused));
    live.setAttribute('aria-live', userPaused ? 'polite' : 'off');
    schedule();
  });

  // pause while a mouse is over the hero or the keyboard is focused inside it
  root.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { hovering = true; schedule(); } });
  root.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { hovering = false; schedule(); } });
  root.addEventListener('focusin', (e) => { if (e.target.matches(':focus-visible')) { hovering = true; schedule(); } });
  root.addEventListener('focusout', () => { hovering = false; schedule(); });
  document.addEventListener('visibilitychange', schedule);

  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(index - 1);
    if (e.key === 'ArrowRight') goTo(index + 1);
  });

  // swipe on phones
  let startX = null;
  let startY = null;
  root.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  root.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    startX = null;
    if (Math.abs(dx) > 50 && Math.abs(dy) < 40) goTo(index + (dx < 0 ? 1 : -1));
  });

  pause.setAttribute('aria-pressed', String(userPaused));
  live.setAttribute('aria-live', userPaused ? 'polite' : 'off');
  show(0);
  schedule();
})();