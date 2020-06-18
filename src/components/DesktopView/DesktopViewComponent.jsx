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
    if (animate === false && !toggleAddNote) {
      console.log('Opening Editor with ID:', note._id);
      setSelectedNote(note);
      setAnimate(true);
    } 
    else if (note._id !== selectedNote._id) {
      console.log('Opening Editor with ID:', note._id);
      setToggleAddNote(false);
      setSelectedNote(note);
      setAnimate(true);
    } else if (toggleAddNote && note === {}) {
      setSelectedNote({});
      setToggleAddNote(true);
      setAnimate(true);
      setClicked(true);
    }
  };

  function _closeNoteEdtior() {
    if (animate === true) {
      console.log('Closing Editor.');
      setSelectedNote({});
      setAnimate(false);
    } else if (toggleAddNote) {
      setSelectedNote({});
      setToggleAddNote(false);
      setAnimate(false);
      setClicked(false);
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
          _openNoteEditor({});
        } else if (animate && toggleAddNote) {
          _closeNoteEdtior();
          setTimeout(() => {
            _openNoteEditor({});
          }, 1500)
        } else {
          _closeNoteEdtior();
        }
      }}>Add Note</AddNoteButton>

      <DesktopViewNoteList 
        notes={props.notes}
        clicked={clicked}
        setClicked={setClicked}
        displayAddNoteForm={toggleAddNote}
        openNoteEditor={_openNoteEditor}
        closeNoteEdtior={_closeNoteEdtior}
        selectNote={_selectNote}
        selectedNote={selectedNote}
      />

      <DesktopViewEditorDisplay 
        animate={animate}
        note={selectedNote}
        displayAddNoteForm={toggleAddNote}
        reRenderFunction={props.reRenderFunction}
        toggleAnimation={props.toggleAnimation}
      />

    </DesktopViewContainer>
  );
};

export default DesktopViewComponent;