let clicks = 0;

const trigger = document.getElementById("secret-trigger");
const egg = document.getElementById("easter-egg");

if (trigger) {
  trigger.addEventListener("click", () => {
    clicks++;

    if (clicks === 5) {
      egg.style.display = "block";
      egg.scrollIntoView({ behavior: "smooth" });
    }
  });
}

const music = document.getElementById("bg-music");
music.volume = 0.2;

const music = document.getElementById("bg-music");
const icon = document.getElementById("music-icon");

music.volume = 0.2;

function toggleMusic() {
  if (music.paused) {
    music.play();
    icon.textContent = "⏸";
  } else {
    music.pause();
    icon.textContent = "▶";
  }
}

let isPlaying = false;

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const icon = document.getElementById("music-icon");
  const text = document.querySelector(".music-text");

  if (!isPlaying) {
    music.play();
    icon.textContent = "⏸";
    text.textContent = "haha music wrwmr";
    isPlaying = true;
  } else {
    music.pause();
    icon.textContent = "▶";
    text.textContent = "this button looks cool";
    isPlaying = false;
  }
}

