document.getElementById("fraudForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let claimAmount = parseFloat(document.getElementById("claimAmount").value);
    let policyType = document.getElementById("policyType").value;
    let claimHistory = parseInt(document.getElementById("claimHistory").value);

    let fraudScore = Math.random() * 100;  // Random fraud risk score for now
    let fraudMessage = fraudScore > 70 ? "⚠️ High Risk of Fraud Detected!" : "✅ No Fraud Detected";

    document.getElementById("fraudResult").innerHTML = `
        <h3>Fraud Analysis Result</h3>
        <p><strong>Fraud Risk Score:</strong> ${fraudScore.toFixed(2)}%</p>
        <p>${fraudMessage}</p>
    `;
});
