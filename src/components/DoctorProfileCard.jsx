// src/components/DoctorProfileCard.jsx
import React from 'react';
import HappyCustomersCard from './HappyCustomerCard';
const DoctorProfileCard = () => {
  return (
   <div className="flex-1 mt-6 lg:mt-0 text-center lg:text-right relative">
    <div className=' rounded-tl-full block	rounded-tr-full shadow-lg  bg-light-blue p-2 transition-colors duration-500 hover:bg-hover-blue'>
    <img src="https://purepng.com/public/uploads/large/purepng.com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-142152685722142y8x.png" alt="Doctor" className='' />
    </div>
          <div className="mt-4">
            <div className="inline-flex items-center relative">
             <HappyCustomersCard/>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Lorem ipsum dolor sit amet, ligula ego. consectetuer adipiscing elit doloras.
            </p>
          </div>
        </div>
  );
};

export default DoctorProfileCard;
