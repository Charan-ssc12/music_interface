import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import NowPlaying from './components/NowPlaying';
import { PlayerProvider } from './contexts/PlayerContext';

function App() {
  const [activeView, setActiveView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <PlayerProvider>
      <div className="h-screen bg-black flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeView={activeView} setActiveView={setActiveView} />
          <MainContent 
            activeView={activeView} 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <NowPlaying />
      </div>
    </PlayerProvider>
  );
}

export default App;