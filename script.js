document.addEventListener('DOMContentLoaded', () => {
  const startDate = new Date('2025-06-12');
  const today = new Date();

  // 時刻をリセットして、純粋な日付差に
  startDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const elapsedDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;

  console.log('elapsedDays:', elapsedDays);

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
  // 日付表示処理（#date-text に反映）
  const display = document.getElementById('date-text');
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 時刻を00:00に固定
  const endDate = new Date('2025-07-06');
  endDate.setHours(0, 0, 0, 0);

  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const weekday = weekdays[today.getDay()];
  const formatted = `${yyyy}/${mm}/${dd} (${weekday})`;
  const remaining = Math.max(0, Math.ceil((endDate - today) / (1000 * 60 * 60 * 24)));

  display.textContent = `${formatted}　🍧 あと${remaining}日`;
