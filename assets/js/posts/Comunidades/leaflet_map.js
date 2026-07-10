document.addEventListener("DOMContentLoaded", () => {
    // Coordenadas aproximadas del centro de cada estado de México
    const stateCoordinates = {
        "Aguascalientes": [21.88234, -102.28259],
        "Baja California": [30.8406, -115.2838],
        "Baja California Sur": [26.0444, -111.1666],
        "Campeche": [19.8301, -90.5349],
        "Chiapas": [16.7569, -93.1292],
        "Chihuahua": [28.632, -106.0691],
        "Ciudad de México": [19.4326, -99.1332],
        "Coahuila": [27.0587, -101.7068],
        "Colima": [19.2452, -103.7241],
        "Durango": [24.0277, -104.6532],
        "Estado de México": [19.2826, -99.6557],
        "Guanajuato": [21.019, -101.2574],
        "Guerrero": [17.5511, -99.501],
        "Hidalgo": [20.0911, -98.7624],
        "Jalisco": [20.6595, -103.3496],
        "Michoacán": [19.5665, -101.7068],
        "Morelos": [18.6813, -99.1013],
        "Nayarit": [21.7514, -104.8455],
        "Nuevo León": [25.5922, -99.9962],
        "Oaxaca": [17.0732, -96.7266],
        "Puebla": [19.0414, -98.2063],
        "Querétaro": [20.5881, -100.3899],
        "Quintana Roo": [19.1817, -88.4791],
        "San Luis Potosí": [22.1565, -100.9855],
        "Sinaloa": [25.1721, -107.4795],
        "Sonora": [29.2972, -110.3309],
        "Tabasco": [17.8409, -92.6189],
        "Tamaulipas": [24.2669, -98.8363],
        "Tlaxcala": [19.3182, -98.2375],
        "Veracruz": [19.1738, -96.1342],
        "Yucatán": [20.7099, -89.0943],
        "Zacatecas": [22.7709, -102.5832]
    };

    // Inicializar el mapa Leaflet centrado en México
    const map = L.map('leaflet-map').setView([23.6345, -102.5528], 5);

    // Añadir capa de mapa base (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Función auxiliar para renderizar información del club en HTML
    function renderClubPopupInfo(club, index) {
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
        <div style="margin-bottom: 1em; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
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

    // Cargar datos de la API
    fetch('https://cpc-gallos.github.io/api/communities/data.json')
        .then(response => response.json())
        .then(data => {
            if (data.Mexico) {
                for (const [stateName, stateInfo] of Object.entries(data.Mexico)) {
                    // Solo poner marcador si hay clubes y tenemos las coordenadas
                    if (stateInfo.clubs && stateInfo.clubs.length > 0 && stateCoordinates[stateName]) {
                        
                        let popupContent = `<div style="max-height: 250px; overflow-y: auto; overflow-x: hidden;">
                            <h4 style="margin-top:0;">${stateName}</h4>`;
                            
                        stateInfo.clubs.forEach((club, index) => {
                            popupContent += renderClubPopupInfo(club, index);
                        });
                        
                        popupContent += `</div>`;
                        
                        // Crear marcador y bindear el popup
                        const marker = L.marker(stateCoordinates[stateName]).addTo(map);
                        marker.bindPopup(popupContent, { maxWidth: 300 });
                    }
                }
            }
        })
        .catch(error => console.error("Error al cargar data.json para Leaflet:", error));
});
