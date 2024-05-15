import React from 'react'
import Doctor1 from '../assets/images/doctor-1.png'
import Doctor2 from '../assets/images/doctor-2.png'

const OurTeam = () => {
  return (
    <div><div className="p-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-[#0179B4] to-[#88D8FF]">Masters of Medicine:</h2>
      <h3 className="text-xl text-gray-700 mb-6 text-[40px]">Meet our team of specialists</h3>
    </div>
  
    <div className="flex flex-col mx-auto w-[50%] ">
      <div className="bg-[#35BDFF] rounded-lg shadow p-6 my-[10px] ">
        <div className="flex items-center space-x-4 ">
          <img className="" src={Doctor1} alt="Dr. Sarah Johnson"/>
          <div>
            <h4 className="text-lg font-semibold text-white my-2">Dr. Sarah Johnson (Cardiologist)</h4>
            <p className="text-white">Heart health is Dr. Wong's passion, and her approach to cardiology integrates cutting-edge technology with compassionate care. She's a respected voice in the prevention of heart disease and a trusted partner to her patients on their journey to wellness.</p>
            <button className="mt-4 bg-white text-[#00A4F4] px-4 py-2 rounded transition duration-
  150 ease-in-out">Book appointment</button>
  </div>
  </div>
  </div>
  
  <div className="bg-[#35BDFF] rounded-lg shadow p-6 my-[10px] ">
  <div className="flex items-center space-x-4 ">
  <img className="" src={Doctor2} alt="Dr. Mark Lee"/>
  <div>
    <h4 className="text-lg font-semibold text-white my-2">Dr. Mark Lee (Dermatologist)</h4>
    <p className="text-white">Dr. Lee is a visionary in dermatology, advancing treatments for skin health with a gentle, holistic approach. His dedication to clinical excellence and patient education has made him a leader in dermatological care. He's known for his precision and commitment to patient-centered care.</p>
    <button className="mt-4 bg-white text-[#00A4F4] px-4 py-2 rounded  transition duration-150 ease-in-out">Book appointment</button>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  )
}

export default OurTeam