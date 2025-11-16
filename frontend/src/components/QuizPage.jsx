import React, { useState, useEffect, useRef, useContext } from 'react';
import QuizBox from './QuizBox';
import QuizMaster from './QuizMaster';
import Leaderboard from './Leaderboard';
import { 
  FaScroll, 
  FaGem, 
  FaGlobe, 
  FaBook, 
  FaLandmark, 
  FaStar, 
  FaPalette, 
  FaTools, 
  FaMap, 
  FaCompass, 
  FaTrophy, 
  FaHeart 
} from 'react-icons/fa';
import MotivationalQuote from './MotivationalQuote';
import DecorativeElement from './DecorativeElement';
import { AuthContext } from '../context/AuthContext';
import '../styles/Quiz.css';

const QuizPage = () => {
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const { user } = useContext(AuthContext);

  // Refs for focus management
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  // Effect to handle page load and focus management
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Remove focus from any element to prevent navbar focus
    if (document.activeElement) {
      document.activeElement.blur();
    }
    
    // Set focus to the hero section for accessibility
    if (heroRef.current) {
      heroRef.current.focus();
    }
    
    // Prevent the navbar from stealing focus
    const preventNavbarFocus = (e) => {
      if (e.target.closest('.navbar') || e.target.closest('header')) {
        e.preventDefault();
        if (heroRef.current) {
          heroRef.current.focus();
        }
      }
    };
    
    // Add event listener to prevent navbar focus
    document.addEventListener('focusin', preventNavbarFocus);
    
    return () => {
      document.removeEventListener('focusin', preventNavbarFocus);
    };
  }, []);

  const handleQuizSelect = (quizType) => {
    console.log('Quiz selected:', quizType);
    setActiveQuiz(quizType);
    setShowQuiz(true);
  };

  const handleBackToCategories = () => {
    console.log('Back to categories clicked');
    setShowQuiz(false);
    setActiveQuiz(null);
    // Refocus on hero when returning to categories
    if (heroRef.current) {
      heroRef.current.focus();
    }
  };

  // All quiz categories
  const allQuizCategories = [
    {
      id: 'ancient',
      title: 'Ancient Civilizations',
      description: 'Explore quizzes about Egyptian, Greek, Roman, and other major ancient cultures.',
      icon: <FaLandmark className="w-16 h-16 text-gold" />
    },
    {
      id: 'methods',
      title: 'Archaeological Methods',
      description: 'Test your knowledge of excavation techniques, dating methods, and field practices.',
      icon: <FaScroll className="w-16 h-16 text-gold" />
    },
    {
      id: 'artifacts',
      title: 'Artifacts & Objects',
      description: 'Identify and learn about significant archaeological discoveries and artifacts.',
      icon: <FaGem className="w-16 h-16 text-gold" />
    },
    {
      id: 'heritage',
      title: 'World Heritage Sites',
      description: 'Challenge yourself with questions about UNESCO World Heritage archaeological sites.',
      icon: <FaGlobe className="w-16 h-16 text-gold" />
    },
    {
      id: 'cultural',
      title: 'Cultural Practices & Traditions',
      description: 'Discover ancient rituals, customs, and social practices across different civilizations.',
      icon: <FaBook className="w-16 h-16 text-gold" />
    },
    {
      id: 'mythology',
      title: 'Mythology & Legends',
      description: 'Test your knowledge of ancient myths, legends, and religious beliefs from around the world.',
      icon: <FaStar className="w-16 h-16 text-gold" />
    },
    {
      id: 'discoveries',
      title: 'Discoveries & Excavations',
      description: 'Learn about famous archaeological expeditions and groundbreaking discoveries throughout history.',
      icon: <FaTools className="w-16 h-16 text-gold" />
    },
    {
      id: 'art',
      title: 'Art & Symbolism',
      description: 'Explore ancient artistic traditions, symbolism, and visual communication across cultures.',
      icon: <FaPalette className="w-16 h-16 text-gold" />
    }
  ];

  // Filter quiz categories based on user role
  const getQuizCategories = () => {
    if (!user) return allQuizCategories;
    
    switch (user.role) {
      case 'explorer':
        // Explorer gets only first 3 categories
        return allQuizCategories.slice(0, 3);
      case 'archaeologist':
      case 'curator':
        // Archaeologist and Curator get all categories
        return allQuizCategories;
      default:
        return allQuizCategories;
    }
  };

  const quizCategories = getQuizCategories();

  // If a quiz is active, show the QuizMaster component
  if (showQuiz && activeQuiz) {
    console.log('Rendering QuizMaster with quiz type:', activeQuiz);
    return (
      <QuizMaster 
        quizType={activeQuiz} 
        onBack={handleBackToCategories} 
      />
    );
  }

  console.log('Rendering QuizPage categories');
  return (
    <div ref={containerRef} tabIndex="-1" style={{ outline: 'none' }}>
      <DecorativeElement position="top-left" />
      <DecorativeElement position="top-right" />
      
      <header 
        className="quiz-header text-center mb-16 animate-fade-down relative"
        // ref={heroRef}
        tabIndex="-1"
        style={{ outline: 'none' }}
        role="banner"
        aria-label="Archaeological Quiz Challenge"
      >
        <h1 className="text-5xl font-bold tracking-tight text-night mb-6 relative">
          <span className="relative inline-block">
            <span className="absolute -inset-1 bg-gold-light blur-md opacity-30 rounded-lg"></span>
            <span className="relative">Archaeological</span>
          </span>{' '}
          <span className="text-gold relative">
            Quiz Challenge
          </span>
        </h1>
        <p className="text-xl text-night-light max-w-3xl mx-auto mb-8">
          Challenge yourself with our diverse collection of archaeological
          quizzes and earn badges as you progress. Uncover the mysteries of the
          past and expand your knowledge of human history.
        </p>
        <div className="mt-8 p-6 bg-gold-light rounded-lg inline-block shadow-md transform hover:scale-102 transition-transform duration-300 border border-gold-dark border-opacity-20">
          <p className="text-night italic">
            "Archaeology is the peeping Tom of the sciences. It is the sandbox
            of men who care not where they are going; they merely want to know
            where everyone else has been." — Jim Bishop
          </p>
        </div>
      </header>

      {/* Role-based Access Information */}
      {user && (
        <div className="mb-12 text-center">
          {user.role === 'explorer' ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto shadow-sm mb-16">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                🎯 Explorer Access Level
              </h3>
              <p className="text-blue-700 text-lg">
                As an Explorer, you have access to the first 3 quiz categories. 
                Upgrade to Archaeologist or Curator to unlock all quiz categories and advanced features.
              </p>
            </div>
          ) : user.role === 'archaeologist' ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-3xl mx-auto shadow-sm mb-16">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                🔬 Archaeologist Access Level
              </h3>
              <p className="text-green-700 text-lg">
                You have access to all quiz categories and advanced features. 
                Upgrade to Curator to unlock the video gallery and administrative tools.
              </p>
            </div>
          ) : (
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 max-w-3xl mx-auto shadow-sm mb-16">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">
                👑 Curator Access Level
              </h3>
              <p className="text-purple-700 text-lg">
                You have full access to all features including the video gallery and administrative tools.
              </p>
            </div>
          )}
        </div>
      )}

      <div className="relative mb-24 m-4">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gold opacity-10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gold opacity-10 rounded-full blur-xl"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quizCategories.map((category, index) => (
            <QuizBox 
              key={category.id} 
              title={category.title} 
              description={category.description} 
              icon={category.icon} 
              onClick={() => handleQuizSelect(category.id)} 
              animationDelay={index * 0.1} 
            />
          ))}
        </div>
      </div>

      <MotivationalQuote />

      <div className="my-20 bg-gold-light p-8 rounded-lg shadow-md animate-fade-in relative overflow-hidden m-4">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
        <div className="absolute -top-5 -right-5 w-16 h-16 bg-gold opacity-20 rounded-full"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gold opacity-10 rounded-full"></div>
        <h2 className="text-2xl font-bold mb-8 text-night text-center relative">
          <FaCompass className="w-8 h-8 text-gold-dark absolute -left-2 -top-2 opacity-20" />
          <span>Why Study Archaeology?</span>
          <FaCompass className="w-8 h-8 text-gold-dark absolute -right-2 -top-2 opacity-20" />
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-sand p-6 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gold-dark border-opacity-10">
            <h3 className="text-xl font-semibold mb-3 text-gold-dark flex items-center">
              <FaMap className="w-5 h-5 mr-2" />
              Connect with the Past
            </h3>
            <p className="text-night-light">
              Archaeology bridges the gap between present and past, helping us
              understand our shared human journey and cultural heritage.
            </p>
          </div>
          <div className="bg-sand p-6 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gold-dark border-opacity-10">
            <h3 className="text-xl font-semibold mb-3 text-gold-dark flex items-center">
              <FaTools className="w-5 h-5 mr-2" />
              Solve Ancient Mysteries
            </h3>
            <p className="text-night-light">
              Every artifact tells a story. Archaeologists are detectives who
              piece together clues to solve mysteries of ancient civilizations.
            </p>
          </div>
          <div className="bg-sand p-6 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gold-dark border-opacity-10">
            <h3 className="text-xl font-semibold mb-3 text-gold-dark flex items-center">
              <FaLandmark className="w-5 h-5 mr-2" />
              Shape Our Future
            </h3>
            <p className="text-night-light">
              Understanding past societies—their successes and failures—provides
              valuable insights for addressing contemporary global challenges.
            </p>
          </div>
        </div>
      </div>

      <Leaderboard />

      <div className="mt-20 mb-12 bg-night p-8 rounded-lg shadow-lg animate-fade-up relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gold"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold opacity-5 rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gold opacity-5 rounded-full"></div>
        <h2 className="text-2xl font-bold mb-8 text-sand text-center">
          <span className="relative">
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold"></span>
            Famous Archaeologists & Their Wisdom
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-night-light p-6 rounded-lg border border-gold border-opacity-20 transform hover:scale-102 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gold flex items-center">
              <FaTrophy className="w-5 h-5 mr-2" />
              Howard Carter
            </h3>
            <p className="text-sand-light italic mb-2">
              "I see wonderful things."
            </p>
            <p className="text-sand">
              Howard Carter's famous words upon first peering into Tutankhamun's
              tomb remind us that archaeology is about discovery and wonder. The
              pursuit of knowledge should always maintain its sense of awe.
            </p>
          </div>
          <div className="bg-night-light p-6 rounded-lg border border-gold border-opacity-20 transform hover:scale-102 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gold flex items-center">
              <FaTrophy className="w-5 h-5 mr-2" />
              Mary Leakey
            </h3>
            <p className="text-sand-light italic mb-2">
              "Theories come and go, but fundamental data always remain the
              same."
            </p>
            <p className="text-sand">
              Mary Leakey's commitment to methodical fieldwork reminds us that
              careful observation and documentation form the foundation of
              archaeological understanding.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center my-16 animate-fade-up">
        <h2 className="text-2xl font-bold mb-6 text-night">
          Ready to Begin Your Archaeological Journey?
        </h2>
        <p className="text-night-light max-w-2xl mx-auto mb-8">
          Each quiz brings you one step closer to understanding our shared human
          heritage. Challenge yourself, learn something new, and join our
          community of history enthusiasts.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 bg-gold text-night font-semibold rounded-full shadow-md hover:bg-gold-dark transition-all duration-300 transform hover:scale-105 flex items-center">
            <FaHeart className="w-5 h-5 mr-2" />
            Start Exploring
          </button>
          <button className="px-8 py-3 border-2 border-gold text-night font-semibold rounded-full hover:bg-gold-light transition-all duration-300 transform hover:scale-105">
            Join Our Community
          </button>
        </div>
      </div>

      <DecorativeElement position="bottom-left" />
      <DecorativeElement position="bottom-right" />
    </div>
  );
};

export default QuizPage; 