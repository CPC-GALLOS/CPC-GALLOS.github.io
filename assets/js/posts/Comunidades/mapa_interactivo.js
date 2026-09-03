function onDomReady(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  }
}

function renderClubInfo(club, index) {
  const redesHTML = club.socialNetworks
    ? `<strong>Redes:</strong> ${club.socialNetworks.map(r =>
      Object.entries(r).map(([k, v]) =>
        `<a href="${v}" target="_blank">${k}</a>`).join(', ')
    ).join('<br>')}<br>`
    : '';

  const contactoHTML = club.contacts
    ? `<strong>Contacto:</strong> ${club.contacts.map(c =>
      Object.entries(c).map(([k, v]) =>
        `<a href="${v}" target="_blank">${k}</a>`).join(', ')
    ).join('<br>')}<br>`
    : '';

  const recursosHTML = club.resources
    ? `<strong>Recursos:</strong> ${club.resources.map(r =>
      Object.entries(r).map(([k, v]) =>
        `<a href="${v}" target="_blank">${k}</a>`).join(', ')
    ).join('<br>')}<br>`
    : '';

  const concursoHTML = club.contests
    ? `<strong>Concurso:</strong> ${club.contests.map(c =>
      Object.entries(c).map(([k, v]) =>
        `<a href="${v}" target="_blank">${k}</a>`).join(', ')
    ).join('<br>')}<br>`
    : '';

  const trainingHTML = club.trainingCamps
    ? `<strong>Training Camp:</strong> ${club.trainingCamps.map(t =>
      Object.entries(t).map(([k, v]) =>
        `<a href="${v}" target="_blank">${k}</a>`).join(', ')
    ).join('<br>')}<br>`
    : '';

  return `
    <div style="margin-bottom: 1em; border: 1px solid #ddd; padding: 10px; border-radius: 8px;">
      <strong>Club ${index + 1}:</strong> ${club.name || 'N/D'}<br>
      <strong>Estatus:</strong> <span style="color: ${club.status === 'activo' ? '#a3be8c' : '#bf616a'};">${club.status || 'N/D'}</span><br>
      <strong>Universidad:</strong> ${club.university || 'N/D'}<br>
      ${redesHTML}
      ${contactoHTML}
      ${recursosHTML}
      ${concursoHTML}
      ${trainingHTML}
    </div>
  `;
}

