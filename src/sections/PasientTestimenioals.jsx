import React from 'react';

const testimonials = [
  {
    quote: "After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.",
    author: "Linda A.",
    image:"../assets/images/mathew.png",
  },
  {
    quote: "Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.",
    author: "Henry B.",
    image: "../assets/images/linda.png",
  }
];

const statistics = [
  {
    number: "10,000+",
    label: "Successful Consultations",
  },
  {
    number: "2,500+",
    label: "Healthcare Professionals",
  },
  {
    number: "98%",
    label: "Patient Satisfaction Rate",
  },
  {
    number: "200+",
    label: "Top Specialists",
  },
];

const Testimonials = () => {
  return (
    <div className="text-center p-8">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-blue-600">Patient Testimonials:</h1>
        <h2 className="text-2xl font-semibold mt-2">Hear from Those We’ve Cared For</h2>
        <p className="mt-4 text-gray-600">Discover the difference we make through the voices of those we’ve served:</p>
      </div>
      <div className="flex flex-wrap justify-around gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 max-w-xs text-left shadow-lg">
            <img className="rounded-full w-12 h-12 mb-4" src={testimonial.image} alt={testimonial.author} />
            <p className="italic mb-4">{testimonial.quote}</p>
            <p className="font-bold text-gray-800">- {testimonial.author}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-around mt-16">
        {statistics.map((stat, index) => (
          <div key={index} className="text-center flex-1 min-w-40 m-4">
            <h3 className="text-3xl font-bold text-blue-600">{stat.number}</h3>
            <p className="text-lg text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-around gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 max-w-xs text-left shadow-lg">
            <img className="rounded-full w-12 h-12 mb-4" src={testimonial.image} alt={testimonial.author} />
            <p className="italic mb-4">{testimonial.quote}</p>
            <p className="font-bold text-gray-800">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
