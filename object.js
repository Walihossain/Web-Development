// var HPname = {
//   friends: [{ name: "Malfoy" }, { name: "Crabby" }, { name: "Goyle" }],
//   color: "babyblue",
//   isEvil: true
// };

// movieDb

var movieDB = [
  { title: "Iron Man", rating: 5 + " stars", seen: true },
  { title: "Thor", rating: 3 + " stars", seen: true },
  { title: "The Avengers", rating: 4.5 + " stars", seen: true },
  { title: "Spiderman", rating: 5 + " stars", seen: false }
];

for (var i = 0; i <= movieDB.length - 1; i++) {
  if (movieDB[i].seen === false) {
    console.log(
      "You have not watched " +
        '"' +
        movieDB[i].title +
        '"' +
        " - " +
        movieDB[i].rating
    );
  } else if (movieDB[i].seen === true) {
    console.log(
      "You have watched " +
        '"' +
        movieDB[i].title +
        '"' +
        " - " +
        movieDB[i].rating
    );
  }
}
