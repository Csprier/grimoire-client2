import React from 'react';

/** Util */
import Util from '../../utility/util';

/** Styles */
import { 
  DashboardContainer,
  DashboardNavBar
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
        <h1>Dashboard</h1>
        <button onClick={() => logout()}>Logout</button>
      </DashboardNavBar>

    </DashboardContainer>
  )
};

export default Dashboard;
