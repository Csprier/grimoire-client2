import React, { useState } from 'react';

/** Styles */
import { 
  DesktopViewComponentContainer,
  DesktopViewContainer
} from './DesktopView.styled';

/** Components */
import DVNoteList from './components/NoteList/DVNoteList';
import DesktopViewEditorDisplay from './components/DVEditorDisplay';

const DesktopViewComponent = (props) => {
  const [CLICKED, _toggleCLICKED] = useState(false);
  const [ADD, _toggleADD] = useState(false);
  const [EDIT, _toggleEDIT] = useState(false);
  const [selectedNote, _selectNote] = useState({});
  const [ANIMATE, _toggleANIMATE] = useState(false);

  const { LOADING, setLoading } = props;

  /** ================================================================================ */
  /** EDIT NOTE */
  /** ================================= */
  function EDITLogic(note) {
    // console.log('-------------------------------')
    // console.log('Clicked:', note._id);
    // console.log('EDITLogic note:', note);
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
    // setLoading(true);
    _toggleCLICKED(false);
    _toggleADD(false);
    _toggleEDIT(false);
    _selectNote({});
    _toggleANIMATE(false);
  };

  function toggleLoaderonReRender() {
    props.reRenderFunction();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return(
    <DesktopViewContainer>
      <DesktopViewComponentContainer>
        <DVNoteList 
          notes={props.notes}
          selectNote={_selectNote}
          selectedNote={selectedNote}
          searchTerm={props.searchTerm}
          setSearchTerm={props.setSearchTerm}
          LOADING={LOADING}
          setLoading={setLoading}
          ADDLogic={ADDLogic}
          EDITLogic={EDITLogic}
          CLICKED={CLICKED}
          closeNoteEditor={_closeNoteEditor}
          // reRenderFunction={props.reRenderFunction}
          reRenderFunction={toggleLoaderonReRender}
        />

        <DesktopViewEditorDisplay
          ADD={ADD}
          EDIT={EDIT}
          ANIMATE={ANIMATE}
          selectedNote={selectedNote}
          LOADING={LOADING}
          setLoading={setLoading}
          closeNoteEditor={_closeNoteEditor}
          // reRenderFunction={props.reRenderFunction}
          reRenderFunction={toggleLoaderonReRender}
        />
      </DesktopViewComponentContainer>  
    </DesktopViewContainer>
  );
};

export default DesktopViewComponent;