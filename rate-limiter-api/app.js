import express from 'express';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import testRoutes from './routes/test.js';

dotenv.config();
const app = express();
app.use(express.json());

// Apply rate limiter to all routes
app.use(rateLimiter);

app.use('/api', testRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
