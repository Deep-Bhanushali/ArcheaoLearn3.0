import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// Fix for default Leaflet marker icons not showing up in Webpack/Vite builds
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import '../styles/WorldExpl.css'; // Import your CSS file for styles

// Fix for default marker icons if they are broken
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

// Your existing CSS would ideally be in a separate file, e.g., WorldExpl.css
// import './WorldExpl.css'; // Or if it's a CSS module: import styles from './WorldExpl.module.css';

export default function WorldExpl() {
    // === State Management for Side Panel and Data ===
    const [isSidePanelActive, setIsSidePanelActive] = useState(false);
    const [currentCountryData, setCurrentCountryData] = useState(null);

    // === Ref for the Map Container Element ===
    const mapRef = useRef(null); // Ref to hold the map instance
    const mapContainerRef = useRef(null); // Ref to the div element for the map

    // === Country Data (move outside or fetch if large) ===
    // This is just a snippet, keep your full countryData object here or import it
    const countryData = {
        'Egypt': { /* ... your data ... */ },
        'Greece': { /* ... your data ... */ },
        // ... all your other country data ...
    };

    // === Effect for Map Initialization ===
    useEffect(() => {
        // Only initialize map once, when component mounts
        if (mapContainerRef.current && !mapRef.current) { // Check if div exists and map not yet initialized
            const map = L.map(mapContainerRef.current, {
                center: [20, 0],
                zoom: 2,
                minZoom: 2,
                maxZoom: 10,
                worldCopyJump: true,
                zoomControl: true
            });
            mapRef.current = map; // Store map instance in ref

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 18,
            }).addTo(map);

            // Add map click event listener
            map.on('click', function(e) {
                const clickedLat = e.latlng.lat;
                const clickedLng = e.latlng.lng;
                let foundCountry = null;

                // (Your country bounds detection logic goes here)
                const countries = [ /* ... your countries array with bounds ... */ ];
                for (let country of countries) {
                    const [[minLat, minLng], [maxLat, maxLng]] = country.bounds;
                    if (clickedLat >= minLat && clickedLat <= maxLat &&
                        clickedLng >= minLng && clickedLng <= maxLng) {
                        foundCountry = country.name;
                        break;
                    }
                }

                if (foundCountry) {
                    openSidePanel(foundCountry);
                    L.popup()
                        .setLatLng(e.latlng)
                        .setContent(`<strong>${foundCountry}</strong><br>Click to explore history`)
                        .openOn(map);
                } else {
                    L.popup()
                        .setLatLng(e.latlng)
                        .setContent('Select a highlighted region to explore its history')
                        .openOn(map);
                }
            });

            // Add markers for featured countries
            // (Your countryMarkers array goes here)
            const countryMarkers = [ /* ... your countryMarkers array ... */ ];
            countryMarkers.forEach(country => {
                const customIcon = L.divIcon({
                    html: `<div style="
                        background: linear-gradient(135deg, #daa520, #b8860b);
                        border: 2px solid #1a1a1a;
                        border-radius: 50%;
                        width: 40px;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 18px;
                        box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
                        cursor: pointer;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.transform='scale(1.2)'"
                       onmouseout="this.style.transform='scale(1)'">${country.icon}</div>`,
                    className: 'custom-marker', // Ensure this class exists in your CSS
                    iconSize: [40, 40],
                    iconAnchor: [20, 20]
                });

                L.marker(country.coords, { icon: customIcon })
                    .addTo(map)
                    .on('click', () => {
                        openSidePanel(country.name);
                    })
                    .bindTooltip(country.name, {
                        permanent: false,
                        direction: 'top',
                        className: 'custom-tooltip' // Ensure this class exists in your CSS
                    });
            });

            // Initialize with a welcome message
            if (window.innerWidth > 768) {
                const welcomePopup = L.popup()
                    .setLatLng([20, 0])
                    .setContent(`
                        <div style="text-align: center; padding: 10px;">
                            <strong style="color: #daa520;">Welcome to World History Explorer!</strong><br>
                            <span style="font-size: 0.9em;">Click on any golden marker or country to begin your journey through time.</span>
                        </div>
                    `)
                    .openOn(map);

                const timer = setTimeout(() => {
                    map.closePopup(welcomePopup);
                }, 4000);

                // Cleanup function for the timer
                return () => clearTimeout(timer);
            }
        }

        // Cleanup function for the map instance when component unmounts
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []); // Empty dependency array means this runs once on mount

    // === Helper Functions (moved into the component or made external) ===
    const createParticles = () => { /* ... your createParticles logic ... */ };
    useEffect(() => {
        createParticles();
    }, []); // Run once on mount

    const scrollToMap = () => {
        mapContainerRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const showLoading = () => {
        // You'll need state for this in React, e.g., useState(false)
        // For simplicity, we'll keep the DOM manipulation for now, but
        // in a real React app, you'd conditionally render the loading spinner.
        document.getElementById('loading').style.display = 'block';
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
        }, 800);
    };

    const openSidePanel = (countryName) => {
        showLoading();
        setTimeout(() => {
            const data = countryData[countryName];
            if (data) {
                setCurrentCountryData(data); // Set state to update panel content
                setIsSidePanelActive(true); // Activate panel
            }
            // In React, you generally wouldn't directly manipulate class lists like this:
            // document.getElementById('sidePanel').classList.add('active');
            // Instead, you'd use conditional rendering/classes based on state.
        }, 800);
    };

    const closeSidePanel = () => {
        setIsSidePanelActive(false); // Deactivate panel
        setCurrentCountryData(null); // Clear data
        // document.getElementById('sidePanel').classList.remove('active');
    };

    // === Effect for global event listeners (e.g., Escape key, click outside) ===
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (isSidePanelActive &&
                !document.getElementById('sidePanel').contains(e.target) &&
                !e.target.closest('#map')) { // Assuming map click can also trigger close if not a marker
                closeSidePanel();
            }
        };

        const handleEscapeKey = (e) => {
            if (e.key === 'Escape' && isSidePanelActive) {
                closeSidePanel();
            }
        };

        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isSidePanelActive]); // Rerun if side panel active state changes

    // === Render Logic ===
    return (
        <>
            <div className="bg-particles" id="bgParticles"></div>

            <section className="hero">
                {/* ... hero content (use className instead of class) ... */}
                <div className="hero-ornament top-left"></div>
                <div className="hero-ornament top-right"></div>
                <div className="hero-ornament bottom-left"></div>
                <div className="hero-ornament bottom-right"></div>

                <div className="hero-content">
                    <h1 className="hero-title">HISTOURIA</h1>
                    <p className="hero-subtitle">Journey Through the Epochs of Human Civilization</p>
                    <p className="hero-description">
                        Embark on an extraordinary voyage through time and space, where the greatest civilizations
                        of our world await your discovery. From the ancient pyramids of Egypt to the philosophical
                        schools of Greece, experience history as never before.
                    </p>
                    <button className="explore-btn" onClick={scrollToMap}>Begin Your Journey</button>
                </div>
            </section>

            <div className="main-content">
                <div className="section-header">
                    <h2 className="section-title">Interactive Historical Atlas</h2>
                    <p className="section-subtitle">Explore civilizations that shaped our world</p>
                </div>

                <div className="container">
                    <div className="map-container">
                        <div className="map-instructions">
                            <div className="instructions-title">Explorer's Guide</div>
                            <div className="instructions-text">
                                Click on the golden markers or any highlighted region to uncover
                                the mysteries and magnificent histories of ancient civilizations.
                            </div>
                        </div>
                        {/* Attach the ref to the map div */}
                        <div id="map" ref={mapContainerRef}></div>
                        <div className="loading" id="loading">
                            <div className="spinner"></div>
                            <div className="loading-text">Unveiling Ancient Secrets...</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conditionally apply 'active' class based on state */}
            <div className={`side-panel ${isSidePanelActive ? 'active' : ''}`} id="sidePanel">
                <div className="panel-header">
                    <button className="close-btn" onClick={closeSidePanel}>&times;</button>
                    <div className="country-name">{currentCountryData?.name || 'Ancient Civilization'}</div>
                    <div className="country-region">{currentCountryData?.region || 'Historical Region'}</div>
                </div>

                <div className="panel-content">
                    <div className="section">
                        <h3 className="panel-section-title">Chronicle of Ages</h3>
                        <div className="historical-content">
                            {currentCountryData?.history || 'Select a civilization to delve into its magnificent historical tapestry...'}
                        </div>
                    </div>

                    <div className="section">
                        <h3 className="panel-section-title">Epochal Periods</h3>
                        <div className="periods-grid">
                            {currentCountryData?.periods?.map((period, index) => (
                                <div key={index} className="period-card">
                                    <div className="period-title">{period.title}</div>
                                    <div className="period-dates">{period.dates}</div>
                                    <div className="period-description">{period.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section">
                        <h3 className="panel-section-title">Archaeological Treasures</h3>
                        <div className="facts-grid">
                            {currentCountryData?.facts?.map((fact, index) => (
                                <div key={index} className="fact-card">
                                    <div className="fact-title">{fact.title}</div>
                                    <div className="fact-description">{fact.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}