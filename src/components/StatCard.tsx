import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  change?: number;
  color?: 'cyan' | 'purple';
}

export const StatCard = ({ title, value, icon: Icon, change, color = 'cyan' }: StatCardProps) => {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 20, stiffness: 100 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  const colorClasses = {
    cyan: 'text-neon-cyan border-neon-cyan/30',
    purple: 'text-neon-purple border-neon-purple/30',
  };

  return (
    <motion.div
      className={clsx(
        'glass rounded-3xl p-6 shadow-soft border-2',
        colorClasses[color],
        'hover:shadow-glow-cyan transition-all duration-300'
      )}
      whileHover={{ scale: 1.03, y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">{title}</p>
          <motion.p
            className="text-3xl font-bold"
            style={{ color: color === 'cyan' ? '#00f5ff' : '#a855f7' }}
          >
            {displayValue}
          </motion.p>
        </div>
        <div className={clsx('p-3 rounded-2xl bg-white/20 dark:bg-black/20', colorClasses[color])}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      {change !== undefined && (
        <div className="flex items-center gap-2 text-sm">
          <span
            className={clsx(
              'font-medium',
              change >= 0 ? 'text-green-500' : 'text-red-500'
            )}
          >
            {change >= 0 ? '+' : ''}{change}%
          </span>
          <span className="text-slate-500 dark:text-slate-400">vs last month</span>
        </div>
      )}
    </motion.div>
  );
};
