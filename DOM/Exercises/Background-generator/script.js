var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var setRandomColor = setInterval(function () {
  console.log("set inter");
  var randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  var randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log("ran", randomColor1);
  body.style.background =
    "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";

  css.textContent = body.style.background ? body.style.background + ";" : "";
}, 1000);

function changeBackgroundColor() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background ? body.style.background + ";" : "";
  clearInterval(setRandomColor);
}

color1.addEventListener("input", changeBackgroundColor);

color2.addEventListener("input", changeBackgroundColor);
