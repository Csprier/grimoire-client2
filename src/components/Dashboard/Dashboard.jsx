import React from 'react';

/** Styles */
import { DashboardContainer } from './Dashboard.styled';

/** Components */
import NavigationBar from '../Navigation/Navigation';
import AddNoteForm from '../Notes/AddNote/AddNoteForm';


const Dashboard = () => {
  return(
    <DashboardContainer>
      <NavigationBar />

      <AddNoteForm />
    </DashboardContainer>
  )
};

export default Dashboard;
