// JAVASCRIPT FUNCTIONS
// -----------------
// function() -> call the functions
// function(a, b) -> arguments is what is given to the function

// Parameters vs. Arguments
// Parameters are variables give to function when is created
// Arguments are variables/values give to function when is called

// 1. var a = function name() {} -> function expression
// Anonymous function -> function without a name
var sayBye = function () {
  console.log("Bye");
};
sayBye();

var sayBye = function byeBye() {
  console.log("Bye");
};
byeBye(); // its use is limited

// 2. function name() {} -> function declaration
function sayHello() {
  console.log("Hello");
}
sayHello();

function sing1() {
  console.log("AHHHHHHHH");
  console.log("TEEEEEEEE");
}

sing1();

function sing2() {
  console.log("LAAAA DEE DE");
  console.log("LAAAA");
}

sing2();

// DRY -> Don't repeat yourself, make the things efficient
function sing() {
  console.log(song);
}

sing("LAA DEE DE");
sing("TA DAAE");
sing("LAA LA");

// 3. return -> final way to end a function because the program exits
function multiply(a, b) {
  return a * b;
}

function multiply1(a, b) {
  if (a > 10 || b > 10) {
    return "That's too hard";
  } else {
    return a * b;
  }
}

multiply(5, 10);
alert(multiply(12, 13));
multiply1(15, 20);

// 4. <!-- () => (new in ECMAScript 6) -->
