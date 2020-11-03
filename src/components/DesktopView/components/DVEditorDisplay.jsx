import React from 'react';

/** Components */
import DVEditNoteComponent from './Edit/DVEditNoteComponent';
import DVAddNoteComponent from './Add/DVAddNote';

/** Styles */
import {
  DVEditorContainer,
  DVEditorInnerAnimatedContainer
} from './DVEditorDisplay.styled';

const DesktopViewEditorDisplay = (props) => {
  const { 
    selectedNote, 
    ADD, 
    EDIT,
    ANIMATE,
    closeNoteEditor, 
    reRenderFunction 
  } = props;

  return(
    <DVEditorContainer animate={ANIMATE}>
      <DVEditorInnerAnimatedContainer animate={ANIMATE}>

        {(ADD) 
          ? <DVAddNoteComponent
              closeNoteEditor={closeNoteEditor}
              reRenderFunction={reRenderFunction}
            />
          : (EDIT) 
            ? <DVEditNoteComponent
                note={selectedNote}
                closeNoteEditor={closeNoteEditor}
                reRenderFunction={reRenderFunction}
              />
            : null
        }

      </DVEditorInnerAnimatedContainer>
    </DVEditorContainer>
  );
};

export default DesktopViewEditorDisplay;