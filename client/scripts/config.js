/**
 * Braintube Configuration
 * Set the API_BASE_URL to your hosted backend URL
 */

const CONFIG = {
    // For local testing: http://localhost:5000
    // For production: https://braintube-backend.onrender.com (example)
    API_BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? ''
        : 'https://braintube-api.onrender.com' // Production backend
};

// Logic to automatically handle relative vs absolute paths
const getApiUrl = (endpoint) => {
    return endpoint.startsWith('http') ? endpoint : `${CONFIG.API_BASE_URL}${endpoint}`;
};
