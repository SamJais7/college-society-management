import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard = ({ children, className, hover = false, onClick }: GlassCardProps) => {
  return (
    <motion.div
      className={clsx(
        'glass rounded-3xl p-6 shadow-soft',
        hover && 'cursor-pointer transition-all duration-300 hover:shadow-glow-cyan',
        className
      )}
      whileHover={hover ? { scale: 1.03, y: -4 } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
