function recommendInsurance() {
    let income = document.getElementById("income").value;
    let age = document.getElementById("age").value;
    let coverage = document.getElementById("coverage").value;
    let dependents = document.getElementById("dependents").value;
    let risk = document.getElementById("risk").value;

    let resultText = "<h2>Recommended Insurance Plan:</h2>";

    if (coverage === "health") {
        resultText += "<p>We recommend a comprehensive Health Insurance plan with hospital coverage.</p>";
    } else if (coverage === "life") {
        resultText += "<p>Based on your age and dependents, a Life Insurance policy with long-term benefits is best for you.</p>";
    } else if (coverage === "vehicle") {
        resultText += "<p>Consider a Vehicle Insurance plan that covers accidents and theft.</p>";
    } else if (coverage === "property") {
        resultText += "<p>Property Insurance is recommended for securing your assets from unexpected damage.</p>";
    }

    resultText += "<h3>Choose Your Preferred Bank:</h3>";
    resultText += '<a href="https://www.bank1.com/insurance" target="_blank">Bank 1 Insurance</a> | ';
    resultText += '<a href="https://www.bank2.com/insurance" target="_blank">Bank 2 Insurance</a>';

    document.getElementById("recommendation-result").innerHTML = resultText;
}
