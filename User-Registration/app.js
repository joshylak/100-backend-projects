const express = require('express');
const app = express();
const PORT = 3000;

// In-memory user store
const users = [];

app.use(express.json());

// Register endpoint
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required.' });
    }
    if (users.find(u => u.username === username)) {
        return res.status(409).json({ error: 'Username already exists.' });
    }
    users.push({ username, password });
    res.status(201).json({ message: 'User registered successfully.' });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials.' });
    }
    res.json({ message: 'Login successful.' });
});

app.listen(PORT, () => {
    console.log(`User Auth API running at http://localhost:${PORT}`);
});