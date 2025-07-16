import express from 'express';
import dotenv from 'dotenv';
import githubRoutes from './routes/githubRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/github', githubRoutes);

app.listen(PORT, () => {
    console.log(`GitHub Tracker API running on http://localhost:${PORT}`);
});
