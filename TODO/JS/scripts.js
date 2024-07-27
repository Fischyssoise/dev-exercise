//Create list item
function createTodo(todo) {
  const todos = document.querySelector("ul#todos");
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
function toggleForm() {
  const todoForm = document.querySelector("#todoForm");
  todoForm.classList.toggle("display");
}

//List/Card View
function toggleCardList() {
  const todos = document.querySelector("ul#todos");
  todos.classList.toggle("card");
}

//Toggle Complete
  todoItem.addEventListener("click", function (event) {
    const todoItem = document.querySelector(".todoItem");
    event.todoItem.classList.toggle("complete");
  });

