const cars = [
    {
        id: 1,
        name: "Mercedes-Benz S-Class",
        price: "120,000€",
        type: "sedan",
        year: 2022,
        km: "15,000",
        features: ["Automatik", "Diesel", "4x4", "Panoramik"],
        image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ilz1Y3NWMYE0/v1/-1x-1.webp"
    },
    {
        id: 2,
        name: "BMW X5",
        price: "85,000€",
        type: "suv",
        year: 2021,
        km: "25,000",
        features: ["Automatik", "Benzin", "4x4", "LED"],
        image: "https://di-uploads-pod10.dealerinspire.com/bmwofelcajon/uploads/2024/04/2024-bmw-x5-xdrive-bmw-of-el-cajon.jpeg"
    },
    {
        id: 3,
        name: "Audi A6",
        price: "65,000€",
        type: "sedan",
        year: 2020,
        km: "30,000",
        features: ["Automatik", "Diesel", "Front", "Kamera"],
        image: "https://www.motortrend.com/uploads/sites/5/2021/09/2022-Audi-A6-5081-1.jpg?w=768&width=768&q=75&format=webp"
    },
    {
        id: 4,
        name: "Porsche 911",
        price: "150,000€",
        type: "sportive",
        year: 2023,
        km: "5,000",
        features: ["Automatik", "Benzin", "Rear", "Sport"],
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-carrera-gts-104-668d438beba3f.jpg?crop=0.622xw:0.526xh;0.122xw,0.454xh&resize=1200:*"
    },
    {
        id: 5,
        name: "Range Rover Sport",
        price: "95,000€",
        type: "suv",
        year: 2021,
        km: "35,000",
        features: ["Automatik", "Diesel", "4x4", "Luks"],
        image: "https://hips.hearstapps.com/hmg-prod/images/2024-land-rover-range-rover-sport-sv-119-65ce303545779.jpg"
    },
    {
        id: 6,
        name: "Tesla Model S",
        price: "110,000€",
        type: "sedan",
        year: 2022,
        km: "10,000",
        features: ["Automatik", "Elektrik", "AWD", "Tech"],
        image: "https://www.arminonbike.com/wp-content/uploads/2023/09/1_armin-hoyer_tesla-model-s-plaid-front-view.jpg"
    }
];

// Kur faqja të ngarkohet
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Menu toggle për mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Filtro makinat
    const filterBtns = document.querySelectorAll('.filter-btn');
    const carGrid = document.querySelector('.car-grid');

    // Shfaq makinat fillestare
    displayCars(cars);

    // Shto event listeners për butonat e filtrit
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Hiq klasën active nga të gjithë butonat
            filterBtns.forEach(b => b.classList.remove('active'));
            // Shto klasën active në butonin e klikuar
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            if (filter === 'all') {
                displayCars(cars);
            } else {
                const filteredCars = cars.filter(car => car.type === filter);
                displayCars(filteredCars);
            }
        });
    });

    // Funksioni për të shfaqur makinat
    function displayCars(carsToDisplay) {
        carGrid.innerHTML = '';
        carsToDisplay.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            carCard.innerHTML = `
                <div class="car-image">
                    <img src="${car.image}" alt="${car.name}">
                </div>
                <div class="car-info">
                    <h3>${car.name}</h3>
                    <p>${car.year} | ${car.km} km</p>
                    <div class="car-price">${car.price}</div>
                    <div class="car-features">
                        ${car.features.map(feature => `<span>${feature}</span>`).join('')}
                    </div>
                    <button class="btn" onclick="showCarDetails(${car.id})">Detajet</button>
                </div>
            `;
            carGrid.appendChild(carCard);
        });
    }

    // Animacioni i elementeve lëvizëse
    const floatingElements = document.querySelectorAll('.circle, .square, .triangle');
    floatingElements.forEach(el => {
        // Vendos pozicionin fillestar të rastësishme
        const randomX = Math.random() * 80 + 10;
        const randomY = Math.random() * 80 + 10;
        el.style.left = `${randomX}%`;
        el.style.top = `${randomY}%`;

        // Animacioni i vazhdueshëm
        setInterval(() => {
            const newX = Math.random() * 80 + 10;
            const newY = Math.random() * 80 + 10;
            el.style.transition = 'all 15s linear';
            el.style.left = `${newX}%`;
            el.style.top = `${newY}%`;
        }, 15000);
    });

    // Ndrysho makinën kryesore çdo 5 sekonda
    const mainCar = document.getElementById('main-car');
    const carImages = [
        'https://upload.wikimedia.org/wikipedia/commons/f/fc/Mercedes-Benz_W_463_%282018%29_Professional_Line_IAA_2021_1X7A0207.jpg',
        'https://t4.ftcdn.net/jpg/03/92/28/23/360_F_392282320_2ARvY47vFcAZtjmSB1t7FmzmvoB6YZNQ.jpg',
        'https://www.lloydmotorgroup.com/VehicleLibrary/425817-rvTNIpYPd0GZUS8EmEeoA.jpg?height=648.75&heightratio=0.75&mode=crop&upscale=true&width=865'
    ];
    let currentCarIndex = 0;

    setInterval(() => {
        currentCarIndex = (currentCarIndex + 1) % carImages.length;
        mainCar.style.opacity = 0;
        setTimeout(() => {
            mainCar.src = carImages[currentCarIndex];
            mainCar.style.opacity = 1;
        }, 500);
    }, 5000);
});

// Funksioni për të shfaqur detajet e makinës (mund të implementohet një modal)
function showCarDetails(carId) {
    const car = cars.find(c => c.id === carId);
    alert(`Detajet për ${car.name}\nÇmimi: ${car.price}\nViti: ${car.year}\nKilometrazhi: ${car.km} km`);
}