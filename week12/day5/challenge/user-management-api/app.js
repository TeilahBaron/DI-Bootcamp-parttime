const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// JSON file to store users
const usersFile = './users.json';

// Initialize users.json if it doesn't exist
(async () => {
    try {
        await fs.access(usersFile);
    } catch (error) {
        await fs.writeFile(usersFile, '[]');
    }
})();

// Helper function to read users from JSON file
async function getUsers() {
    const data = await fs.readFile(usersFile);
    return JSON.parse(data);
}

// Helper function to write users to JSON file
async function saveUsers(users) {
    await fs.writeFile(usersFile, JSON.stringify(users, null, 2));
}

// POST /register - Register a new user
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Load existing users
    let users = await getUsers();
    
    // Check if username already exists
    if (users.find(user => user.username === username)) {
        return res.status(400).send('Username already exists');
    }
    
    // Add new user
    users.push({ username, password: hashedPassword });
    
    // Save users
    await saveUsers(users);
    
    res.status(201).send('User registered successfully');
});

// POST /login - User login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    // Load existing users
    let users = await getUsers();
    
    // Find user by username
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(404).send('User not found');
    }
    
    // Compare hashed passwords
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).send('Invalid credentials');
    }
    
    res.send('Login successful');
});

// GET /users - Get all users (for demonstration purposes, no authentication required)
app.get('/users', async (req, res) => {
    const users = await getUsers();
    res.json(users);
});

// GET /users/:id - Get user by ID (for demonstration purposes, no authentication required)
app.get('/users/:id', async (req, res) => {
    const users = await getUsers();
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);
});

// PUT /users/:id - Update user by ID (for demonstration purposes, no authentication required)
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;
    
    let users = await getUsers();
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    
    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }
    
    // Update user information
    users[userIndex] = { id: parseInt(id), username, password };
    
    // Save updated users
    await saveUsers(users);
    
    res.send('User updated successfully');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
