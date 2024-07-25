function toggleForm() {
    let form = document.getElementById("todoForm");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }

const viewToggle = document.querySelector("#todoItem");

function toggleCardList() {
    if (viewToggle.className == "list") {
        viewToggle.className = "card";
    }
    else {
        viewToggle.className = "list";
    }
}