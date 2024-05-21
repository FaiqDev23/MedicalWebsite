import React from 'react';

const QuoteCard = ({ number }) => {
  return (
    <div className="flex items-center space-x-2 bg-white p-4 border-solid border-2 border-sky-300 rounded-lg shadow-lg max-w-xs">
      <span className="text-blue-500 text-2xl font-bold">{number}</span>
      <div className="bg-blue-500 rounded-full p-2">
        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 112-0 1 1 0 01-2 0zm-2 6a1 1 0 011-1h4a1 1 0 110 2h-3v2a1 1 0 11-2 0v-3z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default QuoteCard;
