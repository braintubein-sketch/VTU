/**
 * Braintube - Admin Routes
 * Admin dashboard for managing purchases and sending PDFs
 */

const express = require('express');
const router = express.Router();
const Purchase = require('../models/Purchase');

// Initialize Resend for bulk emails
let resend = null;
try {
    if (process.env.RESEND_API_KEY) {
        const { Resend } = require('resend');
        resend = new Resend(process.env.RESEND_API_KEY);
    }
} catch (error) {
    console.log('[Admin] Resend not available');
}

// Simple admin auth (use env variable for password)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'braintube2026';

// Middleware to check admin password
const checkAdmin = (req, res, next) => {
    const password = req.headers['x-admin-password'] || req.query.password;
    if (password !== ADMIN_PASSWORD) {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }
    next();
};

/**
 * GET /api/admin/purchases
 * Get all purchases with filters
 */
router.get('/purchases', checkAdmin, async (req, res) => {
    try {
        const { pdfSent, subjectCode, limit = 100 } = req.query;

        let query = {};
        if (pdfSent !== undefined) {
            query.pdfSent = pdfSent === 'true';
        }
        if (subjectCode) {
            query.subjectCode = subjectCode;
        }

        const purchases = await Purchase.find(query)
            .sort({ purchasedAt: -1 })
            .limit(parseInt(limit));

        const stats = {
            total: await Purchase.countDocuments(),
            pending: await Purchase.countDocuments({ pdfSent: false }),
            sent: await Purchase.countDocuments({ pdfSent: true })
        };

        res.json({
            success: true,
            stats,
            count: purchases.length,
            purchases
        });
    } catch (error) {
        console.error('[Admin] Get purchases error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

/**
 * GET /api/admin/purchases/pending
 * Get all purchases where PDF hasn't been sent
 */
router.get('/purchases/pending', checkAdmin, async (req, res) => {
    try {
        const purchases = await Purchase.find({ pdfSent: false })
            .sort({ purchasedAt: -1 });

        // Group by subject
        const groupedBySubject = {};
        purchases.forEach(p => {
            if (!groupedBySubject[p.subjectCode]) {
                groupedBySubject[p.subjectCode] = {
                    subjectCode: p.subjectCode,
                    subjectName: p.subjectName,
                    count: 0,
                    customers: []
                };
            }
            groupedBySubject[p.subjectCode].count++;
            groupedBySubject[p.subjectCode].customers.push({
                id: p._id,
                name: p.name,
                email: p.email,
                purchasedAt: p.purchasedAt,
                paymentId: p.paymentId
            });
        });

        res.json({
            success: true,
            totalPending: purchases.length,
            subjects: Object.values(groupedBySubject)
        });
    } catch (error) {
        console.error('[Admin] Get pending error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

/**
 * POST /api/admin/mark-sent
 * Mark purchases as PDF sent
 */
router.post('/mark-sent', checkAdmin, async (req, res) => {
    try {
        const { purchaseIds, subjectCode, all } = req.body;

        let query = {};
        if (all) {
            query = { pdfSent: false };
        } else if (subjectCode) {
            query = { subjectCode, pdfSent: false };
        } else if (purchaseIds && purchaseIds.length > 0) {
            query = { _id: { $in: purchaseIds } };
        } else {
            return res.status(400).json({ success: false, error: 'No selection provided' });
        }

        const result = await Purchase.updateMany(query, {
            $set: { pdfSent: true, pdfSentAt: new Date() }
        });

        res.json({
            success: true,
            message: `Marked ${result.modifiedCount} purchases as PDF sent`,
            modifiedCount: result.modifiedCount
        });
    } catch (error) {
        console.error('[Admin] Mark sent error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

/**
 * POST /api/admin/send-pdf-email
 * Send PDF notification email to selected customers
 */
router.post('/send-pdf-email', checkAdmin, async (req, res) => {
    try {
        const { purchaseIds, subjectCode, pdfLink, message } = req.body;

        if (!resend) {
            return res.status(500).json({ success: false, error: 'Email service not configured' });
        }

        // Find purchases to email
        let query = { pdfSent: false };
        if (subjectCode) {
            query.subjectCode = subjectCode;
        } else if (purchaseIds && purchaseIds.length > 0) {
            query = { _id: { $in: purchaseIds } };
        }

        const purchases = await Purchase.find(query);

        if (purchases.length === 0) {
            return res.json({ success: true, message: 'No pending purchases to email' });
        }

        let successCount = 0;
        let errorCount = 0;

        for (const purchase of purchases) {
            try {
                await resend.emails.send({
                    from: 'Braintube <noreply@braintube.in>',
                    to: purchase.email,
                    subject: `Your Fix Questions - ${purchase.subjectCode} ${purchase.subjectName}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                                <h1 style="color: white; margin: 0;">🎓 Your Fix Questions are Ready!</h1>
                            </div>
                            <div style="padding: 30px; background: #f9f9f9;">
                                <p>Dear <strong>${purchase.name}</strong>,</p>
                                <p>Thank you for purchasing Fix Questions from Braintube!</p>
                                
                                <div style="background: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                                    <h3 style="margin-top: 0; color: #2e7d32;">📚 Your Purchase</h3>
                                    <p><strong>Subject:</strong> ${purchase.subjectCode} - ${purchase.subjectName}</p>
                                    <p><strong>Payment ID:</strong> ${purchase.paymentId}</p>
                                </div>
                                
                                ${pdfLink ? `
                                <div style="text-align: center; margin: 30px 0;">
                                    <a href="${pdfLink}" style="display: inline-block; background: #764ba2; color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold;">📥 Download PDF</a>
                                </div>
                                ` : ''}
                                
                                ${message ? `<p>${message}</p>` : '<p>Your Fix Questions PDF has been attached to this email or will be sent shortly.</p>'}
                                
                                <p style="color: #666; font-size: 14px; margin-top: 30px;">
                                    If you have any questions, reply to this email or contact us on WhatsApp: +91 8884624741
                                </p>
                            </div>
                            <div style="background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
                                <p style="margin: 0;">🎓 Braintube - Your VTU Study Partner</p>
                            </div>
                        </div>
                    `
                });

                // Mark as sent
                await Purchase.findByIdAndUpdate(purchase._id, {
                    pdfSent: true,
                    pdfSentAt: new Date()
                });

                successCount++;
                console.log(`[Admin] ✅ PDF email sent to ${purchase.email}`);
            } catch (emailError) {
                errorCount++;
                console.error(`[Admin] ❌ Failed to send to ${purchase.email}:`, emailError.message);
            }
        }

        res.json({
            success: true,
            message: `Sent ${successCount} emails, ${errorCount} failed`,
            successCount,
            errorCount
        });
    } catch (error) {
        console.error('[Admin] Send PDF email error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

/**
 * GET /api/admin/stats
 * Get dashboard statistics
 */
router.get('/stats', checkAdmin, async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const stats = {
            total: await Purchase.countDocuments(),
            pending: await Purchase.countDocuments({ pdfSent: false }),
            sent: await Purchase.countDocuments({ pdfSent: true }),
            todayPurchases: await Purchase.countDocuments({ purchasedAt: { $gte: today } }),
            totalRevenue: (await Purchase.aggregate([
                { $group: { _id: null, total: { $sum: '$amount' } } }
            ]))[0]?.total || 0,
            bySubject: await Purchase.aggregate([
                { $group: { _id: '$subjectCode', count: { $sum: 1 } } },
                { $sort: { count: -1 } }
            ])
        };

        res.json({ success: true, stats });
    } catch (error) {
        console.error('[Admin] Stats error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
