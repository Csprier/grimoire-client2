import React, { useState } from 'react';

/** Util */
// import Util from '../../utility/util';

/** Styles */
import { 
  DesktopViewButtonContainer,
  DesktopViewComponentContainer,
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
    
    if (note._id !== selectedNote._id) {
      console.log('Opening Editor with ID:', note._id);
      setToggleAddNote(false);
      setSelectedNote(note);
      setAnimate(true);
    }
    
    if (toggleAddNote && note === {}) {
      setSelectedNote({});
      setToggleAddNote(true);
      setAnimate(true);
      setClicked(true);
    }
  };

  function _closeNoteEdtior() {
    if (animate === true && !toggleAddNote) {
      console.log('Closing Editor.');
      setSelectedNote({});
      setAnimate(false);
    }
    
    if (toggleAddNote && animate) {
      console.log('toggleAddNote:', toggleAddNote, '\n', 'animate:', animate);
      setSelectedNote({});
      setToggleAddNote(false);
      setAnimate(false);
      setClicked(false);
      _openNoteEditor({});
    }
  };

  function _selectNote(note) {
    setSelectedNote(note);
  };

  return(
    <DesktopViewContainer>

      <DesktopViewButtonContainer>
        <AddNoteButton onClick={() => {
          if (!animate && !toggleAddNote) {
            setToggleAddNote(true);
            _openNoteEditor({});
          } else if (animate && !toggleAddNote) {
            _closeNoteEdtior();
            setTimeout(() => {
              _openNoteEditor({});
            }, 200)
          } else {
            _closeNoteEdtior();
          }
        }}>Add Note</AddNoteButton>
      </DesktopViewButtonContainer>

      <DesktopViewComponentContainer>
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
          closeNoteEdtior={_closeNoteEdtior}
        />
      </DesktopViewComponentContainer>  
    </DesktopViewContainer>
  );
};

export default DesktopViewComponent;