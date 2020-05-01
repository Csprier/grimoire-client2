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
    <FormComponentContainer loginMenu registerMenu>
      
      <ToggleButtonsContainer>
        <ToggleButton onClick={() => {
          if (registerMenu) {
            setRegisterMenu(!registerMenu);
          }
          setLoginMenu(!loginMenu);
          console.log(loginMenu);
        }}>Login</ToggleButton>
      
        <ToggleButton onClick={() => {
          if (loginMenu) {
            setLoginMenu(!loginMenu);
          }
          setRegisterMenu(!registerMenu);
          console.log(registerMenu);
        }}>Register</ToggleButton>     
      </ToggleButtonsContainer>

      <LoginDisplay loginMenu>
        <Login />
      </LoginDisplay>

      <RegisterDisplay registerMenu>
        <Register />
      </RegisterDisplay>

    </FormComponentContainer>
  );
};

export default AnimatedFormComponent;