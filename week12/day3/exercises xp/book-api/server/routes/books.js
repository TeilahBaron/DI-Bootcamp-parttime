// book-api/server/routes/books.js

const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET all books
router.get('/', (req, res) => {
  const books = Book.findAll();
  res.json(books);
});

// GET a single book
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = Book.findById(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// POST a new book
router.post('/', (req, res) => {
  const newBook = req.body;
  const book = Book.create(newBook);
  res.status(201).json(book);
});

// PUT update a book
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBook = req.body;
  const book = Book.update(id, updatedBook);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// DELETE a book
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deletedBook = Book.delete(id);
  if (deletedBook) {
    res.json(deletedBook);
  } else {
    res.status(404).send('Book not found');
  }
});

module.exports = router;
