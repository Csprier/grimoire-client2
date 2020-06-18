import React, { useState } from 'react';

/** Util */
// import Util from '../../utility/util';

/** Styles */
import { 
  DesktopViewContainer
} from './DesktopView.styled';
import { AddNoteButton } from '../Dashboard/components/AddNoteDisplay.styled';

/** Components */
import DesktopViewNoteList from './components/DVNoteList';
import DesktopViewEditorDisplay from './components/DVEditorDisplay';

const DesktopViewComponent = (props) => {
  const [animate, setAnimate] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [toggleAddNote, setToggleAddNote] = useState(false);


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

      <AddNoteButton onClick={() => {
        if (!animate && !toggleAddNote) {
          setToggleAddNote(true);
          setAnimate(true);
        } else if (animate && toggleAddNote) {
          setToggleAddNote(false);
          setAnimate(false);
        }
      }}>Add Note</AddNoteButton>

      <DesktopViewNoteList 
        notes={props.notes}
        clicked={clicked}
        setClicked={setClicked}
        openNoteEditor={_openNoteEditor}
        closeNoteEdtior={_closeNoteEdtior}
        selectNote={_selectNote}
      />

      <DesktopViewEditorDisplay 
        animate={animate}
        note={selectedNote}
        displayAddNoteForm={toggleAddNote}
        addNoteToggle={toggleAddNote}
        reRenderFunction={props.reRenderFunction}
        toggleAnimation={props.toggleAnimation}
      />

    </DesktopViewContainer>
  );
};

export default DesktopViewComponent;