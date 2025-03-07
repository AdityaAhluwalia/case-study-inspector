
import React from 'react';

const KeyTakeawaysSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Key Takeaways</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Content Strategy Matrix</h3>
            <p className="text-gray-700">
              Comprehensive performance analysis of different content types, formats, and themes 
              across platforms, highlighting optimal approaches for maximum engagement.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Predictive Trend Timeline</h3>
            <p className="text-gray-700">
              Forward-looking forecast of trend opportunities, with specific timing 
              recommendations for content deployment to maximize impact and visibility.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Content Format Optimization</h3>
            <p className="text-gray-700">
              Platform-specific recommendations for content delivery, 
              highlighting optimal video lengths, posting times, and visual presentation styles.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Emerging Product Category Signals</h3>
            <p className="text-gray-700">
              Identification of product categories gaining traction, with specific 
              ingredient and formulation trends showing significant growth potential.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Generation Alpha Indicators</h3>
            <p className="text-gray-700">
              Analysis of rising market segments and content formats targeting younger audiences, 
              highlighting early adoption patterns and platform preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyTakeawaysSection;
