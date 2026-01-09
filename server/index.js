/**
 * VTU Nexus - Backend Server
 * Main entry point for the Express.js application
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const path = require('path');

// Import routes
const authRoutes = require('./routes/auth');
const branchRoutes = require('./routes/branches');
const subjectRoutes = require('./routes/subjects');
const paymentRoutes = require('./routes/payments');
const contactRoutes = require('./routes/contact');

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
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
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
