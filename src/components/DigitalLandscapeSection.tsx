
import React from 'react';

const DigitalLandscapeSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Digital Landscape Analyzed</h2>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
              <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-700">TikTok videos (quantitatively analyzed and processed)</p>
          </li>
          
          <li className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
              <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-700">Instagram accounts and posts across 5 platforms</p>
          </li>
          
          <li className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
              <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-700">YouTube video engagement metrics</p>
          </li>
          
          <li className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
              <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-700">1,000+ micro-nano-micro creator catalogs identified</p>
          </li>
          
          <li className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
              <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-700">E-trending content sectors with correlated performance metrics</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DigitalLandscapeSection;
