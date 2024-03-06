// app.js

// const persons = require("./data.js");

// function calculateAverageAge(people) {
//   const totalAge = people.reduce((sum, person) => sum + person.age, 0);
//   return totalAge / people.length;
// }

// const averageAge = calculateAverageAge(persons);
// console.log("Average Age:", averageAge);
// Average Age: 32.5

// const { readFile, writeFile } = require('./fileManager.js');

// async function main() {
//   try {
//     // Read the content of "Hello World.txt"
//     const helloContent = await readFile('Hello World.txt');
//     console.log('Content of "Hello World.txt":', helloContent);

//     // Write to "Bye World.txt"
//     await writeFile('Bye World.txt', 'Writing to the file');
//     console.log('Content written to "Bye World.txt" successfully.');
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }

// main();

const TodoList = require('./todo.js');

// Create an instance of the TodoList class
const todoList = new TodoList();

// Add tasks
todoList.addTask('Task 1');
todoList.addTask('Task 2');
todoList.addTask('Task 3');

// Mark a task as complete
todoList.markTaskAsComplete(1);

// List all tasks
todoList.listTasks();