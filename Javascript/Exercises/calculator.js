// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.

var firstNumber = prompt("What is the first number?");
var secondNumber = prompt("What is the second number?");
var sum = Number(firstNumber) + Number(secondNumber);
alert("The sum is: " + sum);

// BONUS: Make a program that can subtract, multiply, and also divide!

// Subtract
var firstNumber = prompt("What is the first number?");
var secondNumber = prompt("What is the second number?");
var difference = Number(firstNumber) - Number(secondNumber);
alert("The difference is: " + difference);

// Multiply
var firstNumber = prompt("What is the first number?");
var secondNumber = prompt("What is the second number?");
var multiplication = Number(firstNumber) * Number(secondNumber);
alert("The multiplication is: " + multiplication);

// Divide
var firstNumber = prompt("What is the first number?");
var secondNumber = prompt("What is the second number?");
var division = Number(firstNumber) / Number(secondNumber);
alert("The division is: " + division);
