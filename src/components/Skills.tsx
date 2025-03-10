import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="text-blue-600" />,
      skills: ['C/C++', 'Python', 'Java', 'Golang', 'JavaScript', 'PHP']
    },
    {
      title: 'Frontend Development',
      icon: <FaLaptopCode className="text-blue-600" />,
      skills: ['ReactJS', 'NextJS', 'Bootstrap', 'CSS', 'HTML']
    },
    {
      title: 'Backend Development',
      icon: <FaServer className="text-blue-600" />,
      skills: ['Golang (Gin Framework)', 'Spring Boot', 'Django', 'RESTful API']
    },
    {
      title: 'Database Technologies',
      icon: <FaDatabase className="text-blue-600" />,
      skills: ['PostgreSQL', 'MySQL', 'SQLite']
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools className="text-blue-600" />,
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VirtualBox', 'VMware', 'WSL', 'Linux']
    }
  ];

  return (
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="animate-fade-in-down"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 animate-fade-in-down"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Problem-Solving & CS Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {['Data Structures and Algorithms', 'Operating Systems', 'OOP and Design Patterns', 'Networking'].map((concept, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Skills;