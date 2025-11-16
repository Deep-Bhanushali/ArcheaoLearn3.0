import React, { useState, useEffect, useRef } from 'react';
import continentsData from '../data/continentsData';
import '../styles/HumanTapestry.css';

const HumanTapestry = () => {
  const [currentContinent, setCurrentContinent] = useState('america');
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const heroBackgroundRef = useRef(null);

  

  useEffect(() => {
    initializeParticles();
    initializeParallax();
  }, []);

  const initializeParticles = () => {
    const container = document.querySelector('.htp-particles');
    if (!container) return;
    
    // Clear existing particles
    container.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'htp-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.animationDuration = `${10 + Math.random() * 10}s`;
      container.appendChild(particle);
    }
  };

  const initializeParallax = () => {
    const bg = heroBackgroundRef.current;
    if (!bg) return;

    const handleScroll = () => {
      const y = window.scrollY * -0.3;
      bg.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  };

  const toggleAccordion = (civKey) => {
    if (openAccordion === civKey) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(civKey);
    }
  };

  const showModal = (civ, category) => {
    const categoryData = civ[category];
    setModalContent({
      title: capitalize(category),
      image: categoryData?.modal_pic || '',
      description: categoryData?.modal_desc || 'No detailed information available.'
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  const capitalize = (text) => {
    return text.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

  const scrollToNavigation = () => {
    const navContainer = document.querySelector('.htp-nav-container');
    if (navContainer) {
      navContainer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const civilizations = continentsData[currentContinent] || {};

  return (
    <div className="htp-human-tapestry">
      {/* Hero Section */}
      <section className="htp-hero">
        <div ref={heroBackgroundRef} className="htp-hero-background"></div>
        <div className="htp-particles"></div>
        <div className="htp-hero-content">
          <h1>The Human Tapestry</h1>
          <p>Journey through the annals of time and discover the intimate rhythms of ancient civilizations—their sustenance, adornment, shelter, craft, devotion, and jubilation.</p>
        </div>
        <div className="htp-scroll-indicator" onClick={scrollToNavigation}>
          <div className="htp-scroll-arrow"></div>
        </div>
      </section>

      {/* Navigation Bar */}
      <div className="htp-nav-container">
        <div className="htp-civilization-nav">
          <h2 className="htp-nav-title">Select Your Continent</h2>
          <div className="htp-civ-filters">
            {['america', 'africa', 'europe', 'asia', 'oceania'].map(continent => (
              <button
                key={continent}
                className={`htp-civ-filter ${currentContinent === continent ? 'htp-active' : ''}`}
                onClick={() => setCurrentContinent(continent)}
              >
                {capitalize(continent)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="htp-main-content htp-main-body">
        <div className="htp-civilization-container">
          {Object.keys(civilizations).length === 0 ? (
            <div className="htp-loading">
              <p>Unveiling civilizations...</p>
            </div>
          ) : (
            Object.entries(civilizations).map(([civKey, civ]) => (
              <section key={civKey} className="htp-civilization-content htp-active">
                <div className="htp-civ-header">
                  <button 
                    className="htp-accordion-toggle"
                    onClick={() => toggleAccordion(civKey)}
                  >
                    <h2 className="htp-civ-title">{civ.title}</h2>
                    <span className="htp-toggle-icon">
                      {openAccordion === civKey ? '−' : '+'}
                    </span>
                  </button>
                  <div 
                    className={`htp-civ-body ${openAccordion === civKey ? 'htp-open' : ''}`}
                    style={{
                      maxHeight: openAccordion === civKey ? '5000px' : '0',
                      padding: openAccordion === civKey ? '3rem 2.5rem' : '0 2.5rem'
                    }}
                  >
                    <p className="htp-civ-subtitle">{civ.sub_title}</p>
                    <p className="htp-civ-timeline">{civ.timeline}</p>
                    <p className="htp-civ-desc">{civ.civ_desc}</p>
                    
                    <div className="htp-lifestyle-grid">
                      {[
                        "food & cooking",
                        "clothing & adornment", 
                        "housing & settlement",
                        "work & occupations",
                        "art & beliefs",
                        "festivals & celebration"
                      ].map(category => {
                        const categoryData = civ[category];
                        const icons = {
                          "food & cooking": "🍲",
                          "clothing & adornment": "👗",
                          "housing & settlement": "🏛",
                          "work & occupations": "🛠️",
                          "art & beliefs": "🎨",
                          "festivals & celebration": "🎉"
                        };
                        
                        return (
                          <div 
                            key={category}
                            className="htp-lifestyle-card"
                            onClick={() => showModal(civ, category)}
                          >
                            <div className="htp-card-icon">
                              {icons[category] || '❓'}
                            </div>
                            <h3 className="htp-card-title">{capitalize(category)}</h3>
                            <div className="htp-card-content">
                              {categoryData?.desc || 'Information not available.'}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="htp-fun-facts">
                      <h3>Did You Know?</h3>
                      <p className="htp-dyk-desc">{civ.dyk_fact || 'No fun fact available.'}</p>
                    </div>
                  </div>
                </div>
              </section>
            ))
          )}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="htp-modal" onClick={closeModal}>
          <div className="htp-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="htp-modal-title">{modalContent.title}</h2>
            {modalContent.image && (
              <img 
                src={modalContent.image} 
                alt="Lifestyle" 
                className="htp-modal-image" 
              />
            )}
            <p className="htp-modal-description">{modalContent.description}</p>
            <span className="htp-modal-close" onClick={closeModal}>&times;</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HumanTapestry;