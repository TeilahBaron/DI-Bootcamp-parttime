// todo.js

class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
  }

  markTaskAsComplete(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
    }
  }

  listTasks() {
    console.log("Todo List:");
    this.tasks.forEach((item, index) => {
      console.log(`${index + 1}. [${item.completed ? '✔' : ' '}] ${item.task}`);
    });
  }
}

module.exports = TodoList;
