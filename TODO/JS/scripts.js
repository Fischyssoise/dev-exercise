function toggleForm() {
    document.querySelector("#form").style.visibility="hidden";
}

const viewToggle = document.querySelector("#todoItems");

function viewCardList() {
    if (viewToggle.className == "list") {
        viewToggle.className = "card";
    }
    else {
        viewToggle.className = "list";
    }
}