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
    if (input.includes("health insurance")) return "Health insurance covers medical expenses for illnesses and injuries.";
    if (input.includes("auto insurance")) return "Auto insurance protects against financial losses due to accidents.";
    if (input.includes("fraud detection")) return "AI can help detect fraudulent claims by analyzing past trends.";
    
    return "I'm not sure about that. Try asking about different types of insurance!";
}
