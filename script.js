let xp = Number(localStorage.getItem("xp")) || 0;
let coins = Number(localStorage.getItem("coins")) || 0;
let level = Number(localStorage.getItem("level")) || 1;

updateUI();

function completeMission() {
    xp += 20;
    coins += 10;

    if (xp >= level * 100) {
        xp = 0;
        level++;
        alert("🎉 Level Up! You reached Level " + level);
    }

    saveData();
    updateUI();
}

function saveData() {
    localStorage.setItem("xp", xp);
    localStorage.setItem("coins", coins);
    localStorage.setItem("level", level);
}

function updateUI() {
    document.getElementById("xp").innerText = xp;
    document.getElementById("coins").innerText = coins;
    document.getElementById("level").innerText = level;
}
