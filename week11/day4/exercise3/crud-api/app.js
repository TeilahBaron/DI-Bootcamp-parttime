// app.js
// const express = require('express');
// const app = express();

// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// app.js
const express = require('express');
const axios = require('axios');
const { fetchPosts } = require('./data/dataService');

const app = express();
const PORT = 5000;

app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Posts retrieved successfully:', posts);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
