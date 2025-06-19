import express from 'express';
import { verifyToken } from './utils/jwt.js';

const app = express();
app.use(express.json());

// Simulated client-side callback that receives the token
app.post('/client/callback', (req, res) => {
    const { token } = req.body;

    const decoded = verifyToken(token);

    if (!decoded) {
    return res.status(401).json({ message: 'Invalid or expired token' });
    }

    res.json({
    message: 'Client received valid SSO token',
    user: decoded
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Client App running on port ${PORT}`));
