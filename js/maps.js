// Leaflet Maps für Elefanten und Nashörner
// ========================================

// Elefanten-Karte initialisieren
function initElephantMap() {
    // Karte zentriert auf Afrika
    const elephantMap = L.map('elephant-map', {
        attributionControl: false // Entfernt das Leaflet-Watermark
    }).setView([-5, 25], 3);

    // OpenStreetMap Tiles hinzufügen
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '' // Keine Attribution
    }).addTo(elephantMap);

    // Afrikanische Elefanten-Lebensräume
    const africanElephantAreas = [
        {
            name: "Serengeti Nationalpark",
            coords: [-2.3, 34.8],
            info: "Wichtiger Lebensraum für Afrikanische Steppenelefanten"
        },
        {
            name: "Kruger Nationalpark",
            coords: [-24.0, 31.5],
            info: "Große Elefantenpopulation in Südafrika"
        },
        {
            name: "Chobe Nationalpark",
            coords: [-18.0, 24.5],
            info: "Höchste Elefantendichte in Afrika (Botswana)"
        },
        {
            name: "Amboseli Nationalpark",
            coords: [-2.7, 37.3],
            info: "Berühmt für große Elefantenbullen (Kenia)"
        },
        {
            name: "Hwange Nationalpark",
            coords: [-18.7, 26.5],
            info: "Größter Nationalpark Zimbabwes mit vielen Elefanten"
        },
        {
            name: "Tarangire Nationalpark",
            coords: [-3.8, 36.0],
            info: "Bekannt für große Elefantenherden (Tanzania)"
        }
    ];

    // Asiatische Elefanten-Lebensräume  
    const asianElephantAreas = [
        {
            name: "Udawalawe Nationalpark",
            coords: [6.4, 80.9],
            info: "Wichtiger Lebensraum für Asiatische Elefanten (Sri Lanka)"
        },
        {
            name: "Kaziranga Nationalpark",
            coords: [26.6, 93.4],
            info: "UNESCO Welterbe mit Asiatischen Elefanten (Indien)"
        },
        {
            name: "Khao Yai Nationalpark",
            coords: [14.4, 101.4],
            info: "Größter Nationalpark Thailands mit Elefanten"
        },
        {
            name: "Leuser Nationalpark",
            coords: [3.5, 97.5],
            info: "Letzter Lebensraum der Sumatra-Elefanten (Indonesien)"
        }
    ];

    // Marker für Afrikanische Elefanten (grün)
    africanElephantAreas.forEach(area => {
        const marker = L.marker(area.coords, {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }).addTo(elephantMap);

        marker.bindPopup(`<strong>${area.name}</strong><br>${area.info}`);
    });

    // Marker für Asiatische Elefanten (blau)
    asianElephantAreas.forEach(area => {
        const marker = L.marker(area.coords, {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }).addTo(elephantMap);

        marker.bindPopup(`<strong>${area.name}</strong><br>${area.info}`);
    });

    // Legende hinzufügen
    const elephantLegend = L.control({ position: 'bottomright' });
    elephantLegend.onAdd = function (map) {
        const div = L.DomUtil.create('div', 'legend');
        div.innerHTML = `
            <h4>Elefanten-Lebensräume</h4>
            <div style="margin-bottom: 5px;">
                <i style="background: #2AAD27"></i> Afrikanische Elefanten
            </div>
            <div>
                <i style="background: #2A81CB"></i> Asiatische Elefanten
            </div>
        `;
        return div;
    };
    elephantLegend.addTo(elephantMap);
}

// Nashörner-Karte initialisieren  
function initRhinoMap() {
    // Karte zentriert auf Afrika/Asien
    const rhinoMap = L.map('rhino-map', {
        attributionControl: false // Entfernt das Leaflet-Watermark
    }).setView([-15, 30], 3);

    // OpenStreetMap Tiles hinzufügen
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '' // Keine Attribution
    }).addTo(rhinoMap);

    // Nashörner-Lebensräume
    const rhinoAreas = [
        {
            name: "Kruger Nationalpark",
            coords: [-24.0, 31.5],
            species: "Breitmaul- & Spitzmaulnashorn",
            info: "Größte Nashornpopulation Südafrikas",
            color: "red"
        },
        {
            name: "Hluhluwe-iMfolozi Park",
            coords: [-28.3, 32.0],
            species: "Breitmaulnashorn",
            info: "Rettung des Breitmaulnashorns vor dem Aussterben",
            color: "red"
        },
        {
            name: "Etosha Nationalpark",
            coords: [-19.2, 15.9],
            species: "Spitzmaulnashorn",
            info: "Wichtiges Schutzgebiet in Namibia",
            color: "red"
        },
        {
            name: "Kaziranga Nationalpark",
            coords: [26.6, 93.4],
            species: "Panzernashorn",
            info: "Größte Population der Panzernashörner (Indien)",
            color: "blue"
        },
        {
            name: "Chitwan Nationalpark",
            coords: [27.5, 84.3],
            species: "Panzernashorn",
            info: "Wichtiger Lebensraum in Nepal",
            color: "blue"
        },
        {
            name: "Ujung Kulon Nationalpark",
            coords: [-6.8, 105.4],
            species: "Javanisches Nashorn",
            info: "Letzter Lebensraum - nur noch ~75 Tiere (Java)",
            color: "orange"
        },
        {
            name: "Way Kambas Nationalpark",
            coords: [-4.9, 105.8],
            species: "Sumatra-Nashorn",
            info: "Kritisch gefährdet - <80 Tiere (Sumatra)",
            color: "orange"
        }
    ];

    // Marker für Nashörner
    rhinoAreas.forEach(area => {
        const iconColor = area.color;
        const iconUrl = `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${iconColor}.png`;

        const marker = L.marker(area.coords, {
            icon: L.icon({
                iconUrl: iconUrl,
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }).addTo(rhinoMap);

        marker.bindPopup(`<strong>${area.name}</strong><br><em>${area.species}</em><br>${area.info}`);
    });

    // Legende hinzufügen
    const rhinoLegend = L.control({ position: 'bottomright' });
    rhinoLegend.onAdd = function (map) {
        const div = L.DomUtil.create('div', 'legend');
        div.innerHTML = `
            <h4>Nashörner-Lebensräume</h4>
            <div style="margin-bottom: 5px;">
                <i style="background: #CB2B3E"></i> Afrikanische Arten
            </div>
            <div style="margin-bottom: 5px;">
                <i style="background: #2A81CB"></i> Asiatische Arten
            </div>
            <div>
                <i style="background: #FF8E53"></i> Kritisch gefährdet
            </div>
        `;
        return div;
    };
    rhinoLegend.addTo(rhinoMap);
}

// Karten beim Laden der Seite initialisieren
document.addEventListener('DOMContentLoaded', function () {
    // Prüfen welche Karte geladen werden soll
    if (document.getElementById('elephant-map')) {
        initElephantMap();
    }
    if (document.getElementById('rhino-map')) {
        initRhinoMap();
    }
});