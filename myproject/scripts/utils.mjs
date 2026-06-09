// Exporting a function to satisfy the ES Module requirement
export function setFooterDates() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;
}

export function toggleMenu() {
    const menuButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    
    if(menuButton && navigation) {
        menuButton.addEventListener('click', () => {
            navigation.classList.toggle('show');
            menuButton.classList.toggle('open');
        });
    }
}