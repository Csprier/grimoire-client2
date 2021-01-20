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
import DesktopViewComponent from '../DesktopView/DesktopViewComponent';

/** Force rerender */
const useForceUpdate = () => useState()[1]; 

const Dashboard = () => {
  const [listOfNotes, setListOfNotes] = useState([]);
  const [reRender, toggleReRender] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (reRender) {
      Util.API.debounce(_GETNotes, 2000)
      forceUpdate();
      toggleReRender(!reRender);
    }
    Util.API.debounce(_GETNotes, 2000);
  }, [reRender, forceUpdate]);

  function _GETNotes() {
    Util.API.noteGET()
      .then(res => {
        let notes = res;
        console.log(notes);
        setListOfNotes(notes);
      })
      .catch(err => console.error(err));
  };

  function _reRenderNoteList() {
    toggleReRender(!reRender);
  };

  return(
    <DashboardContainer>
      
      <NavigationBar />

      <DashboardContent>
        <DesktopViewComponent 
          notes={listOfNotes} 
          reRenderFunction={_reRenderNoteList}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm} 
        />
      </DashboardContent>

    </DashboardContainer>
  )
};

export default Dashboard;