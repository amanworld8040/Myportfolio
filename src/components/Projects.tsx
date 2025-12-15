'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredProjects = projects.slice(0, 4);

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Some of my recent work and projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors glow-sm smooth-transition"
          >
            View All Projects
            <motion.span
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FiExternalLink className="ml-2" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

