document.addEventListener('DOMContentLoaded', function() {
    function initializeDropdowns() {
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(event) {
                event.preventDefault();
                const parentLi = this.parentElement;
                
                // Log per verificare il cambiamento della classe
                console.log("Classe 'open' prima:", parentLi.classList.contains('open'));
                
                parentLi.classList.toggle('open');
                
                // Log per vedere se la classe è cambiata
                console.log("Classe 'open' dopo:", parentLi.classList.contains('open'));

                // Trova la freccia dentro il toggle e ruotala
                const arrow = this.querySelector('.arrow');
                if (arrow) {
                    arrow.style.transition = 'transform 0.3s ease';  // Transizione per la rotazione
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
            observer.disconnect();  // Evita di ripetere l'inizializzazione
        });
        observer.observe(sidebarContainer, { childList: true });
    } else {
        initializeDropdowns();
    }
});
