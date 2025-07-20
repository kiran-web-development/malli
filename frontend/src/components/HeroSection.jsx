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
          {/* Profile Image with Border Styles */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-light-pink via-mid-purple to-mid-blue rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Secondary glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-mid-blue via-light-pink to-mid-purple rounded-full blur-md opacity-50 animate-pulse delay-1000"></div>
              
              {/* Main image container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <div className="w-full h-full bg-gradient-to-br from-light-pink to-mid-purple p-1 rounded-full">
                  <div className="w-full h-full bg-white p-2 rounded-full">
                    <img 
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKyNDH1LWNPsLhLO7u44Z5BuSMnlgPQAZJr478a/tOa8uqXen6RoE80cMrpGbmfYZdrbgW2hgAcHAz6V9ja7fto6VPqLQNJ9mKxRbhj5jsqgH64z+FfGmsXt7quqXWpXmqXE9zPKZZJXJZmbtjAAx6YAwOlacjc/VHx0fANj8EPhhJ4k8MSjVb1r2K3ubV8r+9kz8wIAwAFPp1HrXxZ+0X+0Z4g+POovJeO9j4fhZjFpsLfKgB+9N6uRxzwO3JJNYGv8AtO+PPF1paaTrlzF/ZUMwk+ySWsYZkOcMkoYgnrggZrI1z9mn4YeKzPNoHiiWxmdhtnhv7oNx2baVT81NOa7nPP2bhHleGfgUPIi1vWJcR8CU3LqcdQCFkByeoxSfEv4CXngHwRrOvaXrVvq0NnGJPIjTDSMxAUKeQCcDkjpW/wDH79lH4dfsz2n2rxd4tn1PSVxuvUuISUVvSSQBnH1bNdZ+z/q9rqP7NGgeIbOEwQyaTbziEkHYXjjYr+BIHHTOMVLS1XVf1dmnHWCd/Q+E/A/7Y3jjUfHVt4T8SWdr4a8T3EhihurQ/vY5CejJnaxrP8W/tv8Aiq88S3em6HL/AKFCzBbuZcthQcLy2ASC2AfauG+KnxMvfFl3/Ztq53WbM94B2kx8oP8AsKAR7EkVw9enpk/P0Oa6KdHnsUubWTb3PLlJrcKK9H+Enh/TfF3j/TNO1O5FtaXEiCSSUhVCqc7iT6ADnnvXtWm/sNfELUZlhEWm2Ll1TCHzZASTj7ysuCf93NdiVnudEYJo//Z"
                      alt="Golla Mallikarjuna"
                      className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-light-pink rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-mid-blue rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-1/2 -right-4 w-4 h-4 bg-mid-purple rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

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