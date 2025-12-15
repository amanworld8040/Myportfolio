'use client';

import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiCode, FiMessageCircle } from 'react-icons/fi';

export default function AchievementsPage() {
  // You can add your actual achievements data here
  const achievements = [
    {
      id: '1',
      title: 'Production System Deployment',
      description: 'Successfully deployed MES system for 30+ active users in live production',
      icon: FiAward,
      category: 'Professional',
    },
    {
      id: '2',
      title: 'Performance Optimization',
      description: 'Reduced backend latency by 40% through optimized SQL schemas and REST APIs',
      icon: FiCode,
      category: 'Technical',
    },
    {
      id: '3',
      title: 'ERP Integration',
      description: 'Integrated MES with Microsoft Dynamics ERP using bi-directional APIs',
      icon: FiCode,
      category: 'Technical',
    },
  ];

  const extraCurricular = [
    {
      id: '1',
      title: 'Open Source Contributions',
      description: 'Contributing to open-source projects and sharing knowledge with the community',
      icon: FiCode,
    },
    {
      id: '2',
      title: 'Tech Community',
      description: 'Active participation in developer communities and tech meetups',
      icon: FiUsers,
    },
  ];

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
            Achievements & Activities
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My accomplishments and extra-curricular activities
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FiAward className="mr-3 text-primary" size={32} />
            Professional Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <achievement.icon className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {achievement.description}
                </p>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                  {achievement.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Extra-Curricular Activities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FiUsers className="mr-3 text-primary" size={32} />
            Extra-Curricular Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extraCurricular.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <activity.icon className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section - Add your certifications here */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Certifications
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Add your certifications here (Coursera, Udemy, etc.)
            </p>
          </div>
        </motion.section>

        {/* Testimonials Section - Add testimonials here */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <FiMessageCircle className="mr-3 text-primary" size={32} />
            Testimonials
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Add testimonials from colleagues, clients, or mentors here
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

