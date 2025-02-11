document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.createElement("div");
    menuIcon.classList.add("menu-icon");
    menuIcon.innerHTML = "&#9776;"; // Simbolo hamburger
    document.body.appendChild(menuIcon);

    const sidebar = document.querySelector(".sidebar");
    menuIcon.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Chiudi la sidebar se si clicca fuori su mobile
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});
