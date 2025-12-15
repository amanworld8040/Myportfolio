'use client';

import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="flex flex-col items-center cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll</span>
        <FiChevronDown className="text-2xl text-gray-600 dark:text-gray-400" />
      </motion.div>
    </motion.div>
  );
}

