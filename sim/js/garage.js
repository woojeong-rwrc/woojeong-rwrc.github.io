// 차량 데이터 (예시로 CarClass1만 사용)
const cars = {
    "CarClass1": [
        { name: "Muze", level: 20, price: "2490cash" },
        { name: "Amore", level: 18, price: "1890cash" },
        { name: "Bolero", level: 20, price: "2490cash" },
        // 필요한만큼 추가
    ]
};

// 로컬 스토리지에서 차량 정보를 불러옴
function loadCarData() {
    const savedCars = localStorage.getItem('cars');
    if (savedCars) {
        return JSON.parse(savedCars);
    }
    return cars;
}

// 차량 정보를 로컬 스토리지에 저장
function saveCarData(carData) {
    localStorage.setItem('cars', JSON.stringify(carData));
}

// 차량 카드 생성
function createCarCard(carClass, car) {
    const carElement = document.createElement('div');
    carElement.classList.add('car');

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
        const carName = this.getAttribute('data-name');
        car.purchased = !car.purchased;
        this.classList.toggle('purchased');
        this.textContent = car.purchased ? '구매됨' : '구매';
        saveCarData(cars);
    });

    // 레벨 조정 이벤트
    carElement.querySelector('input[type="number"]').addEventListener('change', function () {
        const carName = this.getAttribute('data-name');
        const newLevel = parseInt(this.value);
        car.level = newLevel;
        saveCarData(cars);
    });

    return carElement;
}

// 차량 리스트 렌더링
function renderCars() {
    const carContainer = document.getElementById('car-container');
    carContainer.innerHTML = '';

    for (const carClass in cars) {
        cars[carClass].forEach(car => {
            const carCard = createCarCard(carClass, car);
            carContainer.appendChild(carCard);
        });
    }
}

// 초기 로드 시 차량 데이터를 불러와서 화면에 표시
const cars = loadCarData();
renderCars();
