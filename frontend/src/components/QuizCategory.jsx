import React from 'react';

const QuizCategory = ({ icon, title, description, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  const handleFocus = (e) => {
    // Prevent focus from causing scroll
    e.target.scrollIntoView = () => {};
  };

  return (
    <div 
      className="quiz-category" 
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      tabIndex="0"
      role="button"
      aria-label={`Start ${title} quiz`}
    >
      <i className={`fas ${icon} quiz-icon`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default QuizCategory;