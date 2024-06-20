const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000; // You can change this to any port you prefer

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const quizRouter = require('./routes/quiz');
app.use('/quiz', quizRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
