let currentLevel = 1;
let totalRain = 0;
let totalAttempts = 0;
let levelAttempts = {};
let stats = {
    redRPM: 0,
    maxRPM: 0,
    torque: 0,
    btOverRPM: 0,
    btPower: 0,
    stPower: 0,
    tiMu: 0,
    fuel: 0,
    damage: 0,
    sp: 0
};

const upgrades = {
    // Define the upgrade ranges for each level
    10: { redRPM: [18, 24], maxRPM: [14, 19], torque: [20, 24], btOverRPM: [42, 47], btPower: [46, 58], stPower: [18, 22], tiMu: [16, 20] },
    // Add other levels as needed...
};

document.getElementById('upgradeButton').addEventListener('click', upgrade);
document.getElementById('resetButton').addEventListener('click', reset);

function upgrade() {
    const levelData = upgrades[currentLevel];
    const success = Math.random() < levelData.probUp / 100;
    totalAttempts++;
    levelAttempts[currentLevel] = (levelAttempts[currentLevel] || 0) + 1;

    if (success) {
        Object.keys(stats).forEach(stat => {
            if (levelData[stat]) {
                const increase = getRandomValue(levelData[stat][0], levelData[stat][1]);
                stats[stat] += increase;
            }
        });
        currentLevel++;
        document.getElementById('upgradeResult').textContent = 'Success!';
    } else {
        let downgrade = getRandomDowngradeLevel();
        currentLevel = Math.max(1, currentLevel - downgrade);
        Object.keys(stats).forEach(stat => {
            if (levelData[stat]) {
                const decrease = getRandomValue(levelData[stat][0], levelData[stat][1]) * downgrade;
                stats[stat] = Math.max(0, stats[stat] - decrease);
            }
        });
        document.getElementById('upgradeResult').textContent = 'Failed!';
        document.getElementById('downgradeLevels').textContent = downgrade;
    }

    updateUI();
}

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDowngradeLevel() {
    if (currentLevel >= 12) return Math.random() < 0.5 ? 2 : 3;
    if (currentLevel >= 9) return Math.random() < 0.5 ? 1 : 2;
    return 1;
}

function updateUI() {
    document.getElementById('currentLevel').textContent = currentLevel;
    Object.keys(stats).forEach(stat => {
        document.getElementById(stat).textContent = stats[stat];
    });
    document.getElementById('totalRain').textContent = totalRain;
    document.getElementById('totalAttempts').textContent = totalAttempts;

    const levelAttemptsList = document.getElementById('levelAttempts');
    levelAttemptsList.innerHTML = '';
    for (let level in levelAttempts) {
        const listItem = document.createElement('li');
        listItem.textContent = `Level ${level}: ${levelAttempts[level]} attempts`;
        levelAttemptsList.appendChild(listItem);
    }
}

function reset() {
    currentLevel = 1;
    totalRain = 0;
    totalAttempts = 0;
    levelAttempts = {};
    stats = {
        redRPM: 0,
        maxRPM: 0,
        torque: 0,
        btOverRPM: 0,
        btPower: 0,
        stPower: 0,
        tiMu: 0,
        fuel: 0,
        damage: 0,
        sp: 0
    };
    updateUI();
}

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}
