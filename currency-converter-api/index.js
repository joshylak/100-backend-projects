const express = require('express');
const app = express();
const PORT = 3000;

const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110,
    AUD: 1.35,
    CAD: 1.25,
    NGN: 1200,
};

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Currency Converter API is Working !');
});

app.get('/convert', (req, res) => {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
        return res.status(400).json({ error: 'Please provide from, to, and amount parameters.' });
    }

    const fromRate = exchangeRates[from.toUpperCase()];
    const toRate = exchangeRates[to.toUpperCase()];

    if (!fromRate || !toRate) {
        return res.status(400).json({ error: 'Invalid currency code.' });
    }

    const convertedAmount = (amount * fromRate) / toRate;

    res.json({
        from,
        to,
        amount: parseFloat(amount),
        convertedAmount: parseFloat(convertedAmount.toFixed(2)),
    });
});
app.listen(PORT, () => {
    console.log(`Currency Converter API is running on http://localhost:${PORT}`);
});