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
import MobileViewComponent from '../MobileView/MobileViewComponent';

/** Force rerender */
const useForceUpdate = () => useState()[1]; 

const Dashboard = () => {
  const [listOfNotes, setListOfNotes] = useState([]);
  const [reRender, toggleReRender] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const forceUpdate = useForceUpdate();
  const [viewWidth, setViewWidth]  = useState(0);

  useEffect(() => {
    setViewWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setViewWidth(window.innerWidth);
    });

    if (reRender) {
      Util.API.debounce(_GETNotes, 2000)
      forceUpdate();
      // console.log('Rerendering Note List and resetting toggle');
      toggleReRender(!reRender);
    }
    Util.API.debounce(_GETNotes, 2000);

    return () => {
      window.removeEventListener('resize', () => {});
    }
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
  };

  return(
    <DashboardContainer>
      
      <NavigationBar />

      <DashboardContent>
        
        {(viewWidth >= 700) 
          ? <DesktopViewComponent 
              notes={listOfNotes} 
              reRenderFunction={_reRenderNoteList}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm} 
            />
          : <MobileViewComponent 
                notes={listOfNotes} 
                reRenderFunction={_reRenderNoteList}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm} 
              />}

      </DashboardContent>

    </DashboardContainer>
  )
};

export default Dashboard;