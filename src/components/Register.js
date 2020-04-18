import React from 'react';
import useForm from '../custom-hooks/useForm';
// import './css/register.css';

import Util from '../utility/util';

const Register = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(register, Util.USER.validateRegister);

  function register() {
    console.log(values);
    Util.API.registerUser(values);
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
            value={values.email || ''}
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
        <button type="submit" className="register-button">Register</button>
      </div>
    </form>
  )
};

export default Register;