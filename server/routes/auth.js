/**
 * VTU Nexus - Authentication Routes
 */

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

// In-memory user store (replace with MongoDB in production)
const users = new Map();

// Validation middleware
const validateRegistration = [
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
    body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('branch').notEmpty().withMessage('Branch is required'),
    body('semester').isInt({ min: 1, max: 8 }).withMessage('Invalid semester')
];

const validateLogin = [
    body('email').isEmail().normalizeEmail(),
    body('password').notEmpty()
];

// Register new user
router.post('/register', validateRegistration, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const { name, email, password, branch, semester, phone } = req.body;

        // Check if user exists
        if (users.has(email)) {
            return res.status(400).json({ success: false, error: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create user
        const user = {
            id: Date.now().toString(),
            name,
            email,
            password: hashedPassword,
            branch,
            semester,
            phone: phone || null,
            isPremium: false,
            createdAt: new Date().toISOString()
        };

        users.set(email, user);

        // Generate token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET || 'default-secret-key',
            { expiresIn: process.env.JWT_EXPIRE || '7d' }
        );

        res.status(201).json({
            success: true,
            message: 'Registration successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                branch: user.branch,
                semester: user.semester,
                isPremium: user.isPremium
            }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ success: false, error: 'Registration failed' });
    }
});

// Login user
router.post('/login', validateLogin, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const { email, password } = req.body;

        // Find user
        const user = users.get(email);
        if (!user) {
            return res.status(401).json({ success: false, error: 'Invalid credentials' });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, error: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET || 'default-secret-key',
            { expiresIn: process.env.JWT_EXPIRE || '7d' }
        );

        res.json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                branch: user.branch,
                semester: user.semester,
                isPremium: user.isPremium
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, error: 'Login failed' });
    }
});

// Get current user
router.get('/me', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ success: false, error: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret-key');
        const user = users.get(decoded.email);

        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        res.json({
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                branch: user.branch,
                semester: user.semester,
                isPremium: user.isPremium
            }
        });
    } catch (error) {
        res.status(401).json({ success: false, error: 'Invalid token' });
    }
});

module.exports = router;
