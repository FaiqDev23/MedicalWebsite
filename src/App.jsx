// src/App.jsx
import React from 'react';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import BookingSection from './sections/BookingSection';
import ServicesSection from './sections/ServicesSection';
import HealNetStory from './sections/HealNetStory'
// Import other sections similarly

function App() {
  return (
    <div className="font-manrope">
      <Navbar />
      <HeroSection />
      <BookingSection />
      <ServicesSection />
      <HealNetStory/>
      {/* Render other sections here */}
    </div>
  );
}

export default App;
