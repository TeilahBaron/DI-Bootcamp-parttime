const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../config/db.config');

// POST /register
router.post('/register', async (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Start transaction
        const connection = await db.getConnection();
        await connection.beginTransaction();

        // Insert into users table
        await connection.query('INSERT INTO users (email, username, first_name, last_name) VALUES (?, ?, ?, ?)', [email, username, first_name, last_name]);

        // Insert into hashpwd table
        await connection.query('INSERT INTO hashpwd (username, password) VALUES (?, ?)', [username, hashedPassword]);

        // Commit transaction
        await connection.commit();
        connection.release();

        res.status(201).send('User registered successfully.');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user.');
    }
});

// POST /login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Retrieve hashed password from database
        const [rows] = await db.query('SELECT password FROM hashpwd WHERE username = ?', [username]);
        if (rows.length === 0) {
            return res.status(404).send('User not found.');
        }

        const hashedPassword = rows[0].password;

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        if (!passwordMatch) {
            return res.status(401).send('Invalid password.');
        }

        res.status(200).send('Login successful.');
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Error logging in.');
    }
});

// GET /users
router.get('/users', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users.');
    }
});

// GET /users/:id
router.get('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
        if (rows.length === 0) {
            return res.status(404).send('User not found.');
        }

        res.status(200).json(rows[0]);
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        res.status(500).send('Error fetching user.');
    }
});

// PUT /users/:id
router.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { email, username, first_name, last_name } = req.body;

    try {
        await db.query('UPDATE users SET email = ?, username = ?, first_name = ?, last_name = ? WHERE id = ?', [email, username, first_name, last_name, userId]);
        res.status(200).send('User updated successfully.');
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Error updating user.');
    }
});

module.exports = router;
