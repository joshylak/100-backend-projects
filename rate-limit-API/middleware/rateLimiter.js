import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const windowMinutes = parseInt(process.env.RATE_LIMIT_WINDOW || '15');
const maxRequests = parseInt(process.env.RATE_LIMIT_MAX || '100');

export const apiLimiter = rateLimit({
  windowMs: windowMinutes * 60 * 1000, // in milliseconds
  max: maxRequests,
  message: {
    status: 429,
    error: 'Too many requests, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
