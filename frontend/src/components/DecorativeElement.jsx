import React from 'react';

const DecorativeElement = ({ position }) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-right':
        return 'bottom-0 right-0';
      default:
        return 'top-0 left-0';
    }
  };

  const renderDecoration = () => {
    const isTop = position.includes('top');
    const isLeft = position.includes('left');
    
    if (isTop && isLeft) {
      return (
        <div className="relative">
          <div className="absolute -top-5 -left-5 w-40 h-40 border-t-2 border-l-2 border-gold opacity-20 rounded-tl-3xl"></div>
          <div className="absolute top-10 left-10 w-16 h-16 bg-gold opacity-5 rounded-full animate-pulse-slow"></div>
        </div>
      );
    } else if (isTop && !isLeft) {
      return (
        <div className="relative">
          <div className="absolute -top-5 -right-5 w-40 h-40 border-t-2 border-r-2 border-gold opacity-20 rounded-tr-3xl"></div>
          <div className="absolute top-20 right-20 w-12 h-12 bg-gold opacity-5 rounded-full animate-pulse-slow" style={{
            animationDelay: '1s'
          }}></div>
        </div>
      );
    } else if (!isTop && isLeft) {
      return (
        <div className="relative">
          <div className="absolute -bottom-5 -left-5 w-40 h-40 border-b-2 border-l-2 border-gold opacity-20 rounded-bl-3xl"></div>
          <div className="absolute bottom-15 left-15 w-14 h-14 bg-gold opacity-5 rounded-full animate-pulse-slow" style={{
            animationDelay: '1.5s'
          }}></div>
        </div>
      );
    } else {
      return (
        <div className="relative">
          <div className="absolute -bottom-5 -right-5 w-40 h-40 border-b-2 border-r-2 border-gold opacity-20 rounded-br-3xl"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-gold opacity-5 rounded-full animate-pulse-slow" style={{
            animationDelay: '2s'
          }}></div>
        </div>
      );
    }
  };

  return (
    <div className={`absolute ${getPositionClasses()} overflow-hidden pointer-events-none`}>
      {renderDecoration()}
    </div>
  );
};

export default DecorativeElement; 