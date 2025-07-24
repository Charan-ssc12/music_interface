import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';
import { mockPlaylists } from '../data/mockData';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const navigationItems = [
    { icon: Home, label: 'Home', id: 'home' },
    { icon: Search, label: 'Search', id: 'search' },
    { icon: Library, label: 'Your Library', id: 'library' },
  ];

  return (
    <div className="w-64 bg-black text-white h-full flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full"></div>
          </div>
          <span className="text-xl font-bold">Spotify</span>
        </div>
        
        <nav className="space-y-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`flex items-center space-x-3 w-full text-left p-2 rounded-md transition-colors ${
                  activeView === item.id
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Icon size={24} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
      
      <div className="px-6 py-4">
        <div className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer mb-4">
          <Plus size={20} />
          <span>Create Playlist</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer">
          <Heart size={20} />
          <span>Liked Songs</span>
        </div>
      </div>
      
      <div className="flex-1 px-6 pb-6 overflow-y-auto">
        <div className="border-t border-gray-800 pt-4">
          <div className="space-y-2">
            {mockPlaylists.slice(0, 8).map((playlist) => (
              <div
                key={playlist.id}
                className="text-gray-300 hover:text-white cursor-pointer text-sm py-1 truncate"
              >
                {playlist.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;