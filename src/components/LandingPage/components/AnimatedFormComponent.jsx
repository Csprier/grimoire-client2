import React, { useState } from 'react';

/** Styles */
import { 
  FormComponentContainer,
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
    <FormComponentContainer>
      <ToggleButtonsContainer>
        <ToggleButton onClick={() => {
          if (registerMenu) {
            setRegisterMenu(!registerMenu);
          }
          setLoginMenu(!loginMenu);
        }}>Login</ToggleButton>
        <ToggleButton onClick={() => {
          if (loginMenu) {
            setLoginMenu(!loginMenu);
          }
          setRegisterMenu(!registerMenu);
        }}>Register</ToggleButton>
      </ToggleButtonsContainer>
      <Login />
      <Register />
    </FormComponentContainer>
  );
};

export default AnimatedFormComponent;