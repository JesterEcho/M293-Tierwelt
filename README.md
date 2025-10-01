# Dickhäuter Welt - Tierwelt Website

Eine Bildungswebsite über Dickhäuter (Elefanten und Nashörner) erstellt als praktisches Projekt für HTML/CSS Grundlagen M293.

## 🔗 Live-System
[https://jesterecho.github.io/M293-Tierwelt/index.html](https://jesterecho.github.io/M293-Tierwelt/index.html)

## 🎯 Thema & Zielgruppe

### Thema: Dickhäuter
Die Website konzentriert sich auf die beiden bekanntesten Dickhäuter-Arten:
- **Elefanten** - Die größten Landtiere der Erde
- **Nashörner** - Die gepanzerten Giganten

### Zielgruppe:
- Schülerinnen und Schüler
- Naturinteressierte aller Altersgruppen  
- Familien mit Kindern
- Alle, die mehr über diese Tiere lernen möchten

## 📖 Seitenübersicht & Navigationskonzept

### Seitenstruktur:
1. **Startseite (index.html)** - Willkommensseite mit Übersicht und Teasern
2. **Elefanten (pages/elefanten.html)** - Detaillierte Informationen über Elefanten
3. **Nashörner (pages/nashoerner.html)** - Detaillierte Informationen über Nashörner  
4. **Impressum (kontakt/impressum.html)** - Kontakt, Quellen und rechtliche Informationen

### Navigation:
- **Konsistente Hauptnavigation** in der Kopfzeile auf allen Seiten
- **Breadcrumb-Navigation** durch logische Pfadstruktur
- **Footer-Links** als sekundäre Navigation
- **Responsive Design** für mobile und Desktop-Geräte

## 🔄 Ordnerstruktur

```
projekt-tierwelt/
├── assets/
│    └── [bilder]
├── css/
│    └── styles.css          # Zentrales Stylesheet
├── doc/
│   └── wireframe.pdf           # Entwurfsskizzen
├── js/
│   └── maps.js              # JavaScript für interaktive Karten
├── kontakt/
│   └── impressum.html          # Impressum und Kontakt
├── pages/
│   ├── elefanten.html          # Elefanten-Informationsseite
│   └── nashoerner.html         # Nashörner-Informationsseite
├── index.html                  # Hauptseite
└── README.md                   # Projektdokumentation
```

## 📚 Genutzte Quellen

### Informationsquellen:
- **Wikipedia** (de.wikipedia.org) - Wissenschaftliche / Artspezifische Informationen

### Technische Ressourcen:
- **W3Schools HTML** - HTML-Strukturen und semantische Tags
- **W3Schools CSS** - Styling, Flexbox, Grid und responsive Design
- **Leaflet.js** - Open-Source JavaScript Bibliothek für interaktive Karten
- **code.makery Tutorial** - Grundlagen für HTML/CSS Entwicklung

### Design & Assets:
- **System-Schriftarten** - Arial, sans-serif (systemabhängig)
- **CSS-Farben** - Selbst definierte Farbpalette
- **Pexels** (pexels.com) - Kostenlose, lizenzfreie Tierfotos
- **OpenStreetMap** - Freie Kartendaten für Lebensraum-Darstellung
- **pointhi/leaflet-color-markers** - Farbige Marker-Icons für Kartendarstellung

### Zitat-Quellen:
- **Dr. Joyce Poole** (ElephantVoices.org) - Elefantenforscherin und Verhaltensbiologin
- **WWF Nashornschutz-Initiative** (WWF.org) - Weltweite Naturschutzorganisation
- **Robert Green Ingersoll** - Amerikanischer Anwalt und Redner (1833-1899)

## ✨ Besonderheiten/Extras

### Implementierte Features:
- **📱 Responsive Design** - Funktioniert auf Desktop, Tablet und Smartphone
- **🎨 Modernes CSS-Design** - Saubere Gestaltung mit Rundungen und Hover-Effekten
- **🖼️ Galerie-Sektion** - Grid-Layout für Bilddarstellungen
- **📧 Kontaktformular** - Vollständiges HTML-Formular (Demonstrationszwecke)
- **🗺️ Interaktive Karten** - Leaflet-basierte Karten mit markierten Lebensräumen
- **📑 Zitate mit Quellenangaben** - Verlinkung zu Expertenquellen im Impressum

### CSS-Techniken:
- **CSS Grid & Flexbox** - Aktuelle Layout-Systeme
- **Media Queries** - Responsive Breakpoints für verschiedene Bildschirmgrößen
- **Border-Radius & Transitions** - Moderne Gestaltungselemente
- **Box-Shadows** - Tiefeneffekte für Cards und Elemente
- **Strukturierte Klassennamen** - Übersichtliche Namenskonventionen

### HTML-Elemente:
- Überschriftenstruktur (h1-h6)
- Listen und verschachtelte Listen
- Tabellen mit Formatierung
- Blockquotes mit Quellenangaben
- Semantic HTML5 Tags (header, nav, main, section, footer)
- Links inkl. E-Mail-Links (mailto:)
- Container-Struktur mit sinnvollen Klassennamen

### JavaScript-Features:
- **Leaflet.js Integration** - Interaktive Kartenfunktionalität
- **Marker-basierte Lebensraumdarstellung** - Farbcodierte Schutzgebiete
- **Pop-up Informationen** - Detaillierte Gebietsinformationen
- **Responsive Kartendarstellung** - Anpassung an verschiedene Bildschirmgrößen

## ⚠️ Bekannte Limitierungen

### Aktuelle Einschränkungen:
- **Kontaktformular**: HTML-Struktur vorhanden, aber Backend-Funktionalität fehlt (nur Demonstrationszwecke)
- **Bildergalerien**: Statische Darstellung ohne JavaScript-Lightbox
- **Offline-Funktionalität**: Karten benötigen Internetverbindung

## 🚀 Ideen für Weiterentwicklung
- 💡 **Lightbox-Galerie** für Bildansichten
- 📊 **Diagramme** für Populationsdaten
- 🎵 **Audio-Features** für Tierstimmen

## 🛠️ Technische Umsetzung

### Verwendete Technologien:
- **HTML5** - Semantische Strukturierung
- **CSS3** - Styling und responsive Design
- **JavaScript** - Interaktive Kartenfunktionalität mit Leaflet.js
- **Git** - Versionskontrolle
- **GitHub Pages** - Hosting der Live-Website

### Entwicklungsumgebung:
- **VS Code** - Code-Editor mit HTML/CSS/JavaScript Extensions
- **Live Server** - Lokaler Entwicklungsserver für Tests
- **Leaflet.js** - Open-Source Kartenbibliothek
- **OpenStreetMap** - Freie Geodaten

---

*01.10.2025*