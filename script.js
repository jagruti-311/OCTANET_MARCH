// Function to add a new task
function addTask() {
  var input = document.getElementById("taskInput");
  var taskText = input.value.trim();

  if (taskText !== "") {
    var taskList = document.getElementById("taskList");

    // Create list item
    var li = document.createElement("li");
    li.textContent = taskText;

    // Add checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      li.style.textDecoration = this.checked ? "line-through" : "none";
    });
    li.appendChild(checkbox);

    // Add delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      li.remove();
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    // Clear input
    input.value = "";
  }
}