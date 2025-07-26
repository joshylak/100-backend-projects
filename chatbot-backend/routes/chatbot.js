import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const COHERE_API_KEY = process.env.COHERE_API_KEY;
const COHERE_URL = 'https://api.cohere.ai/v1/generate';

router.post('/', async (req, res) => {
    const { message } = req.body;

if (!message) {
    return res.status(400).json({ error: 'Message is required' });
}

try {
    const response = await axios.post(
    COHERE_URL,
    {
        model: 'command',
        prompt: message,
        max_tokens: 300,
        temperature: 0.7
    },
    {
        headers: {
        Authorization: `Bearer ${COHERE_API_KEY}`,
        'Content-Type': 'application/json'
        }
    }
    );

    const text = response.data.generations[0].text;
    res.json({ reply: text.trim() });
} catch (err) {
    console.error('❌ Cohere Error:', err.message);
    res.status(500).json({ error: 'Error from Cohere API', details: err.message });
}
});

export default router;