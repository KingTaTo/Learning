var todoList = {
  todos: [],

  displayTodo: function(){
    //todo list is empty
    debugger;
    if(this.todos.length === 0) {
      console.log("Todo list is empty.")
    } else {
      console.log("My Todos:");
      for(var i = 0; i < this.todos.length; i++) {
        var check;
        //puts check mark if todo is completed
        if(this.todos[i].completion === false) {
          check = " ";
        } else {
          check = "X";
        }
        console.log("[" +check +"]", this.todos[i].todoText);
      }
    }
  },
  //add todo to the list
  addTodo: function(todo) {
    this.todos.push({
      todoText: todo,
      completion: false
    })
    this.displayTodo();
  },
  //change a todo
  changeTodo: function(position, newTodo) {
    this.todos[position].todoText = newTodo;
    this.displayTodo();
  },
  //delete a todo
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodo();
  }, 
  //toggle a todo
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completion = !todo.completion;
    this.displayTodo();
  },
  toggleAll: function() {
    //checking for completed todos
    var completedTodos = 0;
    for(var i = 0; i <this.todos.length; i++) {
      if(this.todos[i].completion === true)
      completedTodos++;
    }
    //if all todos are completed, toggle to incomplete
    if(completedTodos === this.todos.length) {
      for(var i = 0; i < this.todos.length; i++) {
        this.todos[i].completion = false;
      }
    } else {  //otherwise, toggle all todos to completed
      for(var i = 0; i < this.todos.length; i++) {
        this.todos[i].completion = true;
      }
    }
    this.displayTodo();
  },

}
//todo list button function
var displayTodosButton = document.getElementById("displayTodosButton");
    displayTodosButton.addEventListener("click", function() {
      todoList.displayTodo();
    });
//toggle all button function
var toggleAllButton = document.getElementById("displayToggleAllButton");
    toggleAllButton.addEventListener("click", function() {
      todoList.toggleAll();
    });
