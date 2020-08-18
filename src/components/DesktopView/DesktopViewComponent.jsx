// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';

/** Styles */
import { 
  DesktopViewComponentContainer,
  DesktopViewContainer
} from './DesktopView.styled';

/** Components */
import DesktopViewNoteList from './components/DVNoteList';
import DesktopViewEditorDisplay from './components/DVEditorDisplay';

const DesktopViewComponent = (props) => {
  const [CLICKED, _toggleCLICKED] = useState(false);
  const [ADD, _toggleADD] = useState(false);
  const [EDIT, _toggleEDIT] = useState(false);
  const [selectedNote, _selectNote] = useState({});
  const [ANIMATE, _toggleANIMATE] = useState(false);

  /** Monitor state in the console, if something changes... */
  useEffect(() => {
    console.log('----------------');
    console.log('CLICKED:', CLICKED);
    console.log('ADD:', ADD);
    console.log('EDIT:', EDIT);
    console.log('SELECTEDNOTE', selectedNote);
    console.log('ANIMATE:', ANIMATE);
    console.log('----------------');
  }, [CLICKED, ADD, EDIT, selectedNote, ANIMATE]);

  /** ================================================================================ */
  /** EDIT NOTE */
  /** ================================= */
  function EDITLogic(note) {
    console.log('Clicked:', note._id);
    _toggleCLICKED(true);
    _toggleADD(false);
    _toggleEDIT(true);
    _selectNote(note);
    _toggleANIMATE(true);
  };

  /** ================================================================================ */
  /** ADD NOTE */
  /** ================================= */
  function ADDLogic() {
    console.log('Add a note!');
    if (CLICKED && ADD) {
      _closeNoteEditor();
    } else {
      _toggleCLICKED(true);
      _toggleADD(true);
      _toggleEDIT(false);
      _selectNote({});
      _toggleANIMATE(true);
    }
  };

  /** ================================================================================ */
  /** OPEN/CLOSE THE EDITOR */
  /** ================================= */
  function _closeNoteEditor() {
    _toggleCLICKED(false);
    _toggleADD(false);
    _toggleEDIT(false);
    _selectNote({});
    _toggleANIMATE(false);
  };

  return(
    <DesktopViewContainer>
      <DesktopViewComponentContainer>
        <DesktopViewNoteList 
          notes={props.notes}
          selectNote={_selectNote}
          selectedNote={selectedNote}
          searchTerm={props.searchTerm}
          setSearchTerm={props.setSearchTerm}
          ADDLogic={ADDLogic}
          EDITLogic={EDITLogic}
          CLICKED={CLICKED}
          closeNoteEditor={_closeNoteEditor}
          reRenderFunction={props.reRenderFunction}
        />

        <DesktopViewEditorDisplay
          ADD={ADD}
          EDIT={EDIT}
          ANIMATE={ANIMATE}
          selectedNote={selectedNote}
          closeNoteEditor={_closeNoteEditor}
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

  function _() {
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