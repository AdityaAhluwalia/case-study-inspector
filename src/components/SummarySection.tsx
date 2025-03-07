
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SummarySection = () => {
  return (
    <section className="py-12">
      <Card className="bg-gray-50">
        <CardContent className="pt-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Executive Summary</h2>
            <p className="text-gray-700 mb-4">
              This comprehensive study analyzed skincare content trends across the United States 
              market, utilizing advanced AI analytics to process and interpret data from over 1,000 
              influencer accounts across multiple content channels.
            </p>
            <p className="text-gray-700 mb-4">
              Our research spanned content creators with a collective audience of 75 million non-unique 
              followers, providing unprecedented insights into consumer behavior and content 
              performance metrics.
            </p>
            <p className="text-gray-700">
              The findings reveal strategic content opportunities across digital platforms, 
              with actionable insights for both immediate implementation and long-term planning.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SummarySection;
