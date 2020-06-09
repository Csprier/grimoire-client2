import React, { useState } from 'react';

/** Util */
// import Util from '../../utility/util';

/** Styles */
import { 
  DesktopViewContainer
} from './DesktopView.styled';

/** Components */
import DesktopViewNoteList from './components/DVNoteList';
import DesktopViewEditorDisplay from './components/DVEditorDisplay';

const DesktopViewComponent = (props) => {
  const [animate, setAnimate] = useState(false);
  
  function _openNoteEditor(note) {
    if (animate === false) {
      setAnimate(true);
      console.log('Opening Editor with ID:', note._id);
    } else if (animate === true) {
      setAnimate(false);
      console.log('Closing Editor.');
    }
  };

  return(
    <DesktopViewContainer>
      <DesktopViewNoteList 
        notes={props.notes}
        openNoteEditor={_openNoteEditor}
      />
      <DesktopViewEditorDisplay animate={animate} />
    </DesktopViewContainer>
  );
};

export default DesktopViewComponent;