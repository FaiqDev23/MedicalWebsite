import React from 'react';

const HelpDeskForm = () => {
    return (
        <div className="bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Reach our Help Desk for support</h2>
                <p className="text-gray-600 mt-2 mb-6">Questions? Need assistance? Our dedicated support team is here to help you every step of the way:</p>
            </div>

            <form className="space-y-4">
                <div className="flex justify-center space-x-4">
                    <div className="flex items-center space-x-2 bg-white border border-blue-300 rounded-lg px-3 py-2">
                        <span className="text-blue-500">
                            {/* Icon placeholder: user icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 11.25c2.071 0 3.75-1.679 3.75-3.75S14.071 3.75 12 3.75 8.25 5.429 8.25 7.5s1.679 3.75 3.75 3.75zM8.25 14.25c-.545 0-.75-.205-.75-.75s.205-.75.75-.75h7.5c.545 0 .75.205.75.75s-.205.75-.75.75H8.25zM6 18.75c-.545 0-.75-.205-.75-.75s.205-.75.75-.75h12c.545 0 .75.205.75.75s-.205.75-.75.75H6z" />
                            </svg>                      
                        </span>
                        <input type="text" placeholder="Enter Your First Name" className="bg-transparent focus:outline-none w-full" />
                    </div>
                    <div className="flex items-center space-x-2 bg-white border border-blue-300 rounded-lg px-3 py-2">
                        <span className="text-blue-500">
                            {/* Icon placeholder: email icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 19.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V8.842c0-.573.221-1.122.615-1.53l.19-.193 7.5 7.503a3.375 3.375 0 004.49 0l7.5-7.503.19.193c.394.408.615.957.615 1.53V19.5z" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.342C3 5.83 4.256 4.5 5.737 4.5h12.526c1.48 0 2.737 1.33 2.737 2.842V9l-9 9-9-9V7.342z" />
                            </svg>                      
                        </span>
                        <input type="email" placeholder="Enter Your Email Address" className="bg-transparent focus:outline-none w-full" />
                    </div>
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mx-auto block">
                    Contact us {/* Icon placeholder: right arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 4.75l6 6-6 6m6-6H3" />
                    </svg>
                </button>
            </form>
        </div>
    );
}

export default HelpDeskForm;
