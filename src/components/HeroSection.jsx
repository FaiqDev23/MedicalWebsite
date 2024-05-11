// src/components/HeroSection.jsx
import React from 'react';

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
        <div className="flex-1 mt-6 lg:mt-0 text-center lg:text-right">
          <img src="https://purepng.com/public/uploads/large/purepng.com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-142152685722142y8x.png" alt="Doctor" className="inline-block rounded-full shadow-lg" />
          <div className="mt-4">
            <div className="inline-flex items-center">
              <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mr-2">2400+</div>
              <div className="text-sm text-gray-500">Happy Customers (4.7 Stars)</div>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Lorem ipsum dolor sit amet, ligula ego. consectetuer adipiscing elit doloras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
