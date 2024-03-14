import React, { useEffect, useState } from 'react';
 import { Link } from 'react-router-dom';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lyrics, setLyrics] = useState('');

  const handleSearch = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9e1fc6a8cdmsh76cd1ac4888aa24p19e51bjsnbb6a312b0e8f',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchQuery}`, options);
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        setTracks(data.data);
        setError(null);
      } else {
        setTracks([]);
        setError('No results found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    }
  };

  const playAudio = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const stopAudio = () => {
    setCurrentTrack(null);
    setIsPlaying(false);
  };

  const fetchLyrics = async (track) => {
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${track.artist.name}/${track.title}`);
      const data = await response.json();
      setLyrics(data.lyrics);
    } catch (error) {
      console.error('Error fetching lyrics:', error);
      setLyrics('Lyrics not found');
    }
  };
//   const [songName, setSongName] = useState('');

//   const handleSearch = () => {
//     // Implement search logic here (e.g., fetching lyrics based on songName)
//     console.log('Searching for:', songName);
//   };

  return (
    <div className="search">

      <div className="sidebar">
        <ul className="left">
          <li><img src="logo.png" alt="logo" className='img'></img></li>

          <li><Link to="/HistoryPage">History</Link></li>
          <li><Link to="/UserDetails">User Details</Link></li>
         <li><img src="./public/music.jpg"  alt="music"className='quote'></img></li>

        </ul>

      </div>
      <div className="see">
        <h2>Search for Lyrics</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter song name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div>
        <h2>Search Results</h2>
        {error && <p>{error}</p>}
        <ul>
          {tracks.map((track, index) => (
            <li key={index}>
              {track.title}
              <button onClick={() => playAudio(track)}>Play</button>
              <button onClick={() => fetchLyrics(track)}>View Lyrics</button> {/* Added button for fetching lyrics */}
            </li>
          ))}
        </ul>
      </div>
      {currentTrack && (
        <div>
          <h2>Now Playing</h2>
          <p>{currentTrack.title}</p>
          <audio
            src={currentTrack.preview}
            controls
            autoPlay={isPlaying}
            onEnded={stopAudio}
          >
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
      )}
      {lyrics && (
        <div>
          <h2>Lyrics</h2>
          <pre>{lyrics}</pre>
        </div>
      )}

      </div>
    </div>
  );
};

 export default Search;

