// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BookingSection from './components/BookingSection';
import ServicesSection from './components/ServicesSection';
import StorySection from './components/StorySection';
// Import other sections similarly

function App() {
  return (
    <div className="font-manrope">
      <Navbar />
      <HeroSection />
      <BookingSection />
      <ServicesSection />
      <StorySection />
      {/* Render other sections here */}
    </div>
  );
}

export default App;
