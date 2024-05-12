    // src/components/HealNetStory.jsx
import React from 'react';
import teamImage from '../assets/images/team-image.png'; 
const HealNetStory = () => {
  return (
    <div className="bg-white py-10 ">
        <div className='border-2  max-w-[1200px] mx-auto py-[60px] rounded-[28px] border-sky-300'>
            <h2 className="text-2xl text-center font-semibold text-blue-800 mb-4 text-gray-500"> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#0179B4] to-[#88D8FF]'>HealNet's Story:  </span> Get to know us</h2>

<div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

  <img src={teamImage} alt="HealNet Team" className="md:w-1/2 " />
  <div className="md:w-1/2">
    <p className="text-gray-600 mb-6">
      HealNet is more than just an online medical service; it's a movement towards accessible, efficient,
      and compassionate healthcare for all. Founded by a team of visionary doctors, healthcare professionals,
      and technology experts, we are driven by the mission to deliver exceptional medical care directly to you,
      no matter where you are. Our platform is built on the pillars of trust, innovation, and patient-centricity,
      ensuring that every interaction is personalized and every treatment plan is tailored to your unique needs.
      With a network of licensed practitioners from diverse medical fields, we guarantee comprehensive care that’s
      just a click away.
    </p>
    <button className="bg-[#00A4F4]  hover:bg-blue-700 text-white text-2xl font-bold py-[18px] px-[36px] rounded">
      Learn more about us
    </button>
  </div>
</div>
        </div>
    
    </div>
  );
};

export default HealNetStory;
