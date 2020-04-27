import React, { useState } from 'react';
import '../css/css-LP/form-container.css';

import Login from '../Login';
import Register from '../Register';

function FormContainer(props) {
  const [loginMenu, setLoginMenu] = useState(false);
  return(
    <div className="form-container">
      <div 
        className="animation-toggle"
        onClick={() => setLoginMenu(!loginMenu)}
      >Login</div>
      <div className={loginMenu ? "form-display login-slide-right" : "form-display"}>
        <Login />
      </div>
    </div>
  );
};

export default FormContainer;