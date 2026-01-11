/**
 * Braintube - Authentication Logic
 */

const API_URL = '/api/auth';

const Auth = {
    // Current user state
    user: JSON.parse(localStorage.getItem('bt_user')),
    token: localStorage.getItem('bt_token'),

    // Initialize auth state
    async init() {
        if (this.token) {
            try {
                const response = await fetch(`${API_URL}/me`, {
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    this.user = data.user;
                    localStorage.setItem('bt_user', JSON.stringify(data.user));
                } else {
                    this.logout();
                }
            } catch (error) {
                console.error('Auth init error:', error);
                // Don't logout on network error, keep local state
            }
        }
        this.updateUI();
    },

    // Register user
    async register(userData) {
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            if (data.success) {
                this.saveSession(data.token, data.user);
                return { success: true };
            }
            return { success: false, error: data.error || (data.errors ? data.errors[0].msg : 'Registration failed') };
        } catch (error) {
            return { success: false, error: 'Server error. Please try again.' };
        }
    },

    // Login user
    async login(email, password) {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (data.success) {
                this.saveSession(data.token, data.user);
                return { success: true };
            }
            return { success: false, error: data.error || 'Invalid email or password' };
        } catch (error) {
            return { success: false, error: 'Server error. Please try again.' };
        }
    },

    // Save session
    saveSession(token, user) {
        this.token = token;
        this.user = user;
        localStorage.setItem('bt_token', token);
        localStorage.setItem('bt_user', JSON.stringify(user));
        this.updateUI();
    },

    // Logout
    logout() {
        this.user = null;
        this.token = null;
        localStorage.removeItem('bt_token');
        localStorage.removeItem('bt_user');
        this.updateUI();
    },

    // Check if user is logged in
    isAuthenticated() {
        return !!this.token;
    },

    // Redirect if not authenticated
    requireAuth() {
        if (!this.isAuthenticated()) {
            window.location.href = '/pages/login.html?redirect=' + encodeURIComponent(window.location.pathname + window.location.search);
        }
    },

    // Update Header UI based on auth state
    updateUI() {
        const headerActions = document.querySelector('.header-actions');
        if (!headerActions) return;

        if (this.user) {
            // User is logged in
            headerActions.innerHTML = `
                <div class="user-menu">
                    <button class="user-profile-btn" id="userMenuToggle">
                        <div class="avatar">${this.user.name.charAt(0).toUpperCase()}</div>
                        <span class="hide-mobile" style="font-weight:600; font-family:'Outfit'">${this.user.name.split(' ')[0]}</span>
                    </button>
                    <div class="user-dropdown" id="userDropdown">
                        <div class="dropdown-header">
                            <strong style="color:var(--text-primary)">${this.user.name}</strong>
                            <span style="color:var(--text-muted); font-size:11px">${this.user.email}</span>
                        </div>
                        <div class="dropdown-divider"></div>
                        <a href="/pages/profile.html" class="dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:10px"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            My Profile
                        </a>
                        <a href="/pages/pricing.html" class="dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:10px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            Upgrade Premium
                        </a>
                        <div class="dropdown-divider"></div>
                        <button onclick="Auth.logout(); window.location.reload();" class="dropdown-item text-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:10px"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                            Logout
                        </button>
                    </div>
                </div>
                <button class="menu-toggle" id="menuToggle"><span></span><span></span><span></span></button>
            `;

            // Add dropdown toggle logic
            const toggle = document.getElementById('userMenuToggle');
            const dropdown = document.getElementById('userDropdown');
            if (toggle && dropdown) {
                toggle.addEventListener('click', (e) => {
                    e.stopPropagation();
                    dropdown.classList.toggle('active');
                });
                document.addEventListener('click', () => dropdown.classList.remove('active'));
            }
        } else {
            // User is not logged in
            // Find relative path to login.html
            const isSubPage = window.location.pathname.includes('/pages/');
            const loginPath = isSubPage ? 'login.html' : 'pages/login.html';

            headerActions.innerHTML = `
                <a href="${loginPath}" class="btn btn-secondary hide-mobile">Login</a>
                <button class="menu-toggle" id="menuToggle"><span></span><span></span><span></span></button>
            `;
        }

        // Re-attach mobile menu logic (needs to be available globally)
        if (typeof window.initMobileMenu === 'function') {
            window.initMobileMenu();
        }
    }
};

// Export to window
window.Auth = Auth;

// Initialize auth on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Auth.init());
} else {
    Auth.init();
}
