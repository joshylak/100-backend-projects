import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';

import authRoutes from './routes/auth.js';
import contentRoutes from './routes/content.js';

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
