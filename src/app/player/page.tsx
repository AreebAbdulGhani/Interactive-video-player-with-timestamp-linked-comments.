'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimePlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    // Default video URL - replace with your actual video URL
    const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    
    if (videoRef.current) {
      videoRef.current.src = videoUrl;
    }
    
    // Setup event listeners
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('timeupdate', updateProgress);
      videoElement.addEventListener('loadedmetadata', () => {
        setDuration(videoElement.duration);
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, []);

  const updateProgress = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      setCurrentTime(currentTime);
      
      if (progressBarRef.current && videoRef.current.duration) {
        const percent = (currentTime / videoRef.current.duration) * 100;
        progressBarRef.current.style.width = `${percent}%`;
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSpeed = parseFloat(e.target.value);
    setSpeed(newSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed;
    }
  };

  const seekTo = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && videoRef.current) {
      const progressWidth = progressRef.current.clientWidth;
      const clickX = e.nativeEvent.offsetX;
      const percentage = clickX / progressWidth;
      const newTime = videoRef.current.duration * percentage;
      
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2E0854] py-8 px-4">
      <h1 className="text-4xl font-bold text-white mb-2 animate-pulse">
        Anime Video Player
      </h1>
      <h2 className="text-2xl text-white mb-8">
        Integrated Web Player
      </h2>
      
      <div className="w-full max-w-3xl relative rounded-lg overflow-hidden border-2 border-[#FF00FF] shadow-lg shadow-[#FF00FF]/50 bg-black/50">
        <video 
          ref={videoRef}
          className="w-full h-auto"
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur p-4 flex flex-col gap-2">
          <div
            ref={progressRef}
            className="h-1 bg-white/20 relative cursor-pointer mb-2"
            onClick={seekTo}
          >
            <div 
              ref={progressBarRef}
              className="absolute left-0 top-0 h-full bg-[#FF00FF]"
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-2">
            <button 
              onClick={togglePlay} 
              className="bg-gradient-to-r from-[#FF00FF] to-[#9400D3] text-white px-4 py-2 rounded font-bold hover:shadow-md hover:shadow-[#FF00FF]/50 transition"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            
            <div className="flex items-center">
              <span className="text-white text-sm mr-2">Volume:</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-white/20 appearance-none rounded [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FF00FF] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-[#FF00FF]/50"
              />
            </div>
            
            <select
              value={speed}
              onChange={handleSpeedChange}
              className="bg-[#FF00FF]/20 border border-[#FF00FF] text-white px-2 py-1 rounded text-sm"
            >
              <option value="0.5">0.5x</option>
              <option value="0.75">0.75x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
            
            <div className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 