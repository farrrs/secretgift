const pages = document.querySelectorAll('.page');
let currentPage = 0;
const indicator = document.getElementById('page-indicator');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// fungsi untuk menampilkan halaman
const showPage = (index) => {
  pages.forEach((page, i) => {
    page.classList.toggle('active', i === index);
  });

  // update tombol
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === pages.length - 1;

  // update indikator
  indicator.textContent = `Hal ${index + 1} / ${pages.length}`;
};

// event tombol prev
prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

// event tombol next
nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

// tampilkan halaman pertama
showPage(currentPage);
// fungsi bikin hati jatuh
function createHeart() {
  const heartsContainer = document.querySelector('.hearts');
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️'; // bentuk hati
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 12 + 'px';
  heart.style.animationDuration = (Math.random() * 3 + 3) + 's'; // lama jatuh
  heartsContainer.appendChild(heart);

  // hapus setelah selesai
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// bikin hati tiap 500ms
setInterval(createHeart, 500);
// Pesan rahasia
document.querySelectorAll('.secret').forEach(secret => {
  secret.addEventListener('click', () => {
    const message = secret.nextElementSibling;
    message.style.display = message.style.display === 'block' ? 'none' : 'block';
  });
});


  // kalau halaman terakhir, munculkan confetti
  if (index === pages.length - 1) {
    startConfetti();
    setTimeout(stopConfetti, 4000);
  }

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

showPage(currentPage);
// ========== CONFETTI ==========
const confettiCanvas = document.getElementById('confetti');
const ctx = confettiCanvas.getContext('2d');
let confettiPieces = [];
let animationId;

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createConfetti() {
  return {
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height - confettiCanvas.height,
    size: Math.random() * 6 + 4,
    speed: Math.random() * 3 + 2,
    color: ['#ff4d88','#ff85a2','#ffcad4'][Math.floor(Math.random()*3)]
  };
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.speed;
    if (c.y > confettiCanvas.height) c.y = -10;
  });
}

function startConfetti() {
  confettiPieces = Array.from({length: 100}, createConfetti);
  function animate() {
    drawConfetti();
    animationId = requestAnimationFrame(animate);
  }
  animate();
}

function stopConfetti() {
  cancelAnimationFrame(animationId);
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}
document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const nextBtn = document.querySelector(".next-btn");
  let currentPage = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.toggle("active", i === index);
    });

    // Delay sedikit biar tombol muncul setelah halaman terlihat
    nextBtn.classList.remove("show");
    setTimeout(() => {
      nextBtn.classList.add("show");
    }, 400);
  }

  nextBtn.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // Tampilkan halaman pertama
  showPage(currentPage);
});
