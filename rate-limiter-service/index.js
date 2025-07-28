    import express from 'express';
    import dotenv from 'dotenv';
    import { checkRateLimit } from './limiter.js';

    dotenv.config();

    const app = express();
    app.use(express.json());

    app.post('/check-limit', async (req, res) => {
    const key = req.body.key;
    if (!key) {
        return res.status(400).json({ error: 'Key is required' });
    }

    const result = await checkRateLimit(key);

    if (result.allowed) {
        res.status(200).json({ status: 'Allowed' });
    } else {
        res.status(429).json({
        status: 'Rate limit exceeded',
        retryAfter: result.retryAfter
        });
    }
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Rate Limiter Service running on port ${PORT}`));
