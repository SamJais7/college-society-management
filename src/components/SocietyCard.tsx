import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Users, MapPin, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface SocietyCardProps {
  name: string;
  description: string;
  members: number;
  category: string;
  location: string;
  image?: string;
}

export const SocietyCard = ({ name, description, members, category, location, image }: SocietyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="glass rounded-3xl p-6 cursor-pointer relative overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Gradient Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.3), rgba(168, 85, 247, 0.3))',
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Background Image/Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-neon-cyan to-neon-purple" />
        </div>

        <div className="relative z-10">
          {/* Category Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30">
              {category}
            </span>
            <motion.div
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <ArrowRight className="w-5 h-5 text-neon-cyan" />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100">
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
            {description}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {members} members
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {location}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
