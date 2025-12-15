'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '@/data/personal';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I specialize in building enterprise-level applications using modern technologies
              like Spring Boot and React.js. My experience includes developing production-grade
              MES systems, ERP integrations, and scalable web applications.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-primary font-semibold hover:underline"
            >
              Learn More About Me
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white glass-card glow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="font-semibold mr-2">Location:</span>
                {personalInfo.location}
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Status:</span>
                {personalInfo.availability}
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Experience:</span>
                Building Production Systems
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Focus:</span>
                Backend Development
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

