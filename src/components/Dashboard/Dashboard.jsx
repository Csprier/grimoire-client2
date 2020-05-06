import React from 'react';

/** Styles */
import { DashboardContainer } from './Dashboard.styled';

/** Components */
import NavigationBar from '../Navigation/Navigation';
import EditorTest from '../EditorTest/EditorTest';

const Dashboard = () => {
  return(
    <DashboardContainer>
      <NavigationBar />
      
      <EditorTest />

    </DashboardContainer>
  )
};

export default Dashboard;
