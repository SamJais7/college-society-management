import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  category: string;
}

export const EventCard = ({ 
  title, 
  description, 
  date, 
  time, 
  location, 
  capacity, 
  registered, 
  status,
  category 
}: EventCardProps) => {
  const percentage = Math.round((registered / capacity) * 100);
  const isFull = percentage >= 100;

  const statusConfig = {
    upcoming: {
      label: 'Upcoming',
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      pulse: false,
    },
    ongoing: {
      label: 'Live Now',
      color: 'bg-green-500/20 text-green-400 border-green-500/30',
      pulse: true,
    },
    completed: {
      label: 'Completed',
      color: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
      pulse: false,
    },
  };

  const config = statusConfig[status];

  return (
    <motion.div
      className="glass rounded-3xl p-6 cursor-pointer relative overflow-hidden group"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Gradient Border on Hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.3), rgba(168, 85, 247, 0.3))',
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-neon-purple/20 text-neon-purple border border-neon-purple/30">
                {category}
              </span>
              <motion.span
                className={clsx(
                  'px-3 py-1 rounded-full text-xs font-bold border',
                  config.color
                )}
                animate={config.pulse ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {config.label}
              </motion.span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {title}
            </h3>
          </div>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ArrowRight className="w-5 h-5 text-neon-cyan" />
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Calendar className="w-4 h-4 text-neon-cyan" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Clock className="w-4 h-4 text-neon-purple" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <MapPin className="w-4 h-4 text-neon-cyan" />
            <span>{location}</span>
          </div>
        </div>

        {/* Capacity Bar */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {registered} / {capacity} registered
              </span>
            </div>
            <span className={clsx(
              'text-sm font-bold',
              isFull ? 'text-red-500' : 'text-neon-cyan'
            )}>
              {percentage}%
            </span>
          </div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className={clsx(
                'h-full rounded-full',
                isFull 
                  ? 'bg-gradient-to-r from-red-500 to-red-600' 
                  : 'bg-gradient-to-r from-neon-cyan to-neon-purple'
              )}
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(percentage, 100)}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          className={clsx(
            'w-full py-2.5 rounded-2xl font-medium transition-all',
            isFull || status === 'completed'
              ? 'glass text-slate-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white hover:shadow-glow-cyan'
          )}
          whileHover={!isFull && status !== 'completed' ? { scale: 1.02 } : {}}
          whileTap={!isFull && status !== 'completed' ? { scale: 0.98 } : {}}
          disabled={isFull || status === 'completed'}
        >
          {isFull ? 'Fully Booked' : status === 'completed' ? 'Event Ended' : 'Register Now'}
        </motion.button>
      </div>
    </motion.div>
  );
};
