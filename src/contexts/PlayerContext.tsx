import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Track } from '../types';

interface PlayerContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  setCurrentTime: (time: number) => void;
  setVolume: (volume: number) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};

interface PlayerProviderProps {
  children: ReactNode;
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setCurrentTime(0);
    setDuration(210); // Mock duration
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSetCurrentTime = (time: number) => {
    setCurrentTime(time);
  };

  const handleSetVolume = (vol: number) => {
    setVolume(vol);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        volume,
        playTrack,
        togglePlay,
        setCurrentTime: handleSetCurrentTime,
        setVolume: handleSetVolume,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};