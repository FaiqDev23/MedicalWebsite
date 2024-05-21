import React from 'react';
import DoctorImage from '../assets/images/doctor-1.png';
import HappyCustomersCard from '../components/HappyCustomersCard';
import EasyAppointment from '../components/EasyPointment';
import QuoteCard from '../components/QuoteCard';

const HeroSection = () => {
  return (
    <div className="bg-white p-8 lg:p-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Your 
            <span className="text-blue-500"> trusted partner </span>
            in digital healthcare.
          </h1>
          <p className="mt-4 text-md sm:text-lg text-gray-600">
            Empowering Your Health at Every Step. Experience personalized medical
            care from the comfort of your home. Connect with 
            <span className="text-blue-600 font-semibold"> certified doctors</span>, manage prescriptions, and schedule appointments with ease. Ready to
            take control of your health? 
            <a href="/get-started" className="text-blue-600 font-semibold"> Get Started</a> or 
            <a href="/book-appointment" className="text-blue-600 font-semibold"> Book an Appointment</a> today.
          </p>
          <button className="bg-gradient-to-r my-7 from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center space-x-2 mx-auto lg:mx-0">
            <span>Book an appointment</span>
            <svg className="w-4 h-4 transform translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex mt-8 space-x-4 justify-center lg:justify-start">
            <img src="path/to/amazon-logo.png" alt="Amazon" className="h-8" />
            <img src="path/to/apple-logo.png" alt="Apple" className="h-8" />
            <img src="path/to/google-logo.png" alt="Google" className="h-8" />
            <img src="path/to/notion-logo.png" alt="Notion" className="h-8" />
            <img src="path/to/spotify-logo.png" alt="Spotify" className="h-8" />
            <img src="path/to/slack-logo.png" alt="Slack" className="h-8" />
          </div>
        </div>
        <div className="relative mt-8 lg:mt-0">
          <div className="relative rounded-full shadow-lg bg-light-blue p-2 transition-colors duration-500 hover:bg-hover-blue inline-block">
            <img src={DoctorImage} alt="Doctor" className="rounded-full w-48 lg:w-64" />
          </div>
          <EasyAppointment className="absolute -top-16 -left-16" />
          <HappyCustomersCard className="absolute top-16 -right-16" />
          <QuoteCard number={42} className="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
