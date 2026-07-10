document.addEventListener("DOMContentLoaded", () => {
    const map = document.getElementById("mexico-map");
    const infoBox = document.getElementById("info-box");
    const tooltip = document.getElementById("tooltip");
    const tooltipXoffset = 20; // Offset for tooltip position
    const tooltipYoffset = -40;

    // Diccionario para vincular los SVG paths con los nombres de los estados
    const pathMap = {
        "path7339": "Aguascalientes",
        "path7285": "Baja California",
        "path7319": "Baja California Sur",
        "path7383": "Campeche",
        "path7315": "Coahuila",
        "path7375": "Colima",
        "path7397": "Chiapas",
        "path7297": "Chihuahua",
        "path7369": "Ciudad de México",
        "path7327": "Durango",
        "path7361": "Guanajuato",
        "path7393": "Guerrero",
        "path7365": "Hidalgo",
        "path7371": "Jalisco",
        "path7377": "Estado de México",
        "path7387": "Michoacán",
        "path7379": "Morelos",
        "path7355": "Nayarit",
        "path7321": "Nuevo León",
        "path7395": "Oaxaca",
        "path7385": "Puebla",
        "path7359": "Querétaro",
        "path7381": "Quintana Roo",
        "path7347": "San Luis Potosí",
        "path7325": "Sinaloa",
        "path7289": "Sonora",
        "path7389": "Tabasco",
        "path7329": "Tamaulipas",
        "path7367": "Tlaxcala",
        "path7391": "Veracruz",
        "path7357": "Yucatán",
        "path7349": "Zacatecas"
    };

    let stateData = {};
    let selectedState = null;

    // Cargar los datos desde la API estática
    fetch('https://cpc-gallos.github.io/api/communities/data.json')
        .then(response => response.json())
        .then(data => {
            if (data.Mexico) {
                // Guardar los datos accesibles por nombre de estado
                for (const [stateName, stateInfo] of Object.entries(data.Mexico)) {
                    stateData[stateName] = {
                        name: stateName,
                        clubs: stateInfo.clubs
                    };
                }
                
                // Popular la lista del DOM (el desplegable por estado)
                const listContainer = document.getElementById('mexico-communities-list');
                if (listContainer) {
                    listContainer.innerHTML = ''; // Limpiar "Cargando..."
                    
                    const ulEl = document.createElement('ul');
                    const sortedStates = Object.keys(data.Mexico).sort();
                    
                    sortedStates.forEach(stateName => {
                        const stateInfo = data.Mexico[stateName];
                        if (stateInfo.clubs && stateInfo.clubs.length > 0) {
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
                                    let clubNameHtml = `<a href="${discordLink}" target="_blank">${club.name}</a>`;
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
        .catch(error => console.error("Error al cargar data.json:", error));

    function renderClubInfo(club, index) {
        let redesHTML = club.socialNetworks
        ? `<strong>Redes:</strong> ${club.socialNetworks.map(r =>
            Object.entries(r).map(([k, v]) =>
            `<a href="${v}" target="_blank">${k}</a>`).join(", ")
        ).join("<br>")}<br>`
        : "";
        
        let contactoHTML = club.contacts
        ? `<strong>Contacto:</strong> ${club.contacts.map(c =>
            Object.entries(c).map(([k, v]) =>
            `<a href="${v}" target="_blank">${k}</a>`).join(", ")
        ).join("<br>")}<br>`
        : "";
        
        let recursosHTML = club.resources
        ? `<strong>Recursos:</strong> ${club.resources.map(r =>
            Object.entries(r).map(([k, v]) =>
            `<a href="${v}" target="_blank">${k}</a>`).join(", ")
        ).join("<br>")}<br>`
        : "";
        
        let concursoHTML = club.contests
        ? `<strong>Concurso:</strong> ${club.contests.map(c =>
            Object.entries(c).map(([k, v]) =>
            `<a href="${v}" target="_blank">${k}</a>`).join(", ")
        ).join("<br>")}<br>`
        : "";
        
        let trainingHTML = club.trainingCamps
        ? `<strong>Training Camp:</strong> ${club.trainingCamps.map(t =>
            Object.entries(t).map(([k, v]) =>
            `<a href="${v}" target="_blank">${k}</a>`).join(", ")
        ).join("<br>")}<br>`
        : "";
        
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

    function initMap() {
        const svgDoc = map.contentDocument;
        if (!svgDoc) return;
        const svgRoot = svgDoc.documentElement;
        if (!svgRoot) return;
        svgRoot.setAttribute("viewBox", "0 0 999.73236 679.94141");
        svgRoot.setAttribute("preserveAspectRatio", "xMidYMid meet");
        
        const tspans = svgDoc.querySelectorAll("tspan");
        tspans.forEach((tspan) => {
            tspan.style.display = "none"; // Hide all <tspan>, eg. state numbers
        });
        
        const hoverColor = "#5e81ac";
        const states = svgDoc.querySelectorAll("[id^='path']");
        
        states.forEach((state) => {
            const originalColor = "#b9b9b9";
            const stateName = pathMap[state.id]; // Obtener el nombre del estado a partir del SVG id
            
            state.addEventListener("mouseover", (e) => {
                if (state !== selectedState) {
                    state.style.fill = hoverColor;
                }
                const stateInfo = stateData[stateName];
                // Siempre mostramos el tooltip si sabemos el nombre, aunque aún no haya cargado el fetch
                if (stateName) {
                    tooltip.textContent = stateInfo ? stateInfo.name : stateName;
                    tooltip.style.display = "block";
                }
            });
            
            state.addEventListener("mousemove", (e) => {
                const containerRect = document.getElementById("map-container").getBoundingClientRect();
                const relativeX = e.clientX + containerRect.left;
                const relativeY = e.clientY + containerRect.top;
                tooltip.style.left = `${relativeX + tooltipXoffset}px`;
                tooltip.style.top = `${relativeY + tooltipYoffset}px`;
            });
            
            state.addEventListener("mouseout", () => {
                if (state !== selectedState) {
                    state.style.fill = originalColor;
                }
                tooltip.style.display = "none";
                
                if (selectedState) {
                    const selectedStateName = pathMap[selectedState.id];
                    const selectedStateInfo = stateData[selectedStateName];
                    if (selectedStateInfo) {
                        let clubInfo = "";
                        if (selectedStateInfo.clubs && selectedStateInfo.clubs.length > 0) {
                            selectedStateInfo.clubs.forEach((club, index) => {
                                clubInfo += renderClubInfo(club, index);
                            });
                        } else {
                            clubInfo = `<em>Sin clubes conocidos</em>`;
                        }
                        infoBox.innerHTML = `
                        <strong>Estado:</strong> ${selectedStateInfo.name}<br><br>
                        ${clubInfo}
                        `;
                        infoBox.classList.add("clicked");
                    }
                } else {
                    infoBox.classList.add("hidden");
                }
            });
            
            state.addEventListener("click", () => {
                if (selectedState) {
                    selectedState.style.fill = originalColor;
                }
                selectedState = state;
                state.style.fill = hoverColor;
                
                const stateInfo = stateData[stateName];
                if (stateInfo) {
                    let clubInfo = "";
                    if (stateInfo.clubs && stateInfo.clubs.length > 0) {
                        stateInfo.clubs.forEach((club, index) => {
                            clubInfo += renderClubInfo(club, index);
                        });
                    } else {
                        clubInfo = `<em>Sin clubes conocidos</em>`;
                    }
                    infoBox.innerHTML = `
                    <strong>Estado:</strong> ${stateInfo.name}<br><br>
                    ${clubInfo}
                    `;
                } else {
                    // Si el estado no está en el JSON o no ha cargado, mostrar vacío
                    infoBox.innerHTML = `
                    <strong>Estado:</strong> ${stateName}<br><br>
                    <em>Sin clubes conocidos (o cargando datos...)</em>
                    `;
                }
                infoBox.classList.add("clicked");
                infoBox.classList.remove("hidden");
            });
        });
        
        document.addEventListener("click", (e) => {
            const mapContainer = document.getElementById("map-container");
            const infoBox = document.getElementById("info-box");
            if (!mapContainer.contains(e.target) && !infoBox.contains(e.target)) {
                infoBox.classList.add("hidden");
                infoBox.classList.remove("clicked");
                if (selectedState) {
                    selectedState.style.fill = "#b9b9b9";
                    selectedState = null;
                }
            }
        });
    }

    if (map.contentDocument && map.contentDocument.documentElement) {
        initMap();
    } else {
        map.addEventListener("load", initMap);
    }
});
