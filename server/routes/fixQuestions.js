/**
 * Braintube - Fix Questions Routes
 * Handles fix questions form submissions and email notifications
 */

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const Purchase = require('../models/Purchase');

// Initialize Resend for email (works on Render free tier)
let resend = null;
try {
    if (process.env.RESEND_API_KEY) {
        const { Resend } = require('resend');
        resend = new Resend(process.env.RESEND_API_KEY);
        console.log('✅ [FixQuestions] Resend email service initialized');
    }
} catch (error) {
    console.log('[FixQuestions] Resend initialization error:', error.message);
}

// Initialize SMTP Email Transporter (fallback for local development)
let transporter = null;
try {
    if (!resend && process.env.SMTP_USER && process.env.SMTP_PASS) {
        transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
        console.log('✅ [FixQuestions] SMTP email transporter initialized');
    }
} catch (error) {
    console.log('[FixQuestions] Email not configured - running in demo mode');
}

// Unified email sending function
async function sendEmail({ to, subject, html, from }) {
    // Use verified domain email
    const fromEmail = from || 'noreply@braintube.in';

    if (resend) {
        try {
            // Use Resend API (works on Render free tier)
            const result = await resend.emails.send({
                from: `Braintube <${fromEmail}>`,
                to: to,
                subject: subject,
                html: html
            });
            console.log(`[FixQuestions] ✅ Email sent via Resend to ${to}`, result);
            return result;
        } catch (error) {
            console.error(`[FixQuestions] ❌ Resend error:`, error.message);
            console.error(`[FixQuestions] Details:`, JSON.stringify(error, null, 2));
            throw error;
        }
    } else if (transporter) {
        // Use SMTP (for local development)
        const result = await transporter.sendMail({
            from: `"Braintube" <${fromEmail}>`,
            to: to,
            subject: subject,
            html: html
        });
        console.log(`[FixQuestions] ✅ Email sent via SMTP to ${to}`);
        return result;
    } else {
        console.warn(`[FixQuestions] No email service configured. Would have sent to ${to}: ${subject}`);
        return null;
    }
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

        // Store submission in memory (backward compatible)
        submissions.set(submissionId, submission);

        // Also save to MongoDB for admin dashboard
        try {
            await Purchase.create({
                name,
                email,
                subjectCode,
                subjectName,
                paymentId: paymentId || 'N/A',
                amount: amount || 79,
                paymentStatus: 'captured',
                pdfSent: false
            });
            console.log(`[FixQuestions] ✅ Purchase saved to database for ${email}`);
        } catch (dbError) {
            console.error('[FixQuestions] Database save error:', dbError.message);
            // Continue even if DB save fails
        }


        // Send emails if configured
        if (resend || transporter) {
            try {
                // Email to admin
                const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'admin@braintube.site';
                await sendEmail({
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
                await sendEmail({
                    to: email,
                    subject: `✅ Payment Confirmed - ${subjectCode} Fix Questions`,
                    html: `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <style>
                                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                                .container { max-width: 600px; margin: 0 auto; }
                                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 10px 10px 0 0; }
                                .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
                                .success-badge { background: #10b981; color: white; padding: 8px 20px; border-radius: 20px; display: inline-block; font-weight: bold; margin-bottom: 20px; }
                                .order-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 10px; padding: 20px; margin: 20px 0; }
                                .timeline { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px 20px; margin: 20px 0; border-radius: 0 10px 10px 0; }
                                .footer { background: #f9f9f9; color: #666; padding: 20px 30px; text-align: center; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; border-top: none; }
                                .btn { display: inline-block; background: #764ba2; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; margin: 10px 5px; }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <div class="header">
                                    <h1 style="margin: 0; font-size: 28px;">🎉 Payment Successful!</h1>
                                    <p style="margin: 10px 0 0 0; opacity: 0.9;">Your order has been confirmed</p>
                                </div>
                                <div class="content">
                                    <div style="text-align: center;">
                                        <span class="success-badge">✓ PAYMENT CONFIRMED</span>
                                    </div>
                                    
                                    <p>Dear <strong>${name}</strong>,</p>
                                    
                                    <p>Thank you for your purchase! We have successfully received your payment of <strong>₹${amount || 79}</strong> and your order is now being processed.</p>
                                    
                                    <div class="order-box">
                                        <h3 style="margin-top: 0; color: #764ba2;">📋 Order Details</h3>
                                        <p style="margin: 5px 0;"><strong>Subject:</strong> ${subjectCode} - ${subjectName}</p>
                                        <p style="margin: 5px 0;"><strong>Amount Paid:</strong> ₹${amount || 79}</p>
                                        <p style="margin: 5px 0;"><strong>Payment ID:</strong> ${paymentId || 'Processing'}</p>
                                        <p style="margin: 5px 0;"><strong>Order ID:</strong> ${submissionId}</p>
                                        <p style="margin: 5px 0;"><strong>Order Date:</strong> ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                                    </div>
                                    
                                    <div class="timeline">
                                        <h3 style="margin-top: 0; color: #b45309;">⏰ When Will You Receive Your Questions?</h3>
                                        <p style="margin-bottom: 0;"><strong>Your Fix Questions PDF will be sent to this email (${email}) within 2-4 hours.</strong></p>
                                        <p style="margin: 5px 0; font-size: 14px; color: #666;">Maximum delivery time: 24 hours (usually much faster!)</p>
                                    </div>
                                    
                                    <h3 style="color: #764ba2;">📱 Need Help?</h3>
                                    <p>If you don't receive your PDF within 24 hours, or have any questions:</p>
                                    <ul>
                                        <li>WhatsApp: <strong>+91 8884624741</strong></li>
                                        <li>Email: <strong>braintube.in@gmail.com</strong></li>
                                    </ul>
                                    <p style="font-size: 14px; color: #666;">Please include your Order ID (<strong>${submissionId}</strong>) when contacting us.</p>
                                    
                                    <div style="text-align: center; margin-top: 30px;">
                                        <a href="https://wa.me/918884624741" class="btn" style="color: white;">Contact on WhatsApp</a>
                                    </div>
                                </div>
                                <div class="footer">
                                    <p style="margin: 0; font-weight: bold;">🎓 Braintube</p>
                                    <p style="margin: 5px 0; font-size: 14px;">Your Complete VTU Academic Platform</p>
                                    <p style="margin: 15px 0 0 0; font-size: 12px; color: #999;">
                                        This is an automated confirmation email. Please save it for your records.
                                    </p>
                                </div>
                            </div>
                        </body>
                        </html>
                    `
                });

                submission.emailSent = true;
            } catch (emailError) {
                console.error('[FixQuestions] Email sending error:', emailError);
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
