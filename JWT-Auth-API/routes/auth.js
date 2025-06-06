const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const users = []; // In-memory user store (for demo)

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const existing = users.find(u => u.username === username);
  if (existing) return res.status(400).json({ msg: 'User already exists' });

  const hashed = await bcrypt.hash(password, 10);
  users.push({ username, password: hashed });

  res.status(201).json({ msg: 'User registered' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

router.get('/protected', authMiddleware, (req, res) => {
  res.json({ msg: `Hello, ${req.user.username}! This is protected.` });
});

module.exports = router;
