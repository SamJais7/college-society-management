import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Sparkles, 
  ChevronLeft,
  Menu
} from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/societies', icon: Users, label: 'Societies' },
  { path: '/events', icon: Calendar, label: 'Events' },
  { path: '/ai', icon: Sparkles, label: 'AI Assistant' },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-12 h-12 glass rounded-2xl flex items-center justify-center hover:shadow-glow-cyan transition-all"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Desktop Sidebar */}
      <motion.aside
        className="hidden lg:flex fixed left-0 top-0 h-full z-40 flex-col"
        animate={{ width: isCollapsed ? 80 : 280 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="glass h-full rounded-r-3xl p-4 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            {!isCollapsed && (
              <motion.h1
                className="text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                SocietyHub
              </motion.h1>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:shadow-glow-cyan transition-all"
            >
              <ChevronLeft
                className={clsx('w-5 h-5 transition-transform', isCollapsed && 'rotate-180')}
              />
            </button>
          </div>

          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  clsx(
                    'flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300',
                    isActive
                      ? 'glass-strong shadow-glow-cyan text-neon-cyan'
                      : 'hover:glass hover:shadow-soft text-slate-600 dark:text-slate-300'
                  )
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      className="font-medium whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-[280px] z-50 lg:hidden"
            >
              <div className="glass h-full rounded-r-3xl p-4 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                    SocietyHub
                  </h1>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>
                <nav className="flex-1 space-y-2">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={({ isActive }) =>
                        clsx(
                          'flex items-center gap-4 px-4 py-3 rounded-2xl transition-all',
                          isActive
                            ? 'glass-strong shadow-glow-cyan text-neon-cyan'
                            : 'hover:glass text-slate-600 dark:text-slate-300'
                        )
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </NavLink>
                  ))}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Navigation (Mobile) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 glass rounded-t-3xl border-t border-white/20">
        <div className="flex items-center justify-around px-4 py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  'flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all',
                  isActive
                    ? 'text-neon-cyan'
                    : 'text-slate-600 dark:text-slate-300'
                )
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};
