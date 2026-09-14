 const firstNumber = 20;
const secondNumber = 5;

function add(a, b) {
return a + b;
}


function divide(a, b) {
if (b === 0) {
return "Cannot divide by zero";
}
return a / b;
}

function subtract(a, b) {
// TODO: Add subtract functions.
    return a - b;
}

function multiply(a, b) {
// TODO: Add multiply functions
    return a * b;
}

console.log("Add:", add(firstNumber, secondNumber));
console.log("Divide:", divide(firstNumber, secondNumber));
console.log("Subtract:", subtract(firstNumber, secondNumber));
console.log("Multiply:", multiply(firstNumber, secondNumber));