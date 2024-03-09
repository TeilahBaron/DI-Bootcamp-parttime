const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sample emojis
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
];

let score = 0;

// Function to select random emoji and options
function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[randomIndex];
    const options = [];
    
    // Add correct name to options
    options.push(correctEmoji.name);
    
    // Add distractors
    while (options.length < 4) {
        const randomDistractor = emojis[Math.floor(Math.random() * emojis.length)].name;
        if (!options.includes(randomDistractor) && randomDistractor !== correctEmoji.name) {
            options.push(randomDistractor);
        }
    }
    
    // Shuffle options
    options.sort(() => Math.random() - 0.5);
    
    return { emoji: correctEmoji.emoji, options };
}

app.get('/emoji', (req, res) => {
    const { emoji, options } = getRandomEmoji();
    res.json({ emoji, options });
});

app.post('/guess', (req, res) => {
    const { guess } = req.body;
    const { emoji, options } = getRandomEmoji();
    const correctEmoji = emojis.find(e => e.emoji === emoji);
    let message = '';
    
    if (guess === correctEmoji.name) {
        score++;
        message = 'Correct guess!';
    } else {
        message = `Incorrect guess. The correct answer was ${correctEmoji.name}.`;
    }

    res.json({ message, score, emoji, options });
});

app.listen(port, () => {
    console.log(`Emoji Guessing Game app listening at http://localhost:${port}`);
});
