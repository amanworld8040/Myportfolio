'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/skills';

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = Array.from(new Set(skills.map((skill) => skill.category)));

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      case 'Beginner':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills.filter((skill) => skill.category === category);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow glass-card smooth-transition hover:glow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span
                          className={`w-3 h-3 rounded-full ${getLevelColor(skill.level)}`}
                          title={skill.level}
                        />
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                          style={{
                            width:
                              skill.level === 'Advanced'
                                ? '90%'
                                : skill.level === 'Intermediate'
                                ? '70%'
                                : '50%',
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

