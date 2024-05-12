// src/components/Navbar.jsx
import React from 'react';
import headerLogo from '../assets/images/logo.png'
const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4  flex justify-evenly items-center">
        <div className="flex items-center space-x-10">
          <img src={headerLogo} alt="HealNet Logo" className="h-12 mx-9" />
          <a href="#" className="text-deep-blue mx-[40px] font-bold text-base hover:text-deep-blue">Home</a>
          <a href="#" className="text-gray-600 mx-[40px] font-semibold text-base hover:text-deep-blue">Services</a>
          <a href="#" className="text-gray-600 mx-[40px] font-semibold text-base hover:text-deep-blue">Find Doctors</a>
          <a href="#" className="text-gray-600 mx-[40px] font-semibold text-base hover:text-deep-blue">About Us</a>
          <a href="#" className="text-gray-600 mx-[40px] font-semibold text-base hover:text-deep-blue">Blog</a>
          <a href="#" className="text-gray-600 mx-[40px] font-semibold text-base hover:text-deep-blue">Contact Us</a>
        </div>
        <button className="bg-gradient-to-r text-[20px] border-0 bg-gradient-custom  from-brand-blue to-deep-blue hover:from-deep-blue hover:to-brand-blue text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
