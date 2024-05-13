import React from 'react'

const PasientTestimenioals = () => {
  return (
    <div><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Testimonials:</h2>
      <h3 className="text-xl text-blue-600">Hear from Those We’ve Cared For</h3>
      <p className="text-gray-600 mt-2">Discover the difference we make through the voices of those we've served:</p>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <blockquote className="text-gray-600 italic">"After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined."</blockquote>
        <p className="mt-4 font-semibold text-blue-500">- Linda A.</p>
      </div>
  
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <blockquote className="text-gray-600 italic">"Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life."</blockquote>
        <p className="mt-4 font-semibold text-blue-500">- Henry B.</p>
      </div>
  
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <blockquote className="text-gray-600 italic">"The prescription refill system is a game-changer for managing my diabetes. It’s really efficient and completely hassle-free."</blockquote>
        <p className="mt-4 font-semibold text-blue-500">- Joshua T.</p>
      </div>
  
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <blockquote className="text-gray-600 italic">"Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life."</blockquote>
        <p className="mt-4 font-semibold text-blue-500">- Samantha K.</p>
      </div>
  
      <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-600">10,000+</p>
          <p className="text-gray-600 mt-2">Successful Consultations</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-600">2,500+</p>
          <p className="text-gray-600 mt-2">Healthcare Professionals</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-600">98%</p>
          <p className="text-gray-600 mt-2">Patient Satisfaction Rate</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-600">200+</p>
          <p className="text-gray-600 mt-2">Top Specialists</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default PasientTestimenioals