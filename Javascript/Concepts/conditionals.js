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
// <!-- switch -->

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
