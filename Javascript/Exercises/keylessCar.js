// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

var age = prompt("What is your age?");

if (Number(age) < 18) {
  alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) === 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
  alert("Powering On. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

function checkDriverAge(age) {
  if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  } else {
    alert("Powering On. Enjoy the ride!");
  }
}

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

const checkDriverAge2 = function (age) {
  if (Number(age) < 18) {
    console.log("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) === 18) {
    console.log(
      "Congratulations on your first year of driving. Enjoy the ride!"
    );
  } else {
    console.log("Powering On. Enjoy the ride!");
  }
};

checkDriverAge2(92);
// it returns "Powering On. Enjoy the ride!"
