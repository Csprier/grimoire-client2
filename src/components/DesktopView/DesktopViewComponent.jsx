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

  function _manageEditors(note) {
    /**
      Editor is closed(animate === false)
      - setAnimate to true
      - _selectNote to note
     */
    if (animate === false) {
      setAnimate(true);
      _selectNote(note);
    }

    /**
      Editor is open with a note
      - setAnimate to false, to close the editor
      - _selectNote to new note
      - setAnimate to true, to open the editor with the new note
     */
    if (animate === true && note._id !== selectedNote) {
      setAnimate(false);
      _selectNote(note);
      setTimeout(setAnimate(true), 1);
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
        selectNote={_selectNote}
        manageEditors={_manageEditors}
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