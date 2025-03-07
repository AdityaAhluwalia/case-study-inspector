
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SummarySection from '@/components/SummarySection';
import DigitalLandscapeSection from '@/components/DigitalLandscapeSection';
import DetailsSection from '@/components/DetailsSection';
import KeyTakeawaysSection from '@/components/KeyTakeawaysSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 md:px-6 lg:px-8">
        <HeroSection />
        <SummarySection />
        <DigitalLandscapeSection />
        <DetailsSection />
        <KeyTakeawaysSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
