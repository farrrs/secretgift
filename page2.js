document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");
  const video = document.getElementById("surprise-video");

  if (video && bgMusic) {
    // Kalau video diputar, matikan musik
    video.addEventListener("play", () => {
      bgMusic.pause();
    });

    // Kalau video dijeda, hidupkan lagi musik
    video.addEventListener("pause", () => {
      bgMusic.play();
    });

    // Kalau video selesai, musik hidup lagi
    video.addEventListener("ended", () => {
      bgMusic.play();
    });
  }
});
