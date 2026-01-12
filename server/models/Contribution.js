const mongoose = require('mongoose');

const contributionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    subjectCode: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    branch: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileSize: {
        type: Number,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contribution', contributionSchema);
