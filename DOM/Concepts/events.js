document.getElementsByTagName("button");

// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function () {
//   console.log("click");
// });

var buttonEnter = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

buttonEnter.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
