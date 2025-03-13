// src/components/Header.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-amber-800 bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 md:py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-white tracking-tight">
            True<span className="text-amber-300">Africa</span>
          </span>
        </Link>
        
        <nav className="space-x-6">
          <Link href="/" className="text-white hover:text-amber-300 transition-colors font-medium">
            Home
          </Link>
          <Link href="/#known" className="text-white hover:text-amber-300 transition-colors font-medium">
            Known
          </Link>
          <Link href="/#hidden" className="text-white hover:text-amber-300 transition-colors font-medium">
            Hidden
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;