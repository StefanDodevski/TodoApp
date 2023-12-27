let addTodoBtn = document.getElementsByClassName("add-todo");
let inputTodo = document.getElementById("input-todo");

function addingTodo() {
  if (inputTodo.value !== "") {
    let li = document.createElement("li");
    li.textContent = inputTodo.value;

    //Adding buttons for Completed tasks and Deleting tasks
    let buttonsWrapper = document.createElement("div");
    let buttonToClose = document.createElement("button");
    buttonToClose.textContent = "Remove";
    buttonToClose.classList = "delete-btn";
    buttonToClose.addEventListener("click", deleteTodo);
    let buttonDone = document.createElement("button");
    buttonDone.textContent = "Completed";
    buttonDone.classList = "done-btn";
    buttonDone.addEventListener("click", completeTodo);

    buttonsWrapper.appendChild(buttonDone);
    buttonsWrapper.appendChild(buttonToClose);

    //Adding the block with buttons to the list
    li.appendChild(buttonsWrapper);

    //Adding the todo list-item to the list block
    document.querySelector(".todos").appendChild(li);

    //reseting the input
    inputTodo.value = "";
  } else {
    alert("First write Todo");
  }
}

// Adding the functionalitiy to be posible to trigger the function with press on Enter button
inputTodo.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    addingTodo();
  }
});

function deleteTodo() {
  this.parentElement.parentElement.remove();
}

function completeTodo() {
  this.parentElement.parentElement.classList.toggle("mark-done");
}
