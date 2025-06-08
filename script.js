document.addEventListener('DOMContentLoaded', () => {
  const startDate = new Date('2025-06-12');
  const today = new Date();
  const elapsedDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;

  // calendar-button にもロック処理を適用
  document.querySelectorAll('.calendar-button').forEach(button => {
    const dayNum = parseInt(button.dataset.day);
    if (!isNaN(dayNum) && dayNum > elapsedDays) {
      button.removeAttribute('href');
      button.classList.add('locked');
      button.style.pointerEvents = 'none';
      button.style.opacity = '0.3';
    }
  });

  // 動画再生処理（そのままでOK）
  const videoPlayer = document.getElementById('videoPlayer');
  document.querySelectorAll('.calendar-button').forEach(button => {
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
