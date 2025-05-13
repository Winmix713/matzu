import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        bg-[#131318] rounded-xl border border-gray-800/50
        backdrop-blur-sm shadow-lg p-4
        transition-all duration-300 hover:shadow-xl
        ${className}
      `}
      style={{
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        background: 'rgba(19, 19, 24, 0.95)'
      }}
    >
      {children}
    </div>
  );
};

export default Card;