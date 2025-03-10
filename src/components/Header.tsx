'use client';

import React, { useState } from 'react';
import { FaGithub, FaLink, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4 px-6 md:px-12 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-blue-600 transition-colors">
          Noman Chowdhury
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
          <Link href="#experience" className="hover:text-blue-600 transition-colors">Experience</Link>
          <Link href="#skills" className="hover:text-blue-600 transition-colors">Skills</Link>
          <Link href="#achievements" className="hover:text-blue-600 transition-colors">Achievements</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col items-center justify-center">
            <nav className="flex flex-col space-y-6 text-center text-xl">
              <Link 
                href="#about" 
                className="hover:text-blue-600 transition-colors"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link 
                href="#projects" 
                className="hover:text-blue-600 transition-colors"
                onClick={toggleMobileMenu}
              >
                Projects
              </Link>
              <Link 
                href="#experience" 
                className="hover:text-blue-600 transition-colors"
                onClick={toggleMobileMenu}
              >
                Experience
              </Link>
              <Link 
                href="#skills" 
                className="hover:text-blue-600 transition-colors"
                onClick={toggleMobileMenu}
              >
                Skills
              </Link>
              <Link 
                href="#achievements" 
                className="hover:text-blue-600 transition-colors"
                onClick={toggleMobileMenu}
              >
                Achievements
              </Link>
            </nav>
          </div>
        )}
        
        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/n0man-ch0wdhury" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <FaGithub className="w-6 h-6 hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://linktr.ee/n0man" target="_blank" rel="noopener noreferrer" aria-label="Linktree Profile">
            <FaLink className="w-6 h-6 hover:text-blue-600 transition-colors" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;