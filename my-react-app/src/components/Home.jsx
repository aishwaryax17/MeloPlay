import React from 'react';

import { Link } from 'react-router-dom';


const Home = () => {
  
  return (
    <>
    <div className="home" >
      <div className="sidebar">
        <ul className="left">
          <li><img src="logo.png" alt="logo" className='img'></img></li>
          <li><Link to="/Search">Search</Link></li>
          <li><Link to="/HistoryPage">History</Link></li>
          <li><Link to="/UserDetails">User Details</Link></li>
        </ul>
        
      </div>
      <div className="content">
      <div className="recommended-songs">
        <section className='row1'>
          
        {/* Song 1 */}
        <div className="song">
          <img src="song1.jpg" alt="Song 1" />
          <div className="song-details">
            <p className="song-name">Song 1 Name</p>
            <button className="play-button">Play</button>
          </div>
        </div>

        {/* Song 2 */}
        <div className="song">
          <img src="song2.jpg" alt="Song 2" />
          <div className="song-details">
            <p className="song-name">Song 2 Name</p>
            <button className="play-button">Play</button>
          </div>
        </div>

        {/* Song 3 */}
        <div className="song">
          <img src="song3.jpg" alt="Song 3" />
          <div className="song-details">
            <p className="song-name">Song 3 Name</p>
            <button className="play-button">Play</button>
          </div>
        </div>
        
        </section>
<section className='row2'>
        {/* Song 4 */}
        <div className="song">
          <img src="song4.jpg" alt="Song 4" />
          <div className="song-details">
            <p className="song-name">Song 4 Name</p>
            <button className="play-button">Play</button>
          </div>
        </div>

        {/* Song 5 */}
        <div className="song">
          <img src="song5.jpg" alt="Song 5" />
          <div className="song-details">
            <p className="song-name">Song 5 Name</p>
            <button className="play-button">Play</button>
          </div>
        </div>

        {/* Song 6 */}
        <div className="song">
          <img src="song6.jpg" alt="Song 6" />
          <div className="song-details">
            <p className="song-name">Song 6 Name</p>
            <button className="play-button">Play</button>
          </div>
        </div>
      </section>  
      </div>
    </div>
      
    </div>
    </>
  );
};

export default Home;
