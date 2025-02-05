// language-switcher.js
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('switch-to-it').addEventListener('click', function() {
        var currentPath = window.location.pathname;
        
        // Se non siamo già sulla versione italiana, cambiamo l'URL
        if (!currentPath.includes('/it/')) {
            var newPath = currentPath.replace('/en/', '/it/');
            window.location.href = newPath;
        }
    });

    document.getElementById('switch-to-en').addEventListener('click', function() {
        var currentPath = window.location.pathname;

        // Se non siamo già sulla versione inglese, cambiamo l'URL
        if (!currentPath.includes('/en/')) {
            var newPath = currentPath.replace('/it/', '/en/');
            window.location.href = newPath;
        }
    });
});
