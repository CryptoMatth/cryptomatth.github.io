// Elenco delle pagine disponibili
const pages = [
    { title: "Home", url: "/index.html", content: "Benvenuto sul mio sito!" },
    { title: "Seconda Pagina", url: "/pagina2.html", content: "Questa è la seconda pagina" },
    { title: "Foglio 3", url: "/pages/pagina3.html", content: "Argomenti del foglio 3" },
    { title: "Foglio 4", url: "/pages/pagina4.html", content: "Argomenti del foglio 4" }
];

// Funzione principale di ricerca
function search() {
    const query = document.getElementById("search-input").value.toLowerCase().trim();
    const resultsContainer = document.getElementById("search-results");

    resultsContainer.innerHTML = ""; // Pulisce i risultati precedenti

    if (!query) {
        resultsContainer.innerHTML = "<p>Inserisci un termine per la ricerca.</p>";
        return;
    }

    // Cerca corrispondenze
    const results = pages.filter(page =>
        page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query)
    );

    displayResults(results);
}

// Visualizza i risultati della ricerca
function displayResults(results) {
    const resultsContainer = document.getElementById("search-results");

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>Nessun risultato trovato.</p>";
        return;
    }

    results.forEach(result => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("search-result");
        resultItem.innerHTML = `
            <a href="${result.url}">${result.title}</a>
            <p>${result.content}</p>
        `;
        resultsContainer.appendChild(resultItem);
    });
}

// Aggiunge un evento per il modulo di ricerca
document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    if (searchForm) {
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            search();
        });
    }
});
