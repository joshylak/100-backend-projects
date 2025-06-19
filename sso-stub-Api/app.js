import express from 'express';
import { generateToken } from './utils/jwt.js';

const app = express();
app.use(express.json());

// Mock SSO Login
app.post('/sso/login', (req, res) => {
    const { email } = req.body;

    if (!email) {
    return res.status(400).json({ message: 'Email is required' });
        }

    const token = generateToken({ email });

  // Redirect or return token (stubbed here)
    res.status(200).json({
    message: 'SSO Login successful',
    token
        });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`SSO Provider running on port ${PORT}`));
