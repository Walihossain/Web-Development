// Basic menthod:

// var button = document.querySelector("button");

// var body = document.getElementsByTagName("body")[0];
// var i = 1;

// button.addEventListener("click", function() {
//   if (i == 0) {
//     body.style.background = "blue";
//     i = 1;
//   } else {
//     body.style.background = "yellow";
//     i = 0;
//   }
// });

// Using .toggle

var button = document.querySelector("button");
var body = document.getElementsByTagName("body")[0];

button.addEventListener("click", function() {
  body.classList.toggle("blue");
});
