/**
 * VTU Nexus - Fix Questions Routes
 * Handles fix questions form submissions and email notifications
 */

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

// Configure email transporter
let transporter = null;
try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        transporter = nodemailer.createTransporter({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
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

// Store submissions (replace with database in production)
const submissions = new Map();

/**
 * POST /api/fix-questions/submit
 * Submit fix questions form
 */
router.post('/submit', [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('subjectCode').trim().notEmpty().withMessage('Subject code is required'),
    body('subjectName').trim().notEmpty().withMessage('Subject name is required'),
    body('paymentId').optional().trim()
], async (req, res) => {
    try {
        // Check validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { name, email, subjectCode, subjectName, paymentId, amount } = req.body;

        // Create submission record
        const submissionId = `SUB_${Date.now()}`;
        const submission = {
            id: submissionId,
            name,
            email,
            subjectCode,
            subjectName,
            paymentId: paymentId || 'N/A',
            amount: amount || 79,
            status: 'pending',
            submittedAt: new Date().toISOString()
        };

        // Store submission
        submissions.set(submissionId, submission);

        // Send emails if configured
        if (transporter) {
            try {
                // Email to admin
                const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;
                await transporter.sendMail({
                    from: `"Braintube" <${process.env.SMTP_USER}>`,
                    to: adminEmail,
                    subject: `New Fix Questions Purchase - ${subjectCode}`,
                    html: `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <style>
                                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                                .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; }
                                .info-row { display: flex; margin-bottom: 15px; }
                                .label { font-weight: bold; width: 150px; color: #764ba2; }
                                .value { flex: 1; }
                                .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
                                .highlight { background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <div class="header">
                                    <h1 style="margin: 0;">🎓 Braintube</h1>
                                    <p style="margin: 10px 0 0 0;">New Fix Questions Purchase</p>
                                </div>
                                <div class="content">
                                    <h2 style="color: #764ba2; margin-top: 0;">Purchase Details</h2>
                                    
                                    <div class="info-row">
                                        <div class="label">Student Name:</div>
                                        <div class="value">${name}</div>
                                    </div>
                                    
                                    <div class="info-row">
                                        <div class="label">Email:</div>
                                        <div class="value">${email}</div>
                                    </div>
                                    
                                    <div class="info-row">
                                        <div class="label">Subject Code:</div>
                                        <div class="value">${subjectCode}</div>
                                    </div>
                                    
                                    <div class="info-row">
                                        <div class="label">Subject Name:</div>
                                        <div class="value">${subjectName}</div>
                                    </div>
                                    
                                    <div class="info-row">
                                        <div class="label">Amount:</div>
                                        <div class="value">₹${amount || 79}</div>
                                    </div>
                                    
                                    <div class="info-row">
                                        <div class="label">Payment ID:</div>
                                        <div class="value">${paymentId || 'Pending'}</div>
                                    </div>
                                    
                                    <div class="info-row">
                                        <div class="label">Submission ID:</div>
                                        <div class="value">${submissionId}</div>
                                    </div>
                                    
                                    <div class="info-row">
                                        <div class="label">Date & Time:</div>
                                        <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
                                    </div>
                                    
                                    <div class="highlight">
                                        <strong>Action Required:</strong> Please send the Fix Questions PDF for <strong>${subjectCode}</strong> to <strong>${email}</strong>
                                    </div>
                                </div>
                                <div class="footer">
                                    <p style="margin: 0;">Braintube - VTU Student Platform</p>
                                    <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;">This is an automated notification</p>
                                </div>
                            </div>
                        </body>
                        </html>
                    `
                });

                // Auto-reply to user
                await transporter.sendMail({
                    from: `"Braintube" <${process.env.SMTP_USER}>`,
                    to: email,
                    subject: `Thank you for your purchase - ${subjectCode} Fix Questions`,
                    html: `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <style>
                                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
                                .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; }
                                .footer { background: #f9f9f9; color: #666; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; border-top: none; }
                                .button { display: inline-block; background: #764ba2; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                                .info-box { background: #f0fdf4; border: 1px solid #86efac; padding: 15px; border-radius: 5px; margin: 20px 0; }
                                .success-icon { font-size: 60px; margin-bottom: 20px; }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <div class="header">
                                    <div class="success-icon">🎉</div>
                                    <h1 style="margin: 0;">Thank You for Your Purchase!</h1>
                                </div>
                                <div class="content">
                                    <p>Dear <strong>${name}</strong>,</p>
                                    
                                    <p>Thank you for purchasing Fix Questions from Braintube! We have received your payment and your order is being processed.</p>
                                    
                                    <div class="info-box">
                                        <h3 style="margin-top: 0; color: #764ba2;">📚 Order Summary</h3>
                                        <p style="margin: 5px 0;"><strong>Subject:</strong> ${subjectCode} - ${subjectName}</p>
                                        <p style="margin: 5px 0;"><strong>Amount Paid:</strong> ₹${amount || 79}</p>
                                        <p style="margin: 5px 0;"><strong>Payment ID:</strong> ${paymentId || 'Processing'}</p>
                                        <p style="margin: 5px 0;"><strong>Order ID:</strong> ${submissionId}</p>
                                    </div>
                                    
                                    <h3 style="color: #764ba2;">What happens next?</h3>
                                    <ol>
                                        <li>Our team will verify your payment</li>
                                        <li>You will receive the Fix Questions PDF within 24 hours</li>
                                        <li>The PDF will be sent to this email address: <strong>${email}</strong></li>
                                    </ol>
                                    
                                    <p>If you don't receive the PDF within 24 hours, please contact us with your Order ID: <strong>${submissionId}</strong></p>
                                    
                                    <div style="text-align: center; margin: 30px 0;">
                                        <a href="https://braintube.site" class="button">Visit Braintube</a>
                                    </div>
                                    
                                    <p style="color: #666; font-size: 14px; margin-top: 30px;">
                                        <strong>Note:</strong> Please keep this email for your records. You may need the Order ID for future reference.
                                    </p>
                                </div>
                                <div class="footer">
                                    <p style="margin: 0; font-weight: bold;">🎓 Braintube</p>
                                    <p style="margin: 5px 0; font-size: 14px;">Your Complete VTU Academic Platform</p>
                                    <p style="margin: 15px 0 0 0; font-size: 12px; color: #999;">
                                        Need help? Contact us at ${process.env.SMTP_USER}
                                    </p>
                                </div>
                            </div>
                        </body>
                        </html>
                    `
                });

                submission.emailSent = true;
            } catch (emailError) {
                console.error('Email sending error:', emailError);
                submission.emailError = emailError.message;
            }
        }

        res.json({
            success: true,
            message: 'Form submitted successfully. You will receive a confirmation email shortly.',
            submissionId,
            emailSent: submission.emailSent || false
        });

    } catch (error) {
        console.error('Submit fix questions error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to submit form'
        });
    }
});

/**
 * GET /api/fix-questions/submissions
 * Get all submissions (admin only - add auth middleware in production)
 */
router.get('/submissions', (req, res) => {
    try {
        const allSubmissions = Array.from(submissions.values())
            .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

        res.json({
            success: true,
            count: allSubmissions.length,
            submissions: allSubmissions
        });
    } catch (error) {
        console.error('Get submissions error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to get submissions'
        });
    }
});

/**
 * GET /api/fix-questions/submission/:id
 * Get single submission details
 */
router.get('/submission/:id', (req, res) => {
    try {
        const submission = submissions.get(req.params.id);

        if (!submission) {
            return res.status(404).json({
                success: false,
                error: 'Submission not found'
            });
        }

        res.json({
            success: true,
            submission
        });
    } catch (error) {
        console.error('Get submission error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to get submission'
        });
    }
});

module.exports = router;
