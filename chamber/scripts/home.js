const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    menuButton.classList.toggle('open');
});

// Footer Dates
document.querySelector('#currentyear').textContent =
    new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modified: ${document.lastModified}`;

// WEATHER

const weatherURL =
    'https://api.openweathermap.org/data/2.5/forecast?lat=6.5244&lon=3.3792&units=metric&appid=d0f40e515a7f8d2886476b93a721114c';

async function getWeather() {
    try {
        const response = await fetch(weatherURL);

        if (response.ok) {
            const data = await response.json();

            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayWeather(data) {

    const weatherInfo = document.querySelector('#weather-info');
    const forecast = document.querySelector('#forecast');

    const current = data.list[0];

    weatherInfo.innerHTML = `
        <p><strong>${current.main.temp.toFixed(1)}°C</strong></p>
        <p>${current.weather[0].description}</p>
    `;

    forecast.innerHTML = '';

    const days = [8, 16, 24];

    days.forEach((index) => {

        const dayData = data.list[index];

        const date = new Date(dayData.dt_txt);

        const dayName = date.toLocaleDateString('en-US', {
            weekday: 'long'
        });

        const div = document.createElement('div');

        div.innerHTML = `
            <p><strong>${dayName}</strong></p>
            <p>${dayData.main.temp.toFixed(1)}°C</p>
        `;

        forecast.appendChild(div);
    });
}

getWeather();

// SPOTLIGHTS

const spotlightContainer =
    document.querySelector('#spotlight-container');

async function getSpotlights() {

    try {

        const response = await fetch('data/members.json');

        const data = await response.json();

        displaySpotlights(data);

    } catch (error) {

        console.error(error);
    }
}

function displaySpotlights(members) {

    const qualified = members.filter(member =>
        member.MembershipType === 'Gold' ||
        member.MembershipType === 'Silver'
    );

    const shuffled =
        qualified.sort(() => 0.5 - Math.random());

    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {

        const card = document.createElement('section');

        card.classList.add('spotlight-card');

        card.innerHTML = `
            <img src="${member.image}"
                alt="${member.name} logo"
                loading="lazy">

            <h3>${member.name}</h3>

            <p>${member.phone}</p>

            <p>${member.address}</p>

            <p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p class="membership">
                ${member.MembershipType} Member
            </p>
        `;

        spotlightContainer.appendChild(card);
    });
}

getSpotlights();
