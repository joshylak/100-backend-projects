const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const users = []; // in-memory user store

// Register
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const existing = users.find(u => u.username === username);
  if (existing) return res.status(400).json({ msg: 'User already exists' });

  const hashed = await bcrypt.hash(password, 10);
  users.push({ username, password: hashed });

  res.status(201).json({ msg: 'User registered' });
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  req.session.user = { username };
  res.json({ msg: 'Login successful' });
});

// Logout
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ msg: 'Logout failed' });
    res.clearCookie('connect.sid');
    res.json({ msg: 'Logged out' });
  });
});

// Protected route
router.get('/profile', (req, res) => {
  if (!req.session.user) return res.status(401).json({ msg: 'Unauthorized' });
  res.json({ msg: `Welcome, ${req.session.user.username}` });
});

module.exports = router;
