//  JAVASCRIPT TYPES
//  -----------------

// 1. Number
console.log(3 + 4); // 7
console.log(12 - 4); // 8
console.log(3 * 5); // 15
console.log(12 / 4); // 3
console.log((3 + 4) * 2); // 14
console.log(12 % 6); // 0
console.log(12 % 5); // 2

// 2. String
console.log("Bob"); // "Bob"
console.log("Hello" + "There"); // "HelloThere"
console.log("Hello " + "there"); // "Hello there"
console.log("This isn't very nice"); // "This isn't very nice"
console.log("This isn't very nice"); // "This isn't very nice"
console.log(10 + "34"); // "1034"
console.log(10 - "3"); // 7 - but is number
console.log("hello" - "bye"); // NaN - not a number

// 3. Boolean
console.log(true); // true
console.log(false); // false
console.log(3 > 2); // true
console.log(5 > 10); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true
console.log(3 === 3); // true
console.log(3 !== 3); // false

// 4. Undefined
// Used when nothing is assigned to the variable

// 5. Null
// Null means there are nothing into an object

// <!-- 6. Symbol (new in ECMAScript 6) -->
var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

// unique type

sym2 === sym3;

// 7. Object
// Collections of property

// JAVASCRIPT COMPARISONS
// -----------------

// !==
// ===
// >=
// <=
// >
// <

// === vs. == (same for !== vs. !=)
// === compare the value and the type
// == compare only the value
var a = 1;
var b = "1";

if (a === b) {
  console.log(true);
} else {
  console.log(false);
} // log false

if (a == b) {
  console.log(true);
} else {
  console.log(false);
} // log true
