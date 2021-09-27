// Reference type
[] === []; // false
[1] === [1]; // false

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2; // true
object1 === object3; // false

object1.value = 15;
object2.value; // 15;
object3.value; // 10;

// Context vs scope
// Scope is created when see curly brackets

function newF() {
  let a = 4;
}

// Context tells where you are within the object
console.log(this); // -> window
console.log(this === window); // true

function a() {
  console.log(this); // still the window
}

const object4 = {
  a: function () {
    console.log(this); // object4
  },
};

// Instantiation
// when make a copy of an object and reuse the code
class Player {
  constructor(name, type) {
    console.log(this); // Wizard
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a  ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log(this); // wizard
  }

  play() {
    console.log(`WEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard1 = new Wizard("Shawn", "Dark Magic");

// Classical Inheritance - before ES6

var Player = function (name, type) {
  this.name = name;
  this.type = type;
};

Player.prototype.introduce = function () {
  console.log(`Hi I am ${this.name}, I'm a  ${this.type}`);
};

var wizard1 = new Player("Shelly", "Healer");
var wizard2 = new Player("Shawn", "Dark Magic");

wizard1.play = function () {
  console.log(`WEE I'm a ${this.type}`);
};

wizard2.play = function () {
  console.log(`WEE I'm a ${this.type}`);
};

// Pass by value vs. pass by reference
// primitive type -> value
// object -> reference

var a = 5;
var b = a;

b++; // pass only the value
console.log(a); // 5
console.log(b); // 6

// pass by reference
let obj1 = { name: "Yao", password: "123" };
let obj2 = obj1;

obj2.password = "easy pease";

console.log(obj1); //  { name: "Yao", password: "easy pease" };
console.log(obj2); // { name: "Yao", password: "easy pease" };

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(12432);
console.log(d); // [1, 2, 3, 4, 5, 12432]
console.log(c); // [1, 2, 3, 4, 5, 12432]

let obj = { a: "a", b: "b", c: "c" };
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
obj.c = 5;
console.log(clone); // { a: "a", b: "b", c: "c" };

let deepObj = { a: "a", b: "b", c: { deep: "try and copy me" } };
let clone = Object.assign({}, deepObj);
let clone2 = { ...deepObj };
deepObj.c = 5;
console.log(clone); //  { a: "a", b: "b", c: { deep: "try and copy me" } };

deepObj.c.deep = "hahaha";
console.log(deepObj); //  { a: "a", b: "b", c: { deep: "hahaha" } };
console.log(clone); //  { a: "a", b: "b", c: { deep: "hahaha" } };
console.log(clone2); //  { a: "a", b: "b", c: { deep: "hahaha" } };

// Shallow clone - clone only the first level
let superClone = JSON.parse(JSON.stringify(deepObj));
console.log(superClone); //  { a: "a", b: "b", c: { deep: "try and copy me" } };
