import React from 'react';
import PlaylistCard from './PlaylistCard';
import TrackList from './TrackList';
import SearchBar from './SearchBar';
import { mockPlaylists, mockRecentlyPlayed, mockTracks } from '../data/mockData';

interface MainContentProps {
  activeView: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ activeView, searchQuery, setSearchQuery }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const filteredPlaylists = mockPlaylists.filter(playlist =>
    playlist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    playlist.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTracks = mockTracks.filter(track =>
    track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    track.album.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (activeView === 'search') {
    return (
      <div className="flex-1 bg-gradient-to-b from-gray-900 to-black text-white overflow-y-auto">
        <div className="p-6">
          <SearchBar onSearch={setSearchQuery} />
          
          {searchQuery ? (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Search Results</h2>
              
              {filteredTracks.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Songs</h3>
                  <TrackList tracks={filteredTracks.slice(0, 4)} showHeader={false} />
                </div>
              )}
              
              {filteredPlaylists.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Playlists</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filteredPlaylists.map((playlist) => (
                      <PlaylistCard key={playlist.id} playlist={playlist} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Browse all</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['Pop', 'Hip-Hop', 'Rock', 'Jazz', 'Classical', 'Electronic', 'Country', 'R&B'].map((genre, index) => (
                  <div
                    key={genre}
                    className={`p-4 rounded-lg cursor-pointer hover:brightness-110 transition-all ${
                      ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'][index]
                    }`}
                  >
                    <h3 className="text-xl font-bold">{genre}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (activeView === 'library') {
    return (
      <div className="flex-1 bg-gradient-to-b from-gray-900 to-black text-white overflow-y-auto">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-8">Your Library</h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Recently Played</h2>
            <TrackList tracks={mockRecentlyPlayed} />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Made for You</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {mockPlaylists.slice(0, 10).map((playlist) => (
                <PlaylistCard key={playlist.id} playlist={playlist} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 to-black text-white overflow-y-auto">
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-8">{getGreeting()}</h1>
        
        {/* Quick Access */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {mockRecentlyPlayed.slice(0, 6).map((track) => (
            <div
              key={track.id}
              className="bg-gray-800 rounded-md flex items-center hover:bg-gray-700 transition-colors cursor-pointer group"
            >
              <img
                src={track.image}
                alt={track.title}
                className="w-16 h-16 rounded-l-md"
              />
              <div className="px-4 flex-1">
                <div className="font-semibold">{track.title}</div>
                <div className="text-sm text-gray-400">{track.artist}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Playlists */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Made for you</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {mockPlaylists.slice(0, 5).map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </div>
        
        {/* Popular Playlists */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Popular playlists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {mockPlaylists.slice(3).map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;