import React, { useEffect } from 'react';
import '../styles/RenaissanceEra.css';

const RenaissanceEra = () => {
    useEffect(() => {
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.rns-era-nav-a');
        navLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Enhanced scrolling animations with staggered timing
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, observerOptions);

        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.rns-era-image-card, .rns-era-achievement-card, .rns-era-timeline-item, .rns-era-relevance-item');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });

        // Parallax effect for floating ornaments
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const ornaments = document.querySelectorAll('.rns-era-floating-ornament');
            ornaments.forEach((ornament, index) => {
                const speed = 0.5 + (index * 0.1);
                ornament.style.transform = `translateY(${scrolled * speed}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Dynamic color shifts on scroll
        const handleColorShift = () => {
            const scrolled = window.pageYOffset;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = scrolled / maxScroll;
            
            const hue = 45 + (scrollPercent * 15); // Shift gold hue slightly
            document.documentElement.style.setProperty('--gold-primary', `hsl(${hue}, 65%, 52%)`);
        };

        window.addEventListener('scroll', handleColorShift);

        // Add sparkle effect to achievement cards on hover
        const achievementCards = document.querySelectorAll('.rns-era-achievement-card');
        achievementCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                createSparkles(this);
            });
        });

        // Add sparkle animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes sparkle {
                0% {
                    transform: scale(0) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: scale(1) rotate(180deg);
                    opacity: 1;
                }
                100% {
                    transform: scale(0) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleColorShift);
            document.head.removeChild(style);
        };
    }, []);

    const createSparkles = (element) => {
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '✨';
                sparkle.style.position = 'absolute';
                sparkle.style.fontSize = '1.5rem';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.zIndex = '100';
                sparkle.style.animation = 'sparkle 1s ease-out forwards';
                
                // Random position
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                sparkle.style.left = `${x}%`;
                sparkle.style.top = `${y}%`;
                
                element.appendChild(sparkle);
                
                // Remove after animation
                setTimeout(() => {
                    if (element.contains(sparkle)) {
                        element.removeChild(sparkle);
                    }
                }, 1000);
            }, i * 150);
        }
    };

    return (
        <div className="rns-era-body">
            {/* Floating Ornaments */}
            <div className="rns-era-floating-ornament">❦</div>
            <div className="rns-era-floating-ornament">✧</div>
            <div className="rns-era-floating-ornament">✦</div>

            {/* Header */}
            <div className="rns-era-header">
                <div className="rns-era-container">
                    <h1 className="rns-era-h1">The Renaissance Era</h1>
                    <div className="rns-era-decorative-border"></div>
                    <p className="rns-era-subtitle">A Rebirth of Art, Science, and Humanism</p>
                </div>
            </div>

            {/* Navigation */}
            <div className="rns-era-nav">
                <div className="rns-era-container">
                    <ul className="rns-era-nav-ul">
                        <li className="rns-era-nav-li"><a href="#overview" className="rns-era-nav-a">Overview</a></li>
                        <li className="rns-era-nav-li"><a href="#art" className="rns-era-nav-a">Art & Artists</a></li>
                        <li className="rns-era-nav-li"><a href="#science" className="rns-era-nav-a">Scientific Advances</a></li>
                        <li className="rns-era-nav-li"><a href="#humanism" className="rns-era-nav-a">Humanism</a></li>
                        <li className="rns-era-nav-li"><a href="#legacy" className="rns-era-nav-a">Legacy</a></li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="rns-era-container">
                {/* Overview Section */}
                <section id="overview" className="rns-era-section">
                    <h2 className="rns-era-h2">A New Dawn in Europe</h2>
                    <p className="rns-era-p">
                        The Renaissance, meaning "rebirth" in French, was a period of cultural, artistic, political, and economic revival following the Middle Ages. 
                        Spanning roughly from the 14th to the 17th century, it began in Florence, Italy, and later spread across Europe, bringing a renewed interest in 
                        classical philosophy, literature, and art.
                    </p>
                    <p className="rns-era-p">
                        This era marked the transition from medieval times to the modern age, characterized by humanism, exploration, and scientific inquiry. 
                        The invention of the printing press by Johannes Gutenberg around 1440 played a crucial role in spreading Renaissance ideas throughout Europe.
                    </p>
                    
                    <div className="rns-era-image-gallery">
                        <div className="rns-era-image-card">
                            <div className="rns-era-image-placeholder"><img className='rns-era-image' src='images/florence.jpeg'></img></div>
                            <div className="rns-era-image-caption">
                                <h4 className="rns-era-image-caption-h4">Florence: Birthplace of Renaissance</h4>
                                <p>The city's wealth from trade and banking funded artistic and cultural development.</p>
                            </div>
                        </div>
                        <div className="rns-era-image-card">
                            <div className="rns-era-image-placeholder"><img className='rns-era-image' src='images/printing_press.jpeg'></img></div>
                            <div className="rns-era-image-caption">
                                <h4 className="rns-era-image-caption-h4">Printing Revolution</h4>
                                <p>The printing press enabled the mass production of books, spreading knowledge rapidly.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Art & Artists Section */}
                <section id="art" className="rns-era-section">
                    <h2 className="rns-era-h2">Artistic Revolution</h2>
                    <p className="rns-era-p">
                        Renaissance art broke from the flat, symbolic style of medieval painting to embrace realism, perspective, and human emotion. 
                        Artists studied anatomy, light, and shadow to create more lifelike representations. The period produced some of history's most 
                        celebrated artists and artworks.
                    </p>
                    
                    <div className="rns-era-timeline">
                        <div className="rns-era-timeline-item">
                            <div className="rns-era-timeline-content">
                                <span className="rns-era-timeline-date">Early 1400s</span>
                                <h3 className="rns-era-h3">Masaccio</h3>
                                <p className="rns-era-p">
                                    Pioneered linear perspective in painting, creating the illusion of depth on a flat surface. 
                                    His frescoes in the Brancacci Chapel demonstrated revolutionary realism and emotional expression.
                                </p>
                            </div>
                        </div>
                        <div className="rns-era-timeline-item">
                            <div className="rns-era-timeline-content">
                                <span className="rns-era-timeline-date">Late 1400s</span>
                                <h3 className="rns-era-h3">Leonardo da Vinci</h3>
                                <p className="rns-era-p">
                                    The quintessential "Renaissance man," Leonardo excelled as painter, sculptor, architect, and scientist. 
                                    Masterpieces like the Mona Lisa and The Last Supper showcase his mastery of sfumato (smoky effect) and psychological depth.
                                </p>
                            </div>
                        </div>
                        <div className="rns-era-timeline-item">
                            <div className="rns-era-timeline-content">
                                <span className="rns-era-timeline-date">Early 1500s</span>
                                <h3 className="rns-era-h3">Michelangelo</h3>
                                <p className="rns-era-p">
                                    His monumental works like the David sculpture and Sistine Chapel ceiling exemplify the Renaissance ideal of 
                                    human perfection and divine inspiration. His figures combined anatomical precision with heroic grandeur.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scientific Advances Section */}
                <section id="science" className="rns-era-section">
                    <h2 className="rns-era-h2">Scientific Enlightenment</h2>
                    <p className="rns-era-p">
                        The Renaissance witnessed groundbreaking advances in science, astronomy, and anatomy. 
                        Thinkers began to observe the natural world directly, challenging ancient authorities and church doctrines.
                    </p>
                    
                    <div className="rns-era-achievements-grid">
                        <div className="rns-era-achievement-card">
                            <div className="rns-era-achievement-icon">🌍</div>
                            <h3 className="rns-era-h3">Copernican Revolution</h3>
                            <p className="rns-era-p">
                                Nicolaus Copernicus proposed a heliocentric model of the universe, placing the Sun rather than Earth at the center. 
                                This fundamentally changed humanity's understanding of its place in the cosmos.
                            </p>
                        </div>
                        <div className="rns-era-achievement-card">
                            <div className="rns-era-achievement-icon">🔬</div>
                            <h3 className="rns-era-h3">Anatomical Studies</h3>
                            <p className="rns-era-p">
                                Andreas Vesalius revolutionized medicine through detailed dissections and accurate anatomical drawings. 
                                His work "De humani corporis fabrica" corrected many errors in ancient medical texts.
                            </p>
                        </div>
                        <div className="rns-era-achievement-card">
                            <div className="rns-era-achievement-icon">🧮</div>
                            <h3 className="rns-era-h3">Mathematical Advances</h3>
                            <p className="rns-era-p">
                                Mathematics flourished with the development of algebra, probability theory, and symbolic notation. 
                                Figures like Gerolamo Cardano and Niccolò Fontana Tartaglia made significant contributions to solving cubic equations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Humanism Section */}
                <section id="humanism" className="rns-era-section">
                    <h2 className="rns-era-h2">Humanist Philosophy</h2>
                    <p className="rns-era-p">
                        Humanism emerged as the defining intellectual movement of the Renaissance, emphasizing the study of classical texts, 
                        the value of human potential, and a focus on worldly concerns rather than solely religious matters.
                    </p>
                    
                    <div className="rns-era-image-gallery">
                        <div className="rns-era-image-card">
                            <div className="rns-era-image-placeholder"><img src='images/petrarch.jpeg'></img> </div>
                            <div className="rns-era-image-caption">
                                <h4 className="rns-era-image-caption-h4">Francesco Petrarca</h4>
                                <p>Petrarch's rediscovery of Cicero's letters is often credited with initiating the 14th-century Renaissance.</p>
                            </div>
                        </div>
                        <div className="rns-era-image-card">
                            <div className="rns-era-image-placeholder"><img src='images/erasmus.jpeg'></img></div>
                            <div className="rns-era-image-caption">
                                <h4 className="rns-era-image-caption-h4">Northern Humanism</h4>
                                <p>Erasmus combined classical learning with Christian teachings, advocating for reform from within the Church.</p>
                            </div>
                        </div>
                    </div>
                    
                    <h3 className="rns-era-h3">Key Principles of Humanism</h3>
                    <p className="rns-era-p">
                        Humanists believed in the potential of human beings to achieve greatness through education and reason. 
                        They emphasized the study of the humanities: grammar, rhetoric, history, poetry, and moral philosophy. 
                        The concept of the "Renaissance man" — a person skilled in multiple fields — embodied this ideal.
                    </p>
                </section>

                {/* Legacy Section */}
                <section id="legacy" className="rns-era-section">
                    <h2 className="rns-era-h2">Enduring Legacy</h2>
                    <p className="rns-era-p">
                        The Renaissance transformed European society and laid the foundations for the modern world. 
                        Its emphasis on observation, reason, and individual expression influenced subsequent movements including the Scientific Revolution and Enlightenment.
                    </p>
                    
                    <div className="rns-era-relevance-grid">
                        <div className="rns-era-relevance-item">
                            <h3 className="rns-era-h3">Artistic Techniques</h3>
                            <p className="rns-era-p">
                                Renaissance developments in perspective, chiaroscuro, and anatomical accuracy remain fundamental to artistic training today.
                            </p>
                        </div>
                        <div className="rns-era-relevance-item">
                            <h3 className="rns-era-h3">Scientific Method</h3>
                            <p className="rns-era-p">
                                The empirical approach developed during the Renaissance became the basis for modern scientific inquiry.
                            </p>
                        </div>
                        <div className="rns-era-relevance-item">
                            <h3 className="rns-era-h3">Humanist Education</h3>
                            <p className="rns-era-p">
                                The Renaissance model of liberal arts education continues to influence educational systems worldwide.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            {/* <div className="rns-era-footer">
                <div className="rns-era-container">
                    <div className="rns-era-footer-grid">
                        <div className="rns-era-footer-section">
                            <h4 className="rns-era-footer-section-h4">Explore Further</h4>
                            <ul className="rns-era-footer-section-ul">
                                <li className="rns-era-footer-section-li">Renaissance Art Movements</li>
                                <li className="rns-era-footer-section-li">Key Renaissance Figures</li>
                                <li className="rns-era-footer-section-li">Renaissance Architecture</li>
                                <li className="rns-era-footer-section-li">Renaissance Literature</li>
                                <li className="rns-era-footer-section-li">Northern Renaissance</li>
                            </ul>
                        </div>
                        <div className="rns-era-footer-section">
                            <h4 className="rns-era-footer-section-h4">Resources</h4>
                            <ul className="rns-era-footer-section-ul">
                                <li className="rns-era-footer-section-li">Museum Collections</li>
                                <li className="rns-era-footer-section-li">Academic Publications</li>
                                <li className="rns-era-footer-section-li">Documentaries</li>
                                <li className="rns-era-footer-section-li">Online Archives</li>
                                <li className="rns-era-footer-section-li">Educational Programs</li>
                            </ul>
                        </div>
                        <div className="rns-era-footer-section">
                            <h4 className="rns-era-footer-section-h4">About This Project</h4>
                            <p className="rns-era-footer-description">
                                This educational resource celebrates the extraordinary achievements of the Renaissance era, 
                                a period that continues to inspire and inform our modern world.
                            </p>
                            <div className="rns-era-footer-quote">
                                <p className="rns-era-footer-quote-p">
                                    "The Renaissance was a time of rebirth, of rediscovery, of reimagining what it means to be human." 
                                    — Historical Scholar
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rns-era-footer-bottom">
                        <div className="rns-era-decorative-line"></div>
                        <p className="rns-era-footer-attribution">
                            <span className="rns-era-footer-ornament">✦ ✧ ✦</span><br />
                            Celebrating the Spirit of the Renaissance<br />
                            <span className="rns-era-footer-ornament">✧ ✦ ✧</span>
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default RenaissanceEra;