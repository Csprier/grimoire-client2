import React, { useState } from 'react';

/** Styles */
import { 
  FormComponentContainer,
  LoginDisplay,
  RegisterDisplay,
  ToggleButton,
  ToggleButtonsContainer 
} from './AnimatedFormComponent.styled';

/** Components */
import Login from '../../Login/Login';
import Register from '../../Register/Register';

function AnimatedFormComponent() {
  const [loginMenu, setLoginMenu] = useState(false);
  const [registerMenu, setRegisterMenu] = useState(false);

  return(
    <FormComponentContainer loginMenu={loginMenu} registerMenu={registerMenu}>

      <ToggleButtonsContainer>
        <ToggleButton 
          loginMenu={loginMenu}
          onClick={() => {
            if (registerMenu) {
              // Change register to closed before opening login
              setRegisterMenu(false);
            }
            if (!loginMenu) {
              // Change login from closed to open
              setLoginMenu(true);
            }
            if (loginMenu) {
              // Change login from open to closed
              setLoginMenu(false);
            }
        }}>Login</ToggleButton>
      
        <ToggleButton 
          registerMenu={registerMenu}
          onClick={() => {
            if (loginMenu) {
              // Change login to closed before opening register
              setLoginMenu(false);
            }
            if (!registerMenu) {
              // Change register from closed to open
              setRegisterMenu(true);
            }
            if (registerMenu) {
              // Change register from open to closed
              setRegisterMenu(false);
            }
        }}>Register</ToggleButton>     
      </ToggleButtonsContainer>

      <LoginDisplay loginMenu={loginMenu}>
        <Login />
      </LoginDisplay>

      <RegisterDisplay registerMenu={registerMenu}>
        <Register />
      </RegisterDisplay>

    </FormComponentContainer>
  );
};

export default AnimatedFormComponent;