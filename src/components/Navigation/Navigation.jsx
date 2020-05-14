import React, { useEffect, useState } from 'react';

/** Util */
import Util from '../../utility/util';

/** Styles */
import {
  // IconButton,
  Navigation,
  // NavigationButtonContainer,
  LogOutButton,
  UsernameHeader
} from './Navigation.styled';

const NavigationBar = () => {
  const [activeUser, setActiveUser] = useState('');

  useEffect(() => {
    setActiveUser(Util.DATA.getUsernameFromLocalStorage());
  }, []);

  function logout() {
    console.log('Logging out.');
    Util.DATA.stopPeriodicRefresh();
    Util.DATA.clearAuthToken();
    Util.UI.redirectToLandingPage();
  };

  return(
    <Navigation>
      <UsernameHeader>Welcome back, {activeUser}!</UsernameHeader>  
      
      {/* <NavigationButtonContainer>
        <IconButton title="Create a note">&#9998;</IconButton>
        <IconButton title="Go to Tags">&#9744;</IconButton>
        <IconButton title="Go to Folders">&#10063;</IconButton>
      </NavigationButtonContainer> */}

      <LogOutButton onClick={() => logout()}>Logout</LogOutButton>
    </Navigation>
  );
};

export default NavigationBar;