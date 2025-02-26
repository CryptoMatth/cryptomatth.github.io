document.addEventListener("DOMContentLoaded", function () {
    // Attendere che la sidebar sia caricata prima di collegare l'evento
    setTimeout(function () {
        const toggleButton = document.getElementById("toggle-sidebar");
        const sidebar = document.querySelector(".sidebar");

        if (toggleButton && sidebar) {
            toggleButton.addEventListener("click", function () {
                sidebar.classList.toggle("active");
            });
        }
    }, 500); // Aspetta mezzo secondo per garantire il caricamento dei template
});
