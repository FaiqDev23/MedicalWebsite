// src/components/BookingSection.jsx
import React from 'react';

const BookingSection = () => {
  return (
    <div className="bg-gradient-linear p-12 text-center text-brand-blue">
      <h2 className="text-3xl font-bold">Easily book an appointment in 3 simple steps.</h2>
      <div className="mt-8 flex justify-center space-x-4">
        <input type="email" placeholder="Enter Your Email Address" className="input text-gray-700" />
        <input type="tel" placeholder="Enter Your Contact Number" className="input text-gray-700" />
        <input type="date" className="input text-gray-700" />
        <button className="btn bg-brand-blue text-white">Book Now</button>
      </div>
    </div>
  );
};

export default BookingSection;
