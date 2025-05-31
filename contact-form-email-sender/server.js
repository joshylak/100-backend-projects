require('dotenv').config(); // Load environment variables
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // For handling Cross-Origin requests

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parses JSON bodies from incoming requests
app.use(cors()); // Enables CORS for all routes (important for frontend communication)

// Nodemailer Transporter Setup
// This object will contain your email sending configuration
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // For Gmail. If using another service, change this.
    port: 587, // Common port for SMTP (587 with STARTTLS, 465 with SSL/TLS)
    secure: false, // true for port 465, false for other ports like 587
    auth: {
        user: process.env.EMAIL_USER, // Your email address from .env
        pass: process.env.EMAIL_PASS, // Your app password from .env
    },
});

// Verify transporter connection (optional, good for debugging)
transporter.verify((error, success) => {
    if (error) {
        console.error('Nodemailer transporter verification error:', error);
    } else {
        console.log('Nodemailer is ready to send emails!');
    }
});

// Contact Form Submission Route
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ msg: 'Please enter all fields.' });
    }

    // Email content
    const mailOptions = {
        from: `"${name}" <${email}>`, // Sender's name and email from the form
        to: process.env.EMAIL_USER, // The email address where you want to receive inquiries
        subject: `Contact Form: ${subject}`,
        html: `
            <p>You have a new contact request from your website.</p>
            <h3>Contact Details</h3>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Subject:</strong> ${subject}</li>
            </ul>
            <h3>Message:</h3>
            <p>${message}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
        res.status(200).json({ msg: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ msg: 'Failed to send email. Please try again later.' });
    }
});

// Basic welcome route
app.get('/', (req, res) => {
    res.send('Contact Form Backend is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});