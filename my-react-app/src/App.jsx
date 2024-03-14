
import './App.css'
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Login from './components/Login.jsx';









  const App = () => {
    const [user, setUser] = useState({
      username: 'exampleUser',
      email: 'user@example.com'
    });
  
    
  
  return (
    <>
    
   <Login/>

    </>
  );
}

export default App;
