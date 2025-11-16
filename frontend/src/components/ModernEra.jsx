import React, { useEffect } from 'react';
import '../styles/ModernEra.css';

const ModernEra = () => {
  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const particles = document.getElementById('mod-era-particles');
      if (!particles) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'mod-era-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 1) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particles.appendChild(particle);
      }
    };

    // Scroll progress
    const updateProgress = () => {
      const scrollProgress = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
      const progressFill = document.getElementById('mod-era-progress-fill');
      if (progressFill) {
        progressFill.style.width = scrollProgress + '%';
      }
    };

    // Intersection Observer for animations
    const setupAnimations = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('mod-era-visible');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.mod-era-timeline-content, .mod-era-relevance-card, .mod-era-fade-in').forEach(el => {
        observer.observe(el);
      });
    };

    // Mouse movement effects
    const setupMouseEffects = () => {
      document.querySelectorAll('.mod-era-section').forEach(section => {
        section.addEventListener('mousemove', (e) => {
          const rect = section.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          section.style.setProperty('--x', x + '%');
          section.style.setProperty('--y', y + '%');
        });
      });
    };

    // Smooth scrolling for navigation
    const setupSmoothScroll = () => {
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

    // Achievement cards entrance animation
    const setupAchievementAnimations = () => {
      const cards = document.querySelectorAll('.mod-era-achievement-card');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0) rotateX(0)';
            }, index * 200);
          }
        });
      }, { threshold: 0.1 });

      cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) rotateX(-10deg)';
        card.style.transition = 'all 0.8s ease';
        observer.observe(card);
      });
    };

    // Parallax effect for floating elements
    const setupParallax = () => {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        document.querySelectorAll('.mod-era-floating-element').forEach((element, index) => {
          const speed = (index + 1) * 0.3;
          element.style.transform = `translateY(${rate * speed}px) rotateY(${scrolled * 0.1}deg)`;
        });
      });
    };

    // Timeline animation on scroll
    const setupTimelineAnimation = () => {
      const timelineItems = document.querySelectorAll('.mod-era-timeline-content');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('mod-era-visible');
            // Add pulse effect to the timeline dot
            //const dot = entry.target.querySelector('::before');
            entry.target.style.setProperty('--pulse', '1');
          }
        });
      }, { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      });

      timelineItems.forEach(item => {
        observer.observe(item);
      });
    };

    // Dynamic background particles movement
    const animateParticles = () => {
      const particles = document.querySelectorAll('.mod-era-particle');
      particles.forEach(particle => {
        const currentTop = parseFloat(particle.style.top);
        const currentLeft = parseFloat(particle.style.left);
        
        // Subtle drift animation
        setInterval(() => {
          const newTop = currentTop + (Math.random() - 0.5) * 0.1;
          const newLeft = currentLeft + (Math.random() - 0.5) * 0.1;
          
          particle.style.top = Math.max(0, Math.min(100, newTop)) + '%';
          particle.style.left = Math.max(0, Math.min(100, newLeft)) + '%';
        }, 5000 + Math.random() * 10000);
      });
    };

    // Header text typing effect
    const setupTypingEffect = () => {
      const subtitle = document.querySelector('.mod-era-subtitle');
      if (!subtitle) return;
      
      const text = subtitle.textContent;
      subtitle.textContent = '';
      subtitle.style.opacity = '1';
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          subtitle.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      setTimeout(typeWriter, 1500);
    };

    // Initialize all effects
    const initializeEffects = () => {
      createParticles();
      setupAnimations();
      setupMouseEffects();
      setupSmoothScroll();
      setupAchievementAnimations();
      setupParallax();
      setupTimelineAnimation();
      animateParticles();
      setupTypingEffect();
    };

    // Update progress on scroll
    window.addEventListener('scroll', updateProgress);

    // Add loading animation
    window.addEventListener('load', () => {
      document.body.style.opacity = '1';
      document.body.style.transform = 'translateY(0)';
    });

    // Performance optimization for scroll events
    let ticking = false;
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }

    window.addEventListener('scroll', () => {
      requestTick();
      ticking = false;
    });

    // Initialize effects after component mounts
    setTimeout(initializeEffects, 100);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <div className="mod-era-body">
      <div className="mod-era-particles" id="mod-era-particles"></div>
      <div className="mod-era-progress-bar">
        <div className="mod-era-progress-fill" id="mod-era-progress-fill"></div>
      </div>

      <div className="mod-era-header">
        <div className="mod-era-header-bg-animation"></div>
        <div className="mod-era-container">
          <div className="mod-era-header-content">
            <h1 className="mod-era-h1">THE MODERN ERA</h1>
            <p className="mod-era-subtitle">Revolution • Innovation • Transformation</p>
            <a href="#mod-era-introduction" className="mod-era-explore-btn">EXPLORE THE REVOLUTION</a>
          </div>
        </div>
      </div>

      <main>
        <section className="mod-era-section" id="mod-era-introduction">
          <div className="mod-era-container">
            <h2 className="mod-era-h2">The Great Transformation</h2>
            <div className="mod-era-intro-content">
              <div className="mod-era-intro-text">
                <p>The Modern Era unleashed the most explosive period of change in human history. From 1500 to today, humanity shattered every boundary—geographic, intellectual, technological, and social.</p>
                
                <p>This was the age when humans first circled the globe, split the atom, walked on the moon, and connected every corner of Earth through digital networks. Empires rose and fell, revolutions rewrote the rules of power, and ordinary people gained rights their ancestors could never imagine.</p>
                
                <p>We transformed from isolated medieval villages into a planetary civilization capable of both creating and destroying worlds. This is the story of how we became modern.</p>
              </div>
              <div className="mod-era-intro-image">
                <div className="mod-era-image">
                  <img src='images/1492.jpeg'></img>
                </div>
                <div className="mod-era-image">
                  <img src='images/1776.jpeg'></img>
                </div>
                <div className="mod-era-image">
                  <img src='images/1996.jpeg'></img>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mod-era-section" id="mod-era-stages">
          <div className="mod-era-container">
            <h2 className="mod-era-h2">Revolutionary Stages</h2>
            <div className="mod-era-timeline-container">
              <div className="mod-era-timeline-track"></div>
              
              <div className="mod-era-timeline-item">
                <div className="mod-era-timeline-content">
                  <h3 className="mod-era-stage-title">Renaissance Explosion</h3>
                  <div className="mod-era-stage-period">1500-1800</div>
                  <p>The world exploded open. Columbus reached America, da Vinci sketched flying machines, and Galileo shattered the medieval cosmos. The printing press spread revolutionary ideas like wildfire, while new continents yielded unimaginable wealth and power.</p>
                </div>
              </div>
              
              <div className="mod-era-timeline-item">
                <div className="mod-era-timeline-content">
                  <h3 className="mod-era-stage-title">Industrial Revolution</h3>
                  <div className="mod-era-stage-period">1800-1914</div>
                  <p>Steam engines roared to life, transforming agrarian societies into industrial giants. Factories, railroads, and telegraph lines connected the world like never before. Cities exploded in size as millions abandoned farms for factory floors.</p>
                </div>
              </div>
              
              <div className="mod-era-timeline-item">
                <div className="mod-era-timeline-content">
                  <h3 className="mod-era-stage-title">Century of Crisis</h3>
                  <div className="mod-era-stage-period">1914-1945</div>
                  <p>Two devastating world wars and economic collapse nearly destroyed civilization. Yet from this chaos emerged antibiotics, aviation, nuclear power, and the United Nations—humanity's first attempt at global governance.</p>
                </div>
              </div>
              
              <div className="mod-era-timeline-item">
                <div className="mod-era-timeline-content">
                  <h3 className="mod-era-stage-title">Cold War Innovation</h3>
                  <div className="mod-era-stage-period">1945-1991</div>
                  <p>Superpower rivalry drove humanity to the moon and created the internet. The space race, nuclear standoff, and decolonization movements reshaped global power while civil rights revolutionized society.</p>
                </div>
              </div>
              
              <div className="mod-era-timeline-item">
                <div className="mod-era-timeline-content">
                  <h3 className="mod-era-stage-title">Digital Revolution</h3>
                  <div className="mod-era-stage-period">1991-Present</div>
                  <p>The internet connected every human mind into a global network. Smartphones put supercomputers in every pocket, while artificial intelligence and biotechnology promise to redefine what it means to be human.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mod-era-section" id="mod-era-achievements">
          <div className="mod-era-container">
            <h2 className="mod-era-h2">Revolutionary Breakthroughs</h2>
            <div className="mod-era-achievements-grid">
              <div className="mod-era-achievement-card">
                <div className="mod-era-achievement-icon">🔬</div>
                <h3 className="mod-era-achievement-title">Scientific Revolution</h3>
                <p>From alchemy to atoms, superstition to space travel—we unlocked the secrets of the universe through systematic observation and experimentation.</p>
              </div>
              
              <div className="mod-era-achievement-card">
                <div className="mod-era-achievement-icon">⚖️</div>
                <h3 className="mod-era-achievement-title">Democratic Revolution</h3>
                <p>Power shifted from kings to citizens. Constitutional governments, universal suffrage, and human rights transformed how societies organize themselves.</p>
              </div>
              
              <div className="mod-era-achievement-card">
                <div className="mod-era-achievement-icon">⚡</div>
                <h3 className="mod-era-achievement-title">Industrial Power</h3>
                <p>Steam, electricity, and assembly lines multiplied human productivity a thousandfold, creating unprecedented wealth and transforming daily life.</p>
              </div>
              
              <div className="mod-era-achievement-card">
                <div className="mod-era-achievement-icon">🌐</div>
                <h3 className="mod-era-achievement-title">Global Connection</h3>
                <p>From printing press to internet, revolutionary communications collapsed distance and accelerated the spread of ideas across continents.</p>
              </div>
              
              <div className="mod-era-achievement-card">
                <div className="mod-era-achievement-icon">💊</div>
                <h3 className="mod-era-achievement-title">Medical Miracles</h3>
                <p>Vaccines conquered plagues, antibiotics defeated infections, and surgical advances doubled human lifespan in just two centuries.</p>
              </div>
              
              <div className="mod-era-achievement-card">
                <div className="mod-era-achievement-icon">✊</div>
                <h3 className="mod-era-achievement-title">Human Liberation</h3>
                <p>Slavery abolished, women empowered, civil rights secured—the modern era gradually extended dignity and freedom to all humanity.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mod-era-section" id="mod-era-relevance">
          <div className="mod-era-container">
            <h2 className="mod-era-h2">Why This Revolution Still Shapes Us</h2>
            <div className="mod-era-relevance-grid">
              <div className="mod-era-relevance-card">
                <h3>Political DNA</h3>
                <p>Every election, every constitution, every international treaty traces back to modern political innovations. Democracy, nationalism, and global governance all emerged from this revolutionary period.</p>
              </div>
              
              <div className="mod-era-relevance-card">
                <h3>Economic Engine</h3>
                <p>Capitalism, industrialization, and global markets created today's economic system. Understanding this history explains everything from wealth inequality to technological disruption.</p>
              </div>
              
              <div className="mod-era-relevance-card">
                <h3>Social Blueprint</h3>
                <p>Modern social movements—from civil rights to environmentalism—follow patterns established centuries ago. History provides the playbook for change.</p>
              </div>
              
              <div className="mod-era-relevance-card">
                <h3>Technological Trajectory</h3>
                <p>AI, biotechnology, and space exploration all build on foundations laid during the scientific and industrial revolutions. The past predicts our technological future.</p>
              </div>
              
              <div className="mod-era-relevance-card">
                <h3>Cultural Legacy</h3>
                <p>Modern art, literature, music, and philosophy continue to wrestle with questions first posed during this era of radical transformation.</p>
              </div>
              
              <div className="mod-era-relevance-card">
                <h3>Global Order</h3>
                <p>Today's international system—from superpower rivalries to developing nations—was forged in the crucible of modern imperialism, revolution, and war.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="mod-era-footer">
        <div className="mod-era-container">
          <h2 className="mod-era-h2">The Revolution Continues</h2>
          <p className="mod-era-fade-in">The Modern Era never truly ended—it accelerated. We're living through the latest chapter of this great transformation, where digital networks, genetic engineering, and artificial intelligence are reshaping humanity once again.</p>
          <p className="mod-era-fade-in">Understanding how we got here is the first step toward shaping where we go next.</p>
        </div>
      </div>
    </div>
  );
};

export default ModernEra;