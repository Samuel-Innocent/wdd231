// Grab the URL string
const currentUrl = window.location.href;

// Parse the search parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Helper function to inject data if it exists
function displayData(paramKey, elementId) {
    const value = urlParams.get(paramKey);
    if (value) {
        document.getElementById(elementId).textContent = value;
    }
}

// Inject the required fields into the HTML spans
displayData('first-name', 'show-first');
displayData('last-name', 'show-last');
displayData('email', 'show-email');
displayData('phone', 'show-phone');
displayData('business', 'show-business');
displayData('timestamp', 'show-timestamp');