// JAVASCRIPT LOOPING
// -----------------

var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript!",
  "eat healthy",
];

// 1.for
for (var i = 0; i < todos.length; i++) {
  todos[i] = todos[i] + "!";
  todos.pop();
}

console.log(todos); // ["clean room!", "brush teeth!"]

// 2. while
var counterOne = 0;
while (counterOne < 10) {
  console.log(counterOne);
  counterOne++;
}

var counterOne = 10;
while (counterOne > 0) {
  console.log(counterOne);
  counterOne--;
}

// 3.do
var counterTwo = 10;
do {
  console.log(counterTwo);
  counterTwo--;
} while (counterTwo > 0);

// Difference between while and do is that while check the condition first
// and do execute the code and after check the condition

// 4.forEach (new in ECMAScript 5)
var todos1 = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript!",
  "eat healthy",
];

function logTodos(todo, index) {
  console.log(todo, index);
}

todos1.forEach(logTodos);

todos1.forEach(function (todo, index) {
  console.log(todo, index);
});
