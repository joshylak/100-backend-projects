import stripe from '../utils/stripe.js';
import db from '../db.js';

    export const createCheckoutSession = async (req, res) => {
    const { email } = req.user;
    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        customer_email: email,
        line_items: [{
        price: 'price_12345', // Replace with your Stripe price ID
        quantity: 1
        }],
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    });

    res.json({ url: session.url });
    };

    export const stripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const email = event.data.object.customer_email;
        await db.read();
        const user = db.data.users.find(u => u.email === email);
        if (user) {
        user.subscriptionStatus = 'active';
        user.role = 'pro';
        await db.write();
        }
    }

    res.json({ received: true });
    };
