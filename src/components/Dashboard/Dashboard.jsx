import React, { useState } from 'react';

/** Styles */
import { 
  DashboardContainer,
  DashboardContent
} from './Dashboard.styled';

/** Components */
import NavigationBar from '../Navigation/Navigation';
import NoteList from '../Notes/NoteList';
import AddNoteDisplay from './components/AddNoteDisplay';

const useForceUpdate = () => useState()[1];

const Dashboard = () => {
  const forceUpdate = useForceUpdate();
  const [reRender, toggleReRender] = useState(false);

  function _reRender() {
    toggleReRender(!reRender);
  };

  return(
    <DashboardContainer>
      
      <NavigationBar />
      
      <DashboardContent>
        <NoteList />
        <AddNoteDisplay reRender={_reRender} forceUpdate={forceUpdate} />
      </DashboardContent>

    </DashboardContainer>
  )
};

export default Dashboard;
