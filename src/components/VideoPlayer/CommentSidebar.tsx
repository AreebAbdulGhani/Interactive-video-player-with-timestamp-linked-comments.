'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatTime } from '@/utils/formatTime';
import { CommentSidebarProps } from '@/types';
import confetti from 'canvas-confetti';

export default function CommentSidebar({
  comments,
  currentTime,
  onCommentClick,
  onAddComment,
}: CommentSidebarProps) {
  const [newComment, setNewComment] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);
  const commentListRef = useRef<HTMLDivElement>(null);

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment, currentTime);
      setNewComment('');
      
      // Trigger confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.8, x: 0.8 },
        colors: ['#60A5FA', '#A78BFA', '#F472B6'],
      });
    }
  };

  const sortedComments = [...comments].sort((a, b) => a.timestamp - b.timestamp);

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ 
        width: isExpanded ? 320 : 80,
        opacity: 1
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="relative glass-morphism-dark rounded-lg overflow-hidden"
    >
      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: isExpanded ? -90 : 90 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute top-2 right-2 p-2 rounded-full glass-morphism neon-blue"
      >
        <motion.svg
          className="w-4 h-4 text-white"
          animate={{ rotate: isExpanded ? 0 : 180 }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isExpanded ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full p-4"
          >
            <motion.h3 
              className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              Comments
            </motion.h3>

            {/* Comment list */}
            <div
              ref={commentListRef}
              className="space-y-4 h-[calc(100vh-320px)] overflow-y-auto pr-2 custom-scrollbar"
            >
              {sortedComments.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center p-8 text-gray-400"
                >
                  <motion.svg
                    className="w-16 h-16 mb-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </motion.svg>
                  <motion.p 
                    className="text-sm font-medium"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    No comments yet
                  </motion.p>
                  <p className="text-xs mt-1">Be the first to add a comment!</p>
                </motion.div>
              ) : (
                sortedComments.map((comment, index) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1,
                      x: 0,
                      scale: Math.abs(comment.timestamp - currentTime) < 0.5 ? 1.02 : 1
                    }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 rounded-lg transition-all ${
                      Math.abs(comment.timestamp - currentTime) < 0.5
                        ? 'glass-morphism neon-blue'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <motion.img
                        src={comment.avatar}
                        alt={comment.username}
                        className="w-8 h-8 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        initial={{ rotate: -10 }}
                        animate={{ rotate: 0 }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-white">
                            {comment.username}
                          </p>
                          <motion.button
                            onClick={() => onCommentClick(comment.timestamp)}
                            className="text-xs text-blue-400 hover:text-blue-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {formatTime(comment.timestamp)}
                          </motion.button>
                        </div>
                        <p className="text-sm text-gray-300 mt-1 break-words">
                          {comment.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Add comment form */}
            <motion.div 
              className="mt-4 space-y-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full p-2 rounded bg-white/5 border border-white/10 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 glass-morphism"
                rows={2}
              />
              <div className="flex items-center justify-between">
                <motion.span 
                  className="text-sm text-gray-400"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  at {formatTime(currentTime)}
                </motion.span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddComment}
                  disabled={!newComment.trim()}
                  className="px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed neon-blue"
                >
                  Add Comment
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 