import React, { useEffect, useState } from 'react';

/** Util */
import Util from '../../utility/util';

/** Styles */
import { 
  DashboardContainer,
  DashboardContent
} from './Dashboard.styled';

/** Components */
import NavigationBar from '../Navigation/Navigation';
// import NoteList from '../Notes/NoteList';
// import AddNoteDisplay from './components/AddNoteDisplay';
import DesktopViewComponent from '../DesktopView/DesktopViewComponent';

/** Force rerender */
const useForceUpdate = () => useState()[1]; 

const Dashboard = () => {
  const [animate, setAnimation] = useState(false);
  const [listOfNotes, setListOfNotes] = useState([]);
  const [reRender, toggleReRender] = useState(false);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (reRender) {
      Util.API.debounce(_GETNotes, 2000)
      forceUpdate();
      console.log('Rerendering Note List and resetting toggle');
      toggleReRender(!reRender);
    }
    Util.API.debounce(_GETNotes, 2000);
  }, [reRender, forceUpdate]);

  function _GETNotes() {
    Util.API.noteGET()
      .then(res => {
        let notes = res;
        setListOfNotes(notes);
      })
      .catch(err => console.error(err));
  };

  function _reRenderNoteList() {
    toggleReRender(!reRender);
    console.log('Toggling reRender:', reRender);
  };

  function toggleAnimation() {
    setAnimation(!animate);
  };

  return(
    <DashboardContainer>
      
      <NavigationBar toggleAnimation={toggleAnimation} animate={animate} />
      
      <DashboardContent>
        {/* <NoteList
          listOfNotes={listOfNotes}
          reRenderFunction={_reRenderNoteList}
          toggleReRender={toggleReRender}
          reRender={reRender}
        />
        <AddNoteDisplay 
          toggleAnimation={toggleAnimation} 
          animate={animate} 
          reRenderFunction={_reRenderNoteList}
        /> */}

        <DesktopViewComponent 
          notes={listOfNotes} 
          reRenderFunction={_reRenderNoteList}
        />
      </DashboardContent>

    </DashboardContainer>
  )
};

export default Dashboard;