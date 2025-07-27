import React from 'react';
import { FaTrophy, FaCode, FaFileAlt, FaAward, FaLaptopCode, FaShieldAlt, FaMedal } from 'react-icons/fa';

const Achievements = () => {
  // Online coding platforms
  const onlinePlatforms = [
    'Solved 1800+ problems and participated in 140+ contests',
    { text: 'Codeforces: Specialist (1422)', link: 'https://codeforces.com/profile/root_of_hell' },
    { text: 'CodeChef: Two-star (1442)', link: 'https://www.codechef.com/users/n0manch0wdhury' }
  ];

  // ICPC and NCPC
  const icpcAchievements = [
    '4 Times ICPC Dhaka Regional Contestant (2021, 2022, 2023, 2024)',
    'NCPC (National Collegiate Programming Contest) 2024 Participant'
  ];

  // Inter-University Programming Contests
  const iupcContests = [
    'RUET IUPC 2022',
    'BUET IUPC 2022',
    'SEC IUJPC 2022',
    'CUET IUPC 2024',
    // 'JU NCPC 2023'
  ];

  // University Competitions
  const universityCompetitions = [
    'Champion at GUB IDPC 2021',
    'Champion at GUB IDPC 2022',
    '1st Runner-up at GUB IDPC 2024',
    '2nd Runner-up at GUB CSE Carnival 2024'
  ];

  // Cybersecurity Competitions
  const securityCompetitions = [
    '5th at BUET CTF 2023',
    '10th at National Cyber Drill 2021',
    '11th at University Cyber Drill 2022',
    '7th at RIOT Center Flag Hunt 2022',
    '21st at LeetCon 2023 (Onsite at MIST)',
    'TryHackMe: Top 3% (darkspirit)'
  ];

  const publications = [
    {
      title: 'Optimizing Carboxymethyl Cellulose (CMC) Production: A Metaheuristic Algorithm Approach',
      authors: 'Prof. Dr. Md. Saiful Azad, Saurav Chandra Das, Noman Chowdhury Munna, Zahid Hasan Mozumder',
      year: '2023'
    }
  ];

  return (
      <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="animate-fade-in-down"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Achievements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Online Platforms */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 animate-fade-in-down">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <FaLaptopCode className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Online Coding Platforms</h3>
                </div>
                
                <ul className="space-y-2 ml-2">
                  {onlinePlatforms.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaCode className="text-blue-600 mt-1 flex-shrink-0" />
                      {typeof achievement === 'string' ? (
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      ) : (
                        <a 
                          href={achievement.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {achievement.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* ICPC & NCPC */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 animate-fade-in-down">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <FaTrophy className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">ICPC & NCPC</h3>
                </div>
                
                <ul className="space-y-2 ml-2">
                  {icpcAchievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaMedal className="text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Inter-University Programming Contests */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 animate-fade-in-down">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <FaCode className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Inter-University Contests</h3>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Contestant at:</p>
                <ul className="space-y-2 ml-2">
                  {iupcContests.map((contest, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaCode className="text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{contest}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* University Competitions */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 animate-fade-in-down">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <FaAward className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">University Competitions</h3>
                </div>
                
                <ul className="space-y-2 ml-2">
                  {universityCompetitions.map((competition, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaTrophy className="text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{competition}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Cybersecurity Competitions */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 animate-fade-in-down">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <FaShieldAlt className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Cybersecurity Competitions</h3>
                </div>
                
                <ul className="space-y-2 ml-2">
                  {securityCompetitions.map((competition, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaShieldAlt className="text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{competition}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Research Publications */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 animate-fade-in-down">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <FaFileAlt className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Research Publications</h3>
                </div>
              
                <div className="space-y-4">
                  {publications.map((pub, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                      <h4 className="font-medium text-lg">
                        <a
                          href="https://ieeexplore.ieee.org/document/11022351"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {pub.title}
                        </a>
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Authors: {pub.authors}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
  );
};

export default Achievements;
