/**
 * VTU Nexus - Payment Routes (Razorpay Integration)
 */

const express = require('express');
const router = express.Router();
const crypto = require('crypto');

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
    console.log('Razorpay not configured - running in demo mode');
}

// Store orders (replace with database in production)
const orders = new Map();

// Pricing plans
const plans = {
    premium: { amount: 19900, currency: 'INR', name: 'Premium Plan', duration: 'semester' },
    ultimate: { amount: 49900, currency: 'INR', name: 'Ultimate Plan', duration: 'year' }
};

// Create order
router.post('/create-order', async (req, res) => {
    try {
        const { planId, email, phone, branch, semester } = req.body;

        // Validate plan
        const plan = plans[planId];
        if (!plan) {
            return res.status(400).json({ success: false, error: 'Invalid plan' });
        }

        // Validate required fields
        if (!email || !phone) {
            return res.status(400).json({ success: false, error: 'Email and phone are required' });
        }

        if (razorpay) {
            // Create Razorpay order with automatic capture
            const options = {
                amount: plan.amount,
                currency: plan.currency,
                receipt: `order_${Date.now()}`,
                payment_capture: 1,  // Auto-capture payment (1 = auto, 0 = manual)
                notes: {
                    planId,
                    email,
                    branch,
                    semester
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
        console.error('Create order error:', error);
        res.status(500).json({ success: false, error: 'Failed to create order' });
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

            // Update order status
            order.status = 'paid';
            order.paymentId = razorpay_payment_id;
            orders.set(razorpay_order_id, order);

            // TODO: Send confirmation email
            // TODO: Update user premium status in database

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

module.exports = router;
