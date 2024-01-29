const tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Check if the input is not empty
    if (taskInput.value.trim() !== "") {
        // Add the task to the array
        tasks.push(taskInput.value);

        // Clear the input field
        taskInput.value = "";

        // Add the task to the DOM
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById("taskList");

    // Clear previous tasks
    taskList.innerHTML = "";

    // Render each task
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const label = document.createElement("label");
        label.textContent = task;

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
        deleteButton.addEventListener("click", () => deleteTask(index));

        // Append elements to the task div
        taskElement.appendChild(checkbox);
        taskElement.appendChild(label);
        taskElement.appendChild(deleteButton);

        // Append the task div to the taskList
        taskList.appendChild(taskElement);
    });
}

function deleteTask(index) {
    // Remove the task from the array
    tasks.splice(index, 1);

    // Update the DOM
    renderTasks();
}
