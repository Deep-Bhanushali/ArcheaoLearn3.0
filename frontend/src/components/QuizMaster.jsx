import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaCheck, FaTimes } from 'react-icons/fa';
import '../styles/Quiz.css';
import { quizData } from '../data/quizData';

const QuizMaster = ({ quizType, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [animation, setAnimation] = useState('fade-in');

  useEffect(() => {
    console.log('QuizMaster mounted with quiz type:', quizType);
    console.log('Available quiz data:', Object.keys(quizData));
    const questions = quizData[quizType] || [];
    console.log('Questions for this quiz type:', questions.length);
    setQuizQuestions(questions);
  }, [quizType]);

  const handleAnswerSelect = (index) => {
    if (selectedAnswer !== null) return;
    
    console.log('Answer selected:', index);
    setSelectedAnswer(index);
    const correct = index === quizQuestions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      setAnimation('fade-out');
      setTimeout(() => {
        if (currentQuestion < quizQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
          setIsCorrect(null);
          setAnimation('fade-in');
        } else {
          setShowResult(true);
        }
      }, 500);
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setAnimation('fade-in');
  };

  const getTitleByQuizType = () => {
    switch (quizType) {
      case 'ancient':
        return 'Ancient Civilizations';
      case 'methods':
        return 'Archaeological Methods';
      case 'artifacts':
        return 'Artifacts & Objects';
      case 'heritage':
        return 'World Heritage Sites';
      case 'cultural':
        return 'Cultural Practices & Traditions';
      case 'mythology':
        return 'Mythology & Legends';
      case 'discoveries':
        return 'Discoveries & Excavations';
      case 'art':
        return 'Art & Symbolism';
      default:
        return 'Quiz';
    }
  };

  if (quizQuestions.length === 0) {
    console.log('No questions available, showing loading message');
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
        <p>Loading questions...</p>
        <p>Quiz type: {quizType}</p>
        <p>Available quiz types: {Object.keys(quizData).join(', ')}</p>
      </div>
    );
  }

  console.log('Rendering quiz with', quizQuestions.length, 'questions');
  return (
    <div className=" quiz-header max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <button 
        onClick={onBack} 
        className="flex items-center text-gold hover:text-gold-dark mb-6 transition-colors"
      >
        <FaArrowLeft className="w-5 h-5 mr-2" />
        Back to Categories
      </button>
      
      <div className="bg-sand rounded-lg border border-gold p-8 shadow-lg">
        {!showResult ? (
          <div className={`quiz-container ${animation}`}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-night">
                {getTitleByQuizType()}
              </h2>
              <div className="w-full bg-sand-dark rounded-full h-2.5">
                <div 
                  className="bg-gold h-2.5 rounded-full transition-all duration-500" 
                  style={{
                    width: `${(currentQuestion + 1) / quizQuestions.length * 100}%`
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-night-light mt-1">
                <span>
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
                <span>Score: {score}</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-night">
                {quizQuestions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleAnswerSelect(index)} 
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 
                      ${selectedAnswer === null 
                        ? 'border-sand-dark hover:border-gold hover:bg-gold-light' 
                        : selectedAnswer === index 
                          ? isCorrect 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-red-500 bg-red-50' 
                          : index === quizQuestions[currentQuestion].correctAnswer && selectedAnswer !== null 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-sand-dark opacity-70'
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{option}</span>
                      {selectedAnswer !== null && index === quizQuestions[currentQuestion].correctAnswer && (
                        <FaCheck className="w-5 h-5 text-green-500" />
                      )}
                      {selectedAnswer === index && !isCorrect && (
                        <FaTimes className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {selectedAnswer !== null && (
              <div className={`p-4 rounded-lg ${
                isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              } animate-fade-in`}>
                <p className="font-medium">
                  {isCorrect ? 'Correct!' : 'Incorrect!'}{' '}
                  {quizQuestions[currentQuestion].explanation}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-night">
              Quiz Completed!
            </h2>
            <div className="mb-8">
              <div className="text-5xl font-bold text-gold mb-2">
                {score} / {quizQuestions.length}
              </div>
              <p className="text-night-light">
                {score === quizQuestions.length 
                  ? "Perfect score! You're an expert!" 
                  : score > quizQuestions.length / 2 
                    ? 'Great job! You know your archaeology!' 
                    : "Keep learning! You'll be an expert soon!"
                }
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={resetQuiz} 
                className="px-6 py-2 bg-gold text-night rounded-lg hover:bg-gold-dark transition-colors"
              >
                Try Again
              </button>
              <button 
                onClick={onBack} 
                className="px-6 py-2 border border-gold text-gold rounded-lg hover:bg-gold-light transition-colors"
              >
                Back to Categories
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizMaster; 