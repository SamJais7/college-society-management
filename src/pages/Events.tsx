import { motion } from 'framer-motion';
import { EventCard } from '../components/EventCard';
import { Search, Filter, Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const events = [
  {
    id: 1,
    title: 'AI & Machine Learning Workshop',
    description: 'Learn the fundamentals of AI and ML with hands-on projects. Perfect for beginners and intermediate learners.',
    date: '2024-03-15',
    time: '10:00 AM - 2:00 PM',
    location: 'Tech Lab, Block A',
    capacity: 100,
    registered: 75,
    status: 'upcoming' as const,
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Cultural Fest 2024',
    description: 'Annual cultural celebration featuring music, dance, drama, and food from around the world.',
    date: '2024-03-20',
    time: '2:00 PM - 8:00 PM',
    location: 'Main Auditorium',
    capacity: 500,
    registered: 450,
    status: 'upcoming' as const,
    category: 'Cultural',
  },
  {
    id: 3,
    title: 'Photography Exhibition',
    description: 'Showcase of student photography work. Vote for your favorite pieces!',
    date: '2024-03-12',
    time: '9:00 AM - 5:00 PM',
    location: 'Art Gallery',
    capacity: 200,
    registered: 200,
    status: 'upcoming' as const,
    category: 'Arts',
  },
  {
    id: 4,
    title: 'Sports Tournament Finals',
    description: 'Championship matches for basketball, football, and volleyball. Come support your teams!',
    date: '2024-03-18',
    time: '9:00 AM - 6:00 PM',
    location: 'Sports Complex',
    capacity: 300,
    registered: 180,
    status: 'ongoing' as const,
    category: 'Sports',
  },
  {
    id: 5,
    title: 'Startup Pitch Session',
    description: 'Entrepreneurs present their business ideas. Network with investors and fellow entrepreneurs.',
    date: '2024-03-10',
    time: '3:00 PM - 6:00 PM',
    location: 'Incubation Center',
    capacity: 80,
    registered: 80,
    status: 'completed' as const,
    category: 'Business',
  },
  {
    id: 6,
    title: 'Music Concert: Acoustic Night',
    description: 'Intimate acoustic performances by student musicians. Free entry for all students.',
    date: '2024-03-22',
    time: '7:00 PM - 10:00 PM',
    location: 'Open Air Theater',
    capacity: 150,
    registered: 95,
    status: 'upcoming' as const,
    category: 'Music',
  },
];

export const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'upcoming' | 'ongoing' | 'completed'>('all');

  const filteredEvents = events.filter((event) => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || event.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

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
            Events
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Discover and register for upcoming events
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl glass border border-white/20 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan/50 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
          />
        </div>
        <div className="flex gap-2">
          {(['all', 'upcoming', 'ongoing', 'completed'] as const).map((status) => (
            <motion.button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={clsx(
                'px-4 py-2 rounded-2xl glass border border-white/20 hover:shadow-glow-cyan transition-all font-medium capitalize',
                filterStatus === status && 'shadow-glow-cyan border-neon-cyan/50 text-neon-cyan'
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <EventCard {...event} />
          </motion.div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <CalendarIcon className="w-16 h-16 mx-auto mb-4 text-slate-400" />
          <p className="text-slate-500 dark:text-slate-400">
            No events found matching your criteria.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};
