const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');

// Routes
app.get('/', async (req, res) => {
  try {
    let feed = await parser.parseURL('https://thefactfile.org/feed/');
    res.render('index', { posts: feed.items });
  } catch (err) {
    console.error('Error fetching RSS feed:', err);
    res.status(500).send('Error fetching RSS feed');
  }
});

app.get('/search', (req, res) => {
  res.render('search', { searchResults: [] });
});

app.post('/search/title', async (req, res) => {
  const { title } = req.body;
  try {
    let feed = await parser.parseURL('https://thefactfile.org/feed/');
    let searchResults = feed.items.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
    res.render('search', { searchResults });
  } catch (err) {
    console.error('Error fetching RSS feed:', err);
    res.status(500).send('Error fetching RSS feed');
  }
});

app.post('/search/category', async (req, res) => {
  const { category } = req.body;
  try {
    let feed = await parser.parseURL('https://thefactfile.org/feed/');
    let searchResults = feed.items.filter(item => item.category.toLowerCase() === category.toLowerCase());
    res.render('search', { searchResults });
  } catch (err) {
    console.error('Error fetching RSS feed:', err);
    res.status(500).send('Error fetching RSS feed');
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
