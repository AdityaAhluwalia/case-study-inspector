
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg 
            viewBox="0 0 24 24" 
            className="h-6 w-6 text-green-500"
            fill="currentColor"
          >
            <path d="M3,12 C3,7.02944 7.02944,3 12,3 C16.9706,3 21,7.02944 21,12 C21,16.9706 16.9706,21 12,21 C7.02944,21 3,16.9706 3,12 Z M12,7 C9.23858,7 7,9.23858 7,12 C7,14.7614 9.23858,17 12,17 C14.7614,17 17,14.7614 17,12 C17,9.23858 14.7614,7 12,7 Z" />
          </svg>
          <span className="text-xl font-bold">CurveTrack</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-700 hover:text-green-600 font-medium">Competitive Insights</a></li>
            <li><a href="#" className="text-gray-700 hover:text-green-600 font-medium">Influence</a></li>
            <li><a href="#" className="text-gray-700 hover:text-green-600 font-medium text-green-600 underline underline-offset-4">Case Studies</a></li>
          </ul>
        </nav>
        <Button variant="default" className="bg-green-600 hover:bg-green-700">
          Contact us
        </Button>
      </div>
    </header>
  );
};

export default Header;
