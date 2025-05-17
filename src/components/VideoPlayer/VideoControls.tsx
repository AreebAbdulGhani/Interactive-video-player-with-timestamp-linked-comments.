'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';
import { VideoControlsProps } from '@/types';
import { formatTime } from '@/utils/formatTime';

export default function VideoControls({
  isPlaying,
  duration,
  currentTime,
  volume,
  onPlayPause,
  onSeek,
  onVolumeChange,
  comments,
}: VideoControlsProps) {
  const seekBarWidth = (currentTime / duration) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="relative p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-sm"
    >
      {/* Progress bar with comment markers */}
      <div className="relative w-full h-2 mb-4 bg-gray-600/40 rounded-full cursor-pointer group"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const percentage = x / rect.width;
          onSeek(percentage * duration);
        }}
      >
        {/* Comment markers */}
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full neon-blue"
            style={{ left: `${(comment.timestamp / duration) * 100}%` }}
            initial={{ scale: 0 }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-400"
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        ))}

        {/* Progress bar */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          style={{ width: `${seekBarWidth}%` }}
          layoutId="seekBar"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full neon-blue" />
        </motion.div>

        {/* Hover preview */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-full shimmer" />
        </motion.div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Play/Pause button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPlayPause}
            className="p-3 rounded-full hover:bg-white/10 glass-morphism"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isPlaying ? 'pause' : 'play'}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: 'spring', duration: 0.3 }}
              >
                {isPlaying ? (
                  <PauseIcon className="w-6 h-6 text-white" />
                ) : (
                  <PlayIcon className="w-6 h-6 text-white" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Time display */}
          <div className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        {/* Volume control */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onVolumeChange(volume === 0 ? 1 : 0)}
            className="p-3 rounded-full hover:bg-white/10 glass-morphism"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={volume === 0 ? 'muted' : 'unmuted'}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: 'spring', duration: 0.3 }}
              >
                {volume === 0 ? (
                  <SpeakerXMarkIcon className="w-6 h-6 text-white" />
                ) : (
                  <SpeakerWaveIcon className="w-6 h-6 text-white" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          <motion.div
            className="relative w-24 h-2 bg-gray-600/40 rounded-full cursor-pointer overflow-hidden glass-morphism"
            whileHover={{ scale: 1.02 }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const percentage = x / rect.width;
              onVolumeChange(Math.max(0, Math.min(1, percentage)));
            }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{ width: `${volume * 100}%` }}
              layoutId="volumeBar"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full neon-purple" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 