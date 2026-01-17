const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    // Customer details
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true
    },

    // Subject details
    subjectCode: {
        type: String,
        required: true,
        trim: true
    },
    subjectName: {
        type: String,
        required: true,
        trim: true
    },

    // Payment details
    paymentId: {
        type: String,
        required: true,
        trim: true
    },
    orderId: {
        type: String,
        trim: true
    },
    amount: {
        type: Number,
        default: 79
    },

    // Status tracking
    paymentStatus: {
        type: String,
        enum: ['pending', 'captured', 'failed', 'refunded'],
        default: 'pending'
    },
    pdfSent: {
        type: Boolean,
        default: false
    },
    pdfSentAt: {
        type: Date
    },

    // Timestamps
    purchasedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Index for faster queries
purchaseSchema.index({ email: 1 });
purchaseSchema.index({ subjectCode: 1 });
purchaseSchema.index({ pdfSent: 1 });
purchaseSchema.index({ purchasedAt: -1 });

module.exports = mongoose.model('Purchase', purchaseSchema);
