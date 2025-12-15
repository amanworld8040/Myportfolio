'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

export default function ProjectCard({ project, index, inView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden glass-card smooth-transition hover:glow-sm"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <FiGithub className="mr-2" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <FiExternalLink className="mr-2" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

