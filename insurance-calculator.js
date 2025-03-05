document.getElementById("calculate-btn").addEventListener("click", function () {
    let age = parseInt(document.getElementById("age").value);
    let income = parseInt(document.getElementById("income").value);
    let coverage = document.getElementById("coverage").value;
    let term = parseInt(document.getElementById("term").value);
    let medical = document.getElementById("medical").value;

    if (isNaN(age) || isNaN(income) || isNaN(term)) {
        alert("Please enter all details correctly!");
        return;
    }

    let basePremium = income * 0.02; // 2% of income as base premium
    if (coverage === "life") basePremium *= 1.5;
    if (coverage === "vehicle") basePremium *= 1.2;
    if (medical === "minor") basePremium *= 1.3;
    if (medical === "major") basePremium *= 1.8;

    let totalPremium = (basePremium / term).toFixed(2);
    document.getElementById("premium-result").innerText = "$" + totalPremium;

    generateChart([income * 0.02, totalPremium]);

    // Dummy policies
    let policies = [
        { provider: "XYZ Insurance", premium: (totalPremium * 1.1).toFixed(2), coverage: "High" },
        { provider: "ABC Insurance", premium: (totalPremium * 0.9).toFixed(2), coverage: "Medium" },
        { provider: "SecureLife", premium: (totalPremium * 1.2).toFixed(2), coverage: "Premium" },
    ];

    let policyTable = document.getElementById("policy-results");
    policyTable.innerHTML = ""; // Clear previous results
    policies.forEach(policy => {
        let row = `<tr>
            <td>${policy.provider}</td>
            <td>$${policy.premium}</td>
            <td>${policy.coverage}</td>
            <td><a href="#" class="apply-btn">Apply</a></td>
        </tr>`;
        policyTable.innerHTML += row;
    });
});

function generateChart(data) {
    let ctx = document.getElementById("premiumChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Base Premium", "Final Premium"],
            datasets: [{
                label: "Premium Cost",
                data: data,
                backgroundColor: ["yellow", "gold"],
                borderColor: "black",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
