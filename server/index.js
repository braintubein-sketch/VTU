/**
 * Braintube - Backend Server
 * Main entry point for the Express.js application
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const path = require('path');
const mongoose = require('mongoose');

// Connect to MongoDB with retries
const connectDB = async (retries = 5) => {
    if (!process.env.MONGODB_URI) {
        console.error('================================================================');
        console.error('⚠️  WARNING: MONGODB_URI is not defined!');
        console.error('Authentication and payments will NOT work.');
        console.error('Please set MONGODB_URI in your Render environment variables.');
        console.error('================================================================');
        return;
    }

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`MongoDB Connection Error: ${err.message}`);
        if (retries > 0) {
            console.log(`Retrying connection... (${retries} attempts left)`);
            setTimeout(() => connectDB(retries - 1), 5000);
        } else {
            console.error('All MongoDB connection retries failed.');
        }
    }
};

connectDB();

// Import routes
const authRoutes = require('./routes/auth');
const branchRoutes = require('./routes/branches');
const subjectRoutes = require('./routes/subjects');
const paymentRoutes = require('./routes/payments');
const contactRoutes = require('./routes/contact');
const fixQuestionsRoutes = require('./routes/fixQuestions');
const contributionRoutes = require('./routes/contributions');

// Initialize Express app
const app = express();

// Trust proxy for rate limiting behind reverse proxy
app.set('trust proxy', 1);

// Security middleware
app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
}));

// CORS configuration
const allowedOrigins = [
    'https://braintube.site',
    'https://www.braintube.site',
    'https://braintube-api.onrender.com',
    'http://localhost:3000',
    'http://localhost:5000',
    'http://localhost:10000'
];

// Add CLIENT_URL from env if available
if (process.env.CLIENT_URL) {
    const envOrigin = process.env.CLIENT_URL.replace(/\/$/, '');
    if (!allowedOrigins.includes(envOrigin)) {
        allowedOrigins.push(envOrigin);
    }
}

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        const isAllowed = allowedOrigins.some(allowed =>
            origin === allowed ||
            origin.startsWith(allowed + '/')
        );

        if (!isAllowed) {
            console.log('Blocked CORS Origin:', origin);
            return callback(new Error('CORS policy violation'), false);
        }
        return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 500, // Increased for production
    message: { error: 'Too many requests, please try again later.' }
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}

// Serve static files from client directory
app.use(express.static(path.join(__dirname, '../client')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/branches', branchRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/fix-questions', fixQuestionsRoutes);
app.use('/api/contributions', contributionRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// API documentation endpoint
app.get('/api', (req, res) => {
    res.json({
        name: 'Braintube API',
        version: '1.0.0',
        endpoints: {
            auth: '/api/auth',
            branches: '/api/branches',
            subjects: '/api/subjects',
            payments: '/api/payments',
            contact: '/api/contact',
            fixQuestions: '/api/fix-questions',
            health: '/api/health'
        }
    });
});

// Catch-all route for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    console.error('Stack:', err.stack);

    res.status(err.status || 500).json({
        success: false,
        error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
});

// Handle 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found'
    });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🎓 Braintube Server                                     ║
║                                                           ║
║   Environment: ${(process.env.NODE_ENV || 'development').padEnd(40)}║
║   Port: ${String(PORT).padEnd(48)}║
║   URL: http://localhost:${PORT}                            ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);
});

module.exports = app;
