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
    }, 500); // Attendi che i template siano caricati
});
