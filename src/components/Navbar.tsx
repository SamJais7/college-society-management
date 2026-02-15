import { motion } from 'framer-motion';
import { Search, Bell, User, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import clsx from 'clsx';

export const Navbar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [notifications] = useState(3); // Mock notification count

  return (
    <motion.nav
      className="glass rounded-3xl p-4 mb-6 flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Search Bar */}
      <div className="hidden md:flex flex-1 max-w-md relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search societies, events..."
          className="w-full pl-12 pr-4 py-2.5 rounded-2xl glass border border-white/20 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan/50 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
        />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Notifications */}
        <motion.button
          className="relative w-12 h-12 rounded-2xl glass flex items-center justify-center hover:shadow-glow-cyan transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bell className="w-5 h-5" />
          {notifications > 0 && (
            <motion.span
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {notifications}
            </motion.span>
          )}
        </motion.button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Profile Dropdown */}
        <div className="relative">
          <motion.button
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl glass hover:shadow-glow-cyan transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="hidden md:block font-medium">John Doe</span>
            <ChevronDown
              className={clsx(
                'w-4 h-4 hidden md:block transition-transform',
                showProfileDropdown && 'rotate-180'
              )}
            />
          </motion.button>

          {/* Dropdown Menu */}
          {showProfileDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-48 glass rounded-2xl p-2 shadow-lg z-50"
            >
              <button className="w-full text-left px-4 py-2 rounded-xl hover:bg-white/10 dark:hover:bg-black/10 transition-colors">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 rounded-xl hover:bg-white/10 dark:hover:bg-black/10 transition-colors">
                Settings
              </button>
              <button className="w-full text-left px-4 py-2 rounded-xl hover:bg-white/10 dark:hover:bg-black/10 transition-colors text-red-500">
                Logout
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};
