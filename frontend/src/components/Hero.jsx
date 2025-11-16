import { HashLink } from 'react-router-hash-link';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="hero-subtitle">Interactive Learning Experience</div>
        <h2>Discover Ancient Civilizations Through Technology</h2>
        <p>Immerse yourself in the fascinating world of archaeology with our cutting-edge educational platform. Learn through interactive quizzes, AR experiences, and expert-led courses.</p>
        <button className="cta-hero-button" style={{marginBottom:'75px'}}><HashLink smooth to="/#features">
              Start Exploring
            </HashLink></button>
      </div>
      <div className="hero-decoration">
        <div className="artifact-icon artifact-1"><i className="fas fa-landmark"></i></div>
        <div className="artifact-icon artifact-2"><i className="fas fa-chess-rook"></i></div>
        <div className="artifact-icon artifact-3"><i className="fas fa-scroll"></i></div>
        <div className="artifact-icon artifact-4"><i className="fas fa-coins"></i></div>
      </div>
      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-arrow"></div>
      </div>
      <div className="ancient-pattern pattern-bottom"></div>
    </section>
  );
};

export default Hero;