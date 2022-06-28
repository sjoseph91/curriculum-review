const readline = require("readline-sync");

const firstNum = +readline.question("Enter your first number: ");
const secondNum = +readline.question("Enter your second number: ");
readline.setDefaultOptions({limit: ['add', "sub", "mul", "div"]});
const operation = readline.question("Operation to perform? (add, sub, mul, or div): ");
let result = "";
switch(operation){
    case "add":
        result = firstNum + secondNum;
        break;
    case "sub":
        result = firstNum - secondNum;
        break;
    case "mul":
        result = firstNum * secondNum;
        break;
    case "div":
        result = firstNum / secondNum;
        break;
    default:
        result = "Could not compute";
        break;
}

console.log("Your answer is:  " + result);