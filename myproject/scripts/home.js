// --- Hamburger Menu Logic ---
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    menuButton.classList.toggle('open');
});

// --- Dynamic Footer Dates ---
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// --- Pexels API Logic ---
// IMPORTANT: Paste your free Pexels API key inside the quotes below
const PEXELS_API_KEY = 'uXwzkGGLcF8chzW91DDfV4k9iG0sx4kju5eGP7LbE01YVQjM0d1lmKcb'; 

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const heroSection = document.getElementById('hero-section');
const errorMessage = document.getElementById('error-message');

searchBtn.addEventListener('click', async () => {
    // Clear previous error messages
    errorMessage.textContent = '';
    
    const query = searchInput.value.trim() || 'cinematic dark'; 
    
    try {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=15`, {
            headers: {
                Authorization: PEXELS_API_KEY
            }
        });
        
        const data = await response.json();
        
        if (data.photos && data.photos.length > 0) {
            // Pick a random photo from the top 15 results for variety
            const randomIndex = Math.floor(Math.random() * data.photos.length);
            const imageUrl = data.photos[randomIndex].src.landscape;
            
            heroSection.style.backgroundImage = `url('${imageUrl}')`;
        } else {
            errorMessage.textContent = 'No images found for that mood. Try another keyword!';
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        errorMessage.textContent = 'Failed to connect to the image server.';
    }
});