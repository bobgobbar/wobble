let isPlaying = false;

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const icon = document.getElementById("music-icon");
  const text = document.querySelector(".music-text");

  if (!isPlaying) {
    music.play();
    icon.textContent = "⏸";
    text.textContent = "haha music wrmwr";
    isPlaying = true;
  } else {
    music.pause();
    icon.textContent = "▶";
    text.textContent = "start the vibe";
    isPlaying = false;
  }
}
