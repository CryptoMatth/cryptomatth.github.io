function initializeDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            const parentLi = this.parentElement;
            parentLi.classList.toggle('open');
        });
    });
}

// Funzione per aprire e chiudere la sidebar nei dispositivi piccoli
function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("open");
}

// Aspetta che il DOM sia pronto prima di eseguire
document.addEventListener('DOMContentLoaded', function() {
    const sidebarContainer = document.getElementById('sidebar-container');

    if (sidebarContainer) {
        const observer = new MutationObserver(() => {
            initializeDropdowns();
            observer.disconnect();  // Evita chiamate ripetute
        });
        observer.observe(sidebarContainer, { childList: true, subtree: true });
    } else {
        initializeDropdowns();
    }
});
