const todos = document.querySelector("ul#todos");

function createTodo(todo) {
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todo;
  todos.append(newTodo);
}

document.querySelector("#newTodo").addEventListener("submit", function (event) {
  event.preventDefault();
  const todoMessage = document.querySelector("#newTodo input").value;
  createTodo(todoMessage);
});