// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// PostgreSQL connection pool
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'blog_db',
  password: 'your_password',
  port: 5432,
});

// Routes
app.get('/posts', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM posts');
    res.json(rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/posts/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    const { rows } = await pool.query('SELECT * FROM posts WHERE id = $1', [postId]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/posts', async (req, res) => {
  const { title, content } = req.body;
  try {
    const { rows } = await pool.query('INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/posts/:id', async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  try {
    const { rows } = await pool.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, postId]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/posts/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    const { rowCount } = await pool.query('DELETE FROM posts WHERE id = $1', [postId]);
    if (rowCount > 0) {
      res.json({ message: 'Post deleted successfully' });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling for invalid routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handling middleware for server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:3000`);
});
