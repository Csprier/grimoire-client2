import React, { useState, useEffect } from 'react';
// import useForm from '../custom-hooks/useForm';
// import validateLogin from '../custom-hooks/validateLogin';
import './css/login.css';

import Utils from '../utility/utils';

const Login = () => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const stateFunctions = {
    setFormValues,
    setFormErrors,
    setIsSubmitting
  };

  useEffect(() => {
    console.log('Login Form Component mounted');
  })

  return(
    <form className="login-form" onSubmit={(e) => {
      e.preventDefault();
      Utils.handleFormSubmit(e, formValues, stateFunctions)
    }}>
      <h1>Login</h1>
      <div>{isSubmitting}</div>
      <div className="input-container">
        <label className="label">Username
          <input 
            className="input"
            type="text"
            name="username"
            onChange={(e) => Utils.handleFormChange(e, formValues, stateFunctions)}
            value={formValues.username || ''}
            placeholder="Username..."
            required
          />
          {formErrors.username && (
            <p className="error">{formErrors.username}</p>
          )}
        </label>
        <label className="label">Password
          <input 
            className="input"
            type="password"
            name="password"
            onChange={(e) => Utils.handleFormChange(e, formValues, stateFunctions)}
            value={formValues.password  || ''}
            placeholder="Password..."
            required
          />
          {formErrors.password && (
            <p className="error">{formErrors.password}</p>
          )}
        </label>
      </div>
      <div className="button-container">
        <button onClick={() => console.log('Login button clicked')} type="submit" className="login-button">Login</button>
      </div>
    </form>
  );
}

export default Login;