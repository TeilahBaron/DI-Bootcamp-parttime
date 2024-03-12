// routes/books.js
const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
const books = [];

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const bookToUpdate = books.find(book => book.id === id);
  if (!bookToUpdate) {
    return res.status(404).json({ message: 'Book not found' });
  }
  bookToUpdate.title = title;
  bookToUpdate.author = author;
  res.json(bookToUpdate);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  books.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;
