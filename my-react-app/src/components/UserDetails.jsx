// UserDetails.js

import React from 'react';

const UserDetails = ({ username, email, onLogout }) => {
  return (
    <div className="user-details">
      <h1>User Details</h1>
      <div className="profile">
      <img src="/pro.jpg" alt="Profile" className="profile-pic" />

        <button className="edit-btn">Edit</button>
      </div>
      <div className="info">
        <div className="user-input-container">
          <label htmlFor="username" className="label">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="user-input"
         
            
          />
        </div>
        <div className="user-input-container">
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="user-input"
        
            
          />
        </div>
        <div className="user-input-container">
          <label htmlFor="password" className="label">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="user-input"
          />
        </div>
      </div>
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default UserDetails;