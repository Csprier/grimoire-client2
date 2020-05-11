import React from 'react';

/** Styles */
import { DashboardContainer } from './Dashboard.styled';

/** Components */
import NavigationBar from '../Navigation/Navigation';
// import EditorTest from '../EditorTest/EditorTest';
import NoteComponent from '../Notes/NoteComponent';


const Dashboard = () => {
  return(
    <DashboardContainer>
      <NavigationBar />
      <NoteComponent />
      {/* <EditorTest /> */}

    </DashboardContainer>
  )
};

export default Dashboard;
