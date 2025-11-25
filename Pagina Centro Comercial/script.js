document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('buscador-tienda');
    const storeList = document.getElementById('resultados-tiendas');
    const storeCards = storeList.querySelectorAll('.tarjeta-local');
    const mapPlaceholder = document.getElementById('mapa-marcador');

    const resetMap = () => {
        mapPlaceholder.style.backgroundColor = 'var(--color-fondo-claro)';
        mapPlaceholder.style.border = '1px solid #ccc';
        mapPlaceholder.classList.remove('highlight-map');
        mapPlaceholder.innerHTML = '[Mapa Interactivo del Centro Comercial]<p class="mapa-leyenda">El mapa interactivo indicará la ubicación exacta de los locales.</p>';
    };

    const filterStores = () => {
        const searchTerm = searchInput.value.toLowerCase();
        let matchesFound = 0;
        let foundStoreName = '';
        let foundStoreNumber = ''; 

        storeCards.forEach(card => {
            const storeName = card.getAttribute('data-nombre').toLowerCase(); 
            const isMatch = storeName.includes(searchTerm);

            if (isMatch) {
                card.style.display = 'flex'; 
                card.classList.add('highlight-match');
                matchesFound++;
                foundStoreName = storeName;
                foundStoreNumber = card.getAttribute('data-numero'); 
            } else {
                card.style.display = 'none'; 
                card.classList.remove('highlight-match');
            }
        });
        
        resetMap(); 

        if (searchTerm.length > 0 && matchesFound === 1) {
            mapPlaceholder.classList.add('highlight-map');
            mapPlaceholder.innerHTML = `<h3 style="color: var(--color-principal);">LOCAL N° ${foundStoreNumber} (${foundStoreName.toUpperCase()})</h3>
                                        <p class="mapa-leyenda">Ubicación destacada en el mapa: ¡Fácil de encontrar!</p>`;
        } else if (searchTerm.length > 0 && matchesFound > 1) {
             mapPlaceholder.innerHTML = `<h3 style="color: var(--color-acento);">MÚLTIPLES COINCIDENCIAS (${matchesFound})</h3>
                                        <p class="mapa-leyenda">Resultados encontrados. El mapa muestra la zona de búsqueda.</p>`;
        }
    };

    searchInput.addEventListener('input', filterStores);

    filterStores();
});