const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Contribution = require('../models/Contribution');
const nodemailer = require('nodemailer');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../../uploads/contributions');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
    fileFilter: (req, file, cb) => {
        const filetypes = /pdf|doc|docx/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only PDF and DOCX files are allowed!'));
        }
    }
});

// Initialize Email Transporter
let transporter = null;
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

// @desc    Upload new contribution
// @route   POST /api/contributions/upload
// @access  Private (Needs to be logged in)
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, error: 'Please upload a file' });
        }

        const { title, subjectCode, branch, semester, userId, userName } = req.body;

        const contribution = await Contribution.create({
            userId,
            userName,
            title,
            subjectCode,
            branch,
            semester,
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileSize: req.file.size,
            fileType: req.file.mimetype
        });

        // Send Email to Admin
        if (transporter) {
            try {
                const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;
                await transporter.sendMail({
                    from: `"Braintube Content" <${process.env.SMTP_USER}>`,
                    to: adminEmail,
                    subject: `📄 New Note Contribution - ${subjectCode}`,
                    html: `
                        <h2>New Contribution Received</h2>
                        <p><strong>Contributor:</strong> ${userName}</p>
                        <p><strong>Title:</strong> ${title}</p>
                        <p><strong>Subject:</strong> ${subjectCode}</p>
                        <p><strong>Branch/Sem:</strong> ${branch.toUpperCase()} - Sem ${semester}</p>
                        <p><strong>File:</strong> ${req.file.originalname}</p>
                        <br>
                        <p>Login to the admin panel to review and approve.</p>
                    `
                });
            } catch (emailError) {
                console.error('Contribution Email Error:', emailError);
            }
        }

        res.status(201).json({
            success: true,
            message: 'Contribution submitted successfully for review.',
            data: contribution
        });

    } catch (error) {
        console.error('Contribution upload error:', error);
        res.status(500).json({ success: false, error: error.message || 'Submission failed' });
    }
});

module.exports = router;
