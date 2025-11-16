import React from 'react';
import '../styles/Upload.css';

const Upload = () => {
  return (
    <section className="upload-section" id="upload">
      <div className="section-header">
        <h2 className="section-title">Upload Your Discoveries</h2>
        <p className="section-subtitle">Our AI will help identify your archaeological finds</p>
      </div>
      <span className="gold-line"></span>
      <div className="upload-container">
        <div className="upload-box">
          <div className="upload-icon">
            <i className="fas fa-cloud-upload-alt"></i>
          </div>
          <div className="upload-text">
            <h3>Upload Artifact Images</h3>
            <p>Drag and drop your files or click to browse</p>
            <div className="upload-types">Supported formats: JPG, PNG, TIFF (Max 10MB)</div>
            <button className="cta-upload-button">Upload Image</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upload;