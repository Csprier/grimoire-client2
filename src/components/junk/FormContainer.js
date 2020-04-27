import React, { useState } from 'react';
import '../css/css-LP/form-container.css';

import Login from '../Login';
import Register from '../Register';

function FormContainer() {
  const [loginMenu, setLoginMenu] = useState(false);
  const [registerMenu, setRegisterMenu] = useState(false);
  return(
    <div className={loginMenu || registerMenu ? "form-container height-animation-class" : "form-container"}>
      
      <div className="animation-button-container">
        <div 
          className="animation-toggle"
          onClick={() => {
            if (registerMenu) {
              setRegisterMenu(!registerMenu);
            }
            setLoginMenu(!loginMenu);
          }}
        >Login</div>

        <div 
          className="animation-toggle"
          onClick={() => {
            if (loginMenu) {
              setLoginMenu(!loginMenu);
            }
            setRegisterMenu(!registerMenu);
          }}
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