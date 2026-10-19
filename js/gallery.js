const dialog = document.querySelector('.lightbox');
const dialogImg = dialog.querySelector('img');
const caption = dialog.querySelector('.lightbox__caption');

document.querySelectorAll('.gallery__item').forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    dialogImg.src = img.currentSrc || img.src;
    dialogImg.alt = img.alt;
    caption.textContent = img.alt;
    dialog.showModal();
  });
});

dialog.addEventListener('click', (e) => {
  if (e.target === dialog || e.target.closest('.lightbox__close')) dialog.close();
});