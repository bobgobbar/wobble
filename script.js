let started = false;

function startMusic() {
  if (started) return;

  const music = document.getElementById("bg-music");
  if (music) {
    music.volume = 0.7;   // soft cinema vibe
    music.play();
    started = true;
  }
}

/* start music on first interaction */
document.addEventListener("click", startMusic);
document.addEventListener("keydown", startMusic);
document.addEventListener("touchstart", startMusic);
