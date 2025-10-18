document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");

  if (bgMusic) {
    // Set volume kecil (0.1 = 10%)
    bgMusic.volume = 0.4;
  }
});
