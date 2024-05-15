import React from 'react';
import Email from '../assets/images/email-icon.png'
import Person from '../assets/images/person.png'
const HelpDeskForm = () => {
    return (
        <div className=" p-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-[40px] my-[30px] font-semibold text-gray-800">Reach our <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#0179B4] to-[#88D8FF]'>Help Desk </span> for support</h2>
                <p className="text-[#B0B0B0] w-[45%] mt-2 mx-auto mb-[56px]">Questions? Need assistance? Our dedicated support team is here to help you every step of the way:</p>
            </div>

            <form className="space-y-4">
                <div className="flex justify-center space-x-4">
                    <div className="flex items-center space-x-2 bg-white border border-blue-300 rounded-lg pl-[20px] pr-[50px] py-[15px]">
                        <span className="text-blue-500">
                            {/* Icon placeholder: user icon */}
                           <img src={Person} alt="" />                    
                        </span>
                        <input type="text" placeholder="Enter Your First Name" className="bg-transparent focus:outline-none w-full" />
                    </div>
                    <div className="flex items-center space-x-2 bg-white border border-blue-300 rounded-lg  pl-[20px] pr-[50px] py-[15px]">
                        <span className="text-blue-500">
                            {/* Icon placeholder: email icon */}
                        <img src={Email} alt="" />
                        </span>
                        <input type="email" placeholder="Enter Your Email Address" className="bg-transparent focus:outline-none w-full" />
                    </div>
                    <button type="submit" className="bg-[#00A4F4] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl mx-auto block">
                    Contact us {/* Icon placeholder: right arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 4.75l6 6-6 6m6-6H3" />
                    </svg>
                </button>
                </div>

                
            </form>
        </div>
    );
}

export default HelpDeskForm;
