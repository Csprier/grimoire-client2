import React from 'react';

/** Components */
import DVNoteEditor from './Edit/DVNoteEditor';
// import DVAddNoteComponent from './Add/DVAddNote';
import AddEditor from '../../Editor/AddEditor';

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
          // ? <DVAddNoteComponent
          //     closeNoteEditor={closeNoteEditor}
          //     reRenderFunction={reRenderFunction}
          //   />
          ? <AddEditor />
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