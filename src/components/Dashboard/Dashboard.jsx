import React from 'react';

/** Styles */
import { DashboardContainer } from './Dashboard.styled';

/** Components */
import NavigationBar from '../Navigation/Navigation';

const Dashboard = () => {
  return(
    <DashboardContainer>
      <NavigationBar />

    </DashboardContainer>
  )
};

export default Dashboard;
