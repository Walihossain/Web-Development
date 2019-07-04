// alert("Hello");

// Functions:

// function pokemon(){
//     console.log("Charmander");
//     console.log("Charmeleon");
// }

// Arguments: are functions that take inputs, mutiple inputs can be added

// function square(num) {
//   console.log(num * num);
// }

// A function will give only one return until multiples are placed in an if statement

// isEven()

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else return false;
// }

// factorial()

// function factorial(i) {
//   var fact = 1;
//   if (i > 0) {
//     for (var i = i; i > 0; i--) {
//       var fact = fact * i;
//     }
//     return fact;
//   } else {
//     return 0;
//   }
// }

// kebabToSnake()

function kebabToSnake(str) {
  var newstr = str.replace(/-/g, "_");
  return newstr;
}
