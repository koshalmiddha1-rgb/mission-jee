let xp = Number(localStorage.getItem("xp")) || 0;
let coins = Number(localStorage.getItem("coins")) || 0;
let level = Number(localStorage.getItem("level")) || 1;
let streak = Number(localStorage.getItem("streak")) || 0;
const xpText = document.getElementById("xp");
const coinsText = document.getElementById("coins");
const levelText = document.getElementById("level");
const progressBar = document.querySelector(".progress-bar");
const missionButtons = document.querySelectorAll(".complete-btn");
function updateUI() {
  xpText.textContent = xp;
  coinsText.textContent = coins;
  levelText.textContent = level;
missionButtons.forEach(btn => {
    if (btn.dataset.done === "true") {
        btn.innerText = "Completed ✅";
        btn.disabled = true;
    }
});
  progressBar.style.width = (xp % 100) + "%";

  localStorage.setItem("xp", xp);
  localStorage.setItem("coins", coins);
  
localStorage.setItem("level", level);
}

function completeMission(button) {
  if (button.disabled) return;

  xp += 20;
  coins += 15;

  if (xp >= level * 100) {
    level++;
  }

  button.innerText = "Completed ✅";
  button.disabled = true;
button.dataset.done = "true";
  updateUI();
}
