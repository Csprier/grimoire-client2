import React from 'react';

/** Util */
// import Util from '../../../utility/util';

/** Components */
import DVNoteEditor from './Edit/DVNoteEditor';
import DVAddNoteComponent from './Add/DVAddNote';

/** Styles */
import {
  DVEditorContainer,
  DVEditorInnerAnimatedContainer
} from './DVEditorDisplay.styled';

const DesktopViewEditorDisplay = (props) => {
  const { 
    note, 
    ADD, 
    EDIT,
    closeNoteEdtior, 
    reRenderFunction 
  } = props;

  function RenderTheEditor({ note }) {
    return (ADD) 
      ? <DVAddNoteComponent
          closeNoteEdtior={closeNoteEdtior}
          reRenderFunction={reRenderFunction}
        />
      : (EDIT) 
        ? <DVNoteEditor 
            note={note}
            closeNoteEdtior={closeNoteEdtior}
            reRenderFunction={reRenderFunction}
          />
        : null;
  };

  return(
    <DVEditorContainer>
      <DVEditorInnerAnimatedContainer>
        
        <RenderTheEditor 
          note={note}
          ADD={ADD}
          EDIT={EDIT} 
        />
        
      </DVEditorInnerAnimatedContainer>
    </DVEditorContainer>
  );
};

export default DesktopViewEditorDisplay;