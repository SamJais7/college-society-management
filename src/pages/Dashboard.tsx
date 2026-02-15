import { motion } from 'framer-motion';
import { StatCard } from '../components/StatCard';
import { GlassCard } from '../components/GlassCard';
import { Users, Calendar, TrendingUp, Activity } from 'lucide-react';
import { LineChart, Line, PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const stats = [
  { title: 'Total Societies', value: 24, icon: Users, change: 12, color: 'cyan' as const },
  { title: 'Active Events', value: 18, icon: Calendar, change: 8, color: 'purple' as const },
  { title: 'Members', value: 1247, icon: TrendingUp, change: 15, color: 'cyan' as const },
  { title: 'Engagement', value: 89, icon: Activity, change: 5, color: 'purple' as const },
];

const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 450 },
  { name: 'May', value: 600 },
  { name: 'Jun', value: 550 },
];

const doughnutData = [
  { name: 'Tech', value: 35, color: '#00f5ff' },
  { name: 'Cultural', value: 25, color: '#a855f7' },
  { name: 'Sports', value: 20, color: '#10b981' },
  { name: 'Academic', value: 20, color: '#f59e0b' },
];

const recentActivity = [
  { id: 1, title: 'New event: Tech Hackathon 2024', time: '2 hours ago', type: 'event' },
  { id: 2, title: 'Society: Coding Club added 15 new members', time: '5 hours ago', type: 'society' },
  { id: 3, title: 'Event: Photography Workshop completed', time: '1 day ago', type: 'event' },
  { id: 4, title: 'Society: Music Society published new album', time: '2 days ago', type: 'society' },
];

const upcomingEvents = [
  { id: 1, title: 'AI & ML Workshop', date: '2024-03-15', time: '10:00 AM', capacity: 75 },
  { id: 2, title: 'Cultural Fest 2024', date: '2024-03-20', time: '2:00 PM', capacity: 90 },
  { id: 3, title: 'Sports Tournament', date: '2024-03-25', time: '9:00 AM', capacity: 60 },
];

export const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <GlassCard>
          <h3 className="text-xl font-bold mb-6">Engagement Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#00f5ff"
                strokeWidth={3}
                dot={{ fill: '#00f5ff', r: 5 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Doughnut Chart */}
        <GlassCard>
          <h3 className="text-xl font-bold mb-6">Society Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={doughnutData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {doughnutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {doughnutData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Activity & Events Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <GlassCard>
          <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl glass hover:shadow-soft transition-all cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-medium text-slate-900 dark:text-slate-100">
                    {activity.title}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {activity.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        {/* Upcoming Events */}
        <GlassCard>
          <h3 className="text-xl font-bold mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 rounded-2xl glass hover:shadow-glow-cyan transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">
                    {event.title}
                  </h4>
                  <span className="text-xs font-medium text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded-xl">
                    {event.capacity}% full
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.time}</span>
                </div>
                <div className="mt-3 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${event.capacity}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
};
