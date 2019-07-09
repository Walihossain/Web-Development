window.setTimeout(function() {
  var todos = [];

  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    if (input === "list") {
      listTodo();
    } else if (input === "new") {
      addTodo();
    } else if (input === "delete") {
      deleteTodo();
    }

    var input = prompt("What would you like to do?");
  }

  function listTodo() {
    todos.forEach(function(todo, i) {
      console.log(i + ":" + todo);
      console.log("*******");
    });
  }

  function addTodo() {
    var newTodo = prompt("Enter a new todo:");
    todos.push(newTodo);
  }

  function deleteTodo() {
    //Ask for index
    var index = prompt("Which item on the to do list?");
    // Delete items on that index
    todos.splice(index, 1);
    console.log("Deleted");
  }

  console.log("Ok, goodbye!");
}, 1000);
