import React, { useEffect } from 'react';
import '../styles/About.css';

const About = () => {
    useEffect(() => {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all section content
        document.querySelectorAll('.about-section-content').forEach(el => {
            observer.observe(el);
        });

        // Timeline items animation
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = 'about-slideInTimeline 0.8s ease forwards';
                    }, index * 200);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.about-timeline-item').forEach(el => {
            timelineObserver.observe(el);
        });

        // Smooth scrolling for scroll indicator
        document.querySelector('.about-scroll-indicator').addEventListener('click', () => {
            document.querySelector('.about-section').scrollIntoView({
                behavior: 'smooth'
            });
        });

        // Parallax effect for floating elements
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelectorAll('.about-floating-element').forEach((el, index) => {
                const speed = 0.2 + (index * 0.1);
                el.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Feature items hover effect
        document.querySelectorAll('.about-feature-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'scale(1.05) rotate(1deg)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'scale(1) rotate(0deg)';
            });
        });

        // Dynamic typing effect for hero subtitle
        const subtitle = document.querySelector('.about-hero-content p');
        const text = subtitle.textContent;
        subtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };

        setTimeout(typeWriter, 1000);

        // Card tilt effect
        document.querySelectorAll('.about-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });

         // Add sparkle effect on scroll
    //     let sparkleTimer;
    //     window.addEventListener('scroll', () => {
    //         clearTimeout(sparkleTimer);
    //         sparkleTimer = setTimeout(createSparkle, 100);
    //     });

    //     function createSparkle() {
    //         const sparkle = document.createElement('div');
    //         sparkle.innerHTML = '✨';
    //         sparkle.style.position = 'fixed';
    //         sparkle.style.left = Math.random() * window.innerWidth + 'px';
    //         sparkle.style.top = Math.random() * window.innerHeight + 'px';
    //         sparkle.style.fontSize = '1rem';
    //         sparkle.style.pointerEvents = 'none';
    //         sparkle.style.zIndex = '1000';
    //         sparkle.style.animation = 'sparkle 2s ease-out forwards';
            
    //         document.body.appendChild(sparkle);
            
    //         setTimeout(() => {
    //             sparkle.remove();
    //         }, 2000);
    //     }

    //     // Add sparkle keyframes
    //     const sparkleStyle = document.createElement('style');
    //     sparkleStyle.textContent = `
    //         @keyframes sparkle {
    //             0% { opacity: 1; transform: scale(0) rotate(0deg); }
    //             50% { opacity: 1; transform: scale(1) rotate(180deg); }
    //             100% { opacity: 0; transform: scale(0) rotate(360deg); }
    //         }
    //     `;
    //     document.head.appendChild(sparkleStyle);
     }, []);

    return (
        <div className="about-body">
            {/* Floating Archaeological Elements */}
            <div className="about-floating-element" style={{fontSize: '3rem', color: 'var(--gold)'}}>🏺</div>
            <div className="about-floating-element" style={{fontSize: '2.5rem', color: 'var(--gold)'}}>⚱️</div>
            <div className="about-floating-element" style={{fontSize: '3.5rem', color: 'var(--gold)'}}>🗿</div>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>ArchaeoLearn</h1>
                    <p>Bringing History to Life Through Interactive Digital Exploration</p>
                </div>
                <div className="about-scroll-indicator">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="about-section">
                <div className="about-container">
                    <div className="about-section-header">
                        <h2>Who We Are</h2>
                    </div>
                    <div className="about-section-content">
                        <p style={{fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8'}}>
                            ArchaeoLearn is a digital initiative created with the goal of making history and archaeology more accessible, interactive, and enjoyable for learners of all ages. Whether you're a student curious about ancient civilizations, a history enthusiast exploring artifacts, or simply someone who loves uncovering the mysteries of the past, ArchaeoLearn is designed to bring history to life in engaging ways.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="about-section">
                <div className="about-container">
                    <div className="about-section-header">
                        <h2>Our Purpose</h2>
                    </div>
                    <div className="about-section-content">
                        <div className="about-mission-vision">
                            <div className="about-card">
                                <i className="fas fa-bullseye about-card-icon"></i>
                                <h3>Our Mission</h3>
                                <p>To make history more interactive and less intimidating. We bridge the gap between academic knowledge and curiosity-driven exploration, encouraging learners to not just study history, but to experience it through quizzes, timelines, visual galleries, and interactive tools.</p>
                            </div>
                            <div className="about-card">
                                <i className="fas fa-eye about-card-icon"></i>
                                <h3>Our Vision</h3>
                                <p>We envision ArchaeoLearn as a living museum on the web — where knowledge transcends textbooks, ancient artifacts can be explored virtually, myths and truths can be discussed critically, and learners from around the world connect with history in fun and meaningful ways.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="about-section">
                <div className="about-container">
                    <div className="about-section-header">
                        <h2>What We Offer</h2>
                    </div>
                    <div className="about-section-content">
                        <div className="about-features-grid">
                            <div className="about-feature-item">
                                <div className="about-feature-icon">🏺</div>
                                <h4>Artifact Gallery</h4>
                                <p>Explore artifacts in detail, with 3D views where possible</p>
                            </div>
                            <div className="about-feature-item">
                                <div className="about-feature-icon">🤖</div>
                                <h4>AI Chatbot</h4>
                                <p>Ask questions and learn interactively about history and archaeology</p>
                            </div>
                            <div className="about-feature-item">
                                <div className="about-feature-icon">🧩</div>
                                <h4>Quiz Zone</h4>
                                <p>Test your knowledge and learn while playing</p>
                            </div>
                            <div className="about-feature-item">
                                <div className="about-feature-icon">🎥</div>
                                <h4>Video Gallery</h4>
                                <p>Dive into visual storytelling of past events and civilizations</p>
                            </div>
                            <div className="about-feature-item">
                                <div className="about-feature-icon">🌍</div>
                                <h4>World Exploration</h4>
                                <p>Discover the unique history of countries across the globe</p>
                            </div>
                            <div className="about-feature-item">
                                <div className="about-feature-icon">📜</div>
                                <h4>Timeline Exploration</h4>
                                <p>Travel through Prehistoric, Medieval, and Modern eras</p>
                            </div>
                            <div className="about-feature-item">
                                <div className="about-feature-icon">🔍</div>
                                <h4>Artifact Recognition</h4>
                                <p>Upload images and get details about historical artifacts</p>
                            </div>
                            <div className="about-feature-item">
                                <div className="about-feature-icon">🗿</div>
                                <h4>Myth Discussions</h4>
                                <p>Separate facts from fiction through engaging myth-busting sections</p>
                            </div>
                            <div className="about-feature-item">
                                <div className="about-feature-icon">🏠</div>
                                <h4>Historical Lifestyles</h4>
                                <p>Peek into daily life: food, clothing, settlements, work, and beliefs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why ArchaeoLearn Section */}
            <section className="about-section">
                <div className="about-container">
                    <div className="about-section-header">
                        <h2>Why Choose ArchaeoLearn?</h2>
                    </div>
                    <div className="about-section-content">
                        <div className="about-timeline">
                            <div className="about-timeline-item">
                                <div className="about-timeline-content">
                                    <h3>Unique Blend</h3>
                                    <p>Unlike traditional history platforms, ArchaeoLearn blends anthropology, archaeology, and storytelling into one immersive space.</p>
                                </div>
                            </div>
                            <div className="about-timeline-item">
                                <div className="about-timeline-content">
                                    <h3>Beyond Facts</h3>
                                    <p>It's not just about what happened in history — it's also about how people lived, worked, and dreamed.</p>
                                </div>
                            </div>
                            <div className="about-timeline-item">
                                <div className="about-timeline-content">
                                    <h3>Interactive Learning</h3>
                                    <p>We make learning engaging, visual, and interactive instead of presenting dry facts.</p>
                                </div>
                            </div>
                            <div className="about-timeline-item">
                                <div className="about-timeline-content">
                                    <h3>Modern Technology</h3>
                                    <p>Our AI-driven tools and recognition models add a modern tech edge to historical exploration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="about-section">
                <div className="about-container">
                    <div className="about-section-header">
                        <h2>Meet the Team</h2>
                    </div>
                    <div className="about-section-content">
                        <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '40px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto'}}>
                            Behind ArchaeoLearn is a group of passionate learners and creators who believe history deserves to be experienced, not just memorized.
                        </p>
                        <div className="about-team-grid">
                            <div className="about-team-card">
                                <div className="about-team-avatar">
                                    <i className="fas fa-laptop-code"></i>
                                </div>
                                <h4>Computer Science</h4>
                                <p>Building the digital infrastructure that brings history to life</p>
                            </div>
                            <div className="about-team-card">
                                <div className="about-team-avatar">
                                    <i className="fas fa-brain"></i>
                                </div>
                                <h4>AI Specialists</h4>
                                <p>Creating intelligent systems for artifact recognition and learning</p>
                            </div>
                            <div className="about-team-card">
                                <div className="about-team-avatar">
                                    <i className="fas fa-palette"></i>
                                </div>
                                <h4>Design Team</h4>
                                <p>Crafting beautiful, intuitive experiences for all learners</p>
                            </div>
                            <div className="about-team-card">
                                <div className="about-team-avatar">
                                    <i className="fas fa-scroll"></i>
                                </div>
                                <h4>History Enthusiasts</h4>
                                <p>Ensuring accuracy and bringing passion to every story</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="about-cta">
                <div className="about-container">
                    <h2>Join Us on the Journey</h2>
                    <p style={{fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6'}}>
                        ArchaeoLearn is more than a project; it's a movement towards reimagining how history is taught and learned. Because the past is not just behind us — it's a story we carry forward.
                    </p>
                    <div className="about-cta-buttons">
                        <a href="#" className="about-btn about-btn-primary">Explore Features</a>
                        <a href="#" className="about-btn about-btn-secondary">Support Us</a>
                        <a href="#" className="about-btn about-btn-secondary">Share Feedback</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;