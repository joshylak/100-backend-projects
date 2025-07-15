import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import paymentRoutes from './routes/payment.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/payment', paymentRoutes);

// For webhook, Stripe requires the raw body
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error(`⚠️  Webhook signature verification failed.`, err.message);
    return res.sendStatus(400);
  }

  if (event.type === 'payment_intent.succeeded') {
    console.log('✅ Payment succeeded:', event.data.object);
  }

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
