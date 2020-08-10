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
  const [toggleAddNote, setToggleAddNote] = useState(false);

  function _openNoteEditor(note) {
    console.log('Opening Note Editor based on note:', note);
    if (note === {} || note._id === undefined) {
      console.log('Empty object recognized, opening AddNoteEditor');
      setAnimate(true);
      setSelectedNote({});
    }
    
    // if (note._id !== selectedNote._id) {
    //   console.log('Opening Editor with ID:', note._id);
    //   setToggleAddNote(false);
    //   setSelectedNote(note);
    //   setAnimate(true);
    // }
    
    // if (toggleAddNote && note === {}) {
    //   setSelectedNote({});
    //   setToggleAddNote(true);
    //   setAnimate(true);
    //   setClicked(true);
    // }
  };

  function _closeNoteEdtior() {
    console.log('Closing Editor.');
    setSelectedNote({});
    setAnimate(false);
    
    // if (toggleAddNote && animate) {
    //   console.log('toggleAddNote:', toggleAddNote, '\n', 'animate:', animate);
    //   setSelectedNote({});
    //   setToggleAddNote(false);
    //   setAnimate(false);
    //   setClicked(false);
    //   _openNoteEditor({});
    // }
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
          setToggleAddNote={setToggleAddNote}
          reRenderFunction={props.reRenderFunction}
        />

        <DesktopViewEditorDisplay 
          animate={animate}
          note={selectedNote}
          toggleAddNote={toggleAddNote}
          reRenderFunction={props.reRenderFunction}
          toggleAnimation={props.toggleAnimation}
          closeNoteEdtior={_closeNoteEdtior}
        />
      </DesktopViewComponentContainer>  
    </DesktopViewContainer>
  );
};

export default DesktopViewComponent;