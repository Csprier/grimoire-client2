import React from 'react';

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
    selectedNote, 
    ADD, 
    EDIT,
    closeNoteEditor, 
    reRenderFunction 
  } = props;

  return(
    <DVEditorContainer>
      <DVEditorInnerAnimatedContainer>

        {(ADD) 
          ? <DVAddNoteComponent
              closeNoteEditor={closeNoteEditor}
              reRenderFunction={reRenderFunction}
            />
          : (EDIT) 
            ? <DVNoteEditor 
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