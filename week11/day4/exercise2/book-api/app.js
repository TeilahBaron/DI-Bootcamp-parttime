const express = require('express');
const app = express();

let books = [
    { id: 1, title: "Book 1", author: "Author 1", publishedYear: 2020 },
    { id: 2, title: "Book 2", author: "Author 2", publishedYear: 2021 }
  ];

  
  const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/api/books', (req, res) => {
    res.json(books);
  });

  
app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(book => book.id === bookId);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).send('Book not found');
    }
  });

  
app.use(express.json());

app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;
    const id = books.length + 1;
    const newBook = { id, title, author, publishedYear };
    books.push(newBook);
    res.status(201).json(newBook);
  });
  