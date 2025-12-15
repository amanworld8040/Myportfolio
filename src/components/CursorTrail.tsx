'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let particleId = 0;
    const maxParticles = 20;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      setParticles((prev) => {
        const newParticle: Particle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2,
        };

        const updated = [...prev, newParticle].slice(-maxParticles);
        return updated;
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setMousePosition({ x: touch.clientX, y: touch.clientY });

        setParticles((prev) => {
          const newParticle: Particle = {
            id: particleId++,
            x: touch.clientX,
            y: touch.clientY,
            size: Math.random() * 4 + 2,
          };

          const updated = [...prev, newParticle].slice(-maxParticles);
          return updated;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400 opacity-60"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            boxShadow: `0 0 ${particle.size * 2}px rgba(34, 211, 238, 0.8)`,
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 0 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}

