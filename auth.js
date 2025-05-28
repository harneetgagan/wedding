// Check if user is authenticated
window.onload = function() {
    // List of pages to protect
    const protectedPages = [
        '', // root path (for GitHub Pages)
        'index.html',
        'events.html',
        'gallery.html',
        'rsvp.html'
    ];
    // Get the last part of the path, or '' for root
    let currentPage = window.location.pathname.split('/').pop();
    // On GitHub Pages, root path is '' (empty string)
    if (
        protectedPages.includes(currentPage) &&
        !sessionStorage.getItem('isAuthenticated')
    ) {
        window.location.href = 'login.html';
    }
} 