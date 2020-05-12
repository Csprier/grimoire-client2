import React from 'react';

/** Styles */
import { DashboardContainer } from './Dashboard.styled';

/** Components */
import NavigationBar from '../Navigation/Navigation';
import NoteList from '../Notes/components/NoteList';


const Dashboard = () => {
  return(
    <DashboardContainer>
      <NavigationBar />
      <NoteList />
    </DashboardContainer>
  )
};

export default Dashboard;
