document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const toggleButton = document.getElementById("toggle-sidebar");
        const sidebar = document.querySelector(".sidebar");
        const overlay = document.createElement("div"); // Crea un overlay
        overlay.classList.add("overlay");
        document.body.appendChild(overlay); // Aggiungi l'overlay al body

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
            }
        }

        // Aggiungi un ascoltatore per il ridimensionamento della finestra
        window.addEventListener('resize', handleResize);

        // Gestisce la visibilità della sidebar in base alla larghezza dello schermo
        handleResize();  // Esegui subito al caricamento della pagina
        
    }, 500); // Attendi che i template siano caricati
});
