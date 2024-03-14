import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Login = () => {
  const [username, setUsername] = useState('');
 
  const [password, setPassword] = useState('');
  
  return (

    <div class="login">
      <div className='bg' ></div>
  
<div className='top'>
     <img src="logo.png" alt="logo" className='melo'></img>
    <div className='title' ><h2>LOGIN</h2></div>
      </div>
      <div className='loginBox'>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <Link to ="/Search"> <button type='button'>Login</button></Link>
       

       
      </form>
      </div>
    </div>
    
  );
};

export default Login;
