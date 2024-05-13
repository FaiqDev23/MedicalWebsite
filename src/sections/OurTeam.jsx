import React from 'react'

const OurTeam = () => {
  return (
    <div><div className="bg-blue-100 p-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Masters of Medicine:</h2>
      <h3 className="text-xl text-gray-700 mb-6">Meet our team of specialists</h3>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4">
          <img className="w-24 h-24 rounded-full" src="path_to_doctor_image.jpg" alt="Dr. Sarah Johnson"/>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Dr. Sarah Johnson (Cardiologist)</h4>
            <p className="text-gray-600">Heart health is Dr. Wong's passion, and her approach to cardiology integrates cutting-edge technology with compassionate care. She's a respected voice in the prevention of heart disease and a trusted partner to her patients on their journey to wellness.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-
  150 ease-in-out">Book appointment</button>
  </div>
  </div>
  </div>
  
  <div className="bg-white rounded-lg shadow p-6">
  <div className="flex items-center space-x-4">
  <img className="w-24 h-24 rounded-full" src="path_to_doctor_image.jpg" alt="Dr. Mark Lee"/>
  <div>
    <h4 className="text-lg font-semibold text-gray-800">Dr. Mark Lee (Dermatologist)</h4>
    <p className="text-gray-600">Dr. Lee is a visionary in dermatology, advancing treatments for skin health with a gentle, holistic approach. His dedication to clinical excellence and patient education has made him a leader in dermatological care. He's known for his precision and commitment to patient-centered care.</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150 ease-in-out">Book appointment</button>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  )
}

export default OurTeam