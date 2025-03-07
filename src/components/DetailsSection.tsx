
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const DetailsSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Project Details</h2>
        
        <Tabs defaultValue="approach" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="approach">Approach</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="approach" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Our Methodology</h3>
                <p className="text-gray-700 mb-4">
                  CurveTrack's proprietary content processing system analyzes patterns and trends 
                  across multiple digital platforms, focusing on engagement metrics, sentiment analysis, 
                  and content performance indicators.
                </p>
                <p className="text-gray-700 mb-4">
                  Our AI-powered tools process vast amounts of content to identify emerging trends, 
                  category growth opportunities, and optimal content strategies based on historical 
                  and real-time data.
                </p>
                <p className="text-gray-700">
                  The methodology incorporates both quantitative metrics tracking and qualitative 
                  content analysis to provide a comprehensive understanding of the skincare content landscape.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analysis" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Finding Focus Identification</h3>
                  <p className="text-gray-700">
                    Our analysis identified key content concepts and patterns that consistently 
                    generate above-average engagement across platforms, with particular emphasis 
                    on format-specific performance metrics.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Engagement vs Views Correlation Analysis</h3>
                  <p className="text-gray-700">
                    We mapped the relationship between view counts and meaningful engagement metrics, 
                    revealing optimal content formats for different campaign objectives and audience segments.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Pattern-Specific Sentiment Mapping</h3>
                  <p className="text-gray-700">
                    Content was categorized by sentiment associations, enabling precise targeting 
                    of emotional triggers and connection points most relevant to skincare consumers.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Creator-Audience Sentiment Classification</h3>
                  <p className="text-gray-700">
                    We analyzed audience responses across different content types, identifying 
                    patterns in how creator authenticity and expertise influence audience receptivity 
                    to product recommendations.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Collective Decision Factor Correlations</h3>
                  <p className="text-gray-700">
                    Our research identified key factors influencing content trend adoption and 
                    conversion metrics, providing actionable insights for content strategy optimization.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DetailsSection;
