document.addEventListener("DOMContentLoaded", async () => {
  const lists = document.querySelectorAll(".api-list");
  if (lists.length === 0) return;

  try {
    const res = await fetch("https://cpc-gallos.github.io/api/credentials/data.json");
    const json = await res.json();
    const DATA = json.credentials || [];

    lists.forEach(list => {
      // Get filter attributes
      const filterIds = list.dataset.ids ? list.dataset.ids.split(',').map(s => s.trim()).filter(Boolean) : null;
      const filterDomain = list.dataset.domain;
      const filterCategory = list.dataset.category;
      const filterType = list.dataset.type;
      const filterProvider = list.dataset.provider;
      const filterProviderGroup = list.dataset.providerGroup;
      const filterTag = list.dataset.tag;
      const filterExcludeProvider = list.dataset.excludeProvider;

      let filtered = [];

      if (filterIds) {
        // Exact match by IDs, preserve order
        filtered = filterIds.map(id => DATA.find(c => c.id === id)).filter(Boolean);
      } else {
        // Filter by attributes
        filtered = DATA.filter(c => {
          if (filterDomain && c.domain !== filterDomain) return false;
          if (filterCategory && c.category !== filterCategory) return false;
          if (filterType && c.type !== filterType) return false;
          if (filterProvider && c.provider !== filterProvider) return false;
          if (filterProviderGroup && c.providerGroup !== filterProviderGroup) return false;
          if (filterExcludeProvider && c.provider === filterExcludeProvider) return false;
          if (filterTag && (!c.tags || !c.tags.includes(filterTag))) return false;
          return true;
        });
      }

      if (filtered.length === 0) {
        list.innerHTML = `<li style="color: var(--text-muted-color); font-style: italic;">No se encontraron resultados para este filtro.</li>`;
        return;
      }

      // Render lists
      list.innerHTML = filtered.map(item => renderListItem(item)).join("");
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
    lists.forEach(list => {
      list.innerHTML = `<li style="color: red;">Error al cargar las certificaciones.</li>`;
    });
  }
});

function renderListItem(item) {
  const desc = item.description ? ` ${item.description}` : "";
  return `<li><a href="${item.url}" target="_blank" rel="noopener">${item.name}</a>${desc}</li>`;
}
