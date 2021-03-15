import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";

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
  const [LOADING, _setLoading] = useState(false);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (Util.DATA.loadAuthToken()) {
      if (reRender) {
        Util.API.debounce(_GETNotes, 2000)
        forceUpdate();
        toggleReRender(!reRender);
      }
      Util.API.debounce(_GETNotes, 2000);
    }
  }, [reRender, forceUpdate]);

  function _GETNotes() {
    _setLoading(true);
    Util.API.noteGET()
      .then(res => {
        let notes = res;
        setListOfNotes(notes);
      })
      .then(() => {
        setTimeout(() => {
          _setLoading(false)
        }, 1000);
      })
      .catch(err => console.error(err));
  };

  function _reRenderNoteList() {
    toggleReRender(!reRender);
  };

  if (!Util.DATA.loadAuthToken()) {
    let theThing = Util.DATA.loadAuthToken();
    console.log(theThing);
    Util.DATA.clearLocalStorageContent();
    Util.DATA.clearAuthToken();
    return <Redirect to="/" />
  }

  return(
    <DashboardContainer>
      
      <NavigationBar />

      <DashboardContent>
        <DesktopViewComponent 
          notes={listOfNotes} 
          reRenderFunction={_reRenderNoteList}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          LOADING={LOADING}
          setLoading={_setLoading}
        />
      </DashboardContent>

    </DashboardContainer>
  )
};

export default Dashboard;