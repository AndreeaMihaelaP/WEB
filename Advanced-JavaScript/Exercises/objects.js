//Evaluate these:

const { log } = require("console");

//#1
[2] === [2]; // false
// {} === {}; // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // { a: 5 };
const object2 = object1; // { a: 5 };
const object3 = object2; // { a: 5 };
const object4 = { a: 5 }; // { a: 5 };
object1.a = 4; // object1, object2, object3 for a will be 4

//#3 create two classes: an Animal class and a Mammal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound() {
    console.log(`Moo ${this.name}, ${this.type}, ${this.color}`);
  }
}

const cow = new Mammal("Milka", "Smart Cow", "Purple");
