import React from 'react';
import useForm from '../custom-hooks/useForm';
import './css/login.css';

import Util from '../utility/util';

const Login = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(login, Util.USER.validateLogin);

  function login() {
    console.log(values);
    let username = values.username;
    let password = values.password;
    Util.API.loginUser(username, password);    
  }

  return(
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="input-container">
        <label className="label">Username
          <input 
            className="input"
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username || ''}
            placeholder="Username..."
            required
          />
          {errors.username && (
            <p className="error">{errors.username}</p>
          )}
        </label>
        <label className="label">Password
          <input 
            className="input"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password  || ''}
            placeholder="Password..."
            required
          />
          {errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </label>
      </div>
      <div className="button-container">
        <button onClick={() => console.log('Login button clicked')}type="submit" className="login-button">Login</button>
      </div>
    </form>
  );
}

export default Login;