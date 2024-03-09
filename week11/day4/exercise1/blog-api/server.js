
const express = require('express');
const app = express();
const PORT = 3000;

// Simulated database
let data = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
];

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get('/posts', (req, res) => {
  res.json(data);
});

app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = data.find(post => post.id === id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const id = data.length + 1;
  const newPost = { id, title, content };
  data.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const index = data.findIndex(post => post.id === id);
  if (index !== -1) {
    data[index] = { id, title, content };
    res.json(data[index]);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(post => post.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    res.json({ message: 'Post deleted successfully' });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({ message: 'Invalid route' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
