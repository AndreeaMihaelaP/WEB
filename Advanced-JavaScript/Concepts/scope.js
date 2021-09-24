// Scope
// Variable access
// By default is Root Scope(window)

var b = "Can I access this?";
var fun = 5;

function funFunction() {
  // Child Scope
  var fun = "Hello"; // naming conflict
  console.log(1, fun); // Hello
}

function funnerFunction() {
  // Child Scope
  var fun = "Bye";
  console.log(2, fun); // Bye
}

function funniestFunction() {
  // Child Scope
  fun = "Ahh";
  console.log(3, fun); // Ahh
}

console.log("window", fun); // 5

function bb() {
  var a = "hello";
  b = "hello";
}
