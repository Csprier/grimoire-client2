import React from 'react';

/** Styles */
import { DashboardContainer } from './Dashboard.styled';

/** Components */
import NavigationBar from '../Navigation/Navigation';
// import EditorTest from '../EditorTest/EditorTest';
// import NoteComponent from '../Notes/NoteComponent';
import NoteList from '../Notes/components/NoteList';


const Dashboard = () => {
  return(
    <DashboardContainer>
      <NavigationBar />
      {/* <NoteComponent /> */}
      {/* <EditorTest /> */}
      <NoteList />
    </DashboardContainer>
  )
};

export default Dashboard;
