/**
 * Braintube - Payment Routes (Razorpay Integration)
 */

const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Initialize Resend for email (works on Render free tier)
let resend = null;
try {
    if (process.env.RESEND_API_KEY) {
        const { Resend } = require('resend');
        resend = new Resend(process.env.RESEND_API_KEY);
        console.log('✅ Resend email service initialized');
    }
} catch (error) {
    console.log('Resend initialization error:', error.message);
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
        console.log('✅ SMTP email transporter initialized');
    }
} catch (error) {
    console.log('SMTP transporter error:', error.message);
}

// Unified email sending function
async function sendEmail({ to, subject, html, from }) {
    // Use Resend's shared domain (works immediately) or verified domain
    // Change this to 'noreply@braintube.site' once domain is fully verified
    const fromEmail = from || 'Braintube <noreply@braintube.in>';

    if (resend) {
        try {
            // Use Resend API (works on Render free tier)
            const result = await resend.emails.send({
                from: `Braintube <${fromEmail}>`,
                to: to,
                subject: subject,
                html: html
            });
            console.log(`[EMAIL] ✅ Sent via Resend to ${to}`, result);
            return result;
        } catch (error) {
            console.error(`[EMAIL] ❌ Resend error:`, error.message);
            console.error(`[EMAIL] Details:`, JSON.stringify(error, null, 2));
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
        console.log(`[EMAIL] ✅ Sent via SMTP to ${to}`);
        return result;
    } else {
        console.warn(`[EMAIL] No email service configured. Would have sent to ${to}: ${subject}`);
        return null;
    }
}

// TEST EMAIL ENDPOINT (for debugging - remove in production)
router.get('/test-email', async (req, res) => {
    console.log('[TEST-EMAIL] Testing Resend email...');
    try {
        const result = await sendEmail({
            to: 'braintube.in@gmail.com',
            subject: 'Test Email from Braintube',
            html: '<h1>Test Email</h1><p>If you receive this, Resend is working correctly!</p><p>Time: ' + new Date().toISOString() + '</p>'
        });
        console.log('[TEST-EMAIL] ✅ Success:', result);
        res.json({ success: true, message: 'Test email sent!', result });
    } catch (error) {
        console.error('[TEST-EMAIL] ❌ Error:', error);
        res.status(500).json({ success: false, error: error.message, details: error });
    }
});


// Initialize Razorpay (configure in production)
let razorpay = null;
try {
    if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
        const Razorpay = require('razorpay');
        razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });
    }
} catch (error) {
    console.log('Razorpay configuration error:', error.message);
}

// Store orders (replace with database in production)
const orders = new Map();

// Pricing plans
const plans = {
    premium: { amount: 19900, currency: 'INR', name: 'Premium Plan', duration: 'semester' },
    ultimate: { amount: 49900, currency: 'INR', name: 'Ultimate Plan', duration: 'year' },
    fix_questions: { amount: 7900, currency: 'INR', name: 'Fix Questions', duration: 'subject' }
};

// Create order
router.post('/create-order', async (req, res) => {
    try {
        const { planId, email, phone, branch, semester, subjectCode, subjectName } = req.body;

        // Validate plan
        const plan = plans[planId];
        if (!plan) {
            return res.status(400).json({ success: false, error: 'Invalid plan' });
        }

        // Validate required fields
        if (!email) {
            return res.status(400).json({ success: false, error: 'Email is required' });
        }

        console.log(`Creating order for plan: ${planId}, email: ${email}`);

        if (razorpay) {
            // Create Razorpay order with automatic capture
            const options = {
                amount: plan.amount,
                currency: plan.currency,
                receipt: `REC_${Date.now().toString().slice(-8)}`,
                payment_capture: 1,  // Auto-capture payment (1 = auto, 0 = manual)
                notes: {
                    name: req.body.name || 'Student',
                    planId,
                    email,
                    branch: branch || 'N/A',
                    semester: semester || 'N/A',
                    subjectCode: subjectCode || 'N/A',
                    subjectName: subjectName || 'N/A'
                }
            };

            const order = await razorpay.orders.create(options);

            // Store order with notes for email functionality
            orders.set(order.id, {
                ...order,
                notes: options.notes,  // CRITICAL: Store notes for customer email!
                email,
                phone,
                branch,
                semester,
                planId,
                status: 'created',
                createdAt: new Date().toISOString()
            });

            console.log(`[CREATE-ORDER] ✅ Order ${order.id} created with notes:`, options.notes);

            res.json({
                success: true,
                order: {
                    id: order.id,
                    amount: order.amount,
                    currency: order.currency
                },
                key: process.env.RAZORPAY_KEY_ID
            });
        } else {
            console.log('Razorpay not initialized, using demo mode');
            const demoOrderId = `demo_order_${Date.now()}`;
            orders.set(demoOrderId, {
                id: demoOrderId,
                amount: plan.amount,
                currency: plan.currency,
                email,
                phone,
                branch,
                semester,
                planId,
                status: 'demo',
                createdAt: new Date().toISOString()
            });

            res.json({
                success: true,
                demo: true,
                message: 'Demo mode - Configure Razorpay keys for live payments',
                order: {
                    id: demoOrderId,
                    amount: plan.amount,
                    currency: plan.currency
                }
            });
        }
    } catch (error) {
        console.error('RAZORPAY CREATE ORDER ERROR:', error);
        res.status(500).json({
            success: false,
            error: error.description || error.message || 'Failed to create order'
        });
    }
});

// Verify payment
router.post('/verify', async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        if (!razorpay_order_id) {
            return res.status(400).json({ success: false, error: 'Order ID required' });
        }

        const order = orders.get(razorpay_order_id);
        if (!order) {
            return res.status(404).json({ success: false, error: 'Order not found' });
        }

        if (razorpay && razorpay_payment_id && razorpay_signature) {
            // Verify signature
            const sign = razorpay_order_id + '|' + razorpay_payment_id;
            const expectedSign = crypto
                .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
                .update(sign)
                .digest('hex');

            if (razorpay_signature !== expectedSign) {
                return res.status(400).json({ success: false, error: 'Invalid signature' });
            }

            // Optional: Fetch payment details from Razorpay to confirm capture status
            let paymentDetails = null;
            try {
                paymentDetails = await razorpay.payments.fetch(razorpay_payment_id);
                console.log(`Payment ${razorpay_payment_id} status: ${paymentDetails.status}`);

                // If it's authorized but not captured (rare with payment_capture: 1), capture it now
                if (paymentDetails.status === 'authorized') {
                    console.log(`Manually capturing payment ${razorpay_payment_id}`);
                    await razorpay.payments.capture(razorpay_payment_id, paymentDetails.amount, paymentDetails.currency);
                    paymentDetails.status = 'captured';
                }
            } catch (err) {
                console.error('Error fetching/capturing payment from Razorpay:', err);
                // Continue anyway if verification was successful, or handle error
            }

            // Update order status
            order.status = 'paid';
            order.paymentId = razorpay_payment_id;
            order.razorpayDetails = paymentDetails; // Store details
            orders.set(razorpay_order_id, order);

            // AUTOMATED FULFILLMENT (Real-time system)
            if ((resend || transporter) && order.notes) {
                try {
                    const isFixQ = order.notes.planId === 'fix_questions';
                    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'admin@braintube.site';

                    // 1. Send Email to Admin
                    await sendEmail({
                        to: adminEmail,
                        subject: `💰 New Payment Verified - ${order.notes.planId}`,
                        html: `
                            <h2>New Payment Received</h2>
                            <p><strong>Customer:</strong> ${order.notes.name}</p>
                            <p><strong>Email:</strong> ${order.notes.email}</p>
                            <p><strong>Plan:</strong> ${order.notes.planId}</p>
                            <p><strong>Amount:</strong> ₹${order.amount / 100}</p>
                            ${isFixQ ? `<p><strong>Subject:</strong> ${order.notes.subjectCode} - ${order.notes.subjectName}</p>` : ''}
                            <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
                        `
                    });
                    console.log(`[VERIFY] ✅ Admin email sent to ${adminEmail}`);

                    // 2. Send Email to Customer
                    const customerEmail = order.notes.email;
                    console.log(`[VERIFY] Attempting customer email to: ${customerEmail}`);

                    if (customerEmail) {
                        await sendEmail({
                            to: customerEmail,
                            subject: `✅ Payment Confirmed - ${order.notes.subjectCode || 'Braintube'} Fix Questions`,
                            html: `
                                <!DOCTYPE html>
                                <html>
                                <head>
                                    <style>
                                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                                        .container { max-width: 600px; margin: 0 auto; }
                                        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
                                        .content { background: #ffffff; padding: 30px; }
                                        .success-badge { background: #10b981; color: white; padding: 8px 20px; border-radius: 20px; display: inline-block; font-weight: bold; margin-bottom: 20px; }
                                        .order-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 10px; padding: 20px; margin: 20px 0; }
                                        .timeline { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px 20px; margin: 20px 0; border-radius: 0 10px 10px 0; }
                                        .footer { background: #f8f9fa; padding: 20px 30px; text-align: center; color: #666; font-size: 14px; }
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
                                            
                                            <p>Dear <strong>${order.notes.name}</strong>,</p>
                                            
                                            <p>Thank you for your purchase! We have successfully received your payment and your order is now being processed.</p>
                                            
                                            <div class="order-box">
                                                <h3 style="margin-top: 0; color: #764ba2;">📋 Order Details</h3>
                                                <p><strong>Subject:</strong> ${order.notes.subjectCode} - ${order.notes.subjectName}</p>
                                                <p><strong>Amount Paid:</strong> ₹${order.amount / 100}</p>
                                                <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
                                                <p><strong>Order Date:</strong> ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                                            </div>
                                            
                                            <div class="timeline">
                                                <h3 style="margin-top: 0; color: #b45309;">⏰ When Will You Receive Your Questions?</h3>
                                                <p style="margin-bottom: 0;"><strong>Your Fix Questions PDF will be sent to this email within 2-4 hours.</strong></p>
                                                <p style="margin: 5px 0; font-size: 14px; color: #666;">Maximum delivery time: 24 hours (usually much faster!)</p>
                                            </div>
                                            
                                            <h3 style="color: #764ba2;">📱 Need Help?</h3>
                                            <p>If you don't receive your PDF within 24 hours, or have any questions:</p>
                                            <ul>
                                                <li>WhatsApp: <strong>+91 8884624741</strong></li>
                                                <li>Email: <strong>braintube.in@gmail.com</strong></li>
                                            </ul>
                                            <p style="font-size: 14px; color: #666;">Please include your Payment ID when contacting us.</p>
                                            
                                            <div style="text-align: center; margin-top: 30px;">
                                                <a href="https://wa.me/918884624741" class="btn" style="color: white;">Contact on WhatsApp</a>
                                            </div>
                                        </div>
                                        <div class="footer">
                                            <p style="margin: 0;"><strong>🎓 Braintube</strong></p>
                                            <p style="margin: 5px 0;">Your Complete VTU Academic Platform</p>
                                            <p style="margin: 15px 0 0 0; font-size: 12px; color: #999;">This is an automated confirmation email. Please save it for your records.</p>
                                        </div>
                                    </div>
                                </body>
                                </html>
                            `
                        });
                        console.log(`[VERIFY] ✅ Customer email sent to ${customerEmail}`);
                    } else {
                        console.warn(`[VERIFY] ⚠️ No customer email found in order.notes`);
                    }
                } catch (emailError) {
                    console.error('[VERIFY] ❌ Fulfillment Email Error:', emailError.message);
                }
            }

            res.json({
                success: true,
                message: 'Payment verified successfully',
                order: {
                    id: razorpay_order_id,
                    paymentId: razorpay_payment_id,
                    status: 'paid'
                }
            });
        } else {
            // Demo mode verification
            order.status = 'demo_verified';
            orders.set(razorpay_order_id, order);

            res.json({
                success: true,
                demo: true,
                message: 'Demo payment verified',
                order: {
                    id: razorpay_order_id,
                    status: 'demo_verified'
                }
            });
        }
    } catch (error) {
        console.error('Verify payment error:', error);
        res.status(500).json({ success: false, error: 'Verification failed' });
    }
});

// Get order status
router.get('/order/:orderId', (req, res) => {
    const order = orders.get(req.params.orderId);

    if (!order) {
        return res.status(404).json({ success: false, error: 'Order not found' });
    }

    res.json({
        success: true,
        order: {
            id: order.id,
            status: order.status,
            amount: order.amount,
            planId: order.planId,
            createdAt: order.createdAt
        }
    });
});

// Get pricing plans
router.get('/plans', (req, res) => {
    res.json({
        success: true,
        plans: Object.entries(plans).map(([id, plan]) => ({
            id,
            ...plan,
            displayAmount: `₹${plan.amount / 100}`
        }))
    });
});

// Webhook handler (Production reliability - ALWAYS returns 200 OK)
router.post('/webhook', async (req, res) => {
    const startTime = Date.now();
    const timestamp = new Date().toISOString();

    console.log(`[WEBHOOK] ========================================`);
    console.log(`[WEBHOOK] Received at ${timestamp}`);
    console.log(`[WEBHOOK] Headers:`, JSON.stringify({
        'x-razorpay-signature': req.headers['x-razorpay-signature'] ? 'present' : 'missing',
        'content-type': req.headers['content-type']
    }));

    try {
        const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

        // Check if secret is configured
        if (!secret) {
            console.error('[WEBHOOK] ❌ RAZORPAY_WEBHOOK_SECRET not configured!');
            // Still return 200 to prevent webhook disabling
            return res.status(200).json({
                status: 'ok',
                warning: 'Webhook secret not configured',
                timestamp
            });
        }

        const signature = req.headers['x-razorpay-signature'];

        if (!signature) {
            console.warn('[WEBHOOK] ⚠️ No x-razorpay-signature header present');
            return res.status(200).json({
                status: 'ok',
                warning: 'No signature header',
                timestamp
            });
        }

        // Get raw body for signature verification
        const rawBody = typeof req.body === 'string'
            ? req.body
            : JSON.stringify(req.body);

        // Verify webhook signature
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(rawBody)
            .digest('hex');

        if (signature !== expectedSignature) {
            console.error('[WEBHOOK] ❌ Signature mismatch!');
            console.error(`[WEBHOOK] Expected: ${expectedSignature.substring(0, 20)}...`);
            console.error(`[WEBHOOK] Received: ${signature.substring(0, 20)}...`);
            // Return 200 to prevent webhook disabling (we log for investigation)
            return res.status(200).json({
                status: 'ok',
                verified: false,
                timestamp
            });
        }

        console.log('[WEBHOOK] ✅ Signature verified successfully');

        // Parse payload
        const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        const event = payload.event;
        const payment = payload.payload?.payment?.entity;
        const orderId = payment?.order_id;
        const paymentId = payment?.id;

        console.log(`[WEBHOOK] Event: ${event}`);
        console.log(`[WEBHOOK] Order ID: ${orderId}`);
        console.log(`[WEBHOOK] Payment ID: ${paymentId}`);
        console.log(`[WEBHOOK] Amount: ₹${payment?.amount / 100 || 'N/A'}`);

        // Respond immediately (within 5 seconds to prevent timeout)
        const responseTime = Date.now() - startTime;
        console.log(`[WEBHOOK] Responding in ${responseTime}ms`);

        res.status(200).json({
            status: 'ok',
            event: event,
            processed: true,
            responseTime: `${responseTime}ms`,
            timestamp
        });

        // Process asynchronously after quick response
        setImmediate(async () => {
            try {
                console.log(`[WEBHOOK-ASYNC] Processing ${event} for order ${orderId}`);

                if (event === 'order.paid' || event === 'payment.captured') {
                    const order = orders.get(orderId);

                    // If already processed via frontend, skip
                    if (order && order.status === 'paid') {
                        console.log(`[WEBHOOK-ASYNC] Order ${orderId} already processed, skipping`);
                        return;
                    }

                    // Sync with memory/DB
                    if (order) {
                        order.status = 'paid';
                        order.paymentId = paymentId;
                        order.webhookProcessedAt = new Date().toISOString();
                        orders.set(orderId, order);

                        console.log(`[WEBHOOK-ASYNC] ✅ Order ${orderId} marked as paid`);

                        // Trigger fulfillment (email notifications)
                        if ((resend || transporter) && order.notes) {
                            try {
                                const isFixQ = order.notes.planId === 'fix_questions';
                                const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'admin@braintube.site';

                                // Send email to admin
                                await sendEmail({
                                    to: adminEmail,
                                    subject: `💰 [WEBHOOK] Payment Confirmed - ${order.notes.planId}`,
                                    html: `
                                        <h2>Payment Confirmed via Webhook</h2>
                                        <p><strong>Customer:</strong> ${order.notes.name}</p>
                                        <p><strong>Email:</strong> ${order.notes.email}</p>
                                        <p><strong>Plan:</strong> ${order.notes.planId}</p>
                                        <p><strong>Amount:</strong> ₹${order.amount / 100}</p>
                                        ${isFixQ ? `<p><strong>Subject:</strong> ${order.notes.subjectCode} - ${order.notes.subjectName}</p>` : ''}
                                        <p><strong>Payment ID:</strong> ${paymentId}</p>
                                        <p><strong>Processed via:</strong> Razorpay Webhook</p>
                                    `
                                });
                                console.log(`[WEBHOOK-ASYNC] ✅ Admin notification sent`);
                            } catch (emailError) {
                                console.error('[WEBHOOK-ASYNC] Email error:', emailError.message);
                            }
                        }
                    } else {
                        console.warn(`[WEBHOOK-ASYNC] ⚠️ Order ${orderId} not found in memory`);
                        // In production, you should query database here
                    }
                } else if (event === 'payment.failed') {
                    console.log(`[WEBHOOK-ASYNC] Payment failed for order ${orderId}`);
                    const order = orders.get(orderId);
                    if (order) {
                        order.status = 'failed';
                        order.failedAt = new Date().toISOString();
                        orders.set(orderId, order);
                    }
                }

                console.log(`[WEBHOOK-ASYNC] ✅ Async processing complete`);
            } catch (asyncError) {
                console.error('[WEBHOOK-ASYNC] ❌ Error during async processing:', asyncError);
            }
        });

    } catch (error) {
        console.error('[WEBHOOK] ❌ Error:', error.message);
        console.error('[WEBHOOK] Stack:', error.stack);

        // ALWAYS return 200 OK to prevent webhook auto-disable
        return res.status(200).json({
            status: 'ok',
            error: 'internal_processing_error',
            timestamp: new Date().toISOString()
        });
    }
});

module.exports = router;
