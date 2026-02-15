import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Sparkles, Send, Bot, Zap } from 'lucide-react';
import { useState } from 'react';

export const AI = () => {
  const [message, setMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            AI Assistant
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Get personalized recommendations for societies and events
          </p>
        </div>

        {/* Main AI Card */}
        <GlassCard className="relative overflow-hidden">
          {/* Sparkle Animation Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-neon-cyan rounded-full"
                initial={{
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 800,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 600,
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Smart Recommendations
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Powered by AI
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl glass-strong">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                      Personalized Suggestions
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Based on your interests and activity, I recommend:
                    </p>
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-white/10 dark:bg-black/10 border border-neon-cyan/20">
                        <p className="font-medium text-slate-900 dark:text-slate-100">
                          Join Tech Innovation Hub
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Matches your interest in AI and technology
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/10 dark:bg-black/10 border border-neon-purple/20">
                        <p className="font-medium text-slate-900 dark:text-slate-100">
                          Register for AI & ML Workshop
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Perfect timing and aligns with your goals
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl glass-strong">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-neon-purple flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                      Quick Actions
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <motion.button
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Find Similar Events
                      </motion.button>
                      <motion.button
                        className="px-4 py-2 rounded-xl glass border border-white/20 font-medium hover:shadow-glow-cyan"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Explore Societies
                      </motion.button>
                      <motion.button
                        className="px-4 py-2 rounded-xl glass border border-white/20 font-medium hover:shadow-glow-purple"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Calendar
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Floating Chatbot Button */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-24 lg:bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple text-white shadow-lg z-50 flex items-center justify-center"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Outer Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-neon-cyan"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.8, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
        <Bot className="w-7 h-7" />
      </motion.button>

      {/* Chat Window */}
      {isChatOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-32 lg:bottom-24 right-8 w-96 h-96 glass rounded-3xl p-6 flex flex-col z-50 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100">AI Assistant</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="w-8 h-8 rounded-full glass flex items-center justify-center hover:shadow-glow-cyan"
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 p-3 rounded-2xl glass-strong">
                <p className="text-sm text-slate-900 dark:text-slate-100">
                  Hi! How can I help you find the perfect society or event?
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-2xl glass border border-white/20 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && message.trim()) {
                  setMessage('');
                }
              }}
            />
            <motion.button
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-white flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (message.trim()) {
                  setMessage('');
                }
              }}
            >
              <Send className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
};
