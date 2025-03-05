// Call Support Function
function callSupport() {
    window.location.href = "tel:+18001234567"; // Replace with actual helpline number
}

// Email Support Function
function emailSupport() {
    window.location.href = "mailto:support@insurease.com?subject=Emergency Assistance Request";
}

// Start Live Chat Function
function startChat() {
    window.location.href = "chatbot.html"; // Redirects to chatbot for help
}

// Handle Emergency Claim Submission
document.getElementById("claim-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let policyNumber = document.getElementById("policy-number").value;
    let claimType = document.getElementById("claim-type").value;
    let description = document.getElementById("description").value;

    if (policyNumber.trim() === "" || description.trim() === "") {
        alert("Please fill in all details.");
        return;
    }

    alert("Emergency claim submitted successfully!");
    document.getElementById("claim-form").reset();
});

// Find Nearest Assistance Function
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation, showError);
    } else {
        document.getElementById("location-result").innerText = "Geolocation is not supported by this browser.";
    }
}

function showLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    // Open Google Maps with nearby insurance offices
    window.open(`https://www.google.com/maps/search/insurance+office+near+me/@${lat},${lon},15z`);
}

function showError(error) {
    document.getElementById("location-result").innerText = "Unable to retrieve location.";
}
