const express = require('express');
const router = require('./routes/index'); // Assuming index.js is in the routes directory

const app = express();

// Mount the router module
app.use('/', router); // Mount the router at the root path

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
