document.addEventListener("DOMContentLoaded", function () {
    let host = window.location.host; // Esempio: cryptomatth.github.io
    let path = window.location.pathname; // Esempio: /it/crittografia/main_crittografia.html

    // Se l'URL è già "pulito", reinserisce .github.io e .html per il reindirizzamento corretto
    if (!host.includes(".github.io") || !path.endsWith(".html")) {
        let newHost = host.includes(".github.io") ? host : "cryptomatth.github.io"; // Riaggiunge .github.io se manca
        let newPath = path.endsWith(".html") ? path : path + ".html"; // Riaggiunge .html se manca
        window.location.replace("https://" + newHost + newPath);
        return;
    }

    // Pulizia: Rimuove ".github.io" e ".html" per mostrare l'URL più leggibile
    let cleanHost = host.replace(".github.io", ""); 
    let cleanPath = path.replace(/\.html$/, ""); 

    // Aggiorna la barra degli indirizzi senza ricaricare
    history.replaceState({}, "", "https://" + cleanHost + cleanPath);
});
