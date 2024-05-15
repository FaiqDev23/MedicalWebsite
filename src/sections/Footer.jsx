import React from 'react';
import headerLogo from '../assets/images/footerlogo.png'
const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-6">
                    <div>
                        <div className="flex items-center space-x-3 mb-3">
                            <img src={headerLogo} alt="HealNet Logo" className="h-[140px] w-[170px]" />
                        </div>
                        <p className="text-[#6D6D6D] text-sm">Experience personalized medical care from the comfort of your home.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[#00A4F4] mb-3">Support</h3>
                        <ul className="text-[#6D6D6D] space-y-2">
                            <li>Getting Started</li>
                            <li>FAQs</li>
                            <li>Help Articles</li>
                            <li>Report an issue</li>
                            <li>Contact Help Desk</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[#00A4F4] mb-3">Services</h3>
                        <ul className="text-[#6D6D6D] space-y-2">
                            <li>Booking appointments</li>
                            <li>Online consultations</li>
                            <li>Prescriptions</li>
                            <li>Medicine Refills</li>
                            <li>Medical Notes</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[#00A4F4] mb-3">Legal</h3>
                        <ul className="text-[#6D6D6D] space-y-2">
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Notice</li>
                            <li>Cookie Preferences</li>
                            <li>Trust Center</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-between items-center border-t pt-4 border-[#B6E6FF]">
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fa fab fa-facebook-f"></i></a>
                        <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fa fab fa-instagram"></i></a>
                        <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fa fab fa-linkedin-in"></i></a>
                        <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fa fab fa-youtube"></i></a>
                    </div>
                    <p className="text-[#B0B0B0] text-sm">HealNet 2024 © All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
