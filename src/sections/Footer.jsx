import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-6">
                    <div>
                        <div className="flex items-center space-x-3 mb-3">
                            <img src="/logo.svg" alt="HealNet Logo" className="h-8 w-8" />
                            <span className="text-xl font-bold">HealNet</span>
                        </div>
                        <p className="text-gray-600 text-sm">Experience personalized medical care from the comfort of your home.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-3">Support</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>Getting Started</li>
                            <li>FAQs</li>
                            <li>Help Articles</li>
                            <li>Report an issue</li>
                            <li>Contact Help Desk</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-3">Services</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>Booking appointments</li>
                            <li>Online consultations</li>
                            <li>Prescriptions</li>
                            <li>Medicine Refills</li>
                            <li>Medical Notes</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Notice</li>
                            <li>Cookie Preferences</li>
                            <li>Trust Center</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-between items-center border-t pt-4 border-gray-300">
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-youtube"></i></a>
                    </div>
                    <p className="text-gray-600 text-sm">HealNet 2024 © All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
