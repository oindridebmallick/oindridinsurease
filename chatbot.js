function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatBox = document.getElementById("chatBox");

    if (input.trim() !== "") {
        let userMessage = `<p><strong>You:</strong> ${input}</p>`;
        chatBox.innerHTML += userMessage;

        let response = getBotResponse(input);
        let botMessage = `<p><strong>AI:</strong> ${response}</p>`;
        chatBox.innerHTML += botMessage;

        document.getElementById("userInput").value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("why health insurance")) return "Health insurance provides financial coverage for medical expenses incurred due to illnesses, injuries, and other healthcare needs. It helps policyholders manage the costs of doctor visits, hospital stays, prescription medications, surgeries, and preventive care, ensuring access to necessary treatments while reducing out-of-pocket expenses.";
    if (input.includes("What should I do if I suspect fraud?")) return "Report suspicious activity to your insurer immediately. InsurEase can guide you through gathering evidence and submitting a fraud report.";
    if (input.includes("fraud detection")) return "AI can help detect fraudulent claims by analyzing past trends.";
    
    return "I'm not sure about that. Try asking about different types of insurance!";
}
