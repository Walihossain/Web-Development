// var userName = prompt("Hey what's your name?");

// alert("Its nice to meet you " + userName);

// console.log("Yup great to meet you here as well, " + userName);

// // Stalker Exercise
// var userName1 = prompt("Hey what's your first name?");
// var userName2 = prompt("Hey whats your surname?");
// var age = prompt("What's your age?");

// console.log("Your full name is " + userName1 + userName2);
// console.log("And you are " + age + " years old");

// //Age Calculator

// var age = prompt("Enter your age and see how many days it has been?");
// var days = 365 * age;

// alert("You age in days is " + days);

// Conditionals Exercise

var age = Number(prompt("Enter your age:"));

if (age <= 0) {
  console.log("Error, age cannot be negeative");
} else if (age < 18) {
  console.log("Sorry, you cannot enter ");
} else if (age < 21) {
  console.log("You can enter, but cannot drink");
} else if (age == 21) {
  console.log("Happy 21st Birthday");
} else {
  console.log("You can enter and drink!");
}

if (age % 2 !== 0) {
  console.log("Age is odd");
} else {
  console.log("Age is even");
}

var agesqrt = Math.sqrt(age);
if (age % agesqrt == 0) {
  console.log("Your age is a perfect sqaure");
} else {
  console.log("Your age is not a perfect square");
}
