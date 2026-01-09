/**
 * VTU Nexus - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initThemeToggle();
    initBranchesGrid();
    initScrollAnimations();
});

// Header scroll effect
function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (!menuToggle || !mobileNav) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Theme toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Render branches grid
function initBranchesGrid() {
    const grid = document.getElementById('branchesGrid');
    if (!grid || typeof VTUData === 'undefined') return;

    grid.innerHTML = VTUData.branches.map(branch => `
    <a href="pages/branch.html?branch=${branch.id}" class="branch-card">
      <div class="branch-icon">${branch.icon}</div>
      <h3 class="branch-name">${branch.name}</h3>
      <p class="branch-fullname">${branch.fullName}</p>
      <div class="branch-meta">
        <span class="branch-meta-item">📚 ${branch.subjects} Subjects</span>
        <span class="branch-meta-item">📄 ${branch.documents}+ Docs</span>
      </div>
    </a>
  `).join('');
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .branch-card, .section-header').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Toast notifications
function showToast(message, type = 'success') {
    const container = document.querySelector('.toast-container') || createToastContainer();

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
    <span>${type === 'success' ? '✅' : '❌'}</span>
    <span>${message}</span>
  `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Form validation helper
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Search functionality
function initSearch(inputId, items, renderFn) {
    const input = document.getElementById(inputId);
    if (!input) return;

    input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = items.filter(item =>
            item.name.toLowerCase().includes(query) ||
            (item.code && item.code.toLowerCase().includes(query))
        );
        renderFn(filtered);
    });
}
