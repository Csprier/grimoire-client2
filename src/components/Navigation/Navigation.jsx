import React, { useEffect, useState } from 'react';

/** Util */
import Util from '../../utility/util';

/** Icon */
import logoutIcon from './LOGOUTICON.png';

/** Styles */
import {
  Navigation,
  // LogOutButton,
  UsernameHeader,
  LogOutIcon
} from './Navigation.styled';
// import { AddNoteButton } from '../Dashboard/components/AddNoteDisplay.styled';

const NavigationBar = (props) => {
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
      {/* <LogOutButton onClick={() => logout()}>Logout</LogOutButton> */}
      <LogOutIcon 
        src={logoutIcon} 
        alt="logout button" 
        onClick={() => logout()} 
      />
    </Navigation>
  );
};

export default NavigationBar;