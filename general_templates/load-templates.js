function loadTemplates(titlebarPath, sidebarPath, langIt, langEn) {
    const titlebarPromise = fetch(titlebarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('titlebar-container').innerHTML = data;

            const searchBar = document.querySelector('.search-bar');
            if (searchBar) {
                const langSwitcher = document.createElement('div');
                langSwitcher.className = 'language-switcher';
                langSwitcher.innerHTML = `
                    <a href="${langIt}">IT</a> | 
                    <a href="${langEn}">EN</a>
                `;
                searchBar.insertAdjacentElement('afterend', langSwitcher);
            }
        });

    const sidebarPromise = fetch(sidebarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            adjustSidebarPosition();
        });

    Promise.all([titlebarPromise, sidebarPromise])
        .catch(error => console.error('Errore nel caricamento della titlebar o sidebar:', error));

    function adjustSidebarPosition() {
        const titleBar = document.querySelector('.title-bar');
        const sidebar = document.querySelector('.sidebar');
        if (titleBar && sidebar) {
            sidebar.style.top = `${titleBar.offsetHeight}px`;
        }
    }

    const observer = new MutationObserver(adjustSidebarPosition);
    observer.observe(document.getElementById('titlebar-container'), { childList: true, subtree: true });
}
