// src/App.jsx
import React from 'react';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import BookingSection from './sections/BookingSection';
import ServicesSection from './sections/ServicesSection';
import HealNetStory from './sections/HealNetStory'
import HowItWorksSection from './sections/HowItWorksSection';
import PasientTestimenioals from './sections/PasientTestimenioals';
import OurTeam from './sections/OurTeam';
import HelpDeskForm from './sections/HelpDeskForm';
import Footer from './sections/Footer'
// Import other sections similarly

function App() {
  return (
    <div className="font-manrope">
      <Navbar />
      <HeroSection />
      <BookingSection />
      <ServicesSection />
      <HealNetStory/>
      <HowItWorksSection/>
      <PasientTestimenioals/>
      <OurTeam/>
      <HelpDeskForm/>
      <Footer/>
      {/* Render other sections here */}
    </div>
  );
}

export default App;
