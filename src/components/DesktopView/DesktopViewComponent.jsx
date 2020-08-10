import React, { useState } from 'react';

/** Styles */
import { 
  DesktopViewComponentContainer,
  DesktopViewContainer
} from './DesktopView.styled';

/** Components */
import DesktopViewNoteList from './components/DVNoteList';
import DesktopViewEditorDisplay from './components/DVEditorDisplay';

const DesktopViewComponent = (props) => {
  const [animate, setAnimate] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [toggleAddNote, _setToggleAddNote] = useState(false);

  function _openNoteEditor(note) {
    // console.log('Opening Note Editor based on note:', note);
    if (note === {} || note._id === undefined) {
      console.log('Empty object recognized, opening AddNoteEditor');
      setAnimate(true);
      _selectNote({});
    }

    if (note !== {} || note._id !== undefined) {
      console.log('Selecting note...', note);
      setAnimate(true);
      _selectNote(note);
    }
    
    if (note._id !== selectedNote._id) {
      console.log('A new note has been selected...', note);
      _setToggleAddNote(false);
      setAnimate(true);
      _selectNote(note);
    }
  };

  function _closeNoteEdtior() {
    console.log('Closing Editor.');
    _setToggleAddNote(false);
    _selectNote({});
    setAnimate(false);
  };

  function _selectNote(note) {
    setSelectedNote(note);
  };

  return(
    <DesktopViewContainer>
      <DesktopViewComponentContainer>
        <DesktopViewNoteList 
          notes={props.notes}
          clicked={clicked}
          setClicked={setClicked}
          openNoteEditor={_openNoteEditor}
          closeNoteEdtior={_closeNoteEdtior}
          selectNote={_selectNote}
          selectedNote={selectedNote}
          searchTerm={props.searchTerm}
          setSearchTerm={props.setSearchTerm}
          animate={animate}
          toggleAddNote={toggleAddNote}
          setToggleAddNote={_setToggleAddNote}
          reRenderFunction={props.reRenderFunction}
        />

        <DesktopViewEditorDisplay 
          animate={animate}
          note={selectedNote}
          toggleAddNote={toggleAddNote}
          reRenderFunction={props.reRenderFunction}
          closeNoteEdtior={_closeNoteEdtior}
        />
      </DesktopViewComponentContainer>  
    </DesktopViewContainer>
  );
};

export default DesktopViewComponent;