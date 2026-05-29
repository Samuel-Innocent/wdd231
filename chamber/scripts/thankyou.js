const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    menuButton.classList.toggle('open');
});


document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;


const urlParams = new URLSearchParams(window.location.search);

function displayData(paramKey, elementId) {
    const value = urlParams.get(paramKey);
    if (value) {
        document.getElementById(elementId).textContent = value;
    }
}

displayData('first-name', 'show-first');
displayData('last-name', 'show-last');
displayData('email', 'show-email');
displayData('phone', 'show-phone');
displayData('business', 'show-business');
displayData('timestamp', 'show-timestamp');