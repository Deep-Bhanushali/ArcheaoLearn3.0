import React, { useEffect, useState } from 'react';

const MotivationalQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');
  
  const quotes = [
    {
      text: "The past is never dead. It's not even past.",
      author: 'William Faulkner'
    },
    {
      text: "Archaeology is the search for fact, not truth. If it's truth you're interested in, Professor Tyree's philosophy class is right down the hall.",
      author: 'Indiana Jones'
    },
    {
      text: "Archaeology is destruction. What we dig up can never be replaced. That's why the most important finds are often the records.",
      author: 'Sarah Parcak'
    },
    {
      text: "We archaeologists don't care about written history. It's too easy. We want to discover the past ourselves.",
      author: 'Kent V. Flannery'
    },
    {
      text: 'Archaeology increases our knowledge of the past, tells us how people lived in different times and places, and helps us understand why things have changed through time.',
      author: 'Brian Fagan'
    },
    {
      text: 'The best archaeologist is the one with the most open mind, willing to accept that what we think we know may be challenged by what we find.',
      author: 'Zahi Hawass'
    },
    {
      text: "Archaeology is not a science, it's a vendetta.",
      author: 'Mortimer Wheeler'
    },
    {
      text: 'The past is a foreign country: they do things differently there.',
      author: 'L.P. Hartley'
    },
    {
      text: 'Archaeology is the only discipline that seeks to study human behavior and thought without having any direct contact with either.',
      author: 'Bruce Trigger'
    },
    {
      text: 'In archaeology, context is everything. Objects have little meaning unless their context is properly understood and documented.',
      author: 'Colin Renfrew'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setCurrentQuote(prev => (prev + 1) % quotes.length);
        setFadeState('fade-in');
      }, 500);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="py-8 px-8 bg-night rounded-lg shadow-lg my-16 text-center relative overflow-hidden m-4">
      <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
      <div className="absolute -top-8 -left-8 w-24 h-24 bg-gold opacity-5 rounded-full"></div>
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gold opacity-5 rounded-full"></div>
      
      <div className="absolute top-4 left-4 opacity-10">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
      </div>
      
      <div className="absolute bottom-4 right-4 opacity-10">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M21 21c-3 0-7-1-7-8V5c0-1.25.757-2.017 2-2h4c1.25 0 2 .75 2 1.972V11c0 1.25-.75 2-2 2h-.75c0 2.25-.25 4 2.75 4v3c0 1 0 1-1 1z"></path>
          <path d="M9 21c-3 0-7-1-7-8V5c0-1.25.756-2.017 2-2h4c1.25 0 2 .75 2 1.972V11c0 1.25-.75 2-2 2H7c0 2.25-.25 4 2.75 4v3c0 1 0 1-1 1z"></path>
        </svg>
      </div>
      
      <div className={`quote-container ${fadeState} relative z-10`}>
        <p className="text-2xl italic text-sand mb-4 leading-relaxed">
          "{quotes[currentQuote].text}"
        </p>
        <p className="text-gold text-lg font-medium">
          — {quotes[currentQuote].author}
        </p>
      </div>
      
      <div className="flex justify-center mt-6">
        {quotes.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
              currentQuote === index ? 'bg-gold' : 'bg-night-lighter'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MotivationalQuote; 