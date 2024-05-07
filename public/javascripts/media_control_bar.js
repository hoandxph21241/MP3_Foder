var audioPlayer = document.getElementById('audioPlayer');
var mediaController = document.getElementById('media-controller');
function playPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}
function updateProgressBar() {
  var progressBar = document.getElementById('progress-bar');
  var percentage = Math.floor((100 / audioPlayer.duration) * audioPlayer.currentTime);
  progressBar.style.width = percentage + '%';
}
function playSong(path) {
  audioPlayer.src = path;
  audioPlayer.play();
  mediaController.style.display = 'block'; // Hiển thị media controller
}
// Thêm sự kiện 'ended' vào audio player để ẩn media controller khi bài hát kết thúc
audioPlayer.addEventListener('ended', function() {
  mediaController.style.display = 'none';
});