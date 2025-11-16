import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Timeline.css';

const Timeline = () => {
  const [activeEra, setActiveEra] = useState('prehistoric');
  const navigate = useNavigate();
  // Define all era data
  const eraData = {
    prehistoric: {
      title: "Prehistoric Era",
      years: "2.5 Million - 3000 BCE",
      image: "Prehistoric Era.jpg",
      description: "The prehistoric period encompasses the time before written records. Early humans developed tools, mastered fire, created cave paintings, and gradually transitioned from hunter-gatherer societies to agricultural settlements.",
      highlights: [
        { year: "2.5M BCE", event: "First stone tools" },
        { year: "10,000 BCE", event: "Agricultural revolution begins" },
        { year: "7,000 BCE", event: "First permanent settlements" },
        { year: "3,500 BCE", event: "Early writing systems emerge" }
      ],
      link:"/prehistoricera"
    },
    ancient: {
      title: "Ancient Civilizations",
      years: "3000 BCE - 500 CE",
      image: "Ancient Civilizations.jpg",
      description: "This period saw the rise of the first major civilizations along river valleys. Mesopotamia, Egypt, India, and China developed writing systems, complex societies, and monumental architecture.",
      highlights: [
        { year: "3000 BCE", event: "Egyptian dynasties begin" },
        { year: "1792 BCE", event: "Hammurabi's Code in Babylon" },
        { year: "500 BCE", event: "Classical Greece flourishes" },
        { year: "27 BCE", event: "Roman Empire established" }
      ],
      link:"/ancientera"
    },
    classical: {
      title: "Classical Era",
      years: "500 BCE - 500 CE",
      image: "Classical Era.jpg",
      description: "The Classical period was marked by significant developments in philosophy, science, art, and political theory in Greece and Rome. This era laid the foundations for Western civilization.",
      highlights: [
        { year: "470 BCE", event: "Golden Age of Athens" },
        { year: "336 BCE", event: "Alexander the Great begins conquests" },
        { year: "44 BCE", event: "Assassination of Julius Caesar" },
        { year: "117 CE", event: "Roman Empire reaches greatest extent" }
      ],
      link: '/classicalera'
    },
    medieval: {
      title: "Medieval Period",
      years: "500 CE - 1500 CE",
      image: "Medieval Period.jpg",
      description: "The Medieval period, often called the Middle Ages, began with the fall of Rome and saw the rise of feudalism, the spread of Christianity and Islam, and the development of unique artistic and architectural styles.",
      highlights: [
        { year: "529 CE", event: "Founding of Monte Cassino monastery" },
        { year: "800 CE", event: "Charlemagne crowned Emperor" },
        { year: "1066 CE", event: "Norman Conquest of England" },
        { year: "1348 CE", event: "Black Death pandemic begins" }
      ],
      link: '/medievalera'
    },
    renaissance: {
      title: "Renaissance",
      years: "1300 CE - 1700 CE",
      image: "Renaissance.jpg",
      description: "The Renaissance was a period of rebirth in art, science, and classical learning that began in Italy and spread throughout Europe. It marked the transition from medieval to modern times.",
      highlights: [
        { year: "1397 CE", event: "Medici Bank founded in Florence" },
        { year: "1455 CE", event: "Gutenberg prints first Bible" },
        { year: "1503 CE", event: "Leonardo paints the Mona Lisa" },
        { year: "1632 CE", event: "Galileo publishes Dialogue" }
      ],
      link: '/renaissanceera'
    },
    modern: {
      title: "Modern Era",
      years: "1700 CE - Present",
      image: "Modern Era.jpg",
      description: "The Modern Era has been characterized by industrialization, technological advancement, global exploration, colonization, world wars, and rapid social change across the globe.",
      highlights: [
        { year: "1776 CE", event: "American Declaration of Independence" },
        { year: "1789 CE", event: "French Revolution begins" },
        { year: "1914 CE", event: "World War I begins" },
        { year: "1969 CE", event: "First humans land on the Moon" }
      ],
      link: '/modernera'
    }
  };

  // Calculate progress bar width based on selected era
  const getProgressPercentage = () => {
    const eras = Object.keys(eraData);
    const index = eras.indexOf(activeEra);
    return (index / (eras.length - 1)) * 100;
  };

  const handleEraChange = (era) => {
    setActiveEra(era);
  };

  const activateEra = () => {
    document.querySelectorAll('.timeline-nav-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-era') === activeEra) {
        btn.classList.add('active');
      }
    });
  };

  useEffect(() => {
    activateEra();
  }, [activeEra]);

  const currentEra = eraData[activeEra];

  const handleEra = (link) =>{
    navigate(link)
  }

  return (
    <section className="timeline-section" id="timeline-section">
      <div className="section-header">
        <h2 className="section-title">Journey Through Time</h2>
        <p className="section-subtitle">Explore major historical periods and civilizations</p>
      </div>
    
      <div className="timeline-container">
        <div className="timeline-navigation">
          {Object.keys(eraData).map((era) => (
            <button 
              key={era}
              className={`timeline-nav-btn ${era === activeEra ? 'active' : ''}`}
              data-era={era}
              onClick={() => handleEraChange(era)}
            >
              {era.charAt(0).toUpperCase() + era.slice(1)}
            </button>
          ))}
        </div>
    
        <div className="timeline">
          <div className="timeline-progress">
            <div 
              className="timeline-progress-bar" 
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
    
          <div className="timeline-era active" id={activeEra}>
            <div className="era-header">
              <h3>{currentEra.title}</h3>
              <span className="era-years">{currentEra.years}</span>
            </div>
            <div className="era-content">
              <div className="era-image">
              <img src={`/images/${currentEra.image}`} alt={currentEra.title} />
              </div>
              <div className="era-text">
                <p>{currentEra.description}</p>
                <ul className="era-highlights">
                  {currentEra.highlights.map((highlight, index) => (
                    <li key={index}>
                      <span className="highlight">{highlight.year}:</span> {highlight.event}
                    </li>
                  ))}
                </ul>
                <button onClick={()=>handleEra(currentEra.link)} className="cta-timeline-button">Explore This Era</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;