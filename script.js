const display = document.getElementById("display");
let lastInput = "";
function appendToDisplay(input) {
    if (isOperator(lastInput) && isOperator(input)) {
        // Replace the last operator with the new one
        display.value = display.value.slice(0, -1) + input;
    } else {
        // Append the value to the display
        display.value += input;
    }
    lastInput = input; // Update the last input
}
function isOperator(input) {
    return ["+", "-", "*", "/"].includes(input);
}
function clearDisplay() {
    display.value = "";
    lastInput = ""; // Reset last input when clearing the display
}
function calculate() {
    try {
        if (display.value.includes("/0")) {
            display.value = "Indivisible by 0";
            setTimeout(() => {
                clearDisplay()
            }, 2000);

        } else {
            display.value = eval(display.value);
            lastInput = ""; // Reset last input after calculation
        }
        if (display.value.includes("undefined")) {
            setTimeout(() => { clearDisplay() }, 2000); // Clear the display after 2 seconds   
        }
    } catch (error) {
        display.value = "Error";
        setTimeout(() => {
            clearDisplay();
        }, 2000); // Clear the display after 2 seconds
    }
}
function cleardigit() {
    display.value = display.value.slice(0, -1);
}

