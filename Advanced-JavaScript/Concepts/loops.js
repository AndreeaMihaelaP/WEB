const basket = ["apples", "oranges", "grapes"];
for (let i = 0; i < basket.length; i++) {
  console.log(i);
}

basket.forEach((item) => {
  console.log(item);
});

// for of
// Iterating - arrays, strings
for (item of basket) {
  console.log(item);
}

// for in - loop over obj properties
// with object enumerating
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};

for (item in detailedBasket) {
  console.log(item);
}
