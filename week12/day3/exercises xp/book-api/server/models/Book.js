// book-api/server/models/Book.js

let books = [
    { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2020 },
    { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2021 },
    { id: 3, title: 'Book 3', author: 'Author 3', publishedYear: 2022 }
  ];
  
  module.exports = {
    findAll: () => {
      return books;
    },
    findById: (id) => {
      return books.find(book => book.id === id);
    },
    create: (newBook) => {
      const id = books.length + 1;
      const book = { id, ...newBook };
      books.push(book);
      return book;
    },
    update: (id, updatedBook) => {
      const index = books.findIndex(book => book.id === id);
      if (index !== -1) {
        books[index] = { id, ...updatedBook };
        return books[index];
      }
      return null;
    },
    delete: (id) => {
      const index = books.findIndex(book => book.id === id);
      if (index !== -1) {
        return books.splice(index, 1)[0];
      }
      return null;
    }
  };
  