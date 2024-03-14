import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [songName, setSongName] = useState('');

  const handleSearch = () => {
    // Implement search logic here (e.g., fetching lyrics based on songName)
    console.log('Searching for:', songName);
  };

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
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
