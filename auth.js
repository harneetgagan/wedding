// Check if user is authenticated
window.onload = function() {
    // Only check authentication for the main entry point (index.html)
    if (window.location.pathname.endsWith('index.html') && !sessionStorage.getItem('isAuthenticated')) {
        window.location.href = 'login.html';
    }
} 