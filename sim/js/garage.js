// 차량 데이터
const carData = {
  "CarClass1": {
    "className": "City",
    "vehicles": [
      { name: "Muze", level: 20, price: "2490cash" },
      { name: "Amore", level: 18, price: "1890cash" },
      { name: "Bolero", level: 20, price: "2490cash" },
      { name: "Goal5", level: 90, price: "42000rain" },
      { name: "Spice", level: 20, price: "2490cash" },
      { name: "Martin", level: 20, price: "1000000rain" },
      { name: "Sparrow", level: 18, price: "2490cash" },
      { name: "Neobee", level: 18, price: "2490cash" },
      { name: "Tutuki", level: 18, price: "2490cash" },
      { name: "Sleek", level: 18, price: "2490cash" },
      { name: "Thousand", level: 20, price: "2490cash" },
      { name: "Mouse", level: 1, price: "5000cash" },
      { name: "Mato", level: 10, price: "10000rain" },
      { name: "Kalo", level: 10, price: "10000rain" },
      { name: "Cyan", level: 8, price: "10000rain" },
      { name: "Moon", level: 40, price: "10000000rain" },
      { name: "Cute", level: 55, price: "215000rain" }
    ]
  },
  "CarClass2": {
    "className": "S.Sedan",
    "vehicles": [
      { name: "Bullet III", level: 18, price: "2190cash" },
      { name: "Ever HD", level: 18, price: "1890cash" },
      { name: "C2", level: 18, price: "1990cash" },
      { name: "Ever FD", level: 20, price: "2590cash" },
      { name: "Astro 4", level: 56, price: "2150cash" },
      { name: "GX250", level: 50, price: "2950cash" },
      { name: "Ravic", level: 50, price: "2190cash" },
      { name: "Garen", level: 56, price: "2050cash" },
      { name: "Zet C", level: 56, price: "2050cash" },
      { name: "Cool", level: 18, price: "1000rain" },
      { name: "Steam 3", level: 20, price: "35000rain" },
      { name: "Ever 4", level: 25, price: "38000rain" },
      { name: "Symphony", level: 51, price: "2400000rain" },
      { name: "Fury", level: 45, price: "2800000rain" }
    ]
  },
  "CarClass3": {
    "className": "M.Sedan",
    "vehicles": [
      { name: "Caldishcts", level: 18, price: "2190cash" },
      { name: "Sonnetax", level: 20, price: "2590cash" },
      { name: "Astro 6", level: 80, price: "200000rain" },
      { name: "Inno8", level: 74, price: "190000rain" },
      { name: "GX04", level: 70, price: "200000rain" },
      { name: "Gets", level: 20, price: "500000rain" },
      { name: "Atlantis", level: 56, price: "2590cash" },
      { name: "Zet E", level: 56, price: "2190cash" },
      { name: "Bullet V", level: 56, price: "2350cash" },
      { name: "Harmony", level: 56, price: "2350cash" },
      { name: "Classic", level: 50, price: "2590cash" },
      { name: "Pike", level: 56, price: "2190cash" },
      { name: "Take", level: 56, price: "2190cash" },
      { name: "Lego", level: 39, price: "120000rain" },
      { name: "Sonnet 6", level: 44, price: "150000rain" },
      { name: "Steam 5", level: 49, price: "240000rain" },
      { name: "NewSteam5", level: 51, price: "1650000rain" }
    ]
  },
  "CarClass4": {
    "className": "SUV",
    "vehicles": [
      { name: "Buffalo", level: 20, price: "1990cash" },
      { name: "Commando", level: 20, price: "1990cash" },
      { name: "Hunter H1", level: 41, price: "2590cash" },
      { name: "Bullet WD", level: 50, price: "2690cash" },
      { name: "Roid", level: 52, price: "1990cash" },
      { name: "Spa", level: 49, price: "240000rain" },
      { name: "Tusco", level: 50, price: "290000rain" },
      { name: "Paragon", level: 55, price: "3200000rain" },
      { name: "ARV", level: 63, price: "3500000rain" },
      { name: "Devil 4", level: 65, price: "6400000rain" }
    ]
  },
  "CarClass5": {
    "className": "L.Sedan",
    "vehicles": [
      { name: "Kosmos", level: 50, price: "2890cash" },
      { name: "Zet S", level: 50, price: "2890cash" },
      { name: "300R", level: 50, price: "2890cash" },
      { name: "Echo 2", level: 50, price: "2890cash" },
      { name: "Maestro", level: 50, price: "2890cash" },
      { name: "Futura", level: 20, price: "1000000rain" },
      { name: "Astro 8", level: 20, price: "1050000rain" },
      { name: "Bullet VII", level: 60, price: "575000rain" },
      { name: "Margio", level: 51, price: "350000rain" },
      { name: "Echo", level: 52, price: "450000rain" }
    ]
  },
  "CarClass6": {
    "className": "Sports",
    "vehicles": [
      { name: "Zencoupe", level: 50, price: "3500cash" },
      { name: "BulletT4", level: 20, price: "2990cash" },
      { name: "Nishiya R", level: 20, price: "2990cash" },
      { name: "Sole", level: 20, price: "2990cash" },
      { name: "Elite", level: 20, price: "2990cash" },
      { name: "Frigate", level: 20, price: "2990cash" },
      { name: "Angelino", level: 20, price: "2990cash" },
      { name: "Cris", level: 20, price: "2990cash" },
      { name: "Dove", level: 20, price: "2990cash" },
      { name: "Hera", level: 20, price: "2990cash" },
      { name: "Zet SL", level: 10, price: "1000000rain" },
      { name: "Desperado", level: 100, price: "20000rain" },
      { name: "M8", level: 65, price: "180000rain" },
      { name: "Blizzard 6", level: 50, price: "2790cash" },
      { name: "Kaiser", level: 50, price: "2590cash" },
      { name: "Cyclone", level: 50, price: "10000rain" },
      { name: "Zero", level: 56, price: "2590cash" },
      { name: "Mustard", level: 50, price: "2690cash" },
      { name: "Grafico", level: 50, price: "2790cash" },
      { name: "Nishiya S", level: 50, price: "2890cash" },
      { name: "Sky", level: 50, price: "2790cash" },
      { name: "Bullet VI", level: 50, price: "2890cash" },
      { name: "V35", level: 50, price: "2690cash" },
      { name: "M7", level: 50, price: "2690cash" },
      { name: "Superior", level: 50, price: "2690cash" },
      { name: "Universal", level: 50, price: "2690cash" },
      { name: "Bumble", level: 50, price: "2690cash" },
      { name: "Famous", level: 50, price: "2690cash" },
      { name: "VC9", level: 50, price: "2690cash" },
      { name: "Spins", level: 50, price: "2590cash" },
      { name: "Neptune", level: 50, price: "2590cash" },
      { name: "Lex", level: 10, price: "50000rain" },
      { name: "Silk", level: 63, price: "94500rain" },
      { name: "R2000", level: 82, price: "280000rain" },
      { name: "Torino", level: 55, price: "700000rain" },
      { name: "Alto QQ", level: 60, price: "950000rain" },
      { name: "Zeus", level: 1, price: "11900000rain" }
    ]
  },
  "CarClass7": {
    "className": "Exotic",
    "vehicles": [
      { name: "Lexyath", level: 10, price: "6400000rain" },
      { name: "Phoenix", level: 30, price: "3690cash" },
      { name: "BZO", level: 30, price: "3690cash" },
      { name: "Lance", level: 40, price: "3690cash" },
      { name: "Uptimus", level: 10, price: "2500000rain" },
      { name: "ANX", level: 40, price: "3890cash" },
      { name: "Gabriel", level: 97, price: "1650000rain" },
      { name: "Veloce 9", level: 85, price: "900000rain" },
      { name: "Vital", level: 95, price: "1200000rain" },
      { name: "Zest", level: 10, price: "2500000rain" },
      { name: "Milano", level: 92, price: "950000rain" },
      { name: "Romans", level: 99, price: "2150000rain" },
      { name: "RC-1", level: 40, price: "3990cash" },
      { name: "kalisto", level: 10, price: "200000rain" }
    ]
  },
  "CarClass8": {
    "className": "Legend",
    "vehicles": [
      { name: "Escarabajo", level: 1, price: "80000000rain" },
      { name: "Atomic", level: 1, price: "60000000rain" },
      { name: "Zet SLR", level: 1, price: "50000000rain" },
      { name: "Veloce R", level: 1, price: "80000000rain" },
      { name: "Valor", level: 1, price: "85000000rain" },
      { name: "Panzio", level: 1, price: "80000000rain" },
      { name: "Pegasus", level: 1, price: "85000000rain" },
      { name: "Angelo", level: 1, price: "85000000rain" },
      { name: "Roadster", level: 1, price: "구입 퀘스트 보상" },
      { name: "Sparta", level: 1, price: "50000rp" },
      { name: "Bionic", level: 1, price: "뉴비 퀘스트 보상" },
      { name: "Scooter", level: 1, price: "이벤트 차량" }
    ]
  }
};

