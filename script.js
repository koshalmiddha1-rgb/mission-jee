// Mission JEE Basic Script

let xp = localStorage.getItem("xp") || 0;
let coins = localStorage.getItem("coins") || 0;
let level = localStorage.getItem("level") || 1;

function saveData() {
  localStorage.setItem("xp", xp);
  localStorage.setItem("coins", coins);
  localStorage.setItem("level", level);
}

function completeMission() {
  xp = Number(xp) + 50;
  coins = Number(coins) + 20;

  if (xp >= level * 100) {
    level++;
    alert("🎉 Level Up! You reached Level " + level);
  }

  saveData();
  updateUI();
}

function updateUI() {
  const xpEl = document.getElementById("xp");
  const coinEl = document.getElementById("coins");
  const levelEl = document.getElementById("level");

  if (xpEl) xpEl.innerText = xp;
  if (coinEl) coinEl.innerText = coins;
  if (levelEl) levelEl.innerText = level;
}

window.onload = updateUI;
