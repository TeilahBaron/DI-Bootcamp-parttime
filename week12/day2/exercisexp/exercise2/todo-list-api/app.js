const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos');

// Middleware
app.use(express.json());

// Mounting the router
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
