import React from 'react';
import './css/dashboard.css';

import Util from '../utility/util';

const Dashboard = () => {
  function logout() {
    console.log('Logging out.');
    Util.DATA.stopPeriodicRefresh();
    Util.UI.redirectToLandingPage();
  }

  return(
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <button onClick={() => logout()}>Logout</button>
    </div>
  )
};

export default Dashboard;
