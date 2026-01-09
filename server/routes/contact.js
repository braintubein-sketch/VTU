/**
 * VTU Nexus - Contact Routes with Email Notifications
 */

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Initialize Nodemailer (configure in production)
let transporter = null;
try {
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
        const nodemailer = require('nodemailer');
        transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
    }
} catch (error) {
    console.log('Email not configured - running in demo mode');
}

// Store inquiries (replace with database in production)
const inquiries = [];

// Validation middleware
const validateContact = [
    body('name').trim().isLength({ min: 2 }).withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
];

// Submit contact form
router.post('/', validateContact, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const { name, email, phone, subject, message } = req.body;

        // Create inquiry
        const inquiry = {
            id: Date.now().toString(),
            name,
            email,
            phone: phone || null,
            subject,
            message,
            status: 'new',
            createdAt: new Date().toISOString()
        };

        inquiries.push(inquiry);

        // Send email notification
        if (transporter) {
            try {
                // Send notification to admin
                await transporter.sendMail({
                    from: process.env.EMAIL_FROM || 'noreply@vtunexus.com',
                    to: process.env.ADMIN_EMAIL || 'admin@vtunexus.com',
                    subject: `New Contact: ${subject}`,
                    html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr>
            <p><small>Received at ${inquiry.createdAt}</small></p>
          `
                });

                // Send confirmation to user
                await transporter.sendMail({
                    from: process.env.EMAIL_FROM || 'noreply@vtunexus.com',
                    to: email,
                    subject: 'We received your message - VTU Nexus',
                    html: `
            <h2>Thank you for contacting VTU Nexus!</h2>
            <p>Hi ${name},</p>
            <p>We have received your message and will get back to you within 24 hours.</p>
            <p><strong>Your inquiry:</strong></p>
            <blockquote style="border-left: 3px solid #8b5cf6; padding-left: 16px; margin-left: 0;">
              ${message}
            </blockquote>
            <p>Best regards,<br>VTU Nexus Team</p>
          `
                });

                inquiry.emailSent = true;
            } catch (emailError) {
                console.error('Email error:', emailError);
                inquiry.emailSent = false;
            }
        }

        res.status(201).json({
            success: true,
            message: 'Your message has been received. We will get back to you soon!',
            inquiryId: inquiry.id
        });
    } catch (error) {
        console.error('Contact error:', error);
        res.status(500).json({ success: false, error: 'Failed to submit inquiry' });
    }
});

// Get all inquiries (admin only - add auth in production)
router.get('/', (req, res) => {
    res.json({
        success: true,
        count: inquiries.length,
        data: inquiries.slice(-50).reverse() // Last 50 inquiries
    });
});

// Subscribe to newsletter
router.post('/subscribe', [
    body('email').isEmail().normalizeEmail()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, error: 'Invalid email' });
        }

        const { email } = req.body;

        // In production, save to database and integrate with email service
        console.log('Newsletter subscription:', email);

        res.json({
            success: true,
            message: 'Successfully subscribed to newsletter!'
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Subscription failed' });
    }
});

module.exports = router;
