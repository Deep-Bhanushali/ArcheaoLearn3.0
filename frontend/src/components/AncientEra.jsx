import React, { useEffect } from 'react';
import '../styles/AncientEra.css';

const AncientEra = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.anc-era-nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.anc-era-section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(section);
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.anc-era-stage-card, .anc-era-achievement-item, .anc-era-relevance-item');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Cleanup function
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
      
      cards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
      
      observer.disconnect();
    };
  }, []);

  return (
    <div className="anc-era-container">
      <div className="anc-era-header">
        <div className="anc-era-container-inner">
          <h1>The Ancient Era</h1>
          <p>Discover the foundations of human civilization, from the first settlements to mighty empires that shaped our world</p>
        </div>
      </div>

      <div className="anc-era-nav">
        <div className="anc-era-container-inner">
          <div className="anc-era-nav-links">
            <a href="#anc-era-introduction">Introduction</a>
            <a href="#anc-era-stages">Major Stages</a>
            <a href="#anc-era-achievements">Key Achievements</a>
            <a href="#anc-era-relevance">Modern Relevance</a>
          </div>
        </div>
      </div>

      <main className="anc-era-container-inner">
        <section id="anc-era-introduction" className="anc-era-section anc-era-fade-in">
          <div className="anc-era-introduction">
            <h2 className="anc-era-h2">Introduction to the Ancient Era</h2>
            <p className="anc-era-p">The Ancient Era, spanning from approximately 3500 BCE to 500 CE, represents humanity's first great leap from scattered tribal societies to complex civilizations. This transformative period witnessed the birth of cities, the invention of writing, the rise of mighty empires, and the establishment of cultural and technological foundations that continue to influence our world today.</p>
            
            <p className="anc-era-p">During these four millennia, humans transitioned from nomadic hunter-gatherers to sophisticated urban dwellers, creating the first governments, legal systems, and monumental architecture. The Ancient Era encompasses the rise and fall of legendary civilizations including Mesopotamia, Ancient Egypt, the Indus Valley, Ancient Greece, and the Roman Empire, each contributing unique innovations to the tapestry of human progress.</p>
            
            <p className="anc-era-p">This period is characterized by revolutionary developments in agriculture, technology, philosophy, art, and governance. From the cuneiform tablets of Sumer to the philosophical schools of Athens, from the pyramids of Giza to the engineering marvels of Rome, the Ancient Era established patterns of civilization that would echo throughout history.</p>
          </div>
        </section>

        <section id="anc-era-stages" className="anc-era-section anc-era-fade-in">
          <h2 className="anc-era-h2">Major Stages of Ancient History</h2>
          
          <div className="anc-era-timeline">
            <div className="anc-era-timeline-item">
              <div className="anc-era-timeline-date">3500-3000 BCE</div>
              <div className="anc-era-timeline-content">
                <h3 className="anc-era-h3">Birth of Civilization</h3>
                <p className="anc-era-p">The emergence of the first cities in Mesopotamia, development of writing systems, and the establishment of complex societies with specialized roles.</p>
              </div>
            </div>

            <div className="anc-era-timeline-item">
              <div className="anc-era-timeline-date">3000-2000 BCE</div>
              <div className="anc-era-timeline-content">
                <h3 className="anc-era-h3">Early Dynastic Period</h3>
                <p className="anc-era-p">Rise of powerful kingdoms in Egypt and Mesopotamia, construction of the first pyramids, and development of bronze technology.</p>
              </div>
            </div>

            <div className="anc-era-timeline-item">
              <div className="anc-era-timeline-date">2000-1200 BCE</div>
              <div className="anc-era-timeline-content">
                <h3 className="anc-era-h3">Bronze Age Empires</h3>
                <p className="anc-era-p">Expansion of trade networks, rise of the Hittite Empire, Mycenaean Greece, and the height of Egyptian power under the New Kingdom.</p>
              </div>
            </div>

            <div className="anc-era-timeline-item">
              <div className="anc-era-timeline-date">1200-800 BCE</div>
              <div className="anc-era-timeline-content">
                <h3 className="anc-era-h3">Iron Age Transition</h3>
                <p className="anc-era-p">The Bronze Age collapse, development of iron technology, and the emergence of new civilizations including early Greek city-states.</p>
              </div>
            </div>

            <div className="anc-era-timeline-item">
              <div className="anc-era-timeline-date">800-300 BCE</div>
              <div className="anc-era-timeline-content">
                <h3 className="anc-era-h3">Classical Antiquity</h3>
                <p className="anc-era-p">The golden age of Greece, Persian Empire expansion, Alexander the Great's conquests, and the rise of the Roman Republic.</p>
              </div>
            </div>

            <div className="anc-era-timeline-item">
              <div className="anc-era-timeline-date">300 BCE-500 CE</div>
              <div className="anc-era-timeline-content">
                <h3 className="anc-era-h3">Imperial Age</h3>
                <p className="anc-era-p">Roman Empire at its peak, spread of Christianity, and the eventual transformation that bridges into the medieval period.</p>
              </div>
            </div>
          </div>

          <div className="anc-era-stages-grid">
            <div className="anc-era-stage-card">
              <div className="anc-era-stage-image"><img src='images/mesopotamia.jpeg'></img></div>
              <div className="anc-era-stage-content">
                <div className="anc-era-stage-period">3500-2500 BCE</div>
                <h3 className="anc-era-stage-title">Mesopotamian Dawn</h3>
                <p className="anc-era-p">The world's first cities emerged in the fertile valleys between the Tigris and Euphrates rivers. Sumerians developed cuneiform writing, the wheel, and complex irrigation systems that supported urban populations.</p>
              </div>
            </div>

            <div className="anc-era-stage-card">
              <div className="anc-era-stage-image"><img src='images/egypt_grand.jpeg'></img></div>
              <div className="anc-era-stage-content">
                <div className="anc-era-stage-period">3100-30 BCE</div>
                <h3 className="anc-era-stage-title">Egyptian Grandeur</h3>
                <p className="anc-era-p">Along the Nile River, ancient Egypt flourished for over three millennia, creating timeless monuments like the pyramids and developing sophisticated medicine, mathematics, and religious practices.</p>
              </div>
            </div>

            <div className="anc-era-stage-card">
              <div className="anc-era-stage-image"><img src='images/athens.jpeg'></img></div>
              <div className="anc-era-stage-content">
                <div className="anc-era-stage-period">800-146 BCE</div>
                <h3 className="anc-era-stage-title">Greek Innovation</h3>
                <p className="anc-era-p">Ancient Greece gave birth to democracy, philosophy, theater, and scientific thinking. From Athens to Sparta, Greek city-states created cultural foundations that still influence Western civilization.</p>
              </div>
            </div>

            <div className="anc-era-stage-card">
              <div className="anc-era-stage-image"><img src='images/rome.jpeg'></img></div>
              <div className="anc-era-stage-content">
                <div className="anc-era-stage-period">753 BCE-476 CE</div>
                <h3 className="anc-era-stage-title">Roman Supremacy</h3>
                <p className="anc-era-p">From a small Italian city-state, Rome expanded to control the Mediterranean world, creating advanced law, engineering, and administrative systems that unified diverse cultures.</p>
              </div>
            </div>

            <div className="anc-era-stage-card">
              <div className="anc-era-stage-image"><img src='images/indus_valley.jpeg'></img></div>
              <div className="anc-era-stage-content">
                <div className="anc-era-stage-period">2600-1900 BCE</div>
                <h3 className="anc-era-stage-title">Indus Valley Mystery</h3>
                <p className="anc-era-p">The sophisticated Harappan civilization featured planned cities with advanced drainage systems, standardized weights and measures, and a script that remains undeciphered to this day.</p>
              </div>
            </div>

            <div className="anc-era-stage-card">
              <div className="anc-era-stage-image"><img src='images/china.jpeg'></img></div>
              <div className="anc-era-stage-content">
                <div className="anc-era-stage-period">2070 BCE-220 CE</div>
                <h3 className="anc-era-stage-title">Chinese Dynasties</h3>
                <p className="anc-era-p">Ancient China developed unique philosophical traditions, invented paper and gunpowder, built the Great Wall, and established governmental systems based on merit and bureaucracy.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="anc-era-achievements" className="anc-era-section anc-era-fade-in">
          <div className="anc-era-achievements">
            <h2 className="anc-era-h2">Key Achievements of Ancient Civilizations</h2>
            <div className="anc-era-achievements-grid">
              <div className="anc-era-achievement-item">
                <div className="anc-era-achievement-icon">📝</div>
                <h3 className="anc-era-h3">Writing Systems</h3>
                <p className="anc-era-p">The invention of writing revolutionized human communication. From Sumerian cuneiform to Egyptian hieroglyphs, Chinese characters, and the Phoenician alphabet, writing enabled the preservation and transmission of knowledge across generations.</p>
              </div>

              <div className="anc-era-achievement-item">
                <div className="anc-era-achievement-icon">⚖️</div>
                <h3 className="anc-era-h3">Legal Codes</h3>
                <p className="anc-era-p">Ancient civilizations developed the first formal legal systems. Hammurabi's Code, Roman Law, and other early legal frameworks established principles of justice that influence modern legal systems worldwide.</p>
              </div>

              <div className="anc-era-achievement-item">
                <div className="anc-era-achievement-icon">🏗️</div>
                <h3 className="anc-era-h3">Monumental Architecture</h3>
                <p className="anc-era-p">The pyramids of Egypt, ziggurats of Mesopotamia, Parthenon of Athens, and Colosseum of Rome showcase incredible engineering achievements that demonstrate advanced mathematical and architectural knowledge.</p>
              </div>

              <div className="anc-era-achievement-item">
                <div className="anc-era-achievement-icon">🔬</div>
                <h3 className="anc-era-h3">Scientific Advances</h3>
                <p className="anc-era-p">Ancient scholars made groundbreaking discoveries in mathematics, astronomy, medicine, and physics. Greek geometry, Babylonian astronomy, and Chinese inventions laid foundations for modern science.</p>
              </div>

              <div className="anc-era-achievement-item">
                <div className="anc-era-achievement-icon">🗳️</div>
                <h3 className="anc-era-h3">Political Innovation</h3>
                <p className="anc-era-p">From Athenian democracy to Roman republicanism, ancient civilizations experimented with various forms of government, creating political concepts and institutions that continue to shape modern governance.</p>
              </div>

              <div className="anc-era-achievement-item">
                <div className="anc-era-achievement-icon">🎭</div>
                <h3 className="anc-era-h3">Cultural Arts</h3>
                <p className="anc-era-p">Ancient civilizations produced timeless works of art, literature, and philosophy. Homer's epics, Greek tragedies, Roman poetry, and religious texts created cultural treasures that remain influential today.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="anc-era-relevance" className="anc-era-section anc-era-fade-in">
          <div className="anc-era-modern-relevance">
            <h2 className="anc-era-h2">Why the Ancient Era Matters Today</h2>
            <p className="anc-era-p" style={{fontSize: '1.2rem', marginBottom: '40px'}}>The achievements and innovations of ancient civilizations continue to shape our modern world in profound and often surprising ways.</p>
            
            <div className="anc-era-relevance-grid">
              <div className="anc-era-relevance-item">
                <h3 className="anc-era-h3">Democratic Principles</h3>
                <p className="anc-era-p">Modern democracy draws directly from ancient Greek concepts of citizen participation, voting rights, and governmental accountability developed in Athens over 2,500 years ago.</p>
              </div>

              <div className="anc-era-relevance-item">
                <h3 className="anc-era-h3">Legal Foundations</h3>
                <p className="anc-era-p">Our legal systems are built upon Roman law principles including due process, legal precedent, and the presumption of innocence that continue to guide justice systems worldwide.</p>
              </div>

              <div className="anc-era-relevance-item">
                <h3 className="anc-era-h3">Scientific Method</h3>
                <p className="anc-era-p">Ancient Greek philosophers like Aristotle established systematic approaches to observation and reasoning that evolved into the modern scientific method driving technological advancement.</p>
              </div>

              <div className="anc-era-relevance-item">
                <h3 className="anc-era-h3">Urban Planning</h3>
                <p className="anc-era-p">Ancient cities like those in the Indus Valley pioneered urban planning concepts including sewage systems, grid layouts, and zoning that influence modern city design.</p>
              </div>

              <div className="anc-era-relevance-item">
                <h3 className="anc-era-h3">Mathematical Systems</h3>
                <p className="anc-era-p">Babylonian mathematics, Egyptian geometry, and Indian numerals form the foundation of modern mathematics, engineering, and computer science.</p>
              </div>

              <div className="anc-era-relevance-item">
                <h3 className="anc-era-h3">Cultural Identity</h3>
                <p className="anc-era-p">Ancient literature, mythology, and artistic traditions continue to influence modern culture, from literature and films to architecture and design aesthetics.</p>
              </div>
            </div>

            <div style={{marginTop: '50px', padding: '40px', background: 'rgba(255,255,255,0.3)', borderRadius: '15px'}}>
              <h3 className="anc-era-h3">Understanding Our Past, Shaping Our Future</h3>
              <p className="anc-era-p">By studying ancient civilizations, we gain crucial insights into human nature, social organization, and the challenges of building sustainable societies. The rise and fall of ancient empires offer valuable lessons about leadership, resource management, and cultural adaptation that remain relevant as we face modern global challenges including climate change, technological disruption, and social inequality.</p>
            </div>
          </div>
        </section>
      </main>

      <div className="anc-era-footer">
        <div className="anc-era-container-inner">
          <p>&copy; 2025 Ancient Era Study Guide. Educational content exploring the foundations of human civilization.</p>
          <p style={{marginTop: '10px', fontSize: '0.9rem', opacity: '0.8'}}>Designed to inspire curiosity about our shared human heritage</p>
        </div>
      </div>
    </div>
  );
};

export default AncientEra;