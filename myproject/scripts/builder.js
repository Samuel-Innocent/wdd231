import { setFooterDates, toggleMenu } from './utils.mjs';

setFooterDates();
toggleMenu();

const scriptPad = document.getElementById('script-pad');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const readBtn = document.getElementById('read-btn');
const statusMsg = document.getElementById('status-msg');

const savedScript = localStorage.getItem('facelessScript');
if (savedScript) {
    scriptPad.value = savedScript;
}

saveBtn.addEventListener('click', () => {
    localStorage.setItem('facelessScript', scriptPad.value);
    showStatus("✅ Script saved successfully!", "#4caf50");
});

clearBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear your script? This cannot be undone.")) {
        localStorage.removeItem('facelessScript');
        scriptPad.value = "";
        showStatus("🗑️ Script cleared.", "#ff4d4d");
    }
});

readBtn.addEventListener('click', () => {
    const textToRead = scriptPad.value.trim();
    
    if (!textToRead) {
        showStatus("Please write a script first!", "#ff4d4d");
        return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(textToRead);
    
    utterance.rate = 1.0; 
    utterance.pitch = 1.0;

    window.speechSynthesis.speak(utterance);
    showStatus("🔊 Reading aloud...", "#00BFFF");
});

function showStatus(message, color) {
    statusMsg.textContent = message;
    statusMsg.style.color = color;
    setTimeout(() => {
        statusMsg.textContent = "";
    }, 3000);
}

const modal = document.getElementById('tips-modal');
const closeBtn = document.getElementById('close-modal');

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