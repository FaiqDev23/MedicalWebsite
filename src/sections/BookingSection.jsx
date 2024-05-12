// src/components/BookingSection.jsx
import React from 'react';
import  EmailIcon from '../assets/images/email-icon.png'; 
import  PhoneIcon from '../assets/images/phone-icon.png'; 
import  CalendarIcon from '../assets/images/calendar-icon.png'
const BookingSection = () => {
  return (
    <div className="bg-blue-100 p-12 text-center">
      <h2 className="text-3xl font-bold text-brand-blue">Easily book an appointment in 3 simple steps.</h2>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className=" items-center space-x-2">
         <img src={EmailIcon} alt="" className='block ' />
          <input type="email" placeholder="Enter Your Email Address" className="input border rounded-lg p-3 text-gray-700" />
        </div>
        <div className=" items-center space-x-2">
        <img src={PhoneIcon} alt="" /> <p>  </p>
          <input type="tel" placeholder="Enter Your Contact Number" className="input border rounded-lg p-3 text-gray-700" />
        </div>
        <div className=" items-center space-x-2">
         <img src={CalendarIcon} alt="" />
          <input type="date" className="input border rounded-lg p-3 text-gray-700" />
        </div>
        <div className='items-center space-x-2'>
        <button className="btn bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-lg text-white flex items-center">
          Book Now <span className="ml-2">➤</span> {/* Adjust icon as needed */}
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default BookingSection;
