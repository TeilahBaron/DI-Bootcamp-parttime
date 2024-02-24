document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const startDateTime = document.getElementById('startDateTime').value;
        const endDateTime = document.getElementById('endDateTime').value;

        // Create task object
        const task = {
            name: name,
            description: description,
            startDateTime: startDateTime,
            endDateTime: endDateTime,
            isCompleted: false // Default value
        };

        // Get existing tasks from local storage or initialize empty array
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Add new task to the array
        tasks.push(task);

        // Save tasks back to local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Clear form fields
        taskForm.reset();

        // Optionally, you can display a message or update the UI to indicate success
        console.log('Task added successfully:', task);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const startDateTime = document.getElementById('startDateTime').value;
        const endDateTime = document.getElementById('endDateTime').value;

        // Create task object
        const task = {
            name: name,
            description: description,
            startDateTime: startDateTime,
            endDateTime: endDateTime,
            isCompleted: false // Default value
        };

        // Get existing tasks from local storage or initialize empty array
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Add new task to the array
        tasks.push(task);

        // Save tasks back to local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Redirect to the display_tasks.html page
        window.location.href = "display_tasks.html";
    });
});
