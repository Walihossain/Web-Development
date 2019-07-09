// var input = [];
// function printReverse(input) {
//   var i = input.length - 1;
//   for (; i >= 0; i--) {
//     console.log(input[i]);
//   }
// }

// isUniform()

// var input = [];
// function isUnform(input) {
//   var count = 1;
//   for (var i = 1; i <= input.length - 1; i++) {
//     if (input[0] !== input[i]) {
//       console.log("false"); // I could have used
//       count = 0;
//     }
//   }

//   if (count === 1) {
//     console.log("true");
//   }
// }

// sumArray()

// var input = [];

// function sumArray() {
//   var sum = Number(input[0]);
//   for (var i = 1; i <= input.length - 1; i++) {
//     sum = sum + input[i];
//   }
//   console.log(sum);
// }

// maxArray()

var input = [];

function maxArray() {
  var max = input[0];
  for (var i = 0; i <= input.length - 1; i++) {
    if (input[i] < input[i + 1]) {
      max = input[i + 1];
    }
  }
  return max;
}
