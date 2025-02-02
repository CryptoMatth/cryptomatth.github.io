document.addEventListener('DOMContentLoaded', function() {
    function setupSearch() {
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');

        if (!searchInput || !searchButton) {
            console.error('Elemento input o pulsante di ricerca non trovato.');
            return;
        }

        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim().toLowerCase();
            if (query) {
                window.location.href = `../search/search_results.html?query=${encodeURIComponent(query)}`;
            }
        });

        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchButton.click();
            }
        });
    }

    // Aspetta il caricamento della titlebar
    const titlebarContainer = document.getElementById('titlebar-container');
    if (titlebarContainer) {
        const observer = new MutationObserver(() => {
            if (document.getElementById('search-input') && document.getElementById('search-button')) {
                setupSearch();
                observer.disconnect();
            }
        });
        observer.observe(titlebarContainer, { childList: true, subtree: true });
    } else {
        setupSearch();
    }
});
