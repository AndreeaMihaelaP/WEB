// Language converting certain type in another type
1 == "1"; // true
1 === "1"; // false

if (1) {
  console.log(5); //5
}
if (true) {
  console.log(5); //5
}

if (0) {
  console.log(5); // not enter here
}

-0 === +0; // true
Object.is(-0, +0); // true

NaN === NaN; // false
Object.is(NaN, NaN); // true
