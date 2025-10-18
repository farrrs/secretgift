const songs = [
  {
    title: "Anugerah Terindah",
    artist: "Andmesh",
    src: "MUSIC/11.mp3",
    img: "IMAGES/11.jpg",
    colors: ["#2eee6eff", "#fad0c4"],
    lyrics: "Ku ingin kau jadi milikku, temani diriku seumur hidupku🎶"
  },
  {
    title: "Penjaga Hati",
    artist: "Nadhif Basalamah",
    src: "MUSIC/12.mp3",
    img: "IMAGES/12.jpg",
    colors: ["#367ef1ff", "#97f18bff"],
    lyrics: "Dia buatku nyaman, dalam hangat pelukan💕"
  },
  {
    title: "Rahasia Hati",
    artist: "NIDJI",
    src: "MUSIC/13.mp3",
    img: "IMAGES/13.jpg",
    colors: ["#ff21c0ff", "#a6c1ee"],
    lyrics: "I wanna love you like the hurricane, I wanna love you like a mountain rain 💖"
  },
  {
    title: "Sempurna",
    artist: "Andra and thebackbone",
    src: "MUSIC/14.mp3",
    img: "IMAGES/14.jpg",
    colors: ["#a2ff0dff", "#58a0c2ff"],
    lyrics: "Kau adalah darahku, kau adalah jantungku"
  },
  {
    title: "About You",
    artist: "The 1975",
    src: "MUSIC/15.mp3",
    img: "IMAGES/15.jpg",
    colors: ["#f55220ff", "#cd61eeff"],
    lyrics: "Do you think I have forgotten about you?"
  },
  {
    title: "Hingga Tua Bersama",
    artist: "Rizky Febian",
    src: "MUSIC/16.mp3",
    img: "IMAGES/16.jpg",
    colors: ["#4aeee0ff", "#ce34ecff"],
    lyrics: "Selama nafas ini berhembus, Tak akan ada cinta yang lain"
  },
  {
    title: "Bersamamu",
    artist: "Jaz",
    src: "MUSIC/17.mp3",
    img: "IMAGES/17.jpg",
    colors: ["#fbff0dff", "#9925e7ff"],
    lyrics: "Bersamamu kita akan taklukan dunia, Arungi samudra penuh rintangan"
  },
];

let currentSong = 0;
const audio = document.getElementById("audio");
const albumArt = document.getElementById("album-art");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const cdContainer = document.getElementById("cd-container");
const volumeSlider = document.getElementById("volume");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const spotifyBg = document.getElementById("spotify-bg");
const lyricsEl = document.getElementById("lyrics");
const playlistEl = document.getElementById("playlist");
const greetingScreen = document.getElementById("greeting");
const player = document.getElementById("player");
const enterBtn = document.getElementById("enterBtn");

function loadSong(song) {
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  albumArt.src = song.img;
  audio.src = song.src;
  lyricsEl.textContent = song.lyrics;
  spotifyBg.style.background = `linear-gradient(135deg, ${song.colors[0]}, ${song.colors[1]})`;
}

function playSong() {
  audio.play();
  playBtn.textContent = "⏸️";
  cdContainer.style.animationPlayState = "running";
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶️";
  cdContainer.style.animationPlayState = "paused";
}

playBtn.addEventListener("click", () => {
  audio.paused ? playSong() : pauseSong();
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
});

volumeSlider.addEventListener("input", e => {
  audio.volume = e.target.value;
});

audio.addEventListener("timeupdate", () => {
  progress.max = audio.duration;
  progress.value = audio.currentTime;

  let currentMin = Math.floor(audio.currentTime / 60) || 0;
  let currentSec = Math.floor(audio.currentTime % 60) || 0;
  let durationMin = Math.floor(audio.duration / 60) || 0;
  let durationSec = Math.floor(audio.duration % 60) || 0;

  if (currentSec < 10) currentSec = "0" + currentSec;
  if (durationSec < 10) durationSec = "0" + durationSec;

  currentTimeEl.textContent = `${currentMin}:${currentSec}`;
  durationEl.textContent = `${durationMin}:${durationSec}`;
});

progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

audio.addEventListener("ended", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
});

// playlist
songs.forEach((song, index) => {
  const btn = document.createElement("button");
  btn.textContent = `${song.title} - ${song.artist}`;
  btn.addEventListener("click", () => {
    currentSong = index;
    loadSong(songs[currentSong]);
    playSong();
  });
  playlistEl.appendChild(btn);
});

// 3D album art effect
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 30;
  const y = (window.innerHeight / 2 - e.pageY) / 30;
  cdContainer.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// greeting
enterBtn.addEventListener("click", () => {
  greetingScreen.style.display = "none";
  player.classList.remove("hidden");
});

// load pertama
loadSong(songs[currentSong]);
