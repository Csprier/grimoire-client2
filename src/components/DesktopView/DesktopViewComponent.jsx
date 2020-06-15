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
      _selectNote(note);
      console.log('Selected Note for Editor:', selectedNote);
    }
  };

  function _closeNoteEdtior() {
    if (animate === true) {
      setAnimate(false);
      console.log('Closing Editor.');
    }
  };

  function _selectNote(note) {
    setSelectedNote(note);
  };

  return(
    <DesktopViewContainer>
      <DesktopViewNoteList 
        notes={props.notes}
        openNoteEditor={_openNoteEditor}
        closeNoteEdtior={_closeNoteEdtior}
        selectNote={_selectNote}
      />

      <DesktopViewEditorDisplay 
        animate={animate}
        note={selectedNote}
        reRenderFunction={props.reRenderFunction}
        toggleAnimation={props.toggleAnimation}
      />
    </DesktopViewContainer>
  );
};

export default DesktopViewComponent;