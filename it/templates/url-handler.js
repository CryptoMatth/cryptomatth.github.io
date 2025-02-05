document.addEventListener("DOMContentLoaded", function () {
    let host = window.location.host; // Es. cryptomatth.github.io
    let path = window.location.pathname; // Es. /it/crittografia/main_crittografia.html

    // Verifica se siamo già nell'URL "pulito"
    if (host.includes(".github.io") && path.endsWith(".html")) {
        // Pulizia dell'URL: rimuove ".github.io" e ".html"
        let cleanHost = host.replace(".github.io", "");
        let cleanPath = path.replace(/\.html$/, "");

        // Modifica l'URL senza ricaricare la pagina
        history.replaceState({}, "", "https://" + cleanHost + cleanPath);
    } else if (!host.includes(".github.io") && !path.endsWith(".html")) {
        // Se siamo su un URL già "pulito", nessun reindirizzamento necessario
        return;
    } else {
        // Se l'URL non è pulito, fai un reindirizzamento automatico
        let newHost = host.includes(".github.io") ? host : "cryptomatth.github.io"; // Riaggiungi .github.io se manca
        let newPath = path.endsWith(".html") ? path : path + ".html"; // Riaggiungi .html se manca
        window.location.replace("https://" + newHost + newPath);
    }
});
