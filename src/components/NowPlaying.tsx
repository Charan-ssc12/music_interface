import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  Volume2, 
  VolumeX,
  Heart,
  PictureInPicture
} from 'lucide-react';
import { usePlayer } from '../contexts/PlayerContext';

const NowPlaying: React.FC = () => {
  const { 
    currentTrack, 
    isPlaying, 
    togglePlay, 
    currentTime, 
    duration, 
    volume, 
    setCurrentTime,
    setVolume 
  } = usePlayer();
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    if (isPlaying && currentTrack) {
      const interval = setInterval(() => {
        setCurrentTime(currentTime + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentTime, currentTrack, setCurrentTime]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseInt(e.target.value);
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(0.7);
      setIsMuted(false);
    } else {
      setVolume(0);
      setIsMuted(true);
    }
  };

  if (!currentTrack) {
    return null;
  }

  return (
    <div className="bg-gray-900 border-t border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Current Track Info */}
        <div className="flex items-center space-x-3 w-1/4">
          <img
            src={currentTrack.image}
            alt={currentTrack.title}
            className="w-14 h-14 rounded"
          />
          <div className="min-w-0">
            <div className="text-white font-medium truncate">{currentTrack.title}</div>
            <div className="text-gray-400 text-sm truncate">{currentTrack.artist}</div>
          </div>
          <button className="text-gray-400 hover:text-white p-1">
            <Heart size={16} />
          </button>
          <button className="text-gray-400 hover:text-white p-1">
            <PictureInPicture size={16} />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center w-1/2 max-w-md">
          <div className="flex items-center space-x-4 mb-2">
            <button className="text-gray-400 hover:text-white">
              <Shuffle size={16} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipBack size={20} />
            </button>
            <button
              onClick={togglePlay}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause size={16} className="text-black" />
              ) : (
                <Play size={16} className="text-black ml-0.5" />
              )}
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipForward size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Repeat size={16} />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full">
            <span className="text-xs text-gray-400 w-10 text-right">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1">
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleProgressChange}
                className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <span className="text-xs text-gray-400 w-10">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center space-x-3 w-1/4 justify-end">
          <button className="text-gray-400 hover:text-white">
            <PictureInPicture size={16} />
          </button>
          <div 
            className="flex items-center space-x-2"
            onMouseEnter={() => setShowVolumeSlider(true)}
            onMouseLeave={() => setShowVolumeSlider(false)}
          >
            <button onClick={toggleMute} className="text-gray-400 hover:text-white">
              {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <div className={`transition-all duration-200 ${showVolumeSlider ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;