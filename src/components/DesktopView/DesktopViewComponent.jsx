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
  const [CLICKED, _toggleCLICKED] = useState(false);
  const [ADD, _toggleADD] = useState(false);
  const [EDIT, _toggleEDIT] = useState(false);
  const [selectedNote, _selectNote] = useState({});
  const [ANIMATE, _toggleANIMATE] = useState(false);

  function _clearEverything() {
    _toggleCLICKED(false);
    _toggleADD(false);
    _toggleEDIT(false);
    _selectNote({});
    _toggleANIMATE(false);
  };

  /** ================================================================================ */
  /** EDIT NOTE */
  /** ================================= */
  function EDITLogic(note) {
    console.log('Clicked:', note._id);
    console.log('EDITLogic note:', note);
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