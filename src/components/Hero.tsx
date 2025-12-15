'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { personalInfo } from '@/data/personal';
import TypingEffect from './TypingEffect';
import MagneticButton from './MagneticButton';
import ScrollIndicator from './ScrollIndicator';

// Animated text component
const AnimatedText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(' ');
  
  return (
    <h1 className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: delay + wordIndex * 0.1 + charIndex * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
};

// Name with gradient animation
const AnimatedName = ({ name, className, delay = 0.5 }: { name: string; className?: string; delay?: number }) => {
  return (
    <span className={`${className} gradient-text`}>
      {name.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 30, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: delay + index * 0.1,
            ease: [0.34, 1.56, 0.64, 1], // Bounce effect
          }}
          className="inline-block"
          style={{ transformOrigin: 'center bottom' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

// Background Blobs Component
const BackgroundBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl pulse-blob"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pulse-blob"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pulse-blob"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  );
};

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const roles = ['Backend Developer', 'Spring Boot Specialist', 'Java Expert', 'API Architect'];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-dark dark:to-gray-900 pt-20 md:pt-16 relative overflow-hidden">
      <BackgroundBlobs />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left fade-in-slide-up"
          >
            <div className="mb-4 md:mb-6">
              <AnimatedText 
                text="Hi, I'm" 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
                delay={0}
              />
              <AnimatedName 
                name="Aman Rajak" 
                className="text-4xl sm:text-5xl md:text-6xl font-bold ml-2"
                delay={0.6}
              />
            </div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-gray-700 dark:text-gray-300 min-h-[2.5rem]"
            >
              <TypingEffect 
                words={roles}
                className="text-primary"
                typingSpeed={100}
                deletingSpeed={50}
                delay={2000}
              />
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8"
            >
              {personalInfo.bio}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton
                href="/projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all duration-300 w-full sm:w-auto overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  View My Work
                  <motion.span
                    className="ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <FiArrowRight size={18} />
                  </motion.span>
                </span>
              </MagneticButton>
              
              <MagneticButton
                href={personalInfo.resumeUrl}
                download
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-primary text-primary dark:text-primary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto overflow-hidden hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white"
              >
                <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  Download Resume
                  <motion.span
                    className="ml-2"
                    whileHover={{ y: [0, -3, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
                  >
                    <FiDownload size={18} />
                  </motion.span>
                </span>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative mt-8 lg:mt-0 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-50 pulse-blob"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl glass-card glow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {!imageError ? (
                  <img
                    src="/images/profile.jpg"
                    alt="Aman Rajak - Backend Developer"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl sm:text-7xl md:text-8xl font-bold">AR</div>
                      <p className="text-lg sm:text-xl font-semibold mt-4">Backend Developer</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
}
