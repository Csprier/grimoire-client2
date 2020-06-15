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
      console.log('Opening Editor with ID:', note._id);
      setSelectedNote(note);
      setAnimate(true);
    } 
    else if (note._id !== selectedNote._id) {
      // console.log('Note', note);
      console.log('Opening Editor with ID:', note._id);
      setSelectedNote(note);
      setAnimate(true);
    }
  };

  function _closeNoteEdtior() {
    if (animate === true) {
      console.log('Closing Editor.');
      setSelectedNote({});
      setAnimate(false);
    }
  };

  function _selectNote(note) {
    setSelectedNote(note);
  };

  // console.log('SELECTEDNOTE:', selectedNote);
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