import React from 'react';

/** Components */
import DVEditNote from './Edit/DVEditNote';
import DVAddNote from './Add/DVAddNote';

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
          ? <DVAddNote
              closeNoteEditor={closeNoteEditor}
              reRenderFunction={reRenderFunction}
            />
          : (EDIT) 
            ? <DVEditNote
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