import { Track, Playlist, Album } from '../types';

export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '2',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    duration: '2:54',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '3',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    duration: '2:58',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '4',
    title: 'Stay',
    artist: 'The Kid LAROI, Justin Bieber',
    album: 'F*CK LOVE 3: OVER YOU',
    duration: '2:21',
    image: 'https://images.pexels.com/photos/1694835/pexels-photo-1694835.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '5',
    title: 'Heat Waves',
    artist: 'Glass Animals',
    album: 'Dreamland',
    duration: '3:58',
    image: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

export const mockPlaylists: Playlist[] = [
  {
    id: '1',
    name: 'Today\'s Top Hits',
    description: 'The most played songs right now',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    creator: 'Spotify',
    tracks: mockTracks,
  },
  {
    id: '2',
    name: 'RapCaviar',
    description: 'New music from Drake, Travis Scott, and more',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
    creator: 'Spotify',
    tracks: mockTracks,
  },
  {
    id: '3',
    name: 'Pop Rising',
    description: 'The latest and greatest in pop music',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    creator: 'Spotify',
    tracks: mockTracks,
  },
  {
    id: '4',
    name: 'Chill Hits',
    description: 'Kick back to the best new and recent chill hits',
    image: 'https://images.pexels.com/photos/1694835/pexels-photo-1694835.jpeg?auto=compress&cs=tinysrgb&w=300',
    creator: 'Spotify',
    tracks: mockTracks,
  },
  {
    id: '5',
    name: 'Indie Pop',
    description: 'The best indie pop tracks',
    image: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=300',
    creator: 'Spotify',
    tracks: mockTracks,
  },
  {
    id: '6',
    name: 'Rock Classics',
    description: 'Rock legends & epic songs',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    creator: 'Spotify',
    tracks: mockTracks,
  },
];

export const mockRecentlyPlayed = mockTracks.slice(0, 6);

export const mockAlbums: Album[] = [
  {
    id: '1',
    name: 'After Hours',
    artist: 'The Weeknd',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2020,
    tracks: mockTracks,
  },
  {
    id: '2',
    name: 'Fine Line',
    artist: 'Harry Styles',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2019,
    tracks: mockTracks,
  },
  {
    id: '3',
    name: 'SOUR',
    artist: 'Olivia Rodrigo',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
    year: 2021,
    tracks: mockTracks,
  },
];