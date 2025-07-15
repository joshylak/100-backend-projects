import express from 'express';
import Stripe from 'stripe';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-payment-intent', async (req, res) => {
    const { amount, currency = 'usd', metadata } = req.body;

try {
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        metadata,
    });

    res.status(200).json({
        clientSecret: paymentIntent.client_secret,
    });
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
});

export default router;
