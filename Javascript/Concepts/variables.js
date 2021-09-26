// JAVASCRIPT VARIABLES
// -----------------
// Rules
// 1. Can't start with a number
// 2. Can't start with a symbol except $ or _

// 1. var
var george = "The pretzels are making me thirsty!";

var first = prompt("Enter first number");
var second = prompt("Enter second number");
var sum = Number(first) + Number(second);
alert("The sum is: " + sum);

var a = true;
a = "Hello";
console.log(a); // "Hello"

var b;
console.log(b); // undefined

// <!-- let (new in ECMAScript 6)-->
let experience = 100;
let wizardLevel = false;
if (experience > 90) {
  let wizardLevel = true;
}
// <!-- const (new in ECMAScript 6)-->
const player = "bob"; // constant

const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};

// I cant change the obj, but I can change the properties

// Expression is something that produce a value
1 + 3;
var a = 2;
// return true;

// Destructing
const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;

const name = "john snow";

const obj = {
  [name]: "hello",
  ["ray" + "smith"]: "hi hi",
  [1 + 3]: "he",
};

// Obj properties
const a = "Simon";
const b = true;
const c = {};

const obj = {
  a,
  b,
  c,
};

// Template string
const greeting = "Hello " + name + " you seem to be doing great";
const age = 34;
const greet = `Hello ${name} whats up? You are ${age - 34}`;

// Default arguments
function greet(name = "", age = 30, pet = "cat") {
  return `Hello ${name} whats up? You are ${
    age - 34
  }. What a lovely pet ${pet}`;
}
