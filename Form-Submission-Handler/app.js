const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST /submit endpoint to handle form submissions
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    // Simulate processing (e.g., send email, save to DB, etc.)
    // For now, just return a success response
    res.json({
        message: 'Form submitted successfully!',
        data: { name, email, message }
    });
});

app.listen(PORT, () => {
    console.log(`Form Submission Handler running at http://localhost:${PORT}`);
});