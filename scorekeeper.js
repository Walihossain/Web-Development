var p1 = document.getElementById("p1");
var p2 = document.querySelector("#p2");
var resetbutton = document.getElementById("reset");
var game2 = document.querySelector("input");
var maxgame2 = document.querySelector("#maxgame2");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore = 5;

var p1h1 = document.querySelector("#p1h1score");
var p2h1 = document.querySelector("#p2h1score");

p1.addEventListener("click", function() {
  if (!gameover) {
    p1score++;
    if (p1score === winningscore) {
      gameover = true;
      p1h1.classList.add("score");
    }
    p1h1.textContent = p1score;
  }
});
p2.addEventListener("click", function() {
  if (!gameover) {
    p2score++;
    if (p2score === winningscore) {
      gameover = true;
      p2h1.classList.add("score");
    }
    p2h1.textContent = p2score;
  }
});

resetbutton.addEventListener("click", function() {
  reset();
});

function reset() {
  p1score = 0;
  p2score = 0;
  p1h1.textContent = 0;
  p2h1.textContent = 0;
  p1h1.classList.remove("score");
  p2h1.classList.remove("score");
  gameover = false;
}

game2.addEventListener("change", function() {
  maxgame2.textContent = game2.value;
  winningscore = Number(game2.value);
  reset();
});
