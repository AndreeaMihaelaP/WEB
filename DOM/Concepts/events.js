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
  var deleteButton = document.createElement("button");
  var br = document.createElement("br");

  deleteButton.id = "delete";
  li.appendChild(document.createTextNode(input.value));
  deleteButton.appendChild(document.createTextNode("Delete"));
  ul.appendChild(li);
  li.appendChild(deleteButton);
  ul.appendChild(br);
  input.value = "";
  deleteElement();
  toggleElement();
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

// If you click on the list item, it toggles the .done class on and off.
function toggleElement() {
  var listItems = document.querySelectorAll("li");
  listItems.forEach(function (element) {
    element.addEventListener("click", function () {
      element.classList.toggle("done");
    });
  });
}

// Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
function deleteElement() {
  var deleteButtons = document.querySelectorAll("#delete");
  var br = document.querySelectorAll("br");
  var ul = document.querySelector("ul");

  deleteButtons.forEach(function (element, index) {
    element.addEventListener("click", function () {
      const li = element.parentNode;
      ul.removeChild(li);
      ul.removeChild(br[index]);
    });
  });
}

deleteElement();
toggleElement();

buttonEnter.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
