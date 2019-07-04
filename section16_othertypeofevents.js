var li1 = document.querySelectorAll("li");

for (var i = 0; i < li1.length; i++) {
  li1[i].addEventListener("mouseover", function() {
    this.classList.add("color");
  });
  li1[i].addEventListener("mouseout", function() {
    this.classList.remove("color");
  });
  li1[i].addEventListener("click", function() {
    this.classList.toggle("completed");
  });
}

// var li1 = document.querySelectorAll("li");

// for (var i = 0; i < li1.length; i++) {
//   li1[i].addEventListener("mouseover", function() {
//     this.style.color = "green";
//   });
//   li1[i].addEventListener("mouseout", function() {
//     this.style.color = "black";
//   });
// }
