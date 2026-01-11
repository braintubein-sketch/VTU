/**
 * Braintube Configuration
 * Set the API_BASE_URL to your hosted backend URL
 */

const CONFIG = {
    // Detect if we're on localhost or production
    API_BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5000' // Local dev
        : '' // Production (same domain)
};

// Logic to automatically handle relative vs absolute paths
const getApiUrl = (endpoint) => {
    return endpoint.startsWith('http') ? endpoint : `${CONFIG.API_BASE_URL}${endpoint}`;
};
