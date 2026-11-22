const heart = document.getElementById("heart");
const message = document.getElementById("message");
const hint = document.getElementById("hint");
const floating = document.getElementById("floating");
const song = document.getElementById("song");
const musicBtn = document.getElementById("musicBtn");
const reply = document.getElementById("reply");

let opened = false;
let trickle;

function spawnHeart() {
  const h = document.createElement("span");
  h.className = "float-heart";
  h.textContent = ["❤", "💜", "💕"][Math.floor(Math.random() * 3)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 14 + Math.random() * 26 + "px";
  h.style.animationDuration = 5 + Math.random() * 5 + "s";
  floating.appendChild(h);
  setTimeout(() => h.remove(), 10000);
}

// Open the message + start the music
heart.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  message.classList.add("show");
  hint.style.display = "none";
  heart.style.animationDuration = "2.5s";

  song.volume = 0.6;
  song.play().catch(() => {
    // If the song file is missing, the page still works
    musicBtn.style.display = "none";
  });

  for (let i = 0; i < 20; i++) setTimeout(spawnHeart, i * 120);
  trickle = setInterval(spawnHeart, 900);
});

// Pause / play button
musicBtn.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    musicBtn.classList.remove("muted");
  } else {
    song.pause();
    musicBtn.classList.add("muted");
  }
});

// Yes / Of course buttons
document.querySelectorAll(".choice").forEach((btn) => {
  btn.addEventListener("click", () => {
    reply.textContent = btn.dataset.reply + "... WOOHOOOOOOOOOOO LOVE KAAYO NAKO KAAAAAAAAAA. 💜";
    for (let i = 0; i < 40; i++) setTimeout(spawnHeart, i * 60);
  });
});