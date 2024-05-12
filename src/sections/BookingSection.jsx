// src/components/BookingSection.jsx
import React from 'react';
import EmailIcon from '../assets/images/email-icon.png';
import PhoneIcon from '../assets/images/phone-icon.png';
import CalendarIcon from '../assets/images/calendar-icon.png';

const BookingSection = () => {
  return (
    <div className="bg-blue-100 p-12 text-center max-w-[1200px] mx-auto">
      <h2 className="text-3xl font-bold text-brand-blue text-left">Easily book an appointment in 3 simple steps.</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="space-y-2">
          <div className='flex items-center'>
            <img src={EmailIcon} alt="Email" className='h-6 mr-2' /> 
            <p>Email Address</p>
          </div>
          <input type="email" placeholder="Enter Your Email Address" className="input border rounded-lg p-3 text-gray-700 w-full" />
        </div>
        <div className="space-y-2">
          <div className='flex items-center'>
            <img src={PhoneIcon} alt="Phone" className='h-6 mr-2' /> 
            <p>Contact Number</p>
          </div> 
          <input type="tel" placeholder="Enter Your Contact Number" className="input border rounded-lg p-3 text-gray-700 w-full" />
        </div>
        <div className="space-y-2">
          <div className='flex items-center'>
            <img src={CalendarIcon} alt="Calendar" className='h-6 mr-2' /> 
            <p>Date of Appointment</p>
          </div>
          <input type="date" className="input border rounded-lg p-3 text-gray-700 w-full" />
        </div>
        <button className="btn bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-lg text-white flex items-center justify-center ">
          Book Now <span className="ml-2">➤</span> {/* Adjust icon as needed */}
        </button>
      </div>
    </div>
  );
};

export default BookingSection;
