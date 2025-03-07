
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to get started?</h2>
          <p className="text-gray-600 text-lg">
            Contact our team to learn how CurveTrack can transform your skincare content strategy.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Contact us</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your company" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" placeholder="https://yourcompany.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project and goals..."
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="consent" />
                  <Label htmlFor="consent" className="text-sm leading-tight">
                    I consent to CurveTrack processing my data for the purpose of contacting me about their services.
                  </Label>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter" className="text-sm leading-tight">
                    I would like to receive updates and newsletters about skincare industry trends.
                  </Label>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="privacy" />
                  <Label htmlFor="privacy" className="text-sm leading-tight">
                    I have read and accept the Privacy Policy and Terms of Service.
                  </Label>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
