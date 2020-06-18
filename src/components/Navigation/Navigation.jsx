import React, { useEffect, useState } from 'react';

/** Util */
import Util from '../../utility/util';

/** Styles */
import {
  Navigation,
  LogOutButton,
  UsernameHeader
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
      
      {/* <AddNoteButton onClick={() => props.toggleAnimation()} animate={props.animate}>Add Note</AddNoteButton> */}

      <LogOutButton onClick={() => logout()}>Logout</LogOutButton>
    </Navigation>
  );
};

export default NavigationBar;