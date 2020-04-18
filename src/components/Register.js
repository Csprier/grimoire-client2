import React from 'react';
import useForm from '../custom-hooks/useForm';
// import validateRegister from '../custom-hooks/validateRegister';
// import './css/register.css';

import utils from '../utility/utils';

const Register = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(login, validateLogin);

  const register = () => {
    console.log(values);
    let username = values.username,
        email = values.email,
        password = values.password;
    // utils.userAPI.registerUser(username, email, password);
  }

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h1>Register</h1>
      <div className="input-container">
        <label>Username
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
        <label>Email
          <input 
            className="input"
            type="text"
            name="email"
            onChange={handleChange}
            value={values.username || ''}
            placeholder="Email..."
            required
          />
          {errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </label>
        <label>Password
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
        <button type="submit" className="Register-button">Register</button>
      </div>
    </form>
  )
};