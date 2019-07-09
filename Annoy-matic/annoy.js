// var answer = prompt("Are we there yet? use yes or no");
// while (answer != "yes") {
//   var answer = prompt("Are we there yet? use yes or no");
// }
// alert("Yay!, we made it");
// Version 2
var answer = prompt("Are we there yet? use yes or no");
while (answer.indexOf("yes") == -1) {
  var answer = prompt("Are we there yet? use yes or no");
}
alert("Yay!, we made it");
