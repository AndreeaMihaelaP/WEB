// change everything below to the newer Javascript!

// let + const
let a = "test";
let b = true;
const c = 789;
a = "test2";

// Destructuring
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

const { firstName, lastName, age, eyeColor } = person;

// Object properties
const a = "test";
const b = true;
const c = 789;

const okObj = {
  a,
  b,
  c,
};

// Template strings
const message = `Hello ${firstName} 
   have I met you before? I think we met in ${city}
  ast summer no???`;

// default arguments
// default age to 10;
const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol("This is my first Symbol");

// Arrow functions
const whereAmI = (username, location) =>
  username && location ? "I am not lost" : "I am totally lost!";
