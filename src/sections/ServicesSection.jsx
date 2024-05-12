import React from 'react';
import onlineConsultationIcon from '../assets/images/online-consultation-icon.png';
import bookingAppointmentIcon from '../assets/images/booking-appointment-icon.png';

const ServicesSection = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-deep-blue">Top services we offer</h2>
        <p className='font-manrope text-stone-500 mx-auto text-center'>In today’s fast-paced world, your health deserves the utmost attention and convenience. That’s why HealNet offers a suite of integrated services designed to cater to your healthcare needs digitally:</p>
        <div className='container flex mt-[10px] max-w-[1200px] flex-wrap'>
        <div className="m-[20px] max-h-[280px] h-[270px]">
            <div className="bg-white border-sky-300 border-2 border-spacing-2 max-w-[570px] rounded-lg p-[50px] shadow text-deep-blue">
              <img src={onlineConsultationIcon} alt="Online Consultation" className="h-12 w-12" />
              <h3 className="font-semibold text-lg mt-2">Online Consultation</h3>
              <p className="text-sm mt-2 h-[100px]">Consult with top doctors across various specialties via video or chat communication. It’s totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation.</p>
            </div>
          
        </div>
        <div className="m-[20px] h-[260px] max-h-[280px]">
            <div className="bg-white border-sky-300 border-2 border-spacing-2 max-w-[400px] rounded-lg p-[50px] shadow text-deep-blue">
              <img src={bookingAppointmentIcon} alt="Online Consultation" className="h-12 w-12" />
              <h3 className="font-semibold text-lg mt-2">Booking Appointments</h3>
              <p className="text-sm mt-2 h-[100px]">Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features.</p>
            </div>
          
        </div>
        <div className="my-[20px] mx-[23px] h-[270px] max-h-[280px]">
            <div className="bg-white border-sky-300 border-2 border-spacing-2 max-w-[400px] rounded-lg p-[50px] shadow text-deep-blue">
              <img src={bookingAppointmentIcon} alt="Online Consultation" className="h-12 w-12" />
              <h3 className="font-semibold text-lg mt-2">Prescriptions</h3>
              <p className="text-sm mt-2 h-[100px] max-w-[200px]">Receive and renew prescriptions digitally after your consultation with our specialists .</p>
            </div>
          
        </div>
        <div className="my-[20px] mx-[23px] h-[270px] max-h-[280px]">
            <div className="bg-white border-sky-300 border-2 border-spacing-2 max-w-[400px] rounded-lg p-[50px] shadow text-deep-blue">
              <img src={bookingAppointmentIcon} alt="Online Consultation" className="h-12 w-12" />
              <h3 className="font-semibold text-lg mt-2">Medical Notes</h3>
              <p className="text-sm mt-2 h-[100px] max-w-[200px]">Obtain necessary medical notes for work or school with only a few clicks of hassle.</p>
            </div>
          
        </div>
        <div className="my-[20px] mx-[23px] h-[270px] max-h-[280px]">
            <div className="bg-white border-sky-300 border-2 border-spacing-2 max-w-[400px] rounded-lg p-[50px] shadow text-deep-blue">
              <img src={bookingAppointmentIcon} alt="Online Consultation" className="h-12 w-12" />
              <h3 className="font-semibold text-lg mt-2">Medicine Refills</h3>
              <p className="text-sm mt-2 h-[100px] max-w-[200px]">Skip the pharmacy queues and save time + energy by ordering medicine refills online.</p>
            </div>
          
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default ServicesSection;
