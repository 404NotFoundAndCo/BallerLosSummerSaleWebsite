const express = require('express');
const cors = require('cors'); // Import the cors middleware
const bodyParser = require('body-parser');
const emailjs = require('@emailjs/nodejs');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Your emailjs settings
const publicKey = '4v6eUEWk0qtjlnBtT';
const privateKey = 'YMuWJGRvbwnXBMe0K5qV9';
const serviceID = 'service_nx9pii5';
const templateID = 'template_7bvvckq';

// Endpoint to send email
app.post('/send-email', async (req, res) => {
    const { first_name, last_name, user_email, message, subject } = req.body;

    if (!first_name || !last_name || !user_email || !message || !subject) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const response = await emailjs.send(
            serviceID,
            templateID,
            {
                first_name,
                last_name,
                user_email,
                message,
                subject
            },
            { publicKey,  privateKey}
        );

        console.log('Email sent successfully:', response);
        res.json({ success: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});