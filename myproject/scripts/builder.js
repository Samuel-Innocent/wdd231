import { setFooterDates, toggleMenu } from './utils.mjs';

// Initialize shared functions for menu and footer
setFooterDates();
toggleMenu();

// --- Script Builder Logic (localStorage & Web Speech API) ---
const scriptPad = document.getElementById('script-pad');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const readBtn = document.getElementById('read-btn');
const statusMsg = document.getElementById('status-msg');

// 1. Load saved script on page load
const savedScript = localStorage.getItem('facelessScript');
if (savedScript) {
    scriptPad.value = savedScript;
}

// 2. Save script to localStorage
saveBtn.addEventListener('click', () => {
    localStorage.setItem('facelessScript', scriptPad.value);
    showStatus("✅ Script saved successfully!", "#4caf50");
});

// 3. Clear script from localStorage
clearBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear your script? This cannot be undone.")) {
        localStorage.removeItem('facelessScript');
        scriptPad.value = "";
        showStatus("🗑️ Script cleared.", "#ff4d4d");
    }
});

// 4. Web Speech API (Text-to-Speech)
readBtn.addEventListener('click', () => {
    const textToRead = scriptPad.value.trim();
    
    if (!textToRead) {
        showStatus("Please write a script first!", "#ff4d4d");
        return;
    }

    // Stop any ongoing speech before starting a new one
    window.speechSynthesis.cancel();

    // Create the speech utterance
    const utterance = new SpeechSynthesisUtterance(textToRead);
    
    // Optional: You can tweak the speed (rate) and pitch here (1 is normal)
    utterance.rate = 1.0; 
    utterance.pitch = 1.0;

    // Speak!
    window.speechSynthesis.speak(utterance);
    showStatus("🔊 Reading aloud...", "#00BFFF");
});

// Helper function to show temporary status messages
function showStatus(message, color) {
    statusMsg.textContent = message;
    statusMsg.style.color = color;
    setTimeout(() => {
        statusMsg.textContent = "";
    }, 3000);
}

// --- Modal Dialog Logic ---
const modal = document.getElementById('tips-modal');
const closeBtn = document.getElementById('close-modal');

// Open the modal automatically after 3 seconds to demonstrate user interaction
setTimeout(() => {
    if (modal) {
        modal.showModal();
    }
}, 3000);

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.close();
    });
}