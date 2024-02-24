document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');

    // Get tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Iterate over tasks and display them
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <p><strong>Name:</strong> ${task.name}</p>
            <p><strong>Starting date:</strong> ${task.startDateTime}</p>
            <p><strong>Days left:</strong> ${calculateDaysLeft(task)}</p>
        `;
        taskList.appendChild(li);
    });
});

function calculateDaysLeft(task) {
    const currentDate = new Date();
    const endDate = new Date(task.endDateTime);
    const timeDiff = endDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
}


document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');

    // Get tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Sort tasks by start date in ascending order
    tasks.sort((a, b) => new Date(a.startDateTime) - new Date(b.startDateTime));

    // Display tasks
    tasks.forEach(task => {
        const li = createTaskListItem(task);
        taskList.appendChild(li);
    });

    function createTaskListItem(task) {
        const li = document.createElement('li');
        li.classList.add('task-item');
        li.innerHTML = `
            <div class="task-header">
                <p><strong>Name:</strong> ${task.name}</p>
                <p><strong>Starting date:</strong> ${task.startDateTime}</p>
                <p><strong>Days left:</strong> ${calculateDaysLeft(task)}</p>
            </div>
            <div class="task-details" style="display: none;">
                <p><strong>Description:</strong> ${task.description}</p>
            </div>
            <input type="checkbox" class="task-checkbox" ${task.isCompleted ? 'checked' : ''}>
            <button class="delete-btn">X</button>
            <button class="edit-btn">Edit</button>
        `;

        // Add event listener to show/hide description when task is clicked
        li.addEventListener('click', function () {
            const details = this.querySelector('.task-details');
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });

        // Add event listener to checkbox to toggle task completion status
        const checkbox = li.querySelector('.task-checkbox');
        checkbox.addEventListener('change', function () {
            task.isCompleted = this.checked;
            saveTasksToLocalStorage();
        });

        // Add event listener to delete button
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function () {
            if (confirm("Are you sure you want to delete this task?")) {
                tasks = tasks.filter(t => t !== task);
                saveTasksToLocalStorage();
                li.remove();
            }
        });

        // Add event listener to edit button
        const editBtn = li.querySelector('.edit-btn');
        editBtn.addEventListener('click', function () {
            const newName = prompt("Enter new name for the task:", task.name);
            if (newName !== null) {
                task.name = newName;
                saveTasksToLocalStorage();
                li.querySelector('.task-header p:first-child').innerText = `Name: ${task.name}`;
            }
        });

        // Apply styles based on task status
        if (task.isCompleted) {
            li.classList.add('completed');
        } else if (new Date(task.endDateTime) < new Date()) {
            li.classList.add('expired');
        }

        return li;
    }

    function calculateDaysLeft(task) {
        const currentDate = new Date();
        const endDate = new Date(task.endDateTime);
        const timeDiff = endDate.getTime() - currentDate.getTime();
        const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return daysLeft;
    }

    function saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
