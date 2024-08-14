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
    11: { probUp: 35, probDown: 0, rain: 1100000, redRPM: [18, 24], maxRPM: [14, 19], torque: [20, 24], btOverRPM: [42, 47], btPower: [46, 58], stPower: [18, 22], tiMu: [16, 20], sp: [6.0, 8.0] },
    12: { probUp: 20, probDown: 0, rain: 1240000, redRPM: [21, 27], maxRPM: [16, 22], torque: [22, 26], btOverRPM: [48, 54], btPower: [51, 64], stPower: [20, 24], tiMu: [18, 22] },
    13: { probUp: 15, probDown: 0, rain: 1400000, redRPM: [21, 27], maxRPM: [16, 22], torque: [22, 26], btOverRPM: [48, 54], btPower: [51, 64], stPower: [20, 22], tiMu: [18, 22], sp: [8.0, 10.0] },
    14: { probUp: 5, probDown: 0, rain: 1560000, redRPM: [23, 30], maxRPM: [28, 34], torque: [33, 48], btOverRPM: [57, 65], btPower: [55, 70], stPower: [22, 27], tiMu: [20, 25] },
    15: { probUp: 3, probDown: 0, rain: 1680000, redRPM: [28, 36], maxRPM: [22, 39], torque: [26, 32], btOverRPM: [57, 65], btPower: [64, 82], stPower: [24, 29], tiMu: [22, 27], sp: [10.0, 12.0] }
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
