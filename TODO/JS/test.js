const todos = document.querySelector("ul#todos");

function createTodo(todo) {
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todo;
  todos.append(newTodo);
}

function createTodoDiv(todo) {
  const newDiv = document.createElement("div");
  newDiv.id = 'todoItem'
  newDiv.className = 'list'
  newDiv.innerHTML = todo;
  todos.append(newDiv);
}

document.querySelector("#newTodo").addEventListener("submit", function (event) {
  event.preventDefault();
  const todoMessage = document.querySelector("#newTodo textarea").value;
  createTodoDiv(todoMessage);
  toggleForm();
});

document.querySelector("#newTodo").addEventListener("click", function (event) {
  event.preventDefault();
  toggleForm();
});