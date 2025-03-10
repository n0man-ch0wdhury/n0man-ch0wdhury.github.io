import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Healthcare Platform',
      description: 'Developing an AI-powered healthcare platform to assist doctors with patient management, medical records, and telemedicine. Built with Spring Boot, Next.js, and PostgreSQL, integrating AI for smarter decision-making.',
      tags: ['Spring Boot', 'Next.js', 'PostgreSQL', 'AI', 'Healthcare'],
      status: 'In Progress',
      links: {
        github: 'https://github.com/n0man-ch0wdhury',
      }
    },
    {
      title: 'Simple To-Do Application',
      description: 'A web-based to-do application for managing tasks through a responsive UI. Features include adding, editing, deleting, and listing tasks, user authentication with JWT tokens, and API-driven design for smooth frontend-backend communication.',
      tags: ['Golang', 'Gin Framework', 'PostgreSQL', 'HTML/CSS', 'JavaScript'],
      status: 'Completed',
      links: {
        github: 'https://github.com/n0man-ch0wdhury',
      }
    },
    {
      title: 'Multi-Vendor Blogging CMS',
      description: 'Developed a multi-vendor blogging CMS where users can register, create, and modify blog posts, enabling a dynamic and collaborative content-sharing platform. Built using PHP for the backend and HTML, CSS, Bootstrap, and JavaScript for the frontend to ensure a responsive and user-friendly experience.',
      tags: ['PHP', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'CMS'],
      status: 'Completed',
      links: {
        github: 'https://github.com/n0man-ch0wdhury',
      }
    }
  ];

  return (
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-down">

            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in-down"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}
                      {'live' in project.links && (
                        <a 
                          href={project.links.live as string || '#'}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
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

export default Projects;
