function initializeDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            const parentLi = this.parentElement;
            parentLi.classList.toggle('open');

            const arrow = this.querySelector('.arrow');
            if (arrow) {
                console.log("Classe open presente?", parentLi.classList.contains('open')); // Debug
                // Non è necessario forzare la transizione tramite JS, il CSS gestisce l'animazione
            }
        });
    });
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