onDomReady(() => {
  const mapContainer = document.getElementById('map-container');
  const objectEl = document.getElementById('mexico-map');
  const infoBox = document.getElementById('info-box');
  const tooltip = document.getElementById('tooltip');
  const tooltipXoffset = 15;
  const tooltipYoffset = -35;

  if (!mapContainer || !infoBox || !tooltip) {
    return;
  }

  // Diccionario para vincular los SVG paths con los nombres de los estados
  const pathMap = {
    'path7339': 'Aguascalientes',
    'path7285': 'Baja California',
    'path7319': 'Baja California Sur',
    'path7383': 'Campeche',
    'path7315': 'Coahuila',
    'path7375': 'Colima',
    'path7397': 'Chiapas',
    'path7297': 'Chihuahua',
    'path7369': 'Ciudad de México',
    'path7327': 'Durango',
    'path7361': 'Guanajuato',
    'path7393': 'Guerrero',
    'path7365': 'Hidalgo',
    'path7371': 'Jalisco',
    'path7377': 'Estado de México',
    'path7387': 'Michoacán',
    'path7379': 'Morelos',
    'path7355': 'Nayarit',
    'path7321': 'Nuevo León',
    'path7395': 'Oaxaca',
    'path7385': 'Puebla',
    'path7359': 'Querétaro',
    'path7381': 'Quintana Roo',
    'path7347': 'San Luis Potosí',
    'path7325': 'Sinaloa',
    'path7289': 'Sonora',
    'path7389': 'Tabasco',
    'path7329': 'Tamaulipas',
    'path7367': 'Tlaxcala',
    'path7391': 'Veracruz',
    'path7357': 'Yucatán',
    'path7349': 'Zacatecas'
  };

  const stateData = {};
  let selectedState = null;
  const hoverColor = '#5e81ac';
  const originalColor = '#b9b9b9';

  function renderStateInInfoBox(stateInfo, stateName) {
    let clubInfo = '';
    if (stateInfo?.clubs?.length > 0) {
      stateInfo.clubs.forEach((club, index) => {
        clubInfo += renderClubInfo(club, index);
      });
    } else if (stateInfo) {
      clubInfo = '<em>Sin clubes conocidos</em>';
    } else {
      clubInfo = '<em>Sin clubes conocidos (o cargando datos...)</em>';
    }

    infoBox.innerHTML = `
      <strong>Estado:</strong> ${stateInfo ? stateInfo.name : stateName}<br><br>
      ${clubInfo}
    `;
    infoBox.classList.add('clicked');
    infoBox.classList.remove('hidden');
  }

  // Cargar los datos desde la API estática
  fetch('https://cpc-gallos.github.io/api/communities/data.json')
    .then(response => response.json())
    .then(data => {
      if (data.Mexico) {
        for (const [stateName, stateInfo] of Object.entries(data.Mexico)) {
          stateData[stateName] = {
            name: stateName,
            clubs: stateInfo.clubs
          };
        }

        // Si ya había un estado seleccionado antes de que cargara la API, actualizar su contenido
        if (selectedState) {
          const selectedStateName = pathMap[selectedState.id];
          if (selectedStateName && stateData[selectedStateName]) {
            renderStateInInfoBox(stateData[selectedStateName], selectedStateName);
          }
        }

        // Popular la lista de comunidades de Discord en el DOM
        const listContainer = document.getElementById('mexico-communities-list');
        if (listContainer) {
          listContainer.innerHTML = '';

          const ulEl = document.createElement('ul');
          const sortedStates = Object.keys(data.Mexico).sort((a, b) => a.localeCompare(b));

          sortedStates.forEach(stateName => {
            const stateInfo = data.Mexico[stateName];
            if (stateInfo?.clubs?.length > 0) {
              stateInfo.clubs.forEach(club => {
                let discordLink = '';
                if (club.socialNetworks) {
                  club.socialNetworks.forEach(network => {
                    if (network.discord) discordLink = network.discord;
                    else if (network.Discord) discordLink = network.Discord;
                  });
                }
                if (!discordLink && club.contacts) {
                  club.contacts.forEach(contact => {
                    if (contact.discord) discordLink = contact.discord;
                    else if (contact.Discord) discordLink = contact.Discord;
                  });
                }

                if (discordLink) {
                  const liEl = document.createElement('li');
                  const clubNameHtml = `<a href="${discordLink}" target="_blank">${club.name}</a>`;
                  liEl.innerHTML = `${clubNameHtml} ${club.university ? ' - ' + club.university : ''}`;
                  ulEl.appendChild(liEl);
                }
              });
            }
          });

          listContainer.appendChild(ulEl);
        }
      }
    })
    .catch(error => console.error('Error al cargar data.json:', error));

  function attachMapEvents(svgRoot) {
    if (!svgRoot) return;

    svgRoot.setAttribute('viewBox', '0 0 999.73236 679.94141');
    svgRoot.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    const tspans = svgRoot.querySelectorAll('tspan');
    tspans.forEach((tspan) => {
      tspan.style.display = 'none';
    });

    const states = svgRoot.querySelectorAll("[id^='path']");

    states.forEach((state) => {
      const stateName = pathMap[state.id];
      state.style.cursor = 'pointer';
      state.style.transition = 'fill 0.15s ease';

      state.addEventListener('mouseover', () => {
        if (state !== selectedState) {
          state.style.fill = hoverColor;
        }
        const stateInfo = stateData[stateName];
        if (stateName) {
          tooltip.textContent = stateInfo ? stateInfo.name : stateName;
          tooltip.style.display = 'block';
        }
      });

      state.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.clientX + tooltipXoffset}px`;
        tooltip.style.top = `${e.clientY + tooltipYoffset}px`;
      });

      state.addEventListener('mouseout', () => {
        if (state !== selectedState) {
          state.style.fill = originalColor;
        }
        tooltip.style.display = 'none';

        if (selectedState) {
          const selectedStateName = pathMap[selectedState.id];
          const selectedStateInfo = stateData[selectedStateName];
          renderStateInInfoBox(selectedStateInfo, selectedStateName);
        } else {
          infoBox.classList.add('hidden');
        }
      });

      state.addEventListener('click', (e) => {
        e.stopPropagation();
        if (selectedState && selectedState !== state) {
          selectedState.style.fill = originalColor;
        }
        selectedState = state;
        state.style.fill = hoverColor;

        const stateInfo = stateData[stateName];
        renderStateInInfoBox(stateInfo, stateName);
      });
    });

    document.addEventListener('click', (e) => {
      if (!mapContainer.contains(e.target) && !infoBox.contains(e.target)) {
        infoBox.classList.add('hidden');
        infoBox.classList.remove('clicked');
        if (selectedState) {
          selectedState.style.fill = originalColor;
          selectedState = null;
        }
      }
    });
  }

  // Cargar SVG directamente para eliminar condiciones de carrera con <object>
  const svgUrl = '/assets/img/posts/Comunidades/mexico-map.svg';
  fetch(svgUrl)
    .then(res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.text();
    })
    .then(svgText => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
      const svgElement = svgDoc.querySelector('svg');

      if (!svgElement) {
        throw new Error('No se encontró el elemento svg en el archivo descargado');
      }

      svgElement.id = 'mexico-map-svg';
      svgElement.style.width = '100%';
      svgElement.style.height = 'auto';
      svgElement.style.display = 'block';

      if (objectEl?.parentNode) {
        objectEl.parentNode.replaceChild(svgElement, objectEl);
      } else {
        mapContainer.appendChild(svgElement);
      }

      attachMapEvents(svgElement);
    })
    .catch(err => {
      console.warn('Fallo fetch directo de SVG, intentando fallback de object:', err);
      if (objectEl) {
        const tryInitObject = () => {
          try {
            const doc = objectEl.contentDocument || objectEl.getSVGDocument?.();
            if (doc?.documentElement && doc.querySelectorAll("[id^='path']").length > 0) {
              attachMapEvents(doc.documentElement);
              return true;
            }
          } catch (e) {
            console.error('Error al acceder al contentDocument:', e);
          }
          return false;
        };

        if (!tryInitObject()) {
          objectEl.addEventListener('load', () => {
            if (!tryInitObject()) {
              setTimeout(tryInitObject, 150);
            }
          }, { once: true });
        }
      }
    });
});

