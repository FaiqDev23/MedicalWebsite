// src/components/HappyCustomersCard.jsx
import React from 'react';

const HappyCustomersCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center  absolute justify-between max-w-xl mx-auto ">
      {/* Customer Images */}
      <div className="flex -space-x-2 overflow-hidden">
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com" alt="Customer 1"/>
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://via.placeholder.com/150/FF0000/FFFFFF?Text=WebsiteBuilders.com" alt="Customer 2"/>
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.com" alt="Customer 3"/>
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://via.placeholder.com/150/008000/FFFFFF?Text=WebsiteBuilders.com" alt="Customer 4"/>
      </div>
      
      {/* Customer Count */}
      <div className="ml-4 text-lg font-semibold">
        2400+<br />
        <span className="text-blue-600">Happy Customers</span>
      </div>

      {/* Rating */}
      <div className="text-yellow-400 flex items-center">
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">{/* SVG path for star */}</svg>
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">{/* SVG path for star */}</svg>
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">{/* SVG path for star */}</svg>
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">{/* SVG path for star */}</svg>
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">{/* SVG path for star */}</svg>
        (4.7 Stars)
      </div>
    </div>
  );
};

export default HappyCustomersCard;
