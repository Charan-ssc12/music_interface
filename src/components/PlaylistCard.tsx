import React from 'react';
import { Play } from 'lucide-react';
import { Playlist } from '../types';
import { usePlayer } from '../contexts/PlayerContext';

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  const { playTrack } = usePlayer();

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (playlist.tracks.length > 0) {
      playTrack(playlist.tracks[0]);
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 cursor-pointer group">
      <div className="relative mb-4">
        <img
          src={playlist.image}
          alt={playlist.name}
          className="w-full aspect-square object-cover rounded-md"
        />
        <button
          onClick={handlePlay}
          className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-green-400 hover:scale-105"
        >
          <Play size={20} className="text-black ml-1" />
        </button>
      </div>
      <h3 className="font-semibold text-white mb-2 truncate">{playlist.name}</h3>
      <p className="text-gray-400 text-sm line-clamp-2">{playlist.description}</p>
    </div>
  );
};

export default PlaylistCard;