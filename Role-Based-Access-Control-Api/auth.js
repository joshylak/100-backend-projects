const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('./users');
require('dotenv').config();

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, password, role = 'user' } = req.body;

    if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword, role });

    res.status(201).json({ message: 'User created' });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token });
});

module.exports = router;