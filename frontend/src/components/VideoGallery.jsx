import React, { useState, useEffect, useRef } from 'react';
// Make sure this CSS file is imported.
// The path might be different based on your project structure.
import '../styles/VideoGallery.css'; 

// --- Data: Full, structured array of all video information ---
const videoData = [
    // Ancient Civilizations (12 videos)
    { id: 1, videoId: '7p7nqCR3b8o', title: 'The Rise of Ancient Egypt', description: 'Journey through the magnificent reign of the pharaohs, exploring the mysteries of pyramid construction and the secrets of the Nile\'s civilization.', category: 'Ancient Civilizations', duration: '42:15' },
    { id: 2, videoId: 'zxKPjD8urG4', title: 'Roman Empire\'s Golden Age', description: 'Witness the grandeur of Rome at its peak, from gladiatorial combat in the Colosseum to the engineering marvels that connected an empire.', category: 'Ancient Civilizations', duration: '38:42' },
    { id: 3, videoId: 'nv-y2bUOEIM', title: 'The Glory of Ancient Greece', description: 'Discover the birthplace of democracy, philosophy, and the Olympic Games, with a focus on Athens and Sparta.', category: 'Ancient Civilizations', duration: '44:10' },
    { id: 4, videoId: 'E3uuNPBcun0', title: 'The Indus Valley Civilization', description: 'Uncover the urban planning, trade, and culture of one of the world’s earliest civilizations along the Indus River.', category: 'Ancient Civilizations', duration: '40:20' },
    { id: 5, videoId: 'm68zyXyeYG0', title: 'The Great Wall of China', description: 'Explore the history and construction of China’s most iconic structure, built to protect and unify the empire.', category: 'Ancient Civilizations', duration: '36:55' },
    { id: 6, videoId: 'd2ic7z0eurs', title: 'Mesopotamia: Cradle of Civilization', description: 'Dive into the world of the Sumerians, Babylonians, and Assyrians, who pioneered writing, law, and astronomy.', category: 'Ancient Civilizations', duration: '41:08' },
    { id: 7, videoId: 'YW0rLAX3y-c', title: 'Mayan Civilization', description: 'Step into the jungles of Central America to witness the astronomy, architecture, and calendar of the Maya.', category: 'Ancient Civilizations', duration: '39:12' },
    { id: 8, videoId: 'KWmo9r0hnM8', title: 'Aztec Empire', description: 'Explore the rise and fall of the Aztec Empire, known for its warriors, temples, and encounters with Europeans.', category: 'Ancient Civilizations', duration: '37:50' },
    { id: 9, videoId: 'UO5ktwPXsyM', title: 'Inca Empire', description: 'Journey across the Andes to see how the Incas built Machu Picchu and their vast network of roads and bridges.', category: 'Ancient Civilizations', duration: '42:05' },
    { id: 10, videoId: 'V4niY5Uq95k', title: 'Ancient Persia', description: 'From Cyrus the Great to Darius, explore the mighty Persian Empire that rivaled Greece and Rome.', category: 'Ancient Civilizations', duration: '35:30' },
    { id: 11, videoId: 'Xq8wUZUUT5k', title: 'Celtic Tribes of Europe', description: 'Discover the warriors, druids, and myths of the Celts who shaped Europe before the rise of Rome.', category: 'Ancient Civilizations', duration: '34:18' },
    { id: 12, videoId: 'Yp7ldDuSOLU', title: 'Vikings: Raiders and Explorers', description: 'Sail with the Norsemen as they raided Europe, explored the Atlantic, and founded settlements in Greenland and beyond.', category: 'Ancient Civilizations', duration: '43:22' },
    
    // Medieval Times (12 videos)
    { id: 13, videoId: 'WPlP4LRPfHQ', title: 'The Great Indian Civilization', description: 'Explore the roots of one of the world’s oldest civilizations, from the Indus Valley to the Gupta Empire, shaping art, science, and philosophy.', category: 'Medieval Times', duration: '42:15' },
    { id: 14, videoId: 'ZWcCCS8NIgU', title: 'Medieval Castles & Knights', description: 'Enter the age of chivalry and feudalism, exploring the architectural wonders of medieval fortresses and the code of honor that shaped an era.', category: 'Medieval Times', duration: '35:28' },
    { id: 15, videoId: 'yq3q7KMlvw0', title: 'Life in a Medieval Village', description: 'Step inside the daily life of peasants, farmers, and craftsmen who formed the backbone of medieval society.', category: 'Medieval Times', duration: '27:49' },
    { id: 16, videoId: 'H2hqa3AX5kY', title: 'The Crusades Explained', description: 'Uncover the epic battles, religious motives, and cultural exchanges sparked by the Crusades of the Middle Ages.', category: 'Medieval Times', duration: '49:13' },
    { id: 17, videoId: 'tSdg7h60Gi4', title: 'Medieval Warfare & Siege Engines', description: 'Discover how castles were attacked and defended using trebuchets, battering rams, and clever tactics.', category: 'Medieval Times', duration: '31:22' },
    { id: 18, videoId: 'iGiZXQVGpbY', title: 'Medieval Medicine & Plague', description: 'Learn about the Black Death, medieval surgery, and strange remedies that shaped health practices of the era.', category: 'Medieval Times', duration: '29:47' },
    { id: 19, videoId: '7pIDi2K8S-M', title: 'Art & Architecture of the Middle Ages', description: 'A journey through Gothic cathedrals, stained glass, and illuminated manuscripts that defined medieval art.', category: 'Medieval Times', duration: '33:58' },
    { id: 20, videoId: 'J-pfeFbssMw', title: 'Medieval Trade & Silk Road', description: 'Explore how merchants, caravans, and trade routes connected Europe with Asia in the Middle Ages.', category: 'Medieval Times', duration: '40:12' },
    { id: 21, videoId: 'Mnws0xna2To', title: 'The Rise of Kingdoms', description: 'From England to France, learn how monarchs consolidated power and shaped the future of Europe.', category: 'Medieval Times', duration: '37:01' },
    { id: 22, videoId: 'UmGa8edtQPM', title: 'Medieval Religion & Monasteries', description: 'Step inside monasteries, cathedrals, and the spiritual life that guided medieval culture.', category: 'Medieval Times', duration: '28:34' },
    { id: 23, videoId: 'oiOjIaoVPVY', title: 'Medieval Music & Festivals', description: 'Enjoy the songs, dances, and celebrations that filled the medieval calendar with joy and meaning.', category: 'Medieval Times', duration: '26:55' },
    { id: 24, videoId: 'v8fiSl3L6PE', title: 'The End of the Middle Ages', description: 'Witness the decline of feudalism, the Hundred Years’ War, and the dawn of the Renaissance.', category: 'Medieval Times', duration: '41:06' },

    // Renaissance (6 videos)
    { id: 25, videoId: 'Om1jvUzVAtE', title: 'The Renaissance Explained', description: 'Uncover how the Renaissance began in Florence and spread across Europe, sparking art, science, and discovery.', category: 'Renaissance', duration: '48:32' },
    { id: 26, videoId: 'rodlc1aHPRw', title: 'Leonardo da Vinci: Genius of the Renaissance', description: 'Explore the life, inventions, and artistic masterpieces of Leonardo da Vinci, the ultimate Renaissance man.', category: 'Renaissance', duration: '52:11' },
    { id: 27, videoId: '89LEYZJxB3k', title: 'Michelangelo: The Sculptor of God', description: 'Dive into the brilliance of Michelangelo’s Sistine Chapel, David, and his role in shaping Renaissance art.', category: 'Renaissance', duration: '1:05:19' },
    { id: 28, videoId: 'GOAVRcI6mFU', title: 'The Medici: Godfathers of the Renaissance', description: 'Meet the powerful Medici family, patrons of art and science, who fueled the Renaissance movement.', category: 'Renaissance', duration: '58:44' },
    { id: 29, videoId: 'Vrb6tOVi2PI', title: 'Renaissance Science & Discovery', description: 'Learn how Renaissance thinkers like Galileo and Copernicus revolutionized science and human knowledge.', category: 'Renaissance', duration: '49:28' },
    { id: 30, videoId: 'wLHBHA0sVgE', title: 'Renaissance Architecture', description: 'Discover the architectural wonders of the Renaissance, from Brunelleschi’s dome to St. Peter’s Basilica.', category: 'Renaissance', duration: '36:12' },

    // Modern Era (12 videos)
    { id: 31, videoId: 'xLhNP0qp38Q', title: 'Industrial Revolution', description: 'Experience the transformative power of steam and steel, as humanity entered a new age of innovation, progress, and unprecedented change.', category: 'Modern Era', duration: '41:33' },
    { id: 32, videoId: '1Ef0erm_KQI', title: 'Age of Enlightenment', description: 'Discover the intellectual awakening that emphasized reason, science, and individual rights, shaping modern democracies.', category: 'Modern Era', duration: '38:20' },
    { id: 33, videoId: 'GroIYmgorV8', title: 'French Revolution', description: 'Witness the dramatic struggle for liberty, equality, and fraternity that transformed France and influenced the world.', category: 'Modern Era', duration: '45:10' },
    { id: 34, videoId: 'MHi4dbW7wNY', title: 'American Revolution', description: 'Explore the birth of the United States as colonists fought for independence and established a new nation.', category: 'Modern Era', duration: '42:05' },
    { id: 35, videoId: '-GsolnXOiBg', title: 'World War I', description: 'Step into the Great War that reshaped borders, societies, and global power in the early 20th century.', category: 'Modern Era', duration: '50:30' },
    { id: 36, videoId: '4_BCuiLMUhM', title: 'World War II', description: 'Experience the most devastating conflict in human history, from the rise of fascism to the atomic age.', category: 'Modern Era', duration: '55:44' },
    { id: 37, videoId: 'NF3u8Ju9aAg', title: 'Cold War Era', description: 'Dive into the ideological standoff between the US and USSR, marked by espionage, nuclear threats, and proxy wars.', category: 'Modern Era', duration: '48:15' },
    { id: 38, videoId: 'T_sGTspaF4Y', title: 'Decolonization', description: 'Learn how nations in Asia and Africa broke free from colonial rule, reshaping the modern political landscape.', category: 'Modern Era', duration: '37:22' },
    { id: 39, videoId: 'OiczN-8QKDA', title: 'Space Age', description: 'From Sputnik to the Moon landing, witness humanity’s first steps into outer space exploration.', category: 'Modern Era', duration: '39:11' },
    { id: 40, videoId: 'WpMoDKyqQwE', title: 'Information Age', description: 'See how computers, the internet, and digital technology revolutionized communication and knowledge.', category: 'Modern Era', duration: '40:00' },
    { id: 41, videoId: '3oTLyPPrZE4', title: 'Globalization', description: 'Understand how trade, technology, and culture interconnected the modern world like never before.', category: 'Modern Era', duration: '36:12' },
    { id: 42, videoId: 'm-9GA7ic7yY', title: '21st Century Challenges', description: 'Explore modern issues such as climate change, technology, pandemics, and shifting global power.', category: 'Modern Era', duration: '43:50' },

    // Contemporary (12 videos)
    { id: 43, videoId: 'qyphzmuzF18', title: 'Beginnings of the Space Age: Explorer 1', description: 'The first U.S. satellite after Sputnik, marking the true Dawn of America’s Space Age.', category: 'Contemporary', duration: '—' },
    { id: 44, videoId: 'Qj_62FWfH78', title: 'JPL and the Space Age: The Stuff of Dreams', description: 'A story from JPL about perseverance by people and machines overcoming obstacles in the early Space Age.', category: 'Contemporary', duration: '—' },
    { id: 45, videoId: '0ieZROggB_4', title: 'Voyager: The Grand Tour', description: 'Explore the Voyager missions that took us through the solar system’s outer planets.', category: 'Contemporary', duration: '—' },
    { id: 46, videoId: 'Yflae06K3VE', title: 'Voyager: Neptune and Beyond', description: 'Explore the Voyager missions that gave us stunning close-ups of Jupiter, Saturn, Uranus, and Neptune.', category: 'Contemporary', duration: '32:48' },
    { id: 47, videoId: '0-oQRSViZQE', title: 'The Mars Rovers', description: 'Follow Spirit, Opportunity, and Curiosity as they uncover secrets of the Martian surface.', category: 'Contemporary', duration: '29:52' },
    { id: 48, videoId: 'csIry_3pbDU', title: 'James Webb Space Telescope', description: 'See how JWST is peering back in time to study the first galaxies and distant exoplanets.', category: 'Contemporary', duration: '42:16' },
    { id: 49, videoId: 'oMeXcBk1x-c', title: 'The Space Shuttle Era', description: 'From Columbia to Atlantis, revisit NASA’s iconic shuttle program and its triumphs and tragedies.', category: 'Contemporary', duration: '55:12' },
    { id: 50, videoId: 'xb0rhSR4qAk', title: 'Private Spaceflight Revolution', description: 'How SpaceX, Blue Origin, and others are changing the economics and future of space travel.', category: 'Contemporary', duration: '33:44' },
    { id: 51, videoId: 'Umh9bySuqmQ', title: 'The Race to Mars', description: 'Will humans soon set foot on Mars? Explore the plans of NASA, SpaceX, and global space agencies.', category: 'Contemporary', duration: '37:20' },
    { id: 52, videoId: 'Wi_jQ-DJ-qk', title: 'The Future of Space Exploration', description: 'From lunar bases to interstellar probes, glimpse the bold ideas that may define our cosmic future.', category: 'Contemporary', duration: '49:03' },
    { id: 53, videoId: 'kOEDG3j1bjs', title: 'Black Holes Explained', description: 'Dive into the mysterious world of black holes and the physics that bend space and time.', category: 'Contemporary', duration: '41:08' },
    { id: 54, videoId: 'FD-zTrRWoM8', title: 'Exoplanet Discoveries', description: 'Learn how scientists are detecting new worlds orbiting distant stars and searching for life.', category: 'Contemporary', duration: '36:25' },
];

const categories = ['Ancient Civilizations', 'Medieval Times', 'Renaissance', 'Modern Era', 'Contemporary'];
const ITEMS_PER_PAGE = 12;

// --- Internal Component for the Video Player Modal ---
function VideoPlayerModal({ videoId, onClose }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <div className="video-responsive">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                 <a 
                    href={`https://www.youtube.com/watch?v=${videoId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="open-youtube-btn"
                >
                    Open on YouTube
                </a>
            </div>
        </div>
    );
}


// --- Main React Component ---
export default function VideoGallery() {
    // --- State Management ---
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [playingVideoId, setPlayingVideoId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    
    // --- Refs for Smooth Scrolling ---
    const contentRef = useRef(null);
    const gridRef = useRef(null);


    // --- Logic for Filtering and Pagination ---
    const filteredVideos = videoData.filter(v => v.category === activeCategory);
    const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);
    const paginatedVideos = filteredVideos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    // --- Event Handlers ---
    const handleCategoryChange = (category) => {
        if (activeCategory !== category) {
            setActiveCategory(category);
            setCurrentPage(1); 
            setTimeout(() => contentRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
        }
    };

    const handlePageChange = (direction) => {
        const newPage = currentPage + direction;
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
            setTimeout(() => gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
        }
    };

    const handlePlayVideo = (videoId) => setPlayingVideoId(videoId);
    const handleCloseModal = () => setPlayingVideoId(null);
    
    function scrollToContent() {
            document.getElementById('content').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    let lastScrollY = window.scrollY;
        const heroSection = document.getElementById('hero');

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // User is scrolling down
                heroSection.classList.add('hidden');
            } else if (currentScrollY < lastScrollY) {
                // User is scrolling up
                heroSection.classList.remove('hidden');
            }

            lastScrollY = currentScrollY;
        });
    
    return (
        <>
            <div className="ancient-overlay"></div>
            {/* < className="container"> */}
                <section id="vidhero" className="vidhero" >
                    <div className="vidhero-content">
                        <h1>Histovue</h1>
                        <p className="vidhero-subtitle">Immerse yourself in the grand tapestry of human civilization, where every era tells its eternal story through captivating visual narratives</p>
                        <button className="vidgal-cta-button" onClick={scrollToContent}>
                            Begin Your Journey
                        </button>
                    </div>
                </section>

                <nav className="vidgal-nav">
                    <div className="vidgal-nav-container">
                        {categories.map(category => (
                            <button key={category} className={`vidgal-nav-item ${activeCategory === category ? 'active' : ''}`} onClick={() => handleCategoryChange(category)}>
                                {category}
                            </button>
                        ))}
                    </div>
                </nav>

                <div className="vidgal-main-content" id="content" ref={contentRef}>
                    <h2 className="vidgal-section-title"><span>{activeCategory} Chronicles</span></h2>
                    
                    <div className="video-grid uniform-cards" ref={gridRef}>
                        {paginatedVideos.map(video => (
                            <div className="video-card fade-in" key={video.id}>
                                <div className="video-thumbnail" onClick={() => handlePlayVideo(video.videoId)}>
                                    <img 
                                        className="thumb-img" 
                                        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} 
                                        alt={video.title} 
                                        loading="lazy" 
                                    />
                                    <div className="play-button">
                                        <div className="play-icon"></div>
                                    </div>
                                </div>
                                <div className="video-info">
                                    <h3 className="video-title">{video.title}</h3>
                                    <p className="video-description">{video.description}</p>
                                    <div className="video-meta">
                                        <span>{video.category}</span>
                                        <span className="duration">{video.duration}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {totalPages > 1 && (
                        <div className="pagination" aria-label="Video pagination">
                            <button className="pager-button" onClick={() => handlePageChange(-1)} disabled={currentPage === 1}>Previous</button>
                             <span>Page {currentPage} of {totalPages}</span>
                            <button className="pager-button" onClick={() => handlePageChange(1)} disabled={currentPage === totalPages}>Next</button>
                        </div>
                    )}
                </div>
            
            {playingVideoId && <VideoPlayerModal videoId={playingVideoId} onClose={handleCloseModal} />}
        </>
    );
}