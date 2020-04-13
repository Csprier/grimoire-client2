import React from 'react';
import useForm from '../custom-hooks/useForm';
import validateLogin from '../custom-hooks/validateLogin';
import './css/login.css';

const Login = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(login, validateLogin);

  function login() {
    console.log(values);    
  }

  return(
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="label">Username</label>
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
      <label className="label">Password</label>
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
      <button type="submit" className="login-button">Login</button>
    </form>
  );
}

export default Login;