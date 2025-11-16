import React from 'react';

const QuizBox = ({
  title,
  description,
  icon,
  onClick,
  animationDelay = 0
}) => {
  return (
    <div 
      className="border border-gold rounded-lg p-6 flex flex-col items-center justify-between text-center bg-sand shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2 animate-fade-up relative overflow-hidden group" 
      onClick={onClick} 
      style={{
        animationDelay: `${animationDelay}s`
      }}
    >
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gold opacity-0 rounded-full group-hover:opacity-5 transition-opacity duration-500"></div>
      <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gold opacity-0 rounded-full group-hover:opacity-5 transition-opacity duration-500"></div>
      
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h2 className="text-xl font-bold mb-2 uppercase tracking-wide text-night group-hover:text-night transition-colors duration-300">
        {title}
      </h2>
      
      <p className="text-night-light text-sm mb-6 group-hover:text-night-light transition-colors duration-300">
        {description}
      </p>
      
      <button className="mt-auto px-6 py-2 bg-gold text-night font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
        <span className="relative z-10">Try Now</span>
        <span className="absolute inset-0 w-full h-full bg-gold-dark opacity-0 hover:opacity-30 transition-opacity duration-300"></span>
      </button>
    </div>
  );
};

export default QuizBox; 