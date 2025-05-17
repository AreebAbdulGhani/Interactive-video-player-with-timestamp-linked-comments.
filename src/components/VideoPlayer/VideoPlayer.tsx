'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from 'react-use';
import { VideoPlayerProps, Comment } from '@/types';
import VideoControls from './VideoControls';
import CommentSidebar from './CommentSidebar';
import FloatingComment from './FloatingComment';

export default function VideoPlayer({ videoUrl, comments, onAddComment }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [showFloatingComments, setShowFloatingComments] = useState(true);
  const [activeComment, setActiveComment] = useState<Comment | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
  }, []);

  useInterval(() => {
    if (videoRef.current && isPlaying) {
      setCurrentTime(videoRef.current.currentTime);
      
      // Check for comments at current timestamp
      const currentComment = comments.find(
        comment => Math.abs(comment.timestamp - videoRef.current!.currentTime) < 0.5
      );
      
      if (currentComment && showFloatingComments) {
        setActiveComment(currentComment);
        setTimeout(() => setActiveComment(null), 3000);
      }
    }
  }, 100);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex w-full max-w-6xl gap-4 p-4 rounded-xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <div className="relative flex-grow aspect-video rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-cover"
          onClick={handlePlayPause}
        />
        
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-0 right-0"
            >
              <VideoControls
                isPlaying={isPlaying}
                duration={duration}
                currentTime={currentTime}
                volume={volume}
                onPlayPause={handlePlayPause}
                onSeek={handleSeek}
                onVolumeChange={handleVolumeChange}
                comments={comments}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeComment && (
            <FloatingComment comment={activeComment} isVisible={true} />
          )}
        </AnimatePresence>
      </div>

      <CommentSidebar
        comments={comments}
        currentTime={currentTime}
        onCommentClick={handleSeek}
        onAddComment={(text, timestamp) => {
          onAddComment({
            username: 'You',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
            text,
            timestamp,
          });
        }}
      />
    </motion.div>
  );
} 