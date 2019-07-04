var p1button = document.querySelector("#p1button");
var p2button = document.querySelector("#p2button");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetbutton = document.querySelector("#reset");
var game2 = document.querySelector("#game2");
var noofrounds = document.querySelector("#noofrounds");

var p1score = 0;
var p2score = 0;
var winningscore = 5;
var gameover = false;

p1button.addEventListener("click", function() {
  if (!gameover) {
    p1score++;
    if (p1score === winningscore) {
      p1Display.classList.add("winningscore");
      gameover = true;
    }
    p1Display.textContent = p1score;
  }
});

p2button.addEventListener("click", function() {
  if (!gameover) {
    p2score++;
    if (p2score === winningscore) {
      p2Display.classList.add("winningscore");
      gameover = true;
    }
  }
  p2Display.textContent = p2score;
});

resetbutton.addEventListener("click", function() {
  reset();
});

function reset() {
  p1score = 0;
  p2score = 0;
  p1Display.textContent = p1score;
  p2Display.textContent = p2score;
  gameover = false;
  p1Display.classList.remove("winningscore");
  p2Display.classList.remove("winningscore");
}

game2.addEventListener("change", function() {
  noofrounds.textContent = game2.value;
  winningscore = Number(game2.value);
  reset();
});
