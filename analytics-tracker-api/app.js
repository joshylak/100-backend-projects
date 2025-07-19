import express from 'express';
import analyticsRoutes from './routes/analyticsRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/analytics', analyticsRoutes);

export default app;
