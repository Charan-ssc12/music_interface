import React from 'react';
import { Play, MoreHorizontal, Clock } from 'lucide-react';
import { Track } from '../types';
import { usePlayer } from '../contexts/PlayerContext';

interface TrackListProps {
  tracks: Track[];
  showHeader?: boolean;
}

const TrackList: React.FC<TrackListProps> = ({ tracks, showHeader = true }) => {
  const { playTrack, currentTrack, isPlaying } = usePlayer();

  const formatTime = (seconds: string) => {
    const [min, sec] = seconds.split(':');
    return `${min}:${sec.padStart(2, '0')}`;
  };

  return (
    <div className="text-white">
      {showHeader && (
        <div className="grid grid-cols-[16px_1fr_1fr_1fr_60px] gap-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-800 mb-2">
          <div>#</div>
          <div>TITLE</div>
          <div>ALBUM</div>
          <div>DATE ADDED</div>
          <Clock size={16} />
        </div>
      )}
      
      <div className="space-y-1">
        {tracks.map((track, index) => {
          const isCurrentTrack = currentTrack?.id === track.id;
          return (
            <div
              key={track.id}
              className="grid grid-cols-[16px_1fr_1fr_1fr_60px] gap-4 px-4 py-2 rounded-md hover:bg-gray-800 group cursor-pointer"
              onClick={() => playTrack(track)}
            >
              <div className="flex items-center justify-center">
                {isCurrentTrack && isPlaying ? (
                  <div className="w-4 h-4 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-1 h-4 bg-green-500 animate-pulse"></div>
                      <div className="w-1 h-4 bg-green-500 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-4 bg-green-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="text-gray-400 group-hover:hidden">{index + 1}</span>
                    <Play size={16} className="text-white hidden group-hover:block" />
                  </>
                )}
              </div>
              
              <div className="flex items-center space-x-3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-10 h-10 rounded"
                />
                <div>
                  <div className={`font-medium ${isCurrentTrack ? 'text-green-500' : 'text-white'}`}>
                    {track.title}
                  </div>
                  <div className="text-sm text-gray-400">{track.artist}</div>
                </div>
              </div>
              
              <div className="flex items-center text-gray-400 text-sm">
                {track.album}
              </div>
              
              <div className="flex items-center text-gray-400 text-sm">
                7 days ago
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{formatTime(track.duration)}</span>
                <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-700 rounded">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackList;