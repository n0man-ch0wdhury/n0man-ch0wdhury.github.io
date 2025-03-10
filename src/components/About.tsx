import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-down">

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I am a passionate problem solver with experience in solving 1800+ competitive programming problems and competing in 140+ contests, including ICPC Dhaka Regional (2021–2024) and NCPC 2024. I have hands-on experience in full-stack development, AI integration, and web security.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I've worked with technologies like Golang, Spring Boot, Next.js, and PostgreSQL, and served as a mentor and problem setter for university contests. My experience spans web development, AI research, and competitive programming. I'm constantly learning and exploring new technologies to expand my skill set.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FaGraduationCap className="text-blue-600" /> Education
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-4 py-1">
                    <h4 className="font-medium text-lg">Bachelor of Science in Computer Science and Engineering</h4>
                    <p className="text-gray-600 dark:text-gray-400">Green University of Bangladesh</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2020 - 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4 py-1">
                    <h4 className="font-medium text-lg">Higher Secondary School Certificate (Science)</h4>
                    <p className="text-gray-600 dark:text-gray-400">Birganj Government College</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2016 - 2018</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4 py-1">
                    <h4 className="font-medium text-lg">Secondary School Certificate (Science)</h4>
                    <p className="text-gray-600 dark:text-gray-400">Ibrahim Memorial Shikhsha Niketan</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2014 - 2016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;