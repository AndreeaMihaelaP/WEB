// JAVASCRIPT DATA STRUCTURES
// -----------------
// Object

// A function inside an object is called method

var user = {
  name: "John",
  age: 34,
  hobby: "Soccer",
  isMarried: false,
};

// Access a property of an object
console.log(user.name); // "John"

user.favoriteFood = "spinach";
user.isMarried = true;

var user = {
  name: "John",
  age: 34,
  hobby: "Soccer",
  isMarried: false,
  spells: ["abracadraba", "blahblah", "shazam"],
  shout: function () {
    console.log("AHHHH!");
  }, // this is a method
};

user.spells[1]; //blahblah
user.shout(); // "AHHHH!"

user2 = {}; // empty object
