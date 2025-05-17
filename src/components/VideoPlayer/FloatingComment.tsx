'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FloatingCommentProps } from '@/types';

export default function FloatingComment({ comment, isVisible }: FloatingCommentProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 p-4 glass-morphism-dark neon-blue rounded-lg shadow-xl max-w-md"
        >
          {/* Animated particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `hsl(${Math.random() * 360}, 70%, 70%)`,
                boxShadow: `0 0 10px hsl(${Math.random() * 360}, 70%, 70%)`,
              }}
              initial={{ 
                x: '50%',
                y: '50%',
                scale: 0,
                opacity: 0.8
              }}
              animate={{ 
                x: ['-50%', '150%'],
                y: ['-50%', '150%'],
                scale: [0, 1, 0],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.6,
                ease: 'linear'
              }}
            />
          ))}

          <div className="flex items-start gap-3 relative z-10">
            <motion.img
              src={comment.avatar}
              alt={comment.username}
              className="w-8 h-8 rounded-full ring-2 ring-blue-500/50"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                delay: 0.1
              }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            />
            <div>
              <div className="flex items-center gap-2">
                <motion.p
                  className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {comment.username}
                </motion.p>
                <motion.span
                  className="text-xs text-blue-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {new Date(comment.createdAt).toLocaleTimeString()}
                </motion.span>
              </div>
              <motion.p
                className="text-sm text-gray-300 mt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {comment.text}
              </motion.p>
            </div>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/80 transform rotate-45 glass-morphism"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none shimmer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 