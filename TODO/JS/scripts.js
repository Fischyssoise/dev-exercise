const todos = document.querySelector("ul#todos");
const todoItem = document.querySelector("todoItem");

//Create list item

function createTodo(todo) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("todoItem", "list");
  newDiv.textContent = todo;
  todos.append(newDiv);
}

document.querySelector("#newTodo").addEventListener("submit", function (event) {
  event.preventDefault();
  const inputField = document.querySelector("#description");
  const todoMessage = inputField.value;
  createTodo(todoMessage);
  toggleForm();
});

//Show/hide form
const todoForm = document.querySelector("#todoForm");

function toggleForm() {
  todoForm.classList.toggle("display");
}

//List/Card View
function toggleCardList() {
  todos.classList.toggle("card");
}

//Toggle Complete
  todoItem.addEventListener("click", function (event) {
    event.preventDefault();
    todoItem.classList.toggle("complete")
  });