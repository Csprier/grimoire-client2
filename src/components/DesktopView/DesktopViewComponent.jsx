import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';

/** Styles */
import { 
  DesktopViewComponentContainer,
  DesktopViewContainer
} from './DesktopView.styled';

/** Components */
import DesktopViewNoteList from './components/DVNoteList';
import DesktopViewEditorDisplay from './components/DVEditorDisplay';

const DesktopViewComponent = (props) => {
  const [selectedNote, _selectNote] = useState({});
  const [ADD, _toggleADD] = useState(false);
  const [EDIT, _toggleEDIT] = useState(false);

  return(
    <DesktopViewContainer>
      <DesktopViewComponentContainer>
        <DesktopViewNoteList 
          notes={props.notes}
          selectNote={_selectNote}
          selectedNote={props.selectedNote}
          searchTerm={props.searchTerm}
          setSearchTerm={props.setSearchTerm}
          toggleADD={_toggleADD}
          EDIT={EDIT}
          toggleEDIT={_toggleEDIT}
          openNoteEditor={props._openNoteEditor}
          closeNoteEdtior={props._closeNoteEdtior}
          reRenderFunction={props.reRenderFunction}
        />

        <DesktopViewEditorDisplay 
          ADD={ADD}
          EDIT={EDIT}
          selectedNote={selectedNote}
          closeNoteEdtior={props._closeNoteEdtior}
          reRenderFunction={props.reRenderFunction}
        />
      </DesktopViewComponentContainer>  
    </DesktopViewContainer>
  );
};

export default DesktopViewComponent;

/**
  const [animate, _setAnimate] = useState(false);
  const [clicked, _setClicked] = useState(false);
  const [selectedNote, _setSelectedNote] = useState({});
  const [toggleAddNote, _setToggleAddNote] = useState(false);
  const [toggleEditNote, _setToggleEditNote] = useState(false);

  // useEffect(() => {
  //   console.log('UE Props:', props);
  //   console.log('UE clicked:', clicked);
  //   console.log('UE animate:', animate);
  //   console.log('UE toggleAddNote:', toggleAddNote);
  //   console.log('UE selectedNote:', selectedNote);
  // }, [props, animate, clicked, toggleAddNote, selectedNote]);

  function _openNoteEditor(note) {
    console.log('NOTE OE:', note);
    // there is no note
    if (!note.hasOwnProperty('_id')) {
      console.log('Empty object recognized, opening AddNoteEditor...');
      _setToggleAddNote(true);
      _setToggleEditNote(false);
      _selectNote({});
      _setAnimate(true);
    }

    // note has an id but the _id is not the same as selectedNote._id
    if (note.hasOwnProperty('id') && note._id !== selectedNote._id ) {
      console.log('A new note has been detected...', note);
      _setToggleAddNote(false);
      _setToggleEditNote(true); 
      _selectNote(note);
      _setAnimate(true);
    }

    // There is a selectedNote, but toggleAddNote was toggled true
    if (selectedNote.hasOwnProperty('id') && toggleAddNote) {
      _setToggleAddNote(true);
      _setToggleEditNote(false);
      _selectNote({});
      _setAnimate(true);
    }
  };

  function _closeNoteEdtior() {
    console.log('Closing Editor.');
    _setToggleAddNote(false);
    _setToggleEditNote(false);
    _setClicked(false);
    _setAnimate(false);
    _selectNote({});
  };

  function _selectNote(note) {
    _setSelectedNote(note);
  };
 */