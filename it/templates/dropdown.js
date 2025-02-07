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
                
                // Forza il repaint
                arrow.style.transition = "none"; // Disattiva transizione momentaneamente
                arrow.style.transform = parentLi.classList.contains('open') ? "rotate(90deg)" : "rotate(0deg)";
                requestAnimationFrame(() => {
                    arrow.style.transition = "transform 0.3s ease";
                });
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
