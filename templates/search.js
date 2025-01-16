// Definisce l'elenco di pagine (puoi aggiungere più pagine qui)
const pages = [
    { title: "Home", url: "/index.html", content: "Benvenuto sul mio sito!" },
    { title: "Seconda Pagina", url: "/pagina2.html", content: "Questa è la seconda pagina" },
    { title: "Foglio 3", url: "/pages/pagina3.html", content: "Argomenti del foglio 3" },
    { title: "Foglio 4", url: "/pages/pagina4.html", content: "Argomenti del foglio 4" }
];

// Funzione per gestire la ricerca
function search() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const results = pages.filter(page => 
        page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query)
    );
    
    displayResults(results);
}

// Funzione per visualizzare i risultati della ricerca
function displayResults(results) {
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";  // Pulisce i risultati precedenti

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>Nessun risultato trovato</p>";
        return;
    }

    // Aggiungi i risultati alla pagina
    results.forEach(result => {
        const resultItem = document.createElement("div");
        resultItem.innerHTML = `<a href="${result.url}">${result.title}</a>`;
        resultsContainer.appendChild(resultItem);
    });
}

// Aggiunge un evento per la ricerca quando il modulo viene inviato
document.querySelector("#search-form").addEventListener("submit", function(e) {
    e.preventDefault();
    search();
});
