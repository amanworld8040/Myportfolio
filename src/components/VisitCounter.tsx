'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already been counted in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    // Get current count
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/visits');
        const data = await response.json();
        if (data.success) {
          setCount(data.count);
        }
      } catch (error) {
        console.error('Error fetching visit count:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCount();

    // Increment count if this is first visit in session
    if (!hasVisited) {
      const incrementCount = async () => {
        try {
          const response = await fetch('/api/visits', {
            method: 'POST',
          });
          const data = await response.json();
          if (data.success) {
            setCount(data.count);
            sessionStorage.setItem('hasVisited', 'true');
          }
        } catch (error) {
          console.error('Error incrementing visit count:', error);
        }
      };

      incrementCount();
    }
  }, []);

  if (isLoading && count === null) {
    return (
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <FiEye className="animate-pulse" />
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
    >
      <FiEye className="text-primary" size={18} />
      <span className="text-sm font-medium">
        <span className="text-primary font-bold">{count?.toLocaleString() || 0}</span>
        <span className="ml-1">visits</span>
      </span>
    </motion.div>
  );
}

