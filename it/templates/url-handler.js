document.addEventListener("DOMContentLoaded", function () {
    let host = window.location.host; // Es. cryptomatth.github.io
    let path = window.location.pathname; // Es. /it/crittografia/main_crittografia.html

    // Verifica se l'host contiene ".github.io" e il path termina con ".html"
    if (host.includes(".github.io") && path.endsWith(".html")) {
        // Pulizia dell'URL: rimuove ".github.io" e ".html"
        let cleanHost = host.replace(".github.io", "");
        let cleanPath = path.replace(/\.html$/, "");

        // Se l'URL è già pulito, non facciamo nulla
        if (host === cleanHost && path === cleanPath) {
            return; // Non fare nulla, l'URL è già "pulito"
        }

        // Modifica l'URL senza ricaricare la pagina
        history.replaceState({}, "", "https://" + cleanHost + cleanPath);
    } else if (!host.includes(".github.io") && !path.endsWith(".html")) {
        // Se siamo su un URL già "pulito", nessun reindirizzamento necessario
        return;
    } else {
        // Se l'URL non è pulito, fai un reindirizzamento automatico (aggiungi ".github.io" e ".html")
        let newHost = host.includes(".github.io") ? host : "cryptomatth.github.io"; // Riaggiungi .github.io se manca
        let newPath = path.endsWith(".html") ? path : path + ".html"; // Riaggiungi .html se manca
        window.location.replace("https://" + newHost + newPath);
    }
});
