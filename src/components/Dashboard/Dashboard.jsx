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
  const [animate, setAnimation] = useState(false);

  function _reRender() {
    toggleReRender(!reRender);
  };

  function toggleAnimation() {
    setAnimation(!animate);
  };

  return(
    <DashboardContainer>
      
      <NavigationBar toggleAnimation={toggleAnimation} animate={animate} />
      
      <DashboardContent>
        <NoteList />
        <AddNoteDisplay reRender={_reRender} forceUpdate={forceUpdate} animate={animate} />
      </DashboardContent>

    </DashboardContainer>
  )
};

export default Dashboard;
