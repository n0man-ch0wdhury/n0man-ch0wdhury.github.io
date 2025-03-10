import React from 'react';
import { FaBriefcase, FaCode } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer, Intern',
      company: 'Battery Low Interactive',
      location: 'Baridhara, Dhaka',
      period: 'May 2024 - June 2024',
      responsibilities: [
        'E-Commerce Application: Worked on a simple e-commerce application.',
        'Firebase Authentication: Integrated Firebase authentication for user login and security.',
        'API Integration: Implemented external API for data collection.'
      ],
      icon: <FaBriefcase className="text-blue-600" />
    },
    {
      title: 'Mentor',
      company: 'Green University of Bangladesh',
      location: 'Dhaka, Bangladesh',
      period: '2022 - 2023',
      responsibilities: [
        'Taught structured programming and basic Data Structures and Algorithms.'
      ],
      icon: <FaCode className="text-blue-600" />
    },
    {
      title: 'Problem Setter',
      company: 'GUB Intra-Department Junior Programming Contest',
      location: 'Dhaka, Bangladesh',
      period: '2022',
      responsibilities: [],
      icon: <FaCode className="text-blue-600" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="animate-fade-in-down"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Experience
          </h2>
          
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 animate-fade-in-down"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    {exp.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
                    </div>
                    
                    {exp.responsibilities.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;