//.padStart()
"Turtle".padStart(10); // '          Turtle'

//.padEnd()
"Turtle".padEnd(10); //'Turtle          '

// Trailing Comma
// const fun = (a, b, c, d,) => {
//   console.log(a);
// };

// Object.values
let obj = {
  username: "Santa",
  username1: "Rudolf",
  username2: "Grinch",
};

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

Object.values(obj).forEach((value) => {
  console.log(value);
});

Object.entries(obj).forEach((value) => {
  console.log(value);
});

Object.entries(obj).map((value) => {
  return value[1] + value[0].replace("username", "");
});

// Async/Await
