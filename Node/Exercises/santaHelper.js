const { time } = require("console");
const fs = require("fs");

// 1. What floor does Santa end up on?
// (  -- > go UP 1  floor
// ) -- > go DOWN 1 floor

function question1() {
  fs.readFile("./santa.txt", (err, data) => {
    console.time("santa-time");
    const directions = data.toString();
    const directionsArray = directions.split("");

    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === "(") {
        return (acc += 1);
      } else if (currentValue === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.timeEnd("santa-time");
    console.log(answer);
  });
}

// question1();

// 2. When does Santa first enter the basement?
function question2() {
  fs.readFile("./santa.txt", (err, data) => {
    console.time("santa-time");
    const directions = data.toString();
    const directionsArray = directions.split("");
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some((currentValue) => {
      if (currentValue === "(") {
        accumulator += 1;
      } else if (currentValue === ")") {
        accumulator -= 1;
      }

      counter++;

      return accumulator < 0;
    });
    console.timeEnd("santa-time");
    console.log("basement entered at: ", counter);
  });
}

question2();
