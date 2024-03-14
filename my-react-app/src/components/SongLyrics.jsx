import React, { useState, useEffect } from 'react';

const SongLyrics = ({ selectedSong }) => {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    // Fetch the lyrics for the selected song when it changes
    if (selectedSong) {
      fetchLyrics(selectedSong);
    }
  }, [selectedSong]);

  const fetchLyrics = async (song) => {
    try {
      // Make a request to your server to get the lyrics for the selected song
      const response = await fetch(`/api/lyrics/${song.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch lyrics');
      }
      const data = await response.json();
      setLyrics(data.lyrics);
    } catch (error) {
      console.error('Error fetching lyrics:', error);
      setLyrics('Lyrics not available');
    }
  };

  return (
    <div className="song-lyrics">
      <h2>{selectedSong ? selectedSong.title : 'Select a song'}</h2>
      <pre>{lyrics}</pre>
    </div>
  );
};

export default SongLyrics;
