const titleField = document.querySelector(".title");
const inputField = document.querySelector(".description");
const todoList = document.querySelector(".todoList");
const listCard = document.querySelector(".viewToggle");
const viewTidy = document.querySelector(".tidyToggle");
const todoForm = document.querySelector(".overlay");

//Create list item
function createTodo(todo, title) {
  const newDiv = document.createElement("div");
  const newTitle = document.createElement("h3");
  const newDescription = document.createElement("p");

  newDiv.classList.add("todoItem");
  newTitle.textContent = title;
  newDescription.textContent = todo;
  newDiv.addEventListener("click", toggleComplete);
  todoList.append(newDiv);
  newDiv.append(newTitle, newDescription);
}

todoForm.addEventListener("submit", function (event) {
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
  todoList.classList.toggle("list");
  todoList.classList.toggle("card");
}

//Tidy/Messy Notes Style
function toggleTidyList() {
  const tidyNotes = document.querySelector(".tidyToggle");
  if (tidyNotes.value == "Tidy Up") {
    tidyNotes.value = "Make a Mess";
  } else {
    tidyNotes.value = "Tidy Up";
  }
  todoList.classList.toggle("messy");
  todoList.classList.toggle("tidy");
}
