import { places } from '../data/places.mjs';

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    menuButton.classList.toggle('open');
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

const container = document.getElementById('discover-container');

places.forEach(place => {
    const card = document.createElement('article');
    card.classList.add('discover-card');

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button class="learn-more">Learn More</button>
    `;
    
    container.appendChild(card);
});

const messageContainer = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const currentTime = Date.now();

if (!lastVisit) {
    messageContainer.textContent = "Welcome! Let us know if you have any questions.";
} else {
    
    const timeDifference = currentTime - parseInt(lastVisit);
    
    const daysDifference = Math.floor(timeDifference / 86400000);

    if (daysDifference < 1) {
        messageContainer.textContent = "Back so soon! Awesome!";
    } else {
        const dayWord = daysDifference === 1 ? "day" : "days";
        messageContainer.textContent = `You last visited ${daysDifference} ${dayWord} ago.`;
    }
}

localStorage.setItem('lastVisit', currentTime);