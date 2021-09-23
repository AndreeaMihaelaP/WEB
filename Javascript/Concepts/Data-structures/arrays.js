// JAVASCRIPT DATA STRUCTURES
// -----------------
// Array
// Counting from 0
var empty = [];
var list = ["tiger", "cat", "bear", "bird"];

// Access an array
console.log(list[1]); // cat
console.log(list[0]); // tiger

var numbers = [1, 2, 3, 5];
var booleans = [true, false, true];
var functionList = [
  function apple() {
    console.log("Apple");
  },
  function pear() {
    console.log("Pear");
  },
];
var mixedList = [
  "apples",
  3,
  undefined,
  true,
  function apple() {
    console.log("Apple");
  },
]; // is not advised, performance issue

// Array in array
var list1 = [
  ["tiger", "cat", "bear", "bird"],
  [1, 2, 3],
];
console.log(list1[0][2]); // "bear"

// Objects in array
var listOfUsers = [
  {
    username: "Andy",
    password: "123**",
  },
  {
    username: "Jess",
    password: "1**",
  },
];

listOfUsers[0].password; // "123**"

// Predefined methods
var list2 = ["tiger", "cat", "bear", "bird"];
list2.shift(); // "tiger" ["cat", "bear", "bird"]
list2.pop(); // "bird" ["cat", "bear"]
list2.push("elephant"); // ["cat", "bear", "elephant"]
// concat doesn't modify the original array, create a new one
list2.concat(["bee", "deer"]); // ["cat", "bear", "elephant", "bee", "deer"]
list2.sort(); // ["bear", "cat", "elephant"]

var myList = ["cat", "bear", "elephant", "bee", "deer"];
var myNewList = myList.concat(["monkey"]);
console.log(myList); // ["cat", "bear", "elephant", "bee", "deer"];
console.log(myNewList); // ["cat", "bear", "elephant", "bee", "deer", monkey];
