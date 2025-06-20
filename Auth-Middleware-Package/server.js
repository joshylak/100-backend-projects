import express from 'express';
import { authenticate, signToken } from './index.js'; // from your package

const app = express();
app.use(express.json());

// Fake login endpoint
app.post('/login', (req, res) => {
const { username } = req.body;
if (!username) return res.status(400).json({ message: 'Username required' });

const token = signToken({ username });
res.json({ token });
});

// Protected route
app.get('/protected', authenticate, (req, res) => {
res.json({ message: 'Welcome!', user: req.user });
});

app.listen(3000, () => {
console.log('Test server running on [http://localhost:3000](http://localhost:3000/)');
});