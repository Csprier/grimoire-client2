import React, { useState } from 'react';
import './css/login.css';

const Login = () => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  let error;
  return(
    <form 
      className="login-form" 
      onSubmit={(e) => {
        e.preventDefault();
        console.log(username, password)
      }}
    >
      <h1>LOGIN</h1>
      <label>
        Username:
        <input 
          name="login"
          type="text"
          onChange={(e) => { 
            console.log(e.target.value);
            let typedUsername = e.target.value;
            onChangeUsername(typedUsername)
          }}
          required
        />
      </label>
      <label>
        Password:
        <input 
          name="password"
          type="password"
          onChange={(e) => { 
            console.log(e.target.value);
            let typedPassword = e.target.value;
            onChangePassword(typedPassword)
          }}
          required
        />
      </label>
      <button 
        type="submit" 
        className="login-button"
      >Login</button>
    </form>
  );
}

export default Login;