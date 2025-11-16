import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import '../styles/Features.css';

const FeatureCard = ({ image, title, description, linkText, link }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (link.startsWith('/#')) {
      const id = link.substring(2); // Get the ID name (e.g., "timeline-section")
      const element = document.getElementById(id);
      if (element) {
        // Use the browser's built-in smooth scrolling
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (link === "/chat") {
      // Handle the external redirect for chat
      window.location.href = "https://archieo-chat.onrender.com/";
    } else {
      // Handle all other internal page navigations
      navigate(link);
    }
  };

  return (
    <div className="feature-card">
      <img src={image} alt={title} />
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="feature-link" onClick={handleClick}>
          {linkText} <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

const Features = () => {
  const featureData = [
    {
      image: "/images/artifact_gallery.jpg",
      title: "Artifact Gallery",
      description: "Explore a curated collection of high-resolution images of artifacts from various civilizations and time periods.",
      linkText: "Try now",
      link: "/gallery",
    },
    {
      image: "/images/artifact_recognition.jpg",
      title: "Artifact Recognition",
      description: "Upload images of artifacts to identify their historical significance and cultural origins.",
      linkText: "Try now",
      link: "/artifact",
    },
    {
      image: "/images/musuem_tour.jpg",
      title: "Virtual Tours",
      description: "Experience guided virtual tours of famous museums and archaeological sites from the comfort of your home.",
      linkText: "Visit now",
      link: "/vidgallery",
    },
    {
      image: "/images/chatbot.jpg",
      title: "AI Historical Assistant",
      description: "Get instant answers to your historical questions from our knowledgeable AI chatbot.",
      linkText: "Ask now",
      link: "/chat",
    },
    {
      image: "/images/timeline.jpg",
      title: "Historical Timeline",
      description: "Explore chronological events across civilizations with our interactive timeline feature.",
      linkText: "Explore now",
      link: "/#timeline-section",
    },
    {
      image: "/images/quiz.jpg",
      title: "Quiz & Challenges",
      description: "Test your knowledge with engaging quizzes and challenges on various historical topics.",
      linkText: "Test now",
      link: "/quizpage",
    },
    {
      image: "/images/myth.jpg",
      title: "Myth & Mysteries",
      description: "Engage in interactive scenarios where you can distinguish between historical facts and fictional narratives.",
      linkText: "Try now",
      link: "/myths",
    },
    {
      image: "/images/tapestey.jpg",
      title: "Human Tapestry",
      description: "Discover the interconnected stories of humanity through our detailed genealogical maps.",
      linkText: "Discover now",
      link: "/human-tapestry",
    },
    {
      image: "/images/world-exp.jpg",
      title: "World Explorer",
      description: "Journey across an interactive map to uncover the rich history, legends, and heritage of every nation.",
      linkText: "Explore now",
      link: "/worldExplore",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const carouselRef = useRef(null);
  const totalItems = featureData.length;
  
  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // // Auto-rotate carousel
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex(prevIndex => (prevIndex + 1) % totalItems);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [totalItems]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 4) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 4 + totalItems) % totalItems);
  };

  // Calculate which items to display
  const getVisibleItems = () => {
    const items = [];
    
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % totalItems;
      items.push(featureData[index]);
    }
    
    return items;
  };

  return (
    <section id="features" className="features">
      <h2 className="section-title">Our Features</h2>
      <p className="section-subtitle">
        Discover our innovative learning tools designed to bring archaeology and ancient history to life.
      </p>
      <span className="gold-line"></span>
      
      <div className="carousel-container">
        <button className="carousel-button carousel-button-prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div className="feature-cards" ref={carouselRef}>
          {getVisibleItems().map((feature, index) => (
            <FeatureCard
              key={`${currentIndex}-${index}`}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
              link={feature.link}
            />
          ))}
        </div>
        
        <button className="carousel-button carousel-button-next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div className="carousel-dots">
        {featureData.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;