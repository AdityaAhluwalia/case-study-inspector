
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <svg 
                viewBox="0 0 24 24" 
                className="h-5 w-5 text-green-500"
                fill="currentColor"
              >
                <path d="M3,12 C3,7.02944 7.02944,3 12,3 C16.9706,3 21,7.02944 21,12 C21,16.9706 16.9706,21 12,21 C7.02944,21 3,16.9706 3,12 Z M12,7 C9.23858,7 7,9.23858 7,12 C7,14.7614 9.23858,17 12,17 C14.7614,17 17,14.7614 17,12 C17,9.23858 14.7614,7 12,7 Z" />
              </svg>
              <span className="text-lg font-semibold">CurveTrack</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              © {new Date().getFullYear()} CurveTrack. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-green-600">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-green-600">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-green-600">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
