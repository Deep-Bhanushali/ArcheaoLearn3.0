import { useNavigate } from 'react-router-dom';
import '../styles/ARsection.css';

const ARSection = () => {
  const navigate = useNavigate();

  const arFeatures = [
    "Upload images of artifacts for instant identification",
    "Get detailed historical and cultural information about artifacts",
    "Advanced AI-powered recognition with high accuracy",
    "Explore artifact origins, materials, and historical significance"
  ];

  const handleArtifactRecognitionClick = () => {
    navigate('/artifact');
  };

  return (
    <section className="ar-section">
      <div className="ar-container">
        <div className="ar-content">
          <h2>Artifact Recognition Model</h2>
          <p>Discover the stories behind ancient artifacts with our advanced AI recognition technology. Upload photos of archaeological finds to instantly identify their origins, materials, and historical significance.</p>

          <ul className="ar-features">
            {arFeatures.map((feature, index) => (
              <li key={index}>
                <i className="fas fa-check-circle"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="cta-ar-button" onClick={handleArtifactRecognitionClick}>Try Artifact Recognition</button>
        </div>
        <div className="ar-image">
          <img src="\images\artifact_recognition.jpg" alt="Artifact Recognition" />
        </div>
      </div>
    </section>
  );
};

export default ARSection;
