// Check if user is authenticated
window.onload = function() {
    // List of pages to protect
    const protectedPages = [
        'index.html',
        'events.html',
        'gallery.html',
        'rsvp.html'
    ];
    const currentPage = window.location.pathname.split('/').pop();
    if (protectedPages.includes(currentPage) && !sessionStorage.getItem('isAuthenticated')) {
        window.location.href = 'login.html';
    }
} 