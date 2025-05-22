// src/app.js
const express = require('express');
const quotesRoutes = require('./routes/quotes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/quotes', quotesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});