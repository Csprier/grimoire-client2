import React from 'react';
import useForm from '../custom-hooks/useForm';
import validateLogin from '../custom-hooks/validateLogin';
import './css/login.css';

import utils from '../utility/utils';

const Login = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(login, validateLogin);

  function login() {
    console.log(values);
    utils.userAPI.login(values);    
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
        <button type="submit" className="login-button">Login</button>
      </div>
    </form>
  );
}

export default Login;