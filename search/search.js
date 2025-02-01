// search.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        if (query) {
            window.location.href = `../search/search_results.html?query=${encodeURIComponent(query)}`;
        }
    });
});
