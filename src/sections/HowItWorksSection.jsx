import React from 'react';
import DoctorImage from '../assets/images/doctor-image.png';

const HowItWorksSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div class="flex justify-center">
          <div class="relative mr-8 ">
            <div class="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-500"></div>

            <div class="relative mb-4">
              <div class="absolute -left-2.5 bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center">1</div>
              <div class="h-24 flex items-center">
              </div>
            </div>
            <div class="relative mb-4">
              <div class="absolute -left-2.5 bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center">2</div>
              <div class="h-24 flex items-center">
              </div>
            </div>
            <div class="relative">
              <div class="absolute -left-2.5 bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center">3</div>

            </div>
          </div>

          <div class="flex flex-col justify-between w-5/12 m">
            <div class="mb-12">
              <h3 class="text-lg font-semibold mb-2">Create Your Profile</h3>
              <p>Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.</p>
            </div>
            <div class="mb-12">
              <h3 class="text-lg font-semibold mb-2">Choose Your Service</h3>
              <p>Select from our range of services and book a consultation. Booking a consultation with HealNet is fairly simple and straight-forward.</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Meet Your Doctor</h3>
              <p>Have a virtual consultation with one of our certified specialists, or go for a physical visit to the doctor in case you opted for a physical check-up.</p>
            </div>
          </div>
          <div className="flex-1 md:max-w-xs mt-12 md:mt-0  w-5/12">
            <img src={DoctorImage} alt="Doctor" className="max-w-full rounded-lg " />
          </div>
        </div>


      </div>
    </div>
  );
};

export default HowItWorksSection;
