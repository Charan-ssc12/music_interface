export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  image: string;
  audioUrl?: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  image: string;
  tracks: Track[];
  creator: string;
}

export interface Album {
  id: string;
  name: string;
  artist: string;
  image: string;
  year: number;
  tracks: Track[];
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  followers: string;
  genres: string[];
}