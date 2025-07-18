import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import gatewayRoutes from './routes/gateway.routes.js';
import { rateLimiter } from './middlewares/rateLimit.middleware.js';

dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());

// Rate Limiting
app.use(rateLimiter);

// Routes
app.use('/', gatewayRoutes);

// Fallback
app.use('*', (_, res) => res.status(404).json({ message: 'Route not found' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 API Gateway running on port ${PORT}`));
console.log('ENV Loaded:', {
  SERVICE_USER_URL: process.env.SERVICE_USER_URL,
  SERVICE_ORDER_URL: process.env.SERVICE_ORDER_URL,
  SECRET_KEY: process.env.SECRET_KEY,
});
