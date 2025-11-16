import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import '../styles/ArtifactRecognition.css';

const ArtifactRecognition = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setError('');
      setResults(null);
      
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setError('Please select a valid image file (JPEG, PNG, etc.).');
    }
  };

  // Handle drag and drop events
  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    if (e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  // Analyze artifact by calling the backend API
  const analyzeArtifact = async () => {
    if (!selectedFile) {
      setError("Please select an image file first.");
      return;
    }

    setIsAnalyzing(true);
    setResults(null);
    setError('');

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Use your Node.js backend endpoint
      const API_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4242'}/recognize-artifact`;

      const response = await axios.post(API_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Map the API response keys to the keys used in the component's state
      const formattedResults = {
        name: response.data.artifact_name,
        civilization: response.data.culture_or_civilization,
        era: response.data.time_period,
        material: response.data.materials,
        origin: response.data.region_of_origin,
        significance: response.data.description,
        funFact: response.data.fun_fact
      };
      
      setResults(formattedResults);

    } catch (err) {
      console.error("Error analyzing artifact:", err);
      const errorMessage = err.response?.data?.error || "An unknown error occurred. Please try again.";
      setError(`Analysis Failed: ${errorMessage}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Reset state for a new analysis
  const startNewAnalysis = () => {
    setSelectedFile(null);
    setPreviewUrl('');
    setResults(null);
    setError('');
  };

  // Create particles effect (no changes needed here)
  useEffect(() => {
    const createParticles = () => {
      const particleContainer = document.querySelector('.bg-animation');
      if (!particleContainer) return;
      
      particleContainer.innerHTML = `
        <div class="floating-symbol symbol1">⚱️</div>
        <div class="floating-symbol symbol2">🏛️</div>
        <div class="floating-symbol symbol3">📜</div>
        <div class="floating-symbol symbol4">🔍</div>
        <div class="floating-symbol symbol5">⚰️</div>
      `;
      
      const particleSizes = ['particle-small', 'particle-medium', 'particle-large'];
      
      for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        const sizeClass = particleSizes[Math.floor(Math.random() * particleSizes.length)];
        particle.classList.add('particle', sizeClass);
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
        particleContainer.appendChild(particle);
      }
      
      for (let i = 0; i < 8; i++) {
        const mysticParticle = document.createElement('div');
        mysticParticle.classList.add('particle', 'particle-medium');
        mysticParticle.style.left = Math.random() * 100 + '%';
        mysticParticle.style.animationDelay = Math.random() * 10 + 's';
        mysticParticle.style.animationDuration = '25s';
        mysticParticle.style.background = 'radial-gradient(circle, rgba(139, 115, 85, 0.8) 0%, rgba(93, 78, 55, 0.6) 40%, transparent 70%)';
        mysticParticle.style.boxShadow = '0 0 8px rgba(139, 115, 85, 0.5)';
        particleContainer.appendChild(mysticParticle);
      }
    };
    createParticles();
  }, []);

  return (
    <div className="artifact-recognition">
      <div className="bg-animation"></div>
      <section className="hero-section">
        <h1 className="hero-title">Discover the Story Behind Your Artifact</h1>
        <p className="hero-subtitle">Upload an image and let AI reveal its history</p>
      </section>

      <div className="container">
        {/* Error Display Area */}
        {error && <div className="error-message">{error}</div>}

        {/* Upload Section */}
        {!results && !isAnalyzing && (
          <section className="upload-section">
            <div 
              className={`upload-box ${previewUrl ? 'has-image' : ''}`}
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {!previewUrl ? (
                <>
                  <div className="upload-icon">📷</div>
                  <div className="upload-text">Drag & Drop your artifact image here</div>
                  <div className="upload-subtext">or click to browse files</div>
                </>
              ) : (
                <div className="image-preview">
                  <img className="preview-img" src={previewUrl} alt="Uploaded artifact" />
                </div>
              )}
              <input
                type="file"
                className="file-input"
                ref={fileInputRef}
                onChange={(e) => e.target.files[0] && handleFileSelect(e.target.files[0])}
                accept="image/*"
              />
              {!previewUrl && (
                <button className="upload-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Upload Artifact Image</button>
              )}
            </div>
            
            {previewUrl && (
              <div className="analyze-button-container">
                <button className="analyze-btn" onClick={analyzeArtifact} disabled={isAnalyzing}>
                  🔍 Analyze Artifact
                </button>
              </div>
            )}
          </section>
        )}

        {/* Loading Section */}
        {isAnalyzing && (
          <section className="loading-section">
            <div className="loading-spinner"></div>
            <div className="loading-text">Analyzing history...</div>
          </section>
        )}

        {/* Results Section */}
        {results && !isAnalyzing && (
          <section className="results-section">
            <div className="artifact-card">
              <div className="artifact-header">
                <div className="artifact-image">
                  <img className="artifact-img" src={previewUrl} alt="Analyzed artifact" />
                </div>
                <div className="artifact-details">
                  <h2 className="artifact-name">{results.name}</h2>
                  <div className="detail-row">
                    <span className="detail-label">Civilization:</span>
                    <span className="detail-value">{results.civilization}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Era:</span>
                    <span className="detail-value">{results.era}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Material:</span>
                    <span className="detail-value">{results.material}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Origin:</span>
                    <span className="detail-value">{results.origin}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Significance:</span>
                    <span className="detail-value">{results.significance}</span>
                  </div>
                </div>
              </div>

              <div className="fun-fact">
                <h3>🎓 Did You Know?</h3>
                <p>{results.funFact}</p>
              </div>

              <div className="action-buttons">
                <button className="action-btn save-btn" onClick={() => alert('Artifact saved to your collection! 💾')}>
                  💾 Save to Collection
                </button>
                <button className="action-btn share-btn" onClick={() => alert('Share link copied to clipboard! 🔗')}>
                  🔗 Share Discovery
                </button>
                <button className="action-btn new-analysis-btn" onClick={startNewAnalysis}>
                  🔍 Analyze Another Artifact
                </button>
              </div>
            </div>

            <div className="related-artifacts">
              <h3 className="related-title">Related Artifacts</h3>
              <div className="related-grid">
                <div className="related-item">
                  <h4>Rosetta Stone</h4>
                  <p>Key to deciphering hieroglyphs</p>
                </div>
                <div className="related-item">
                  <h4>Tutankhamun's Mask</h4>
                  <p>Golden funeral mask of pharaoh</p>
                </div>
                <div className="related-item">
                  <h4>Book of the Dead</h4>
                  <p>Ancient funerary texts</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ArtifactRecognition;
