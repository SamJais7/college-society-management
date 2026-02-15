import { motion } from 'framer-motion';
import { SocietyCard } from '../components/SocietyCard';
import { Search, Filter } from 'lucide-react';
import { useState } from 'react';

const societies = [
  {
    id: 1,
    name: 'Tech Innovation Hub',
    description: 'Leading technology society focused on AI, ML, and cutting-edge innovations. Join us for hackathons, workshops, and tech talks.',
    members: 342,
    category: 'Technology',
    location: 'Block A, Room 201',
  },
  {
    id: 2,
    name: 'Cultural Arts Society',
    description: 'Celebrating diversity through music, dance, drama, and visual arts. Annual cultural fest and regular performances.',
    members: 289,
    category: 'Cultural',
    location: 'Auditorium',
  },
  {
    id: 3,
    name: 'Sports & Fitness Club',
    description: 'Promoting physical wellness through various sports activities, tournaments, and fitness programs.',
    members: 456,
    category: 'Sports',
    location: 'Sports Complex',
  },
  {
    id: 4,
    name: 'Photography Society',
    description: 'Capture moments, learn techniques, and showcase your creativity. Regular photo walks and exhibitions.',
    members: 178,
    category: 'Arts',
    location: 'Media Center',
  },
  {
    id: 5,
    name: 'Debate & Oratory',
    description: 'Sharpen your communication skills through debates, public speaking, and elocution competitions.',
    members: 234,
    category: 'Academic',
    location: 'Seminar Hall',
  },
  {
    id: 6,
    name: 'Music Society',
    description: 'For all music lovers! Join bands, learn instruments, and perform at college events.',
    members: 312,
    category: 'Cultural',
    location: 'Music Room',
  },
  {
    id: 7,
    name: 'Entrepreneurship Cell',
    description: 'Fostering innovation and business acumen. Startup workshops, pitch sessions, and networking events.',
    members: 198,
    category: 'Business',
    location: 'Incubation Center',
  },
  {
    id: 8,
    name: 'Environmental Club',
    description: 'Making a difference for our planet. Tree planting, awareness campaigns, and sustainability initiatives.',
    members: 267,
    category: 'Social',
    location: 'Green Campus',
  },
];

export const Societies = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSocieties = societies.filter((society) =>
    society.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    society.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Societies
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Explore and join societies that match your interests
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search societies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl glass border border-white/20 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan/50 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
          />
        </div>
        <motion.button
          className="px-6 py-3 rounded-2xl glass border border-white/20 hover:shadow-glow-cyan transition-all flex items-center gap-2 font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Filter className="w-5 h-5" />
          <span>Filter</span>
        </motion.button>
      </div>

      {/* Societies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSocieties.map((society, index) => (
          <motion.div
            key={society.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <SocietyCard {...society} />
          </motion.div>
        ))}
      </div>

      {filteredSocieties.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-slate-500 dark:text-slate-400">
            No societies found matching your search.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};
