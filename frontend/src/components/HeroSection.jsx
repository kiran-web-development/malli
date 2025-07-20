import React from 'react';
// import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mid-purple/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mid-blue/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-light-pink/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 gradient-text">
              Golla Mallikarjuna
            </h1>
            <p className="text-2xl md:text-3xl text-mid-grey mb-6">
              BTech Student | Web Developer AI
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-mid-grey leading-relaxed">
            Passionate about creating intelligent web solutions that bridge the gap between 
            traditional development and artificial intelligence. Crafting the future, one line of code at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="cta-button bg-light-pink text-black hover:bg-light-pink/90 px-8 py-3 text-lg"
              size="lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToAbout}>
            <div className="flex flex-col items-center text-mid-grey hover:text-light-pink transition-colors">
              <span className="text-sm mb-2">Scroll Down</span>
              <ChevronDown size={24} className="animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;