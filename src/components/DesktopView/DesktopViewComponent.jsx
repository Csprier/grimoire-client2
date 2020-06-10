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
  const [selectedNote, setSelectedNote] = useState({});

  function _openNoteEditor(note) {
    if (animate === false) {
      setAnimate(true);
      console.log('Opening Editor with ID:', note._id);
    } else if (animate === true) {
      setAnimate(false);
      console.log('Closing Editor.');
    }
    _selectNote(note);
  };

  function _selectNote(note) {
    setSelectedNote(note);
  };

  return(
    <DesktopViewContainer>
      <DesktopViewNoteList 
        notes={props.notes}
        openNoteEditor={_openNoteEditor}
        selectNote={_selectNote}
      />

      <DesktopViewEditorDisplay 
        animate={animate}
        note={selectedNote}
      />
    </DesktopViewContainer>
  );
};

export default DesktopViewComponent;