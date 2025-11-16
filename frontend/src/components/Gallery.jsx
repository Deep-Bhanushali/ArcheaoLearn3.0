import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import ModelViewerModal from './ModelViewer';
import { HashLink } from 'react-router-hash-link';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleArtifacts, setVisibleArtifacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModelId, setSelectedModelId] = useState(null);

  const artifacts = [
    {
      id: 1,
      category: 'ancient-egypt',
      title: "Tutankhamun's Mask",
      badge: 'Iconic',
      date: '1323 BCE',
      location: 'Egypt',
      description: 'Gold funeral mask of the young pharaoh Tutankhamun, discovered by Howard Carter in 1922.',
      tags: ['Gold', 'Funerary', 'New Kingdom'],
      authenticity: 95,
      image: 'images/tutankhamun\'s_mask.jpg',
      obj: 'tutankhamun_mask',
    },
    {
      id: 2,
      category: 'roman-empire',
      title: 'Gladiator Helmet',
      badge: 'Rare',
      date: '79 CE',
      location: 'Pompeii',
      description: 'Bronze ceremonial helmet worn by the infamous gladiators in the Roman Colosseum, preserved by the volcanic ash.',
      tags: ['Bronze', 'Combat', 'Imperial Rome'],
      authenticity: 88,
      image: 'images/gladiator_helmet.jpg',
      obj: 'gladiator_helmet',
    },
    {
      id: 3,
      category: 'ancient-greece',
      title: 'Attic Black Amphora',
      badge: 'Featured',
      date: '530 BCE',
      location: 'Athens',
      description: 'Ceramic vessel depicting scenes from Greek mythology with black figures on a red-orange background.',
      tags: ['Pottery', 'Domestic', 'Classical'],
      authenticity: 92,
      image: 'images/amphora.jpg',
      obj: 'greek_amphora',
    },
    {
      id: 4,
      category: 'mesoamerica',
      title: 'Maya Calendar Stone',
      badge: 'Notable',
      date: '800 CE',
      location: 'Yucatan',
      description: 'Carved stone disk representing the Maya calendar system with astronomical calculations.',
      tags: ['Stone', 'Astronomical', 'Classic Maya'],
      authenticity: 85,
      image: 'images/stone.jpeg',
      obj: 'mayan_stone',
    },
    {
      id: 5,
      category: 'mesopotamia',
      title: 'Cuneiform Tablet',
      badge: 'Ancient',
      date: '2500 BCE',
      location: 'Ur',
      description: 'Clay tablet with cuneiform script recording grain transactions in ancient Sumer.',
      tags: ['Clay', 'Writing', 'Early Bronze Age'],
      authenticity: 90,
      image: 'images/tablet.jpg',
      obj: 'cuneiform_tablet',
    },
    {
      id: 6,
      category: 'roman-empire',
      title: 'Roman Villa Mosaic',
      badge: 'Exquisite',
      date: '150 CE',
      location: 'Sicily',
      description: 'Intricate floor mosaic from a wealthy Roman villa depicting geometric patterns.',
      tags: ['Tesserae', 'Decorative', 'Imperial Rome'],
      authenticity: 94,
      image: 'images/mosaic.jpg',
      obj: 'roman_mosaic',
    },
  ];

  const collections = [
    {
      id: 1,
      title: 'Egyptian Collection',
      count: 40,
      description: 'Explore the fascinating world of Ancient Egypt through our curated collection of artifacts.',
      views: '2.4k',
      image: 'images/egyptian_treasures.jpeg',
    },
    {
      id: 2,
      title: 'Roman Artifacts',
      count: 35,
      description: 'Discover the glory of Rome through this collection of imperial and everyday objects.',
      views: '1.8k',
      image: 'images/roman_artifacts.jpg',
    },
    {
      id: 3,
      title: 'Indian Treasures',
      count: 23,
      description: 'Unveiling the timeless treasures and cultural legacy of India as \'Golden Sparrow\'.',
      views: '2.8k',
      image: 'images/indian_art.jpeg',
    },
    {
      id: 4,
      title: 'Mesoamerican Art',
      count: 28,
      description: 'Journey through the rich history of Maya, Aztec, and other Mesoamerican civilizations.',
      views: '1.5k',
      image: 'images/mesoamerican_art.jpeg',
    }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setVisibleArtifacts(artifacts);
    } else {
      setVisibleArtifacts(artifacts.filter((artifact) => artifact.category === activeFilter));
    }
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const openModal = (modelId) => {
    setSelectedModelId(modelId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedModelId(null);
  };

  return (
    <>
      {/* gal-hero Section */}
      <section className="gal-hero-section">
        <div className="gal-hero-decorative-container">
          <div className="top-decorative-border"></div>
          <div className="bottom-decorative-border"></div>
          <div className="left-decorative-element"></div>
          <div className="right-decorative-element"></div>
          <div className="ancient-pattern-overlay"></div>
        </div>
        <div className="gal-hero-content-container">
          <div className="gal-hero-content">
            <h1 className="gal-hero-title">
              <span className="gold-text">Ancient Wonders Revealed</span>
            </h1>
            <div className="gal-hero-divider"></div>
            <p className="gal-hero-description">
              Explore our curated collection of historic artifacts spanning millennia, each telling a unique story of human civilization.
            </p>
            <div className="gal-hero-buttons">
              <button className="primary-button">
                <HashLink smooth to="#explore-artifacts">
                  Explore Artifact
                <i className="bi bi-arrow-right"></i>
                </HashLink>
              </button>
              <button className="secondary-button"><HashLink smooth to="#upload-artifacts">
              Upload Discorvery
            </HashLink></button>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="decorative-divider">
        <div className="divider-pattern"></div>
      </div>

      {/* Main Content */}
      <div id="explore-artifacts" className="texture-background">
        {/* Filter Bar */}
        <section className="filter-bar">
          <div className="filter-container">
            <div className="filter-buttons-container">
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('all')}
                >
                  All Artifacts
                </button>
                <button
                  className={`filter-btn ${activeFilter === 'ancient-egypt' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('ancient-egypt')}
                >
                  Egyptian
                </button>
                <button
                  className={`filter-btn ${activeFilter === 'roman-empire' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('roman-empire')}
                >
                  Roman
                </button>
                <button
                  className={`filter-btn ${activeFilter === 'ancient-greece' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('ancient-greece')}
                >
                  Greek
                </button>
                <button
                  className={`filter-btn ${activeFilter === 'mesoamerica' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('mesoamerica')}
                >
                  Mesoamerican
                </button>
                <button
                  className={`filter-btn ${activeFilter === 'mesopotamia' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('mesopotamia')}
                >
                  Mesopotamian
                </button>
              </div>
              <div className="filter-options">
                <div className="sort-dropdown">
                  <select className="sort-select">
                    <option>Sort: Newest First</option>
                    <option>Sort: Oldest First</option>
                    <option>Sort: A-Z</option>
                    <option>Sort: Region</option>
                  </select>
                  <div className="dropdown-icon">
                    <i className="bi bi-chevron-down"></i>
                  </div>
                </div>
                <div className="view-toggle">
                  <button className="view-toggle-button">
                    <i className="bi bi-grid-3x3-gap-fill"></i>
                  </button>
                  <button className="view-toggle-button">
                    <i className="bi bi-list"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artifact Gallery */}
        <section className="gallery-section">
          <div className="artifact-grid">
            {visibleArtifacts.map((artifact) => (
              <div key={artifact.id} className="artifact-item visible" data-category={artifact.category}>
                <div className="artifact-card">
                  <div className="artifact-image-container">
                    <img src={artifact.image} alt={artifact.title} className="artifact-image" />
                    <div className="image-overlay"></div>
                    <div className="artifact-buttons">
                      <div className="artifact-action-buttons">
                        <button
                          className="view-3d-button"
                          onClick={() => openModal(artifact.obj)}
                        >
                          <i className="bi bi-badge-3d"></i>
                        </button>
                        <button className="favorite-button">
                          <i className="bi bi-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="artifact-details">
                    <div className="artifact-header">
                      <h3 className="artifact-title">{artifact.title}</h3>
                      <span className="artifact-badge">{artifact.badge}</span>
                    </div>
                    <div className="artifact-metadata">
                      <span className="artifact-date">
                        <i className="bi bi-calendar"></i> {artifact.date}
                      </span>
                      <span className="artifact-location">
                        <i className="bi bi-geo-alt"></i> {artifact.location}
                      </span>
                    </div>
                    <p className="artifact-description">{artifact.description}</p>
                    <div className="artifact-tags">
                      {artifact.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="artifact-footer">
                      <button className="details-button">View details</button>
                      <div className="authenticity-meter">
                        <span className="authenticity-label">Authenticity</span>
                        <div className="authenticity-bar">
                          <div
                            className="authenticity-fill"
                            style={{ width: `${artifact.authenticity}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div id="upload-artifacts" className="load-more">
          <button className="load-more-button">Load More Artifacts</button>
        </div>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-background"></div>
          <div className="cta-container">
            <div className="cta-content">
              <h2 className="cta-title">
                Have an <span className="gold-text">artifact</span> to identify?
              </h2>
              <p className="cta-description">
                Upload images of your discovery and our AI will help identify its origin, age, and historical significance.
              </p>
              <button className="idfy-cta-button">START IDENTIFICATION</button>
            </div>
          </div>
        </section>

        {/* Upload Section */}
        <section className="upload-section">
          <div className="upload-container">
            <div className="upload-content">
              <div className="upload-info">
                <h2 className="upload-title">
                  Upload Your <span className="gold-text">Archaeological Discovery</span>
                </h2>
                <p className="upload-description">
                  Found something interesting? Share your archaeological discovery with our community of experts and enthusiasts. Our AI-powered tool will help identify and authenticate your artifact.
                </p>
                <ul className="upload-benefits">
                  <li className="benefit-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Get expert analysis and historical context</span>
                  </li>
                  <li className="benefit-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Contribute to our growing database of historical artifacts</span>
                  </li>
                  <li className="benefit-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Connect with archaeologists and historians worldwide</span>
                  </li>
                </ul>
              </div>
              <div className="upload-area">
                <div className="upload-dropzone">
                  <i className="bi bi-cloud-arrow-up"></i>
                  <h3 className="dropzone-title">Drag & Drop Your Photos</h3>
                  <p className="dropzone-or">or</p>
                  <button className="browse-button">Browse Files</button>
                  <p className="file-formats">Supported formats: JPG, PNG, HEIC (Max 10MB)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="collections-section">
          <div className="collections-header">
            <h2 className="collections-title">
              Featured <span className="gold-text">Collections</span>
            </h2>
            <a href="#" className="view-all-link">
              View all collections
            </a>
          </div>
          <div className="collections-grid">
            {collections.map((collection) => (
              <div key={collection.id} className="collection-card">
                <div className="collection-image-container">
                  <img src={collection.image} alt={collection.title} className="collection-image" />
                  <div className="collection-overlay"></div>
                  <div className="collection-info">
                    <h3 className="collection-title">{collection.title}</h3>
                    <p className="collection-count">{collection.count} artifacts</p>
                  </div>
                </div>
                <div className="collection-details">
                  <p className="collection-description">{collection.description}</p>
                  <div className="collection-footer">
                    <button className="explore-button">Explore collection</button>
                    <div className="view-count">
                      <i className="bi bi-eye"></i> {collection.views}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {isModalOpen && <ModelViewerModal modelId={selectedModelId} onClose={closeModal} />}
    </>
  );
};

export default Gallery;