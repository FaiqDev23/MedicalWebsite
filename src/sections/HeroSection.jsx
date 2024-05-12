// src/components/HeroSection.jsx
import React from 'react';
import DoctorProfileCard from '../components/DoctorProfileCard';

const HeroSection = () => {
  return (
    <div className="bg-white p-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1">
        <h1 className="text-5xl lg:text-6xl">
        Your 
        <span className="text-blue-500"> trusted partner </span>
        in digital healthcare.
      </h1>
        <p className="mt-4 text-lg text-gray-600">
          Empowering Your Health at Every Step. Experience personalized medical
          care from the comfort of your home. Connect with 
          <span className="text-blue-600 font-semibold"> certified doctors</span>, manage prescriptions, and schedule appointments with ease. Ready to
          take control of your health? 
          <a href="/get-started" className="text-blue-600 font-semibold">Get Started</a> or 
          <a href="/book-appointment" className="text-blue-600 font-semibold">Book an Appointment</a> today.
        </p>
        <button className="bg-gradient-to-r my-7 from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center space-x-2">
      <span>Book an appointment</span>
      <svg className="w-4 h-4 transform translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
    </button>
        </div>
        {/*  */}

        <DoctorProfileCard/>
      </div>
    </div>
  );
};

export default HeroSection;