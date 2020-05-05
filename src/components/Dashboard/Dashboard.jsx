import React, { useEffect, useState } from 'react';

/** Util */
import Util from '../../utility/util';

/** Styles */
import { 
  DashboardContainer,
  DashboardNavBar,
  LogOutButton
} from './Dashboard.styled';

const Dashboard = () => {
  const [activeUser, setActiveUser] = useState('');

  useEffect(() => {
    setActiveUser(Util.DATA.getUsernameFromLocalStorage());
  });

  function logout() {
    console.log('Logging out.');
    Util.DATA.stopPeriodicRefresh();
    Util.DATA.clearAuthToken();
    Util.UI.redirectToLandingPage();
  }

  return(
    <DashboardContainer>
      <h1>Welcome back, {activeUser}!</h1>  
      <DashboardNavBar>
        <LogOutButton onClick={() => logout()}>Logout</LogOutButton>
      </DashboardNavBar>

    </DashboardContainer>
  )
};

export default Dashboard;
