const titleField = document.querySelector(".title");
const inputField = document.querySelector(".description");
const todos = document.querySelector("#todos");
const listCard = document.querySelector(".viewToggle");
const viewTidy = document.querySelector(".tidyToggle");

//Create list item
function createTodo(todo, title) {
  const newDiv = document.createElement("div");
  const newTitle = document.createElement("h3");
  const newDescription = document.createElement("p");

  newDiv.classList.add("todoItem");
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

//Toggle Complete
function toggleComplete(event) {
  event.currentTarget.classList.toggle("complete");
}

//Show/hide form
function toggleForm() {
  const todoForm = document.querySelector("#todoForm");
  const addTaskBtn = document.querySelector(".addTask");
  addTaskBtn.classList.toggle("hiddenBtn");
  listCard.classList.toggle("hiddenBtn");
  if (listCard.value == "View List") {
    viewTidy.classList.toggle("hiddenBtn");
  }
  todoForm.classList.toggle("display");
  resetForm(titleField, inputField);
}

//Form reset
function resetForm(titleField, inputField) {
  titleField.value = "";
  inputField.value = "";
}

//List/Card View
function toggleCardList() {
  if (listCard.value == "View Card") {
    listCard.value = "View List";
    if (viewTidy.classList.contains("hiddenBtn") === true) {
      viewTidy.classList.toggle("hiddenBtn");
    }
  } else {
    listCard.value = "View Card";
    if (viewTidy.classList.contains("hiddenBtn") === false) {
      viewTidy.classList.toggle("hiddenBtn");
    }
  }
  todos.classList.toggle("list");
  todos.classList.toggle("card");
}

//Tidy/Messy Notes Style
function toggleTidyList() {
  const tidyNotes = document.querySelector(".tidyToggle");
  if (tidyNotes.value == "Tidy Up") {
    tidyNotes.value = "Make a Mess";
  } else {
    tidyNotes.value = "Tidy Up";
  }
  todos.classList.toggle("messy");
  todos.classList.toggle("tidy");
}
