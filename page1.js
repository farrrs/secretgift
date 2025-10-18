document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const cekButton = document.getElementById("cek");
  const nextButton = document.getElementById("nextBtn");
  const bgMusic = document.getElementById("bgMusic");

  // kata kunci lucu
  const secretKey = "231008";

  cekButton.addEventListener("click", () => {
    const input = passwordInput.value.toLowerCase().trim();

    if (input === secretKey) {
      nextButton.classList.remove("hidden");
      nextButton.classList.add("reveal");
      passwordInput.disabled = true;
      cekButton.disabled = true;

      const msg = document.createElement("p");
      msg.textContent = "yeyy berhasilllll, kamu hebat sayanggg 🥰";
      msg.style.color = "#ff4081";
      msg.style.fontWeight = "600";
      msg.style.marginTop = "15px";
      document.querySelector(".form-box").appendChild(msg);
    } else {
      passwordInput.classList.add("shake");
      setTimeout(() => passwordInput.classList.remove("shake"), 500);
    }
  });

  nextButton.addEventListener("click", () => {
    window.location.href = "page2.html"; // ubah ke halaman berikutnya
  });

  // efek shake
  const style = document.createElement("style");
  style.textContent = `
    @keyframes shake {
      0% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      50% { transform: translateX(5px); }
      75% { transform: translateX(-5px); }
      100% { transform: translateX(0); }
    }
    .shake {
      animation: shake 0.3s;
      border-color: red !important;
    }
    .reveal {
      animation: fadeIn 1s ease-in forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // volume kecil
  bgMusic.volume = 0.0;
});
