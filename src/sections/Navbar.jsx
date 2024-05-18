// src/components/Navbar.jsx
import React from 'react';
import headerLogo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <img src={headerLogo} alt="HealNet Logo" className="h-12 mx-9" />
        <div className="hidden lg:flex items-center space-x-10">
          <a href="#" className="text-deep-blue mx-4 font-bold text-base hover:text-deep-blue">Home</a>
          <a href="#" className="text-gray-600 mx-4 font-semibold text-base hover:text-deep-blue">Services</a>
          <a href="#" className="text-gray-600 mx-4 font-semibold text-base hover:text-deep-blue">Find Doctors</a>
          <a href="#" className="text-gray-600 mx-4 font-semibold text-base hover:text-deep-blue">About Us</a>
          <a href="#" className="text-gray-600 mx-4 font-semibold text-base hover:text-deep-blue">Blog</a>
          <a href="#" className="text-gray-600 mx-4 font-semibold text-base hover:text-deep-blue">Contact Us</a>
        </div>
        <button className="hidden lg:block bg-gradient-to-r text-[20px] border-0 bg-gradient-custom from-brand-blue to-deep-blue hover:from-deep-blue hover:to-brand-blue text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          Join Us
        </button>
        <div className="lg:hidden flex items-center">
          <button id="menu-button" className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <div id="menu" className="hidden lg:hidden flex flex-col items-center space-y-4 mt-4">
        <a href="#" className="text-deep-blue font-bold text-base hover:text-deep-blue">Home</a>
        <a href="#" className="text-gray-600 font-semibold text-base hover:text-deep-blue">Services</a>
        <a href="#" className="text-gray-600 font-semibold text-base hover:text-deep-blue">Find Doctors</a>
        <a href="#" className="text-gray-600 font-semibold text-base hover:text-deep-blue">About Us</a>
        <a href="#" className="text-gray-600 font-semibold text-base hover:text-deep-blue">Blog</a>
        <a href="#" className="text-gray-600 font-semibold text-base hover:text-deep-blue">Contact Us</a>
        <button className="bg-gradient-to-r text-[20px] border-0 bg-gradient-custom from-brand-blue to-deep-blue hover:from-deep-blue hover:to-brand-blue text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
