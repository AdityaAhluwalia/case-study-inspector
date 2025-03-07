
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const KeyTakeawaysSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Key Takeaways</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Content Strategy Matrix</h3>
              <p className="text-gray-700">
                Comprehensive performance analysis of different content types, formats, and themes 
                across platforms, highlighting optimal approaches for maximum engagement.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Predictive Trend Timeline</h3>
              <p className="text-gray-700">
                Forward-looking forecast of trend opportunities, with specific timing 
                recommendations for content deployment to maximize impact and visibility.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Content Format Optimization</h3>
              <p className="text-gray-700">
                Platform-specific recommendations for content delivery, 
                highlighting optimal video lengths, posting times, and visual presentation styles.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300 lg:col-start-2">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Emerging Product Category Signals</h3>
              <p className="text-gray-700">
                Identification of product categories gaining traction, with specific 
                ingredient and formulation trends showing significant growth potential.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Generation Alpha Indicators</h3>
              <p className="text-gray-700">
                Analysis of rising market segments and content formats targeting younger audiences, 
                highlighting early adoption patterns and platform preferences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyTakeawaysSection;