// 로컬 스토리지에서 차량 정보를 불러옴
function loadCarData() {
    const savedCars = localStorage.getItem('cars');
    if (savedCars) {
        return JSON.parse(savedCars);
    }
    // 데이터가 없을 경우 초기 데이터 설정
    localStorage.setItem('cars', JSON.stringify(carData));
    return { ...carData };
}

// 차량 정보를 로컬 스토리지에 저장
function saveCarData(data) {
    localStorage.setItem('cars', JSON.stringify(data));
}

// 차량 카드 생성
function createCarCard(carClass, car) {
    const carElement = document.createElement('div');
    carElement.classList.add('car');

    if (car.level >= 200) {
        carElement.classList.add('level-200'); // 레벨 200 차량에 클래스 추가
    }

    const purchased = car.purchased || false;
    carElement.innerHTML = `
        <h2>${car.name} (${carClass})</h2>
        <p>구입 가격: ${car.price}</p>
        <div class="level-control">
            <label>레벨: </label>
            <input type="number" value="${car.level}" min="1" max="200" data-name="${car.name}" />
        </div>
        <button class="${purchased ? 'purchased' : ''}" data-name="${car.name}">
            ${purchased ? '구매됨' : '구매'}
        </button>
    `;

    // 구매 버튼 이벤트
    carElement.querySelector('button').addEventListener('click', function () {
        car.purchased = !car.purchased;
        this.classList.toggle('purchased');
        this.textContent = car.purchased ? '구매됨' : '구매';
        saveCarData(carData);
    });

    // 레벨 조정 이벤트
    carElement.querySelector('input[type="number"]').addEventListener('change', function () {
        const newLevel = parseInt(this.value);
        car.level = newLevel;
        saveCarData(carData);
    });

    return carElement;
}

// 차량 리스트 렌더링
function renderCars() {
    const carContainer = document.getElementById('car-container');
    carContainer.innerHTML = '';

    for (const carClass in carData) {
        const classContainer = document.createElement('div');
        classContainer.classList.add('car-class');
        classContainer.innerHTML = `<h2>${carData[carClass].className}</h2>`;

        carData[carClass].vehicles.forEach(car => {
            const carCard = createCarCard(carData[carClass].className, car);
            classContainer.appendChild(carCard);
        });

        carContainer.appendChild(classContainer);
    }
}

// 데이터 동기화 및 렌더링/
function syncAndRenderCars() {
    const savedCars = loadCarData();
    // carData가 변경되었는지 확인
    if (JSON.stringify(savedCars) !== JSON.stringify(carData)) {
        // carData를 업데이트하고 저장
        Object.assign(carData, savedCars);
        saveCarData(carData);
    }
    renderCars();
}

// 초기 로드 시 차량 데이터를 불러와서 화면에 표시
syncAndRenderCars();
