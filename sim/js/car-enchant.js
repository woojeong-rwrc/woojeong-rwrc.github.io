function showTab(tabName) {
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    document.getElementById(tabName).style.display = 'block';
}

// Define other functions and logic here...

const progressBar = document.getElementById("progressBar");
let currentLevel = 1;
let redRPM = 0;
let maxRPM = 0;
let torque = 0;
let btOverRPM = 0;
let btPower = 0;
let stPower = 0;
let tiMu = 0;
let fuel = 0;
let damage = 0;
let sp = 0;
let totalRain = 0;
let totalAttempts = 0;
let levelAttempts = new Array(15).fill(0);

document.getElementById("upgradeButton").addEventListener("click", () => {
    const upgrade = upgrades[currentLevel];

    // Start progress bar animation
    progressBar.style.transition = "width 1s";
    progressBar.style.width = "100%";

    // Execute the upgrade logic after the progress bar animation is complete
    setTimeout(() => {
        progressBar.style.width = "0";
        const success = Math.random() * 100 < upgrade.probUp;

        if (success) {
            redRPM += getRandomInRange(upgrade.redRPM[0], upgrade.redRPM[1]);
            maxRPM += getRandomInRange(upgrade.maxRPM[0], upgrade.maxRPM[1]);
            torque += getRandomInRange(upgrade.torque[0], upgrade.torque[1]);
            btOverRPM += getRandomInRange(upgrade.btOverRPM[0], upgrade.btOverRPM[1]);
            btPower += getRandomInRange(upgrade.btPower[0], upgrade.btPower[1]);
            stPower += getRandomInRange(upgrade.stPower[0], upgrade.stPower[1]);
            tiMu += getRandomInRange(upgrade.tiMu[0], upgrade.tiMu[1]);
            fuel += getRandomInRange(upgrade.fuel[0], upgrade.fuel[1]);
            damage += getRandomInRange(upgrade.damage[0], upgrade.damage[1]);
            sp += getRandomInRange(upgrade.sp[0], upgrade.sp[1]);

            currentLevel++;
        } else {
            let downgrade = upgrade.probDown;
            currentLevel -= downgrade;

            if (currentLevel < 1) currentLevel = 1;
        }

        totalRain += upgrade.rain;
        totalAttempts++;
        levelAttempts[currentLevel - 1]++;

        updateUI();
    }, 1000); // Match the timeout duration with the animation
});

document.getElementById("resetButton").addEventListener("click", () => {
    currentLevel = 1;
    redRPM = 0;
    maxRPM = 0;
    torque = 0;
    btOverRPM = 0;
    btPower = 0;
    stPower = 0;
    tiMu = 0;
    fuel = 0;
    damage = 0;
    sp = 0;
    totalRain = 0;
    totalAttempts = 0;
    levelAttempts.fill(0);

    updateUI();
});

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateUI() {
    document.getElementById("currentLevel").innerText = currentLevel;
    document.getElementById("afterUpgradeLevel").innerText = currentLevel;
    document.getElementById("downgradeCount").innerText = 0;

    document.getElementById("redRPM").innerText = redRPM;
    document.getElementById("maxRPM").innerText = maxRPM;
    document.getElementById("torque").innerText = torque;
    document.getElementById("btOverRPM").innerText = btOverRPM;
    document.getElementById("btPower").innerText = btPower;
    document.getElementById("stPower").innerText = stPower;
    document.getElementById("tiMu").innerText = tiMu;
    document.getElementById("fuel").innerText = fuel;
    document.getElementById("damage").innerText = damage;
    document.getElementById("sp").innerText = sp;

    document.getElementById("totalRain").innerText = totalRain;
    document.getElementById("totalAttempts").innerText = totalAttempts;

    const levelAttemptsList = document.getElementById("levelAttempts");
    levelAttemptsList.innerHTML = '';
    levelAttempts.forEach((attempts, index) => {
        const listItem = document.createElement("li");
        listItem.innerText = `Level ${index + 1}: ${attempts} attempts`;
        levelAttemptsList.appendChild(listItem);
    });
}

// Initialize the UI on page load
updateUI();
