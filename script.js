let started = false;

function startMusic() {
  if (started) return;

  const music = document.getElementById("bg-music");
  if (music) {
    music.volume = 0.7;
    music.play().catch(()=>{});
    started = true;
  }
}

/* Easter egg */
document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.getElementById("secret-trigger");
  const egg = document.getElementById("easter-egg");

  if (egg) egg.style.display = "none";

  if (trigger && egg) {
    trigger.addEventListener("click", () => {
      egg.style.display = egg.style.display === "none" ? "block" : "none";
    });
  }
});

/* start music on first interaction */
document.addEventListener("click", startMusic);
document.addEventListener("keydown", startMusic);
document.addEventListener("touchstart", startMusic);
