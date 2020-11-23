import React, { useEffect, useState } from 'react';

/** Util */
import Util from '../../utility/util';

/** Icon */
import logoutIcon from './LOGOUTICON.png';

/** Styles */
import {
  Navigation,
  UsernameHeader,
  LogOutIcon
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
      <LogOutIcon 
        src={logoutIcon} 
        alt="logout button" 
        onClick={() => logout()} 
      />
    </Navigation>
  );
};

export default NavigationBar;