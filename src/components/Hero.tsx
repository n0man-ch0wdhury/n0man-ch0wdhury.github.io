import React from 'react';
import { FaGithub, FaLink, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start animate-fade-in-down">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-blue-600 shadow-xl">
              <Image 
                src="/profile.jpg" 
                alt="Noman Chowdhury" 
                width={320} 
                height={320} 
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2 text-center md:text-left animate-fade-in-down">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Noman Chowdhury Munna
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">| Programmer | Open Source Contributor | Independent Security Researcher |</h2> 
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a 
                href="https://github.com/n0man-ch0wdhury" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 px-4 py-2 rounded-full transition-colors"
              >
                <FaGithub /> GitHub
              </a>
              <a 
                href="https://linktr.ee/n0man_ch0wdhury" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 px-4 py-2 rounded-full transition-colors"
              >
                <FaLink /> LinkTree
              </a>
              <a 
                href="mailto:noman007.cse@gmail.com" 
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 px-4 py-2 rounded-full transition-colors"
              >
                <FaEnvelope /> Email
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-600 dark:text-gray-400 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <FaPhone className="text-blue-600" />
                <span>+880-1763185527</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>Mirpur, Dhaka, Bangladesh</span>
              </div>
            </div>
            
            <div 
              className="mt-12 animate-fade-in"
            >
              <a 
                href="https://drive.google.com/file/d/1bvCohpjr4KlUOWVbfmAoC4Qc1sp-4B_a/view?usp=sharing" target='_blank'
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
