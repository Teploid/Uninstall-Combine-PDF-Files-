// Uninstall page functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('👋 Uninstall page loaded');
    
    // Track page view with Vercel Analytics
    if (typeof window.va !== 'undefined') {
        window.va('track', 'Uninstall Page Viewed', {
            source: getUrlParameter('source') || 'direct',
            version: getUrlParameter('version') || 'unknown',
            timestamp: new Date().toISOString()
        });
    }
    
    // Initialize analytics tracking
    initializeAnalyticsTracking();
    
    // Mark page as loaded
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Track Google Form interactions
function trackGoogleFormInteractions() {
    const iframe = document.querySelector('.google-form');
    if (iframe && typeof window.va !== 'undefined') {
        // Track when user starts interacting with the form
        iframe.addEventListener('load', function() {
            window.va('track', 'Google Form Loaded', {
                timestamp: new Date().toISOString()
            });
        });
    }
}

// Initialize analytics tracking for interactions
function initializeAnalyticsTracking() {
    // Track footer link clicks
    const footerLink = document.querySelector('.footer-link');
    if (footerLink && typeof window.va !== 'undefined') {
        footerLink.addEventListener('click', function() {
            window.va('track', 'Footer Link Clicked', {
                link: 'SVGBackgrounds.com',
                page: 'uninstall'
            });
        });
    }
    
    // Track Google Form interactions
    trackGoogleFormInteractions();
}

// Keyboard shortcuts
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'Escape':
                // Skip feedback
                document.getElementById('skipButton').click();
                break;
                
            case 'Enter':
                // Submit if Ctrl/Cmd + Enter
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    document.getElementById('submitButton').click();
                }
                break;
        }
    });
}

// Initialize keyboard shortcuts
initializeKeyboardShortcuts();

// Error handling
window.addEventListener('error', function(e) {
    console.error('❌ Uninstall page error:', e.error);
    
    // Track errors if analytics is available
    if (typeof window.va !== 'undefined') {
        window.va('track', 'Uninstall Page Error', {
            error_message: e.error?.message || 'unknown_error',
            error_stack: e.error?.stack || 'no_stack',
            timestamp: new Date().toISOString()
        });
    }
});

// Track page unload
window.addEventListener('beforeunload', function() {
    if (typeof window.va !== 'undefined') {
        window.va('track', 'Uninstall Page Closed', {
            timestamp: new Date().toISOString()
        });
    }
});