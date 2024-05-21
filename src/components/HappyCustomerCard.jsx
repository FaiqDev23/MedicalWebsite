import React from 'react';
import Profile1 from '../assets/images/profile1.png';
import Profile2 from '../assets/images/profile2.png';
import Profile3 from '../assets/images/profile3.png';
import Profile4 from '../assets/images/profile4.png';
import Vector from '../assets/images/Vector.png';

const HappyCustomersCard = () => {
  return (
    <div className="bg-white p-6 border-solid border-2 border-sky-300 rounded-lg shadow-lg max-w-xs">
      {/* Customer Images */}
      <div className="flex -space-x-2 overflow-hidden mb-2">
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={Profile1} alt="Customer 1" />
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={Profile2} alt="Customer 2" />
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={Profile3} alt="Customer 3" />
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={Profile4} alt="Customer 4" />
      </div>
      {/* Customer Count */}
      <div className="flex items-center mb-2">
        <p className="font-bold text-2xl">2400<span className="text-[#00A4F4]">+</span></p>
      </div>
      <p className="text-left text-[#00A4F4] text-lg font-semibold">Happy Customers</p>
      {/* Rating */}
      <div className="text-yellow-400 flex items-center">
        <img src={Vector} alt="Star" className="h-5 w-5" />
        <img src={Vector} alt="Star" className="h-5 w-5" />
        <img src={Vector} alt="Star" className="h-5 w-5" />
        <img src={Vector} alt="Star" className="h-5 w-5" />
        <img src={Vector} alt="Star" className="h-5 w-5" />
        <span className="text-[#6D6D6D] font-bold mx-1">(4.7 Stars)</span>
      </div>
    </div>
  );
};

export default HappyCustomersCard;
