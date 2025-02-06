document.addEventListener('DOMContentLoaded', function() {
    function initializeDropdowns() {
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(event) {
                event.preventDefault();
                const parentLi = this.parentElement;
                parentLi.classList.toggle('open');

                // Trova la freccia dentro il toggle e ruotala
                const arrow = this.querySelector('.arrow');
                if (arrow) {
                    arrow.style.transform = parentLi.classList.contains('open') ? 'rotate(90deg)' : 'rotate(0deg)';
                }
            });
        });
    }

    // Attendi il caricamento della sidebar prima di inizializzare i dropdown
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        const observer = new MutationObserver(() => {
            initializeDropdowns();
            observer.disconnect(); // Evita di ripetere l'inizializzazione
        });
        observer.observe(sidebarContainer, { childList: true });
    } else {
        initializeDropdowns();
    }
});
