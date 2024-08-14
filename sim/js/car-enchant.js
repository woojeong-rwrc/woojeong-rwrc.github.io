document.addEventListener('DOMContentLoaded', () => {
    const upgradeBtn = document.getElementById('upgradeBtn');
    const resultDiv = document.getElementById('result');
    const progressBar = document.getElementById('progressBar');
    const totalRainSpan = document.getElementById('totalRain');
    const totalAttemptsSpan = document.getElementById('totalAttempts');
    const upgradeOptionsList = document.getElementById('upgradeOptionsList');
    const attemptsPerLevelList = document.getElementById('attemptsPerLevelList');
    const resetBtn = document.getElementById('resetBtn');
    
    let totalRain = 0;
    let totalAttempts = 0;
    const attemptsPerLevel = Array(15).fill(0);

    function upgrade() {
        totalAttempts++;
        totalRain += getUpgradeCost();
        
        // Start animation
        progressBar.style.width = '100%';
        setTimeout(() => {
            progressBar.style.width = '0%';
            
            // Determine success or failure
            const success = Math.random() < getUpgradeProbability();
            if (success) {
                resultDiv.textContent = `강화 성공!`;
                // Update upgrade options and statistics
                updateUpgradeOptions();
            } else {
                resultDiv.textContent = `강화 실패.`;
                // Handle downgrade
                handleDowngrade();
            }
            
            updateStats();
        }, 2000);
    }

    function getUpgradeCost() {
        // Example function, should be implemented based on your data
        return 80000; // Placeholder
    }

    function getUpgradeProbability() {
        // Example function, should be implemented based on your data
        return 0.75; // Placeholder
    }

    function updateUpgradeOptions() {
        // Example function, should be implemented based on your data
        const newOption = document.createElement('li');
        newOption.textContent = `옵션 ${totalAttempts}`; // Placeholder
        upgradeOptionsList.appendChild(newOption);
    }

    function handleDowngrade() {
        // Example function to handle downgrade, should be implemented based on your data
        console.log('Downgrade logic here');
    }

    function updateStats() {
        totalRainSpan.textContent = totalRain;
        totalAttemptsSpan.textContent = totalAttempts;

        // Example function to update attempts per level
        attemptsPerLevelList.innerHTML = '';
        attemptsPerLevel.forEach((count, index) => {
            const li = document.createElement('li');
            li.textContent = `단계 ${index + 1}: ${count}회`;
            attemptsPerLevelList.appendChild(li);
        });
    }

    function reset() {
        totalRain = 0;
        totalAttempts = 0;
        attemptsPerLevel.fill(0);
        upgradeOptionsList.innerHTML = '';
        updateStats();
    }

    upgradeBtn.addEventListener('click', upgrade);
    resetBtn.addEventListener('click', reset);
});
