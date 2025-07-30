import express from 'express';
import { createCheckoutSession, stripeWebhook } from '../controllers/billingController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/checkout', protect, createCheckoutSession);
router.post('/webhook', express.raw({ type: 'application/json' }), stripeWebhook);

export default router;
