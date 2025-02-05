// language-switcher.js
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('switch-to-it').addEventListener('click', function(event) {
        event.preventDefault(); // Evita il comportamento predefinito del link
        
        var currentPath = window.location.pathname;
        
        // Controlla se siamo già nella versione italiana
        if (!currentPath.includes('/it/')) {
            var newPath = currentPath.replace('/en/', '/it/');
            window.location.href = newPath;
        }
    });

    document.getElementById('switch-to-en').addEventListener('click', function(event) {
        event.preventDefault(); // Evita il comportamento predefinito del link
        
        var currentPath = window.location.pathname;

        // Controlla se siamo già nella versione inglese
        if (!currentPath.includes('/en/')) {
            var newPath = currentPath.replace('/it/', '/en/');
            window.location.href = newPath;
        }
    });
});
