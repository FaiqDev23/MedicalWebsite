// src/components/ServicesSection.jsx
import React from 'react';

const services = [
  { title: "Online Consultations", description: "Consult with top doctors across various specialties via video or chat communication." },
  { title: "Booking Appointments", description: "Choose the best time for an in-person visit with our easy-to-use scheduling system." },
  { title: "Prescriptions", description: "Receive and renew prescriptions digitally after your consultation with our specialists." },
  { title: "Medical Notes", description: "Obtain necessary medical notes for work or school with only a few clicks of hassle." },
  { title: "Medicine Refills", description: "Skip the pharmacy queues and save time + energy by ordering medicine refills online." },
];

const ServicesSection = () => {
  return (
    <div className="bg-white p-12">
      <h2 className="text-3xl font-bold text-center text-deep-blue">Top services we offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded shadow-lg">
            <h3 className="font-bold text-xl">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
