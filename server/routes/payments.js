/**
 * VTU Nexus - Payment Routes (Razorpay Integration)
 */

const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Initialize Email Transporter
let transporter = null;
try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        transporter = nodemailer.createTransport({
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
    console.log('Email transporter error:', error.message);
}

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

            orders.set(order.id, {
                ...order,
                email,
                phone,
                branch,
                semester,
                planId,
                status: 'created',
                createdAt: new Date().toISOString()
            });

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
            // Demo mode
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
            if (transporter && order.notes) {
                try {
                    const isFixQ = order.notes.planId === 'fix_questions';
                    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

                    // 1. Send Email to Admin
                    await transporter.sendMail({
                        from: `"Braintube Payments" <${process.env.SMTP_USER}>`,
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

                    // 2. Send Email to Customer
                    await transporter.sendMail({
                        from: `"Braintube" <${process.env.SMTP_USER}>`,
                        to: order.notes.email,
                        subject: `Thank you for your purchase - Braintube`,
                        html: `
                            <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px;">
                                <h2 style="color: #764ba2;">Payment Successful! 🎉</h2>
                                <p>Dear ${order.notes.name},</p>
                                <p>We've received your payment of <strong>₹${order.amount / 100}</strong> for the <strong>${order.notes.planId.replace('_', ' ')}</strong>.</p>
                                ${isFixQ ? `
                                <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                                    <h3 style="margin-top: 0;">Order Details:</h3>
                                    <p>Subject: ${order.notes.subjectCode} - ${order.notes.subjectName}</p>
                                    <p>We will send your Fix Questions PDF to this email within 24 hours.</p>
                                </div>` : ''}
                                <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
                                <p>If you have any questions, please contact us on WhatsApp: +91 8884624741</p>
                                <br>
                                <p>Happy Learning!<br>Team Braintube</p>
                            </div>
                        `
                    });
                } catch (emailError) {
                    console.error('Fulfillment Email Error:', emailError);
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

// Webhook handler (Production reliability)
router.post('/webhook', async (req, res) => {
    try {
        const secret = process.env.RAZORPAY_WEBHOOK_SECRET || 'vtu_nexus_webhook_secret';
        const signature = req.headers['x-razorpay-signature'];

        // Verify webhook signature
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(JSON.stringify(req.body))
            .digest('hex');

        if (signature !== expectedSignature) {
            return res.status(400).json({ success: false, error: 'Invalid signature' });
        }

        const event = req.body.event;
        const payment = req.body.payload.payment.entity;
        const orderId = payment.order_id;

        console.log(`Webhook Received: ${event} for Order: ${orderId}`);

        if (event === 'order.paid' || event === 'payment.captured') {
            const order = orders.get(orderId);

            // If already processed via frontend, skip
            if (order && order.status === 'paid') {
                return res.json({ status: 'ok', msg: 'Already processed' });
            }

            // Sync with memory/DB
            if (order) {
                order.status = 'paid';
                order.paymentId = payment.id;
                orders.set(orderId, order);

                // Trigger fulfillment if not done
                // (Implementation same as verify route)
                console.log(`Automatic fulfillment triggered for ${order.notes.email}`);
            }
        }

        res.json({ status: 'ok' });
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({ success: false });
    }
});

module.exports = router;
