import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import Imap from 'imap';
import { simpleParser } from 'mailparser';
import nodemailer from 'nodemailer';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// app.use(cors({ origin: 'https://saiabhi1908.github.io' }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.static(path.join('C:', 'Users', 'Admin', 'Downloads', 'resources')));

app.get('/', (req, res) => {
    res.sendFile(path.join('C:', 'Users', 'Admin', 'Downloads', 'resources', 'index.html'));
});

// New route to handle form submissions and send email
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        // Set up Nodemailer transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'praveenakolli08@gmail.com',
                pass: 'ggom rldt gmeq bmdx'
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'praveenakolli08@gmail.com', // Receiver's email address
            subject: `New Contact Form Submission: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send message.');
    }
});

// Existing function to check emails (no changes needed)
const checkEmails = () => {
    // [Existing email check logic here]
};

app.get('/check-emails', (req, res) => {
    try {
        checkEmails();
        res.status(200).send('Started checking for emails...');
    } catch (error) {
        res.status(500).send('Error checking emails: ' + error.message);
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
