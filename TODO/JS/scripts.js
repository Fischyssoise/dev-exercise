const titleField = document.querySelector(".title");
const inputField = document.querySelector(".description");

//Toggle Complete
function toggleComplete(event) {
  event.currentTarget.classList.toggle("complete");
}

//Create list item
function createTodo(todo, title) {
  const todos = document.querySelector("#todos");
  const newDiv = document.createElement("div");
  const newTitle = document.createElement("h3");
  const newDescription = document.createElement("p");

  newDiv.classList.add("todoItem", "list");
  newTitle.textContent = title;
  newDescription.textContent = todo;
  newDiv.addEventListener("click", toggleComplete);
  todos.append(newDiv);
  newDiv.append(newTitle, newDescription);
}

document.querySelector("#newTodo").addEventListener("submit", function (event) {
  event.preventDefault();
  const todoTitle = titleField.value;
  const todoMessage = inputField.value;
  createTodo(todoMessage, todoTitle);
  resetForm(titleField, inputField);
  toggleForm();
});

//Show/hide form
function toggleForm() {
  const todoForm = document.querySelector("#todoForm");
  todoForm.classList.toggle("display");
  const todoMessage = inputField.value;
  resetForm(titleField, inputField);
}

//List/Card View
function toggleCardList() {
  const todos = document.querySelector("#todos");
  todos.classList.toggle("card");
}

//Form reset
function resetForm(titleField, inputField) {
  titleField.value = "";
  inputField.value = "";
}
