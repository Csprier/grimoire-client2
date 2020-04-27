import React, { useState } from 'react';
import '../css/css-LP/form-container.css';

import Login from '../Login';
import Register from '../Register';

function FormContainer(props) {
  const [loginMenu, setLoginMenu] = useState(false);
  const [registerMenu, setRegisterMenu] = useState(false);
  return(
    <div className="form-container">
      
      <div className="animation-button-container">
        <div 
          className="animation-toggle"
          onClick={() => setLoginMenu(!loginMenu)}
        >Login</div>

        <div 
          className="animation-toggle"
          onClick={() => setRegisterMenu(!registerMenu)}
        >Register</div>
      </div>


      <div className={loginMenu ? "login-display login-slide-right" : "login-display"}>
        <Login />
      </div>

      <div className={registerMenu ? "register-display register-slide-left" : "register-display"}>
        <Register />
      </div>

    </div>
  );
};

export default FormContainer;