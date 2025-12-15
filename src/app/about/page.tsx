'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import { education } from '@/data/education';
import { experiences } from '@/data/experience';
import { FiDownload, FiMapPin, FiCalendar } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="pt-20 pb-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* Detailed Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Introduction
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a passionate Backend Developer with a strong foundation in Java, Spring Boot,
              and enterprise application development. Currently working at Zenuino Pvt. Ltd., I develop production-grade
              Manufacturing Execution Systems (MES) that integrate seamlessly with enterprise
              ERP systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              My expertise lies in building scalable backend systems using Spring Boot, designing
              efficient database schemas, and developing high-performance REST APIs. I have hands-on experience in deploying applications on IIS servers, implementing
              secure authentication systems, and optimizing API performance.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I'm always eager to learn new technologies and take on challenging projects that
              push the boundaries of what's possible in software development.
            </p>
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 border-l-2 border-primary"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-xl text-primary font-semibold">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-400 flex items-center mt-1">
                        <FiMapPin className="mr-2" size={16} />
                        {exp.location}
                      </p>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 flex items-center mt-2 md:mt-0">
                      <FiCalendar className="mr-2" size={16} />
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg text-primary font-semibold mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <FiMapPin className="inline mr-2" size={16} />
                  {edu.location}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <FiCalendar className="inline mr-2" size={16} />
                  {edu.startDate} - {edu.endDate}
                </p>
                {edu.gpa && (
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    GPA: <span className="font-semibold">{edu.gpa}</span>
                  </p>
                )}
                {edu.percentage && (
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Percentage: <span className="font-semibold">{edu.percentage}</span>
                  </p>
                )}
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Relevant Courses:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Personal Interests */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Personal Interests
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source
              projects, and staying updated with the latest trends in software development. I also
              love problem-solving and participating in coding challenges.
            </p>
          </div>
        </motion.section>

        {/* Resume Download */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
          >
            <FiDownload className="mr-2" size={20} />
            Download My Resume
          </a>
        </motion.section>
      </div>
    </div>
  );
}

