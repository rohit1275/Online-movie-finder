
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="relative z-20 p-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.h1 
          className="hero-title text-4xl md:text-5xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          CineSphere
        </motion.h1>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button variant="ghost" className="text-white hover:text-blue-400 hidden md:inline-flex">
            About
          </Button>
          <Button variant="ghost" className="text-white hover:text-blue-400 hidden md:inline-flex">
            Contact
          </Button>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
