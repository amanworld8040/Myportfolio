'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { FiMapPin, FiCalendar, FiBriefcase } from 'react-icons/fi';

export default function ExperiencePage() {
  return (
    <div className="pt-20 pb-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center mb-2">
                      <FiBriefcase className="text-primary mr-4 mt-1" size={24} />
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h2>
                    </div>
                    <h3 className="text-2xl text-primary font-semibold mb-2">
                      {exp.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <FiMapPin className="mr-2" size={16} />
                        {exp.location}
                      </span>
                      <span className="flex items-center">
                        <FiCalendar className="mr-2" size={16} />
                        {exp.startDate} - {exp.endDate}
                        {exp.current && (
                          <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="pl-2">{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

