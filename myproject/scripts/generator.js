import { setFooterDates, toggleMenu } from './utils.mjs';

setFooterDates();
toggleMenu();

const hookContainer = document.getElementById('hook-card-container'); 
const categorySelect = document.getElementById('category-select');
const generateBtn = document.getElementById('generate-btn');

let hooksData = [];

async function fetchHooks() {
    try {
        const response = await fetch('data/hooks.json');
        if (!response.ok) throw new Error('Network response failed');
        hooksData = await response.json();
        displayHooks(hooksData);
    } catch (error) {
        console.error('Error:', error);
        hookContainer.innerHTML = "<p>Error loading data.</p>";
    }
}

function displayHooks(hooks) {
    hookContainer.innerHTML = ''; 
    hooks.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>"${item.hook}"</h3>
            <p><strong>Category:</strong> <span class="capitalize-text">${item.category}</span></p>
            <p><strong>Why it works:</strong> ${item.reason}</p>
            <p><strong>Difficulty:</strong> ${item.difficulty}</p>
        `;
        hookContainer.appendChild(card);
    });
}

generateBtn.addEventListener('click', () => {
    const selected = categorySelect.value;
    const filtered = selected === 'all' ? hooksData : hooksData.filter(h => h.category === selected);
    displayHooks(filtered);
});

fetchHooks();