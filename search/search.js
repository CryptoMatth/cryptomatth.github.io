// search.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('results-container');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        resultsContainer.innerHTML = '';

        if (query) {
            fetch('search-index.json')
                .then(response => response.json())
                .then(data => {
                    const results = data.filter(page => page.content.toLowerCase().includes(query));
                    if (results.length > 0) {
                        results.forEach(result => {
                            const resultItem = document.createElement('div');
                            resultItem.innerHTML = `<a href="${result.url}">${result.title}</a>`;
                            resultsContainer.appendChild(resultItem);
                        });
                    } else {
                        resultsContainer.innerHTML = '<p>Nessun risultato trovato.</p>';
                    }
                })
                .catch(error => console.error('Errore nella ricerca:', error));
        }
    });
});
