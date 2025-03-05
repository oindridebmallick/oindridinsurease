document.addEventListener("DOMContentLoaded", function() {
    let ctx1 = document.getElementById("marketChart").getContext("2d");
    let marketChart = new Chart(ctx1, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Best Insurance Policies",
                data: [10, 15, 8, 20, 25, 18],
                borderColor: "yellow",
                backgroundColor: "rgba(255, 255, 0, 0.2)",
                fill: true
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false
        }
    });

    let ctx2 = document.getElementById("pieChart").getContext("2d");
    let pieChart = new Chart(ctx2, {
        type: "pie",
        data: {
            labels: ["Health", "Life", "Vehicle", "Property"],
            datasets: [{
                data: [40, 30, 20, 10],
                backgroundColor: ["yellow", "orange", "red", "blue"]
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false
        }
    });
});

function downloadMarketData() {
    let data = "Insurance Policy Market Data:\nHealth - 40%\nLife - 30%\nVehicle - 20%\nProperty - 10%";
    let blob = new Blob([data], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "market_data.txt";
    link.click();
}
