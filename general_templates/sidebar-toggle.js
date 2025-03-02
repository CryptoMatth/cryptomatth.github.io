document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const toggleButton = document.getElementById("toggle-sidebar");
        const sidebar = document.querySelector(".sidebar");
        const overlay = document.createElement("div"); // Crea un overlay
        overlay.classList.add("overlay");
        document.body.appendChild(overlay); // Aggiungi l'overlay al body

        // Gestisce l'apertura e la chiusura della sidebar
        if (toggleButton && sidebar) {
            toggleButton.addEventListener("click", function () {
                sidebar.classList.toggle("active");
                overlay.classList.toggle("active");
            });

            overlay.addEventListener("click", function () {
                sidebar.classList.remove("active");
                overlay.classList.remove("active");
            });
        }

        // Funzione per gestire il ridimensionamento della finestra
        function handleResize() {
            if (window.innerWidth > 1024) {
                // Se la finestra è abbastanza grande, la sidebar deve essere sempre visibile
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            } else {
                // Su schermi più piccoli la sidebar può essere nascosta di default
                if (!sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                }
            }
        }

        // Aggiungi un ascoltatore per il ridimensionamento della finestra
        window.addEventListener('resize', handleResize);

        // Esegui la funzione subito dopo il caricamento della pagina per la posizione iniziale
        handleResize();

    }, 500); // Attendi che i template siano caricati
});
