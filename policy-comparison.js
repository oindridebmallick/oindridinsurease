document.addEventListener("DOMContentLoaded", function () {
    let policies = [
        { name: "XYZ Health Plus", premium: "$11/year", coverage: "Full Coverage", claim: "Easy", exclusions: "Pre-existing diseases", rating: "4.5⭐" },
        { name: "SecureLife Plan", premium: "$20/year", coverage: "Basic Coverage", claim: "Moderate", exclusions: "Maternity, Dental", rating: "4.0⭐" },
        { name: "ABC Gold Plan", premium: "$15/year", coverage: "Premium Coverage", claim: "Fast", exclusions: "Cosmetic Treatments", rating: "4.8⭐" },
        { name: "Niramaya Health Scheme", premium: "$6.25/year", coverage: "Premium Coverage", claim: "Fast", exclusions: "Cosmetic Treatments", rating: "4.9⭐" },
    ];

    let policy1Select = document.getElementById("policy1");
    let policy2Select = document.getElementById("policy2");

    // Populate dropdowns
    policies.forEach((policy, index) => {
        let option1 = new Option(policy.name, index);
        let option2 = new Option(policy.name, index);
        policy1Select.add(option1);
        policy2Select.add(option2);
    });

    document.getElementById("compare-btn").addEventListener("click", function () {
        let policy1 = policies[policy1Select.value];
        let policy2 = policies[policy2Select.value];

        document.getElementById("policy1-name").innerText = policy1.name;
        document.getElementById("policy2-name").innerText = policy2.name;

        let tableRows = document.querySelectorAll("#comparison-results tr");
        tableRows[0].children[1].innerText = policy1.premium;
        tableRows[0].children[2].innerText = policy2.premium;
        tableRows[1].children[1].innerText = policy1.coverage;
        tableRows[1].children[2].innerText = policy2.coverage;
        tableRows[2].children[1].innerText = policy1.claim;
        tableRows[2].children[2].innerText = policy2.claim;
        tableRows[3].children[1].innerText = policy1.exclusions;
        tableRows[3].children[2].innerText = policy2.exclusions;
        tableRows[4].children[1].innerText = policy1.rating;
        tableRows[4].children[2].innerText = policy2.rating;
    });

    // Download feature
    document.getElementById("download-btn").addEventListener("click", function () {
        let table = document.querySelector(".comparison-table").outerHTML;
        let blob = new Blob([table], { type: "text/html" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "Policy_Comparison.html";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
