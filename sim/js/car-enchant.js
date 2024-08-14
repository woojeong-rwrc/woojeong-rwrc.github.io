document.addEventListener('DOMContentLoaded', () => {
    const upgradeBtn = document.getElementById('upgradeBtn');
    const resultDiv = document.getElementById('result');
    const progressBar = document.getElementById('progressBar');
    const totalRainSpan = document.getElementById('totalRain');
    const totalAttemptsSpan = document.getElementById('totalAttempts');
    const upgradeOptionsList = document.getElementById('upgradeOptionsList');
    const attemptsPerLevelList = document.getElementById('attemptsPerLevelList');
    const resetBtn = document.getElementById('resetBtn');
    const currentLevelSpan = document.getElementById('currentLevel');
    const downgradeInfoSpan = document.getElementById('downgradeInfo');
    
    let currentLevel = 1;
    let totalRain = 0;
    let totalAttempts = 0;
    const attemptsPerLevel = Array(15).fill(0);
    let lastFailedLevel = null;

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
                lastFailedLevel = null;
                currentLevel++;
                resultDiv.textContent = `강화 성공! 현재 단계: ${currentLevel}`;
                downgradeInfoSpan.textContent = '-';
                // Update upgrade options and statistics
                updateUpgradeOptions();
            } else {
                lastFailedLevel = currentLevel;
                handleDowngrade();
            }
            
            updateStats();
        }, 1000);
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
        // This should show the changes for each attribute
        const attributes = {
            '레드 RPM': 0, 
            '최대 RPM': 0, 
            '토크': 0, 
            '부스터 오버드라이브': 0, 
            '부스트 파워': 0, 
            '스티어링 파워': 0, 
            '타이어 노면 마찰계수': 0, 
            '연비': 0, 
            '칼치기 데미지': 0, 
            '최대 SP': 0
        };

        Object.keys(attributes).forEach(attr => {
            const newOption = document.createElement('li');
            newOption.textContent = `${attr}: ${attributes[attr]} (변화 없음)`; // Placeholder
            upgradeOptionsList.appendChild(newOption);
        });
    }

    function handleDowngrade() {
        // Example function to handle downgrade, should be implemented based on your data
        const downgradeAmount = calculateDowngradeAmount();
        currentLevel = Math.max(1, currentLevel - downgradeAmount);
        resultDiv.textContent = `강화 실패. 단계 하락: ${downgradeAmount}단계`;
        downgradeInfoSpan.textContent = `${downgradeAmount}단계 하락`;
    }

    function calculateDowngradeAmount() {
        // Example function, should be implemented based on your data
        if (lastFailedLevel === null) return 0; // No previous failed level
        if (currentLevel <= 6) return 1;
        if (currentLevel <= 9) return Math.floor(Math.random() * 2) + 1;
        if (currentLevel <= 12) return Math.floor(Math.random() * 3) + 1;
        return Math.floor(Math.random() * 2) + 2; // 2 or 3 levels
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
        currentLevel = 1;
        totalRain = 0;
        totalAttempts = 0;
        attemptsPerLevel.fill(0);
        upgradeOptionsList.innerHTML = '';
        downgradeInfoSpan.textContent = '-';
        updateStats();
        currentLevelSpan.textContent = currentLevel;
    }

    upgradeBtn.addEventListener('click', upgrade);
    resetBtn.addEventListener('click', reset);
});
