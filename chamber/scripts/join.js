// Populate the hidden timestamp field with the exact time the page loads
document.getElementById('timestamp').value = new Date().toLocaleString();

// Setup Modals
const modals = [
    { btn: "np-btn", modal: "np-modal" },
    { btn: "bronze-btn", modal: "bronze-modal" },
    { btn: "silver-btn", modal: "silver-modal" },
    { btn: "gold-btn", modal: "gold-modal" }
];

modals.forEach(item => {
    const button = document.getElementById(item.btn);
    const dialog = document.getElementById(item.modal);
    
    // Open the modal
    button.addEventListener("click", () => {
        dialog.showModal();
    });

    // Close the modal when the close button is clicked
    const closeBtn = dialog.querySelector(".close-modal");
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
});