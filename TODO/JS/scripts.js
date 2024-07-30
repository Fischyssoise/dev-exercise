//Toggle Complete
function toggleComplete(event) {
  event.target.classList.toggle("complete");
};

//Create list item
function createTodo(todo) {
  const todos = document.querySelector("ul#todos");
  const newDiv = document.createElement("div");
  newDiv.classList.add("todoItem", "list");
  newDiv.textContent = todo;
  newDiv.addEventListener("click", toggleComplete);
  todos.append(newDiv);
}

document.querySelector("#newTodo").addEventListener("submit", function (event) {
  event.preventDefault();
  const inputField = document.querySelector("#description");
  const todoMessage = inputField.value;
  createTodo(todoMessage);
  inputField.value= "";
  toggleForm();
});

//Show/hide form
function toggleForm() {
  const todoForm = document.querySelector("#todoForm");
  todoForm.classList.toggle("display");
  const inputField = document.querySelector("#description");
  const todoMessage = inputField.value;
  inputField.value= "";
}

//List/Card View
function toggleCardList() {
  const todos = document.querySelector("ul#todos");
  todos.classList.toggle("card");
}

