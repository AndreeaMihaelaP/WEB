const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

// Closures
// Child scope remember the parent scope
// but in function I think
// A function ran
// The function executed
// It's never going to execute the function again
// but it's going remember that there are references to those variables

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5);

// Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

// Avoiding side-effects, functional purity
var a = 1;
function b() {
  a = 2; // side-effect
}

// functional purity -> always return something
// it's called deterministic
// whatever it is parameters it always returns the same thing
