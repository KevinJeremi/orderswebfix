'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import TopBar from '../components/TopBar';
import ScrollProgressIndicator from '../components/ScrollProgressIndicator';
import FloatingActionButton from '../components/FloatingActionButton';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import { useMousePosition } from '../hooks/useMousePosition';
import dynamic from 'next/dynamic';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const mousePosition = useMousePosition();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []); const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };// Loading Screen
  if (isLoading) {
    return <LoadingScreen />;
  } return (
    <div className="min-h-screen relative">
      {/* TopBar */}
      <TopBar />

      {/* Progress Indicator */}
      <ScrollProgressIndicator />

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* Hero Section - Without Lanyard now */}
      <HeroSection
        mousePosition={mousePosition}
        onContactClick={handleContactClick}
      />

      {/* About Section */}
      <AboutSection />

      {/* Team Section */}
      <TeamSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}