    import express from 'express';
    import dotenv from 'dotenv';
    import Stripe from 'stripe';
    import bodyParser from 'body-parser';

    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 5000;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // Stripe webhook endpoint — use raw body
    app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error('❌ Webhook signature verification failed.', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // ✅ Webhook verified
    console.log('✅ Webhook received:', event.type);
    res.status(200).send('Webhook received');
    });

    app.listen(PORT, () => {
    console.log(`🚀 Webhook API listening on port ${PORT}`);
    });
