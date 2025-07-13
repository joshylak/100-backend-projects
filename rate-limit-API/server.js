import express from 'express';
import dotenv from 'dotenv';
import { apiLimiter } from './middleware/rateLimiter.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Apply rate limiting middleware
app.use('/api/', apiLimiter);

// Sample API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Rate limit working! You accessed a protected endpoint.',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
