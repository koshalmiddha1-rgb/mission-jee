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
function addMission() {
    let input = document.getElementById("newMission");
    let missionText = input.value;

    if (missionText.trim() === "") return;

    let missionDiv = document.createElement("div");
    missionDiv.className = "mission";

    missionDiv.innerHTML = `
        <h3>${missionText}</h3>
        <button class="complete-btn" onclick="completeMission(this)">
            Complete
        </button>
    `;

    document.getElementById("customMissions").appendChild(missionDiv);
let missions = JSON.parse(localStorage.getItem("missions")) || [];
missions.push(missionText);
localStorage.setItem("missions", JSON.stringify(missions));
    input.value = "";
  updateUI();
}
let savedMissions = JSON.parse(localStorage.getItem("missions")) || [];

savedMissions.forEach(missionText => {
    let missionDiv = document.createElement("div");
    missionDiv.className = "mission";

    missionDiv.innerHTML = `
        <h3>${missionText}</h3>
        <button class="complete-btn" onclick="completeMission(this)">
            Complete
        </button>
    `;

    document.getElementById("customMissions").appendChild(missionDiv);
});

updateUI();
