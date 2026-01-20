/**
 * Braintube AdSense Manager
 * Strategic ad placement for maximum revenue
 * Publisher ID: ca-pub-2703338145574896
 */

(function () {
    'use strict';

    const ADSENSE_CLIENT = 'ca-pub-2703338145574896';

    // Ad slot IDs - Replace with your actual ad slot IDs from AdSense
    const AD_SLOTS = {
        header: 'XXXXXXXX',      // Horizontal banner below header
        sidebar: 'XXXXXXXX',     // Sidebar rectangle
        inArticle: 'XXXXXXXX',   // In-content ads
        footer: 'XXXXXXXX',      // Footer banner
        sticky: 'XXXXXXXX'       // Sticky bottom ad
    };

    // Create ad container with styling
    function createAdContainer(id, style = '') {
        const container = document.createElement('div');
        container.id = id;
        container.className = 'ad-container';
        container.style.cssText = `
            text-align: center;
            margin: 20px auto;
            min-height: 90px;
            overflow: hidden;
            ${style}
        `;
        return container;
    }

    // Insert responsive ad unit
    function insertAd(container, slot, format = 'auto') {
        const ins = document.createElement('ins');
        ins.className = 'adsbygoogle';
        ins.style.cssText = 'display:block;';
        ins.setAttribute('data-ad-client', ADSENSE_CLIENT);
        ins.setAttribute('data-ad-slot', slot);
        ins.setAttribute('data-ad-format', format);
        ins.setAttribute('data-full-width-responsive', 'true');

        container.appendChild(ins);

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.log('AdSense not loaded');
        }
    }

    // Add horizontal banner ad after header
    function addHeaderAd() {
        const header = document.querySelector('header');
        if (header && header.nextSibling) {
            const container = createAdContainer('ad-header', 'max-width: 970px;');
            header.parentNode.insertBefore(container, header.nextSibling);
            insertAd(container, AD_SLOTS.header, 'horizontal');
        }
    }

    // Add in-article ads
    function addInArticleAds() {
        const content = document.querySelector('main');
        if (!content) return;

        const sections = content.querySelectorAll('section');

        // Add ad after every 2nd section
        sections.forEach((section, index) => {
            if (index > 0 && index % 2 === 0) {
                const container = createAdContainer(`ad-article-${index}`, 'max-width: 728px;');
                section.parentNode.insertBefore(container, section);
                insertAd(container, AD_SLOTS.inArticle, 'fluid');
            }
        });
    }

    // Add footer ad
    function addFooterAd() {
        const footer = document.querySelector('footer');
        if (footer) {
            const container = createAdContainer('ad-footer', 'max-width: 970px; margin-bottom: 30px;');
            footer.parentNode.insertBefore(container, footer);
            insertAd(container, AD_SLOTS.footer, 'horizontal');
        }
    }

    // Add sticky bottom ad (mobile)
    function addStickyAd() {
        if (window.innerWidth > 768) return; // Only on mobile

        const container = document.createElement('div');
        container.id = 'sticky-ad';
        container.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 9999;
            background: var(--bg-primary, #0a0a0f);
            padding: 5px;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.3);
        `;

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✕';
        closeBtn.style.cssText = `
            position: absolute;
            top: -25px;
            right: 10px;
            background: #333;
            color: white;
            border: none;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 12px;
        `;
        closeBtn.onclick = () => container.remove();

        container.appendChild(closeBtn);
        document.body.appendChild(container);
        insertAd(container, AD_SLOTS.sticky, 'horizontal');
    }

    // Initialize ads after page load
    function init() {
        // Wait for AdSense script to load
        if (typeof adsbygoogle === 'undefined') {
            setTimeout(init, 500);
            return;
        }

        // Add ads with slight delay between each
        setTimeout(addHeaderAd, 100);
        setTimeout(addInArticleAds, 200);
        setTimeout(addFooterAd, 300);
        setTimeout(addStickyAd, 1000);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Add CSS for ad containers
    const style = document.createElement('style');
    style.textContent = `
        .ad-container {
            background: rgba(255,255,255,0.02);
            border: 1px dashed rgba(255,255,255,0.1);
            border-radius: 8px;
            padding: 10px;
        }
        .ad-container::before {
            content: 'Advertisement';
            display: block;
            font-size: 10px;
            color: rgba(255,255,255,0.3);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
        }
        @media (max-width: 768px) {
            body {
                padding-bottom: 70px; /* Space for sticky ad */
            }
        }
    `;
    document.head.appendChild(style);
})();
