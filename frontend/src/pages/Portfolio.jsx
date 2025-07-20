import React, { useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
// import CustomCursor from '../components/CustomCursor';
// import InteractiveBackground from '../components/InteractiveBackground';

const Portfolio = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="portfolio-container">
      {/* <CustomCursor />
      <InteractiveBackground /> */}
      
      <Header />
      
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Portfolio;