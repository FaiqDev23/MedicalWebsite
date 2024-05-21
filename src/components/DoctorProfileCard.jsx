import React from 'react';
import HappyCustomersCard from './HappyCustomersCard';
import EasyPointment from './EasyPointment';
import QuoteCard from './QuoteCard';

const DoctorProfileCard = () => {
  return (
    <div className="flex-1 mt-6 lg:mt-0 text-center lg:text-right relative">
      <div className="rounded-full shadow-lg bg-light-blue p-2 transition-colors duration-500 hover:bg-hover-blue inline-block">
        <img src="https://purepng.com/public/uploads/large/purepng.com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-142152685722142y8x.png" alt="Doctor" className="rounded-full w-48 lg:w-64" />
      </div>
      <div className="mt-4 relative inline-block">
        <EasyPointment className="absolute -top-12 -right-16" />
        <HappyCustomersCard className="absolute top-24 right-8" />
        <QuoteCard number={42} className="absolute top-48 right-0" />
      </div>
      <p className="text-sm text-gray-500 mt-32">
        Lorem ipsum dolor sit amet, ligula ego. consectetuer adipiscing elit doloras.
      </p>
    </div>
  );
};

export default DoctorProfileCard;
