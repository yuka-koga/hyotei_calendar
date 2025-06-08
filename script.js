document.addEventListener('DOMContentLoaded', () => {
  const startDate = new Date('2025-05-12'); // カレンダー開始日
  const today = new Date();
  const elapsedDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;

  document.querySelectorAll('.hotspot').forEach(hotspot => {
    const dayNum = parseInt(hotspot.dataset.day);
    if (dayNum > elapsedDays) {
      hotspot.removeAttribute('href');
      hotspot.style.pointerEvents = 'none';
      hotspot.style.opacity = '0.3';
    }
  });
});
