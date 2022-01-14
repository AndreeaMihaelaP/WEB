// const script2 = require("./script2");
import { largeNumber } from "./script2.mjs";

const a = largeNumber;
const b = 5;

setTimeout(() => {
  console.log("SetTimeout -->", a + b);
}, 3000);

console.log(a + b);
// console.log(__dirname);
