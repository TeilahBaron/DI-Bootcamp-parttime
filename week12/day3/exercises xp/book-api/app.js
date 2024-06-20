const express = require('express');
const app = express();
const PORT = 5000;


// Basic data - books table
let books = [
  { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2020 },
  { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2021 },
];

// Middleware to parse JSON bodies
app.use(express.json());

// Route to get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Route to get a specific book by id
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(book => book.id === bookId);
  if (!book) {
    return res.status(404).send('Book not found');
  }
  res.json(book);
});

// Route to create a new book
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).send('Title, author, and publishedYear are required.');
  }
  const id = books.length + 1;
  const newBook = { id, title, author, publishedYear };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});