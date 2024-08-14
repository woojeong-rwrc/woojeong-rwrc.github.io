const upgrades = {
    1: { probUp: 100, probDown: 0, rain: 0, redRPM: [0, 0], maxRPM: [0, 0], torque: [0, 0], btOverRPM: [0, 0], btPower: [0, 0], stPower: [0, 0], tiMu: [0, 0], fuel: [0, 0], damage: [0, 0], sp: [0, 0] },
    2: { probUp: 100, probDown: 0, rain: 80000, redRPM: [11, 14], maxRPM: [7, 10], torque: [11, 13], btOverRPM: [21, 23], btPower: [28, 34], stPower: [8, 10], tiMu: [8, 10] },
    3: { probUp: 95, probDown: 0, rain: 160000, redRPM: [12, 15], maxRPM: [9, 12], torque: [11, 13], btOverRPM: [21, 23], btPower: [28, 34], stPower: [8, 10], tiMu: [8, 10], sp: [5.0, 6.0] },
    4: { probUp: 90, probDown: 0, rain: 260000, redRPM: [12, 15], maxRPM: [9, 12], torque: [11, 13], btOverRPM: [27, 30], btPower: [33, 40], stPower: [10, 12], tiMu: [10, 12] },
    5: { probUp: 90, probDown: 0, rain: 360000, redRPM: [12, 30], maxRPM: [9, 56], torque: [11, 39], btOverRPM: [27, 33], btPower: [33, 40], stPower: [10, 36], tiMu: [10, 36], sp: [2.0, 9.0] },
    6: { probUp: 75, probDown: 0, rain: 460000, redRPM: [14, 18], maxRPM: [11, 14], torque: [12, 15], btOverRPM: [33, 36], btPower: [37, 46], stPower: [11, 14], tiMu: [11, 14] },
    7: { probUp: 75, probDown: 0, rain: 580000, redRPM: [14, 36], maxRPM: [11, 56], torque: [18, 21], btOverRPM: [33, 40], btPower: [37, 46], stPower: [15, 51], tiMu: [13, 48], sp: [5.0, 12.0] },
    8: { probUp: 65, probDown: 0, rain: 700000, redRPM: [16, 21], maxRPM: [13, 17], torque: [19, 23], btOverRPM: [39, 43], btPower: [42, 52], stPower: [17, 20], tiMu: [11, 14] },
    9: { probUp: 65, probDown: 0, rain: 820000, redRPM: [16, 21], maxRPM: [13, 17], torque: [19, 23], btOverRPM: [39, 43], btPower: [42, 52], stPower: [17, 22], tiMu: [15, 18], sp: [6.0, 8.0] },
    10: { probUp: 55, probDown: 0, rain: 960000, redRPM: [18, 24], maxRPM: [14, 19], torque: [20, 24], btOverRPM: [42, 47], btPower: [46, 58], stPower: [18, 22], tiMu: [16, 20] },
    11: { probUp: 45, probDown: 0, rain: 1120000, redRPM: [21, 26], maxRPM: [17, 21], torque: [23, 27], btOverRPM: [45, 50], btPower: [49, 61], stPower: [20, 24], tiMu: [18, 22] },
    12: { probUp: 45, probDown: 1, rain: 1280000, redRPM: [22, 29], maxRPM: [18, 22], torque: [24, 29], btOverRPM: [46, 52], btPower: [51, 65], stPower: [22, 26], tiMu: [19, 23] },
    13: { probUp: 30, probDown: 1, rain: 1460000, redRPM: [22, 29], maxRPM: [18, 22], torque: [24, 29], btOverRPM: [46, 52], btPower: [51, 65], stPower: [22, 26], tiMu: [19, 23] },
    14: { probUp: 20, probDown: 2, rain: 1600000, redRPM: [22, 29], maxRPM: [18, 22], torque: [24, 29], btOverRPM: [46, 52], btPower: [51, 65], stPower: [22, 26], tiMu: [19, 23] },
    15: { probUp: 10, probDown: 2, rain: 1820000, redRPM: [22, 29], maxRPM: [18, 22], torque: [24, 29], btOverRPM: [46, 52], btPower: [51, 65], stPower: [22, 26], tiMu: [19, 23] }
};

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

function showTab(tabName) {
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    document.getElementById(tabName).style.display = 'block';
}

// Initialize the UI on page load
updateUI();
