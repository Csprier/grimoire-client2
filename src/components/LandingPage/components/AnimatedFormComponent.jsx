import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    console.log('Login:', loginMenu);
    console.log('Register', registerMenu);
  });

  return(
    <FormComponentContainer loginMenu registerMenu>
      
      <ToggleButtonsContainer>
        <ToggleButton onClick={() => {
          if (!loginMenu) {
            console.log('Change login from closed to open');
            setLoginMenu(true);
          }
          if (loginMenu) {
            console.log('Change login from open to closed');
            setLoginMenu(false);
          }
        }}>Login</ToggleButton>
      
        <ToggleButton onClick={() => {
          if (!registerMenu) {
            console.log('Change register from closed to open');
            setRegisterMenu(false);
          }
          if (registerMenu) {
            console.log('Change register from open to closed');
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

/*
<ToggleButton onClick={() => {
  if (loginMenu === 'closed') {
    console.log('Change login from closed to open');
    setLoginMenu('open');
  }
  if (loginMenu === 'open') {
    console.log('Change login from open to closed');
    setLoginMenu('closed');
  }
}}>Login</ToggleButton>

<ToggleButton onClick={() => {
  if (registerMenu === 'closed') {
    console.log('Change register from closed to open');
    setRegisterMenu('open');
  }
  if (registerMenu === 'open') {
    console.log('Change register from open to closed');
    setRegisterMenu('closed');
  }
}}>Register</ToggleButton>
*/