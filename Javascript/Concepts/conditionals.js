// JAVASCRIPT CONDITIONALS
// -----------------

var firstName = "Billy";
var lastName = "Ann";

// 1. if
if (firstName === "Billy") {
  alert("Hi Billy");
}

// 2. else
if (firstName === "Billy") {
  alert("Hi Billy");
} else {
  alert("hmm I don't know you");
}

// 3. else if
if (firstName === "Billy") {
  alert("Hi Billy");
} else if (firstName === "Suzy") {
  alert("Hi Suzy");
} else {
  alert("hmm I don't know you");
}

// <!-- ternary operator -->
// cond ? expr1 : expr2
function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter!" : "Access Denied!";

var automatedAnswer =
  "Your account # is " + (isUserValid(false) ? "1234" : "not available");

function condition() {
  if (isUserValid(true)) {
    return "You may enter!";
  } else {
    return "Access Denied";
  }
}
// <!-- switch -->

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right":
      whatHappens = "you found a river";
      break;
    case "left":
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

// JAVASCRIPT LOGICAL OPERATORS
// -----------------

// 1. ||
if (firstName === "Billy" || firstName === "Ann") {
  alert("Hi Billy or Ann");
}
// 2.&&
if (firstName === "Billy" && lastName === "Ann") {
  alert("Hi Billy Ann");
}

// 3.!
if (!(firstName === "Bob")) {
  alert("Hi anyone else beside Bob");
}
