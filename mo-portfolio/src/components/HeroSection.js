import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import TechPixelAnimation from './TechPixelAnimation';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero">
      <div className="atmosphere" />
      
      {/* Left side with text */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="glowing-text">HI,</h1>
        <h1 className="glowing-text">I AM MOHAMMED,</h1>
        <h1 className="glowing-text">COMPUTER SCIENCE</h1>
        <h1 className="glowing-text">STUDENT AT SJSU</h1>
      </motion.div>

        {/* Right side with tech animation */}
        <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        >
        <TechPixelAnimation />
        </motion.div>

      {/* Scroll indicator */}
      {!isScrolled && (
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span className="scroll-text">Scroll</span>
          <div className="scroll-arrow" />
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;