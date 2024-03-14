import React, { useState, useEffect } from 'react';

function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch songs from backend
    // Example: fetch('/api/songs').then(res => res.json()).then(data => setSongs(data));
  }, []);

  return (
    <div>
      <h2>Song List</h2>
      <ul>
        {songs.map((song) => (
          <li key={song._id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
