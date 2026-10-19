const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

function setNav(open) {
  nav.dataset.open = String(open);
  toggle.setAttribute('aria-expanded', String(open));
}

toggle.addEventListener('click', () => setNav(nav.dataset.open !== 'true'));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });