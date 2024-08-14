const upgrades = {
    10: { probUp: 55, probDown: 0, rain: 960000, redRPM: [18, 24], maxRPM: [14, 19], torque: [20, 24], btOverRPM: [42, 47], btPower: [46, 58], stPower: [18, 22], tiMu: [16, 20] }
};

function upgrade() {
    const levelData = upgrades[currentLevel];

    if (!levelData) {
        alert('No data available for this upgrade level.');
        return;
    }

    // Use the probUp and probDown values from levelData
    const success = Math.random() < (levelData.probUp / 100); // Assuming probUp is out of 100
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
    if (currentLevel >= 12) {
        return Math.floor(Math.random() * 2) + 2; // 2-3 level downgrade
    } else if (currentLevel >= 9) {
        return Math.floor(Math.random() * 3) + 1; // 1-3 level downgrade
    } else if (currentLevel >= 6) {
        return Math.floor(Math.random() * 2) + 1; // 1-2 level downgrade
    } else {
        return 1; // 1 level downgrade
    }
}

function updateUI() {
    document.getElementById('currentLevel').textContent = currentLevel;
    document.getElementById('redRPM').textContent = stats.redRPM;
    document.getElementById('maxRPM').textContent = stats.maxRPM;
    document.getElementById('torque').textContent = stats.torque;
    document.getElementById('btOverRPM').textContent = stats.btOverRPM;
    document.getElementById('btPower').textContent = stats.btPower;
    document.getElementById('stPower').textContent = stats.stPower;
    document.getElementById('tiMu').textContent = stats.tiMu;
    document.getElementById('totalAttempts').textContent = totalAttempts;
    document.getElementById('levelAttempts').textContent = levelAttempts[currentLevel];
}

let currentLevel = 10; // Starting level, adjust as needed
let totalAttempts = 0;
let levelAttempts = {};
let stats = {
    redRPM: 0,
    maxRPM: 0,
    torque: 0,
    btOverRPM: 0,
    btPower: 0,
    stPower: 0,
    tiMu: 0
};
