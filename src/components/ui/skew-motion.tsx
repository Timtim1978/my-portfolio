'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SkewMotionProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay animasi
}

const SkewMotion: React.FC<SkewMotionProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, skewY: 10 }}
      animate={{ opacity: 1, y: 0, skewY: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SkewMotion;
