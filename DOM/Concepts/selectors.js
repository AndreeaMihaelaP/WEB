//  DOM Selectors
//  ------------

// 1. getElementById
document.getElementById("first");

// 2. getElementsByTagName
document.getElementsByTagName("h1");

// 3. getElementsByClassName
document.getElementsByClassName("second");
document.getElementsByClassName("second")[0]; // access the first element

// 4. querySelector
document.querySelector("li");

// 5. querySelectorAll
document.querySelectorAll("li, h1");

// 6. getAttribute
document.querySelector("li").getAttribute("random");

// 7.setAttribute
document.querySelector("li").setAttribute("random", "1000");

// 8. style.
// document.querySelector("h1").style.backgroundColor = "white";

// 9. className
var h1 = document.querySelector("h1");
h1.className = "coolTitle";

// 10. classList
var li = document.querySelector("li").classList;
li.add("coolTitle");
li.remove("coolTitle");
li.add("done");
li.toggle("done");
li.toggle("done");

// 11. innerHTML DANGEROUS
var h1 = document.querySelector("h1");
h1.innerHTML = "<strong>!!!!!!</strong>";

// 12. parentElement
var secondLi = document.querySelectorAll("li")[1];
secondLi.parentElement;

// 13. children
var secondLi = document.querySelectorAll("li")[1];
secondLi.parentElement.children;
