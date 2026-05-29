const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    menuButton.classList.toggle('open');
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;


document.getElementById('timestamp').value = new Date().toLocaleString();


const modals = [
    { btn: "np-btn", modal: "np-modal" },
    { btn: "bronze-btn", modal: "bronze-modal" },
    { btn: "silver-btn", modal: "silver-modal" },
    { btn: "gold-btn", modal: "gold-modal" }
];

modals.forEach(item => {
    const button = document.getElementById(item.btn);
    const dialog = document.getElementById(item.modal);
    
    button.addEventListener("click", () => {
        dialog.showModal();
    });

    const closeBtn = dialog.querySelector(".close-modal");
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
});