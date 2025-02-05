document.addEventListener("DOMContentLoaded", function () {
    let host = window.location.host; // Es. cryptomatth.github.io
    let path = window.location.pathname; // Es. /it/crittografia/main_crittografia.html

    console.log("Host: ", host);
    console.log("Path: ", path);

    // Se il path non è pulito (ossia non contiene .html), lo correggiamo
    if (!path.endsWith(".html")) {
        let newPath = path + ".html"; // Aggiungiamo .html se non presente
        console.log("Redirecting to: ", "https://" + host + newPath);

        // Cambia solo il pathname senza toccare l'host
        history.replaceState({}, "", "https://" + host + newPath);
        return;
    }

    // Se il percorso ha già .html, lo puliamo per rendere l'URL più bello
    let cleanPath = path.replace(/\.html$/, ""); // Rimuoviamo .html dal percorso
    console.log("Cleaned URL: ", "https://" + host + cleanPath);

    // Cambia il pathname senza toccare l'host
    history.replaceState({}, "", "https://" + host + cleanPath);
});
