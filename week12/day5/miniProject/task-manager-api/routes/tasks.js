// routes/tasks.js

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '../data/tasks.json');

// Helper function to read tasks from file
const readTasksFromFile = () => {
  const tasksData = fs.readFileSync(tasksFilePath);
  return JSON.parse(tasksData);
};

// Helper function to write tasks to file
const writeTasksToFile = (tasks) => {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};

// GET /tasks
router.get('/', (req, res) => {
  try {
    const tasks = readTasksFromFile();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /tasks/:id
router.get('/:id', (req, res) => {
  try {
    const tasks = readTasksFromFile();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
    } else {
      res.json(task);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /tasks
router.post('/', (req, res) => {
  try {
    const tasks = readTasksFromFile();
    const newTask = {
      id: tasks.length + 1,
      title: req.body.title,
      description: req.body.description,
      done: false
    };

    tasks.push(newTask);
    writeTasksToFile(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /tasks/:id
router.put('/:id', (req, res) => {
  try {
    const tasks = readTasksFromFile();
    const taskId = parseInt(req.params.id);
    const taskToUpdate = tasks.find(t => t.id === taskId);

    if (!taskToUpdate) {
      res.status(404).json({ message: 'Task not found' });
    } else {
      taskToUpdate.title = req.body.title;
      taskToUpdate.description = req.body.description;
      taskToUpdate.done = req.body.done || false;

      writeTasksToFile(tasks);
      res.json(taskToUpdate);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /tasks/:id
router.delete('/:id', (req, res) => {
  try {
    const tasks = readTasksFromFile();
    const updatedTasks = tasks.filter(t => t.id !== parseInt(req.params.id));

    if (tasks.length === updatedTasks.length) {
      res.status(404).json({ message: 'Task not found' });
    } else {
      writeTasksToFile(updatedTasks);
      res.status(204).send();
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
