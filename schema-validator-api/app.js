import express from 'express';
import validatorRoutes from './routes/validator.routes.js';

const app = express();
app.use(express.json());

app.use('/api/validate', validatorRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

export default app;

