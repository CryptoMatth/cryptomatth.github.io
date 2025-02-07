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
                console.log("Classe open presente?", parentLi.classList.contains('open')); // Debug
                
                // Imposta direttamente lo stile CSS per ruotare la freccia
                if (parentLi.classList.contains('open')) {
                    arrow.style.transform = 'rotate(90deg)';
                } else {
                    arrow.style.transform = 'rotate(0deg)';
                }

                // Forza il browser ad applicare la transizione
                arrow.style.transition = 'transform 0.3s ease';
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
