import React, { useEffect } from 'react';
import '../styles/MedievalEra.css';

const MedievalEra = () => {
  useEffect(() => {
    // Scroll progress indicator
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      const indicator = document.getElementById('mdv-era-scroll-indicator');
      if (indicator) {
        indicator.style.width = scrollProgress + '%';
      }
    };

    // Add smooth scrolling behavior
    const addSmoothScrolling = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    };

    // Add intersection observer for animations
    const addIntersectionObserver = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      }, observerOptions);

      document.querySelectorAll('.mdv-era-section').forEach(section => {
        observer.observe(section);
      });
    };

    window.addEventListener('scroll', handleScroll);
    addSmoothScrolling();
    addIntersectionObserver();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="mdv-era-container">
      <div className="mdv-era-scroll-indicator" id="mdv-era-scroll-indicator"></div>
      
      <div className="mdv-era-header">
        <div className="mdv-era-container-wrapper">
          <h1 className="mdv-era-h1">The Medieval Era</h1>
          <p className="mdv-era-subtitle">A Thousand Years That Shaped Our World</p>
          <p className="mdv-era-period">c. 500 - 1500 CE</p>
        </div>
      </div>

      <div className="mdv-era-nav">
        <div className="mdv-era-container-wrapper">
          <div className="mdv-era-nav-links">
            <a href="#introduction">Introduction</a>
            <a href="#stages">Major Stages</a>
            <a href="#achievements">Key Achievements</a>
            <a href="#relevance">Modern Relevance</a>
          </div>
        </div>
      </div>

      <div className="mdv-era-container-wrapper">
        {/* Introduction Section */}
        <section className="mdv-era-section" id="introduction">
          <div className="mdv-era-section-header">
            <h2>Introduction</h2>
          </div>
          <div className="mdv-era-section-content">
            <div className="mdv-era-intro-grid">
              <div className="mdv-era-intro-text">
                <p>The Medieval era, often called the Middle Ages, represents one of history's most transformative periods. Spanning roughly from 500 to 1500 CE, this millennium witnessed the rise and fall of empires, the birth of nations, and fundamental changes in how humans organized society, practiced religion, and understood their world.</p>
                
                <p>Far from being the "Dark Ages" as once portrayed, the Medieval period was a time of remarkable innovation, cultural exchange, and intellectual growth. From the bustling trade routes connecting Europe, Asia, and Africa to the magnificent cathedrals reaching toward heaven, medieval civilization laid the groundwork for the modern world.</p>
                
                <p>This era saw the emergence of universities, the development of new agricultural techniques, groundbreaking advances in philosophy and science, and the creation of literary masterpieces that still inspire us today. It was a time when civilizations across the globe—from Medieval Europe and the Islamic Golden Age to the great dynasties of China and the sophisticated kingdoms of Africa—each contributed unique innovations that would shape human progress.</p>
              </div>
              <div className="mdv-era-intro-image">
                <div className="mdv-era-medieval-image">
                  <img src='images/med_castle.jpeg'></img>
                </div>
                <div className="mdv-era-medieval-image">
                  <img src='images/manuscripts.jpeg'></img>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Major Stages Section */}
        <section className="mdv-era-section" id="stages">
          <div className="mdv-era-section-header">
            <h2>Major Stages</h2>
          </div>
          <div className="mdv-era-section-content">
            <p>The Medieval era is traditionally divided into three distinct periods, each with its own characteristics and defining events:</p>
            
            <div className="mdv-era-stages-grid">
              <div className="mdv-era-stage-card">
                <div className="mdv-era-stage-title">Early Middle Ages</div>
                <div className="mdv-era-stage-period">c. 500 - 1000 CE</div>
                <div className="mdv-era-medieval-image"><img src='images/migration.jpeg'></img></div>
                <p>The collapse of the Western Roman Empire marked the beginning of this period. Germanic tribes established new kingdoms across Europe, while the Eastern Roman (Byzantine) Empire continued in Constantinople. This era saw the rise of Islam, the formation of the Carolingian Empire under Charlemagne, and the spread of Christianity throughout Europe. The feudal system began to emerge as a response to political instability.</p>
              </div>
              
              <div className="mdv-era-stage-card">
                <div className="mdv-era-stage-title">High Middle Ages</div>
                <div className="mdv-era-stage-period">c. 1000 - 1300 CE</div>
                <div className="mdv-era-medieval-image"><img src='images/growth.jpeg'></img></div>
                <p>Often considered the golden age of medieval civilization, this period witnessed unprecedented population growth, urban development, and cultural flowering. The Crusades connected Europe with the Middle East, universities were founded, Gothic architecture reached its peak, and scholasticism emerged. Trade expanded dramatically, leading to the rise of merchant classes and more complex economic systems.</p>
              </div>
              
              <div className="mdv-era-stage-card">
                <div className="mdv-era-stage-title">Late Middle Ages</div>
                <div className="mdv-era-stage-period">c. 1300 - 1500 CE</div>
                <div className="mdv-era-medieval-image"><img src='images/transformation.jpeg'></img></div>
                <p>This period began with crisis but ended with transformation. The Black Death, Hundred Years' War, and Great Western Schism challenged medieval institutions. However, this era also saw the Renaissance beginning in Italy, the invention of the printing press, overseas exploration, and the gradual emergence of modern nation-states. The medieval worldview was giving way to new ideas about humanism and individualism.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements Section */}
        <section className="mdv-era-section" id="achievements">
          <div className="mdv-era-section-header">
            <h2>Key Achievements</h2>
          </div>
          <div className="mdv-era-section-content">
            <p>The Medieval era produced innovations and achievements that fundamentally changed human civilization:</p>
            
            <div className="mdv-era-decorative-border"></div>
            
            <div className="mdv-era-achievements-grid">
              <div className="mdv-era-achievement-item">
                <div className="mdv-era-achievement-title">🏛️ Universities</div>
                <p>The first European universities were established in Bologna (1088), Paris (1150), and Oxford (1167), creating institutions of higher learning that continue to this day and establishing the foundation for modern academic systems.</p>
              </div>
              
              <div className="mdv-era-achievement-item">
                <div className="mdv-era-achievement-title">🏗️ Gothic Architecture</div>
                <p>Revolutionary building techniques enabled the construction of soaring cathedrals with flying buttresses, ribbed vaults, and massive stained glass windows that transformed religious and civic architecture.</p>
              </div>
              
              <div className="mdv-era-achievement-item">
                <div className="mdv-era-achievement-title">📚 Preservation of Knowledge</div>
                <p>Medieval scholars, particularly in monasteries and the Islamic world, preserved and transmitted classical texts from Greece and Rome, ensuring their survival for future generations.</p>
              </div>
              
              <div className="mdv-era-achievement-item">
                <div className="mdv-era-achievement-title">🌾 Agricultural Revolution</div>
                <p>Innovations like the three-field system, heavy plow, and horse collar dramatically increased agricultural productivity, supporting larger populations and enabling urban growth.</p>
              </div>
              
              <div className="mdv-era-achievement-item">
                <div className="mdv-era-achievement-title">💰 Banking & Commerce</div>
                <p>Italian merchants developed sophisticated banking systems, double-entry bookkeeping, and international trade networks that laid the foundation for modern capitalism.</p>
              </div>
              
              <div className="mdv-era-achievement-item">
                <div className="mdv-era-achievement-title">⚖️ Legal Systems</div>
                <p>The development of common law in England and the revival of Roman law in continental Europe established legal principles that still influence modern judicial systems.</p>
              </div>
              
              <div className="mdv-era-achievement-item">
                <div className="mdv-era-achievement-title">🧭 Exploration</div>
                <p>Medieval navigators developed new sailing techniques and instruments, leading to the Age of Exploration and connecting previously isolated continents.</p>
              </div>
              
              <div className="mdv-era-achievement-item">
                <div className="mdv-era-achievement-title">🔬 Scientific Method</div>
                <p>Scholars like Roger Bacon and others began developing empirical approaches to understanding the natural world, laying groundwork for the Scientific Revolution.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters Today Section */}
        <section className="mdv-era-section" id="relevance">
          <div className="mdv-era-section-header">
            <h2>Why It Matters Today</h2>
          </div>
          <div className="mdv-era-section-content">
            <p>The Medieval era's influence extends far beyond history books, shaping our modern world in profound and lasting ways:</p>
            
            <div className="mdv-era-relevance-grid">
              <div className="mdv-era-relevance-card">
                <div className="mdv-era-relevance-icon">🏛️</div>
                <div className="mdv-era-relevance-title">Democratic Institutions</div>
                <p>Medieval concepts like Magna Carta (1215) established principles of limited government and individual rights that became cornerstones of modern democracy and constitutional law.</p>
              </div>
              
              <div className="mdv-era-relevance-card">
                <div className="mdv-era-relevance-icon">🎓</div>
                <div className="mdv-era-relevance-title">Educational Systems</div>
                <p>The university model created in medieval Europe remains the foundation of higher education worldwide, with degrees, faculties, and academic traditions still recognizable today.</p>
              </div>
              
              <div className="mdv-era-relevance-card">
                <div className="mdv-era-relevance-icon">🌍</div>
                <div className="mdv-era-relevance-title">Global Trade Networks</div>
                <p>Medieval trade routes and commercial practices established patterns of international commerce and cultural exchange that evolved into today's globalized economy.</p>
              </div>
              
              <div className="mdv-era-relevance-card">
                <div className="mdv-era-relevance-icon">🏛️</div>
                <div className="mdv-era-relevance-title">Architectural Heritage</div>
                <p>Medieval buildings, from Gothic cathedrals to stone bridges, continue to define city skylines and inspire modern architects while serving practical functions centuries later.</p>
              </div>
              
              <div className="mdv-era-relevance-card">
                <div className="mdv-era-relevance-icon">📖</div>
                <div className="mdv-era-relevance-title">Literary Tradition</div>
                <p>Works like Dante's Divine Comedy, Chaucer's Canterbury Tales, and Arthurian legends continue to influence literature, film, and popular culture around the world.</p>
              </div>
              
              <div className="mdv-era-relevance-card">
                <div className="mdv-era-relevance-icon">⚖️</div>
                <div className="mdv-era-relevance-title">Legal Foundations</div>
                <p>Medieval legal concepts including trial by jury, habeas corpus, and common law principles form the backbone of many modern judicial systems, particularly in English-speaking countries.</p>
              </div>
            </div>
            
            <div className="mdv-era-decorative-border"></div>
            
            <p style={{textAlign: 'center', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--mdv-gold-dark)', marginTop: '2rem'}}>
              "Understanding the Medieval era helps us appreciate how our modern institutions, values, and ways of thinking developed over centuries of human experience, reminding us that progress is often built upon the wisdom and innovations of those who came before us."
            </p>
          </div>
        </section>
      </div>

      <div className="mdv-era-footer">
        <div className="mdv-era-container-wrapper">
          <p>&copy; 2024 Medieval Era Educational Resource. Exploring the foundations of our modern world through historical understanding.</p>
        </div>
      </div>
    </div>
  );
};

export default MedievalEra;