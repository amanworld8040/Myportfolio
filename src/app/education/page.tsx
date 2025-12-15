'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/education';
import { FiBook, FiMapPin, FiCalendar, FiAward } from 'react-icons/fi';

export default function EducationPage() {
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
            Education
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My academic background and qualifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <FiBook className="text-primary mr-3" size={32} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </h2>
              </div>
              <h3 className="text-xl text-primary font-semibold mb-4">
                {edu.institution}
              </h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <FiMapPin className="mr-2" size={16} />
                  {edu.location}
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <FiCalendar className="mr-2" size={16} />
                  {edu.startDate} - {edu.endDate}
                </p>
                {edu.gpa && (
                  <p className="text-gray-600 dark:text-gray-400 flex items-center">
                    <FiAward className="mr-2" size={16} />
                    GPA: <span className="font-semibold ml-1">{edu.gpa}</span>
                  </p>
                )}
                {edu.percentage && (
                  <p className="text-gray-600 dark:text-gray-400 flex items-center">
                    <FiAward className="mr-2" size={16} />
                    Percentage: <span className="font-semibold ml-1">{edu.percentage}</span>
                  </p>
                )}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Relevant Courses:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

