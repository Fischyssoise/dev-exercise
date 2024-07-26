//Show/hide form
const todoForm = document.querySelector("#todoForm");

function toggleForm() {
  todoForm.classList.toggle("display");
}

//Return list items

function toggleCardList() {
    const todoItems = document.querySelectorAll("#todoItem");
    todoItems.forEach(x => x.classList.toggle("card"));
}

//Create list item
const todos = document.querySelector("ul#todos");

function createTodo(todo) {
  const newDiv = document.createElement("div");
  newDiv.id = 'todoItem'
  newDiv.classList.add("list");
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