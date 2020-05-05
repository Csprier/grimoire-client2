import React, { useEffect } from 'react';

/** Util */
import Util from '../../utility/util';

/** Styles */
import { 
  DashboardContainer,
  DashboardNavBar,
  LogOutButton
} from './Dashboard.styled';

const Dashboard = () => {
  function logout() {
    console.log('Logging out.');
    Util.DATA.stopPeriodicRefresh();
    Util.DATA.clearAuthToken();
    Util.UI.redirectToLandingPage();
  }

  return(
    <DashboardContainer>
      
      <DashboardNavBar>
        <LogOutButton onClick={() => logout()}>Logout</LogOutButton>
      </DashboardNavBar>

    </DashboardContainer>
  )
};

export default Dashboard;
