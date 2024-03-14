import React from 'react';

const HistoryPage = ({ username }) => {
    
  // Sample data for demonstration
  const searchHistory = [
    { id: 1, query: 'Song 1 lyrics' },
    { id: 2, query: 'Song 2 lyrics' },
    { id: 3, query: 'Song 3 lyrics' },
    { id: 4, query: 'Song 4 lyrics' },
    { id: 5, query: 'Song 5 lyrics' },
  ];

  // Default value for username
  const defaultUsername = "Guest";

  return (
    <div className="history-page">
      <div className='hist'>  
      <h1> <i>History</i></h1>
      <div className='Wel'>
        <p><h3>Welcome, {username || defaultUsername}!</h3></p>
      </div>
      <ul className="history-list">
        {searchHistory.map((item) => (
          <li key={item.id} className="history-item">
            <span>{item.query}</span>
          </li>
        ))}
      </ul>
      </div> 
    </div>
  );
};
export default HistoryPage;
