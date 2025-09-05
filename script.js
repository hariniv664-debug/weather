// script.js

// Show welcome alert when page loads
window.onload = function () {
    alert("Welcome to Weather Forecast! 🌦 Stay updated with the latest weather conditions.");
};

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Handle form submission
function submitForm(event) {
    event.preventDefault(); // Stop page reload
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name && email) {
        alert("✅ Thank you " + name + "! You have subscribed with " + email + " for weather updates.");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
    } else {
        alert("⚠️ Please fill out all fields before subscribing.");
    }
}
