// while (secretNumber != guess) {
// create secretNumber
var i = 1;

while (i == 1) {
  var secretNumber = 4;

  // ask user for the secretNumber

  var guess = Number(prompt("Guess the secret number"));

  // Check and let user know

  if (secretNumber === guess) {
    alert("You guessed it correctly!");
    i = 2;
  } else if (secretNumber > guess) {
    alert("Choose a higher number");
  } else if (secretNumber < guess) {
    alert("Choose a lower number");
  }
}
