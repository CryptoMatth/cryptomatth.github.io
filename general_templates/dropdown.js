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
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
        if (sidebar.classList.contains("open")) {
            sidebar.style.width = "0"; // Nasconde completamente la sidebar
            setTimeout(() => {
                sidebar.classList.remove("open");
            }, 300); // Ritardo per la transizione
        } else {
            sidebar.classList.add("open");
            sidebar.style.width = "250px"; // Imposta la larghezza quando aperta
        }
    }
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
