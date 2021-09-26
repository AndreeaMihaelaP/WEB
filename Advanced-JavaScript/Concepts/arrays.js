const array = [1, 2, 3, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
  // side effect because not returning anything
}); // for loop

// map, filter, reduce
const mapArray = array.map((num) => {
  return num * 2;
}); // [2, 4, 6, 20, 32]

const mapArray1 = array.map((num) => num * 2);

// filter, reduce
const filterArray = array.filter((num) => {
  return num > 5;
});

const filterArray1 = array.filter((num) => num > 5);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);
