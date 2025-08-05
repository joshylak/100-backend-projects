import { Router } from 'express';
import { checkHealth } from '../services/health.service.js';

export const healthRouter = Router();

healthRouter.get('/', async (req, res, next) => {
  try {
    const status = await checkHealth();
    res.status(200).json(status);
  } catch (err) {
    next(err);
  }
});
