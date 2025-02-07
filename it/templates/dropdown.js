document.addEventListener('DOMContentLoaded', function() {
    function initializeDropdowns() {
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

        console.log("Dropdown trovati:", dropdownToggles.length); // Debug

        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(event) {
                event.preventDefault();
                const parentLi = this.parentElement;

                console.log("Cliccato su:", this.textContent); // Debug

                parentLi.classList.toggle('open');

                // Trova la freccia dentro il toggle e ruotala
                const arrow = this.querySelector('.arrow');
                if (arrow) {
                    arrow.style.transition = 'transform 0.3s ease';
                    arrow.style.transform = parentLi.classList.contains('open') ? 'rotate(90deg)' : 'rotate(0deg)';
                }
            });
        });
    }

    // Aspettiamo che la sidebar venga caricata completamente
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        const observer = new MutationObserver(() => {
            console.log("Sidebar caricata, inizializzo dropdown");
            initializeDropdowns();
            observer.disconnect();
        });
        observer.observe(sidebarContainer, { childList: true, subtree: true });
    } else {
        console.log("Sidebar non trovata immediatamente, inizializzo subito");
        initializeDropdowns();
    }
});
