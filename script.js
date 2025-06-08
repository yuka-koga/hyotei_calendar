document.addEventListener('DOMContentLoaded', () => {
  const startDate = new Date('2025-06-12'); // カレンダー開始日
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
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.calendar-button');
  const videoPlayer = document.getElementById('videoPlayer');

  buttons.forEach(button => {
    const videoSrc = button.dataset.video;
    if (videoSrc) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        videoPlayer.src = videoSrc;
        videoPlayer.style.display = 'block';
        videoPlayer.play();
      });
    }
  });

  videoPlayer.addEventListener('ended', () => {
    videoPlayer.pause();
    videoPlayer.style.display = 'none';
    videoPlayer.src = '';
  });
});
