document.addEventListener("DOMContentLoaded", function () {
    let host = window.location.host; // Es. cryptomatth.github.io
    let path = window.location.pathname; // Es. /it/crittografia/main_crittografia.html

    // Se il path non è pulito (ossia non contiene .html), lo correggiamo
    if (!path.endsWith(".html")) {
        let newPath = path + ".html"; // Aggiungiamo .html se non presente

        // Cambia solo il pathname senza toccare l'host
        history.replaceState({}, "", "https://" + host + newPath);
    }
    // Se il percorso ha già .html, lo puliamo per rendere l'URL più bello
    let cleanPath = path.replace(/\.html$/, ""); // Rimuoviamo .html dal percorso

    // Cambia il pathname senza toccare l'host
    history.replaceState({}, "", "https://" + host + cleanPath);
    
});
