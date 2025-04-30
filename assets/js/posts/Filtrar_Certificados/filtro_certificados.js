function updateURLfilters() {
    const checkboxes = document.querySelectorAll('#filter-checks input[type="checkbox"]:checked');
    const typeRadios = document.querySelectorAll('#filter-checks input[name="type"]:checked');
    const issuerRadios = document.querySelectorAll('#filter-checks input[name="issuer"]:checked');
    const selectedTags = Array.from(checkboxes).map(checkbox => checkbox.value.toLowerCase());
    const selectedType = typeRadios.length ? typeRadios[0].value.toLowerCase() : 'all1';
    const selectedIssuer = issuerRadios.length ? issuerRadios[0].value.toLowerCase() : 'all2';
    const url = new URL(window.location);
    if (selectedTags.length > 0) {
      url.searchParams.set('tags', selectedTags.join(','));
    } else {
      url.searchParams.delete('tags');
    }
    if (selectedType !== 'all1') {
      url.searchParams.set('type', selectedType);
    } else {
      url.searchParams.delete('type');
    }
    if (selectedIssuer !== 'all2') {
      url.searchParams.set('issuer', selectedIssuer);
    } else {
      url.searchParams.delete('issuer');
    } 
    window.history.replaceState(null, '', url.toString());
  }
  function setFiltersFromURL() {
    const url = new URL(window.location);
    const tags = url.searchParams.get('tags');
    const type = url.searchParams.get('type');
    const issuer = url.searchParams.get('issuer');
    if (tags) {
      const selectedTags = tags.split(',');
      selectedTags.forEach(tag => {
        const checkbox = document.querySelector(`#filter-checks input[type="checkbox"][value="${tag}"]`);
        if (checkbox) {
          checkbox.checked = true;
        }
      });
    }
    if (type) {
      const radio = document.querySelector(`#filter-checks input[name="type"][value="${type}"]`);
      if (radio) {
        radio.checked = true;
      }
    }
    if (issuer) {
      const radio = document.querySelector(`#filter-checks input[name="issuer"][value="${issuer}"]`);
      if (radio) {
        radio.checked = true;
      }
    }
    filterCards();
  }
  function filterCards() {
    const cards = document.querySelectorAll('.custom_card:not(#filter-checks)');
    const typeRadios = document.querySelectorAll('#filter-checks input[name="type"]:checked');
    const issuerRadios = document.querySelectorAll('#filter-checks input[name="issuer"]:checked');
    const checkboxes = document.querySelectorAll('#filter-checks input[type="checkbox"]:checked');
    const selectedTags = Array.from(checkboxes).map(checkbox => checkbox.value.toLowerCase());
    const selectedType = typeRadios.length ? typeRadios[0].value.toLowerCase() : 'all1';
    const selectedIssuer = issuerRadios.length ? issuerRadios[0].value.toLowerCase() : 'all2';
    cards.forEach(custom_card => {
      const tagsInCard = custom_card.getAttribute('data-tags').toLowerCase().split(' ');
      const matchesType = selectedType === 'all1' || tagsInCard.includes(selectedType);
      const matchesIssuer = selectedIssuer === 'all2' || tagsInCard.includes(selectedIssuer);
      const matchesTags = selectedTags.every(tag => tagsInCard.includes(tag));
      if (matchesType && matchesIssuer && (selectedTags.length === 0 || matchesTags)) {
        custom_card.style.display = '';
      } else {
        custom_card.style.display = 'none';
      }
    });
    updateURLfilters();
  }
  document.addEventListener('DOMContentLoaded', () => {
    setFiltersFromURL();
    const inputs = document.querySelectorAll('#filter-checks input');
    inputs.forEach(input => {
      input.addEventListener('change', filterCards);
    });
  });