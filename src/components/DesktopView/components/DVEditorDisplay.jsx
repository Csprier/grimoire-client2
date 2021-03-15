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
    LOADING,
    setLoading,
    closeNoteEditor, 
    reRenderFunction 
  } = props;

  return(
    <DVEditorContainer animate={ANIMATE}>
      <DVEditorInnerAnimatedContainer animate={ANIMATE}>

        {(ADD) 
          ? <DVAddNote
              LOADING={LOADING}
              setLoading={setLoading}
              closeNoteEditor={closeNoteEditor}
              reRenderFunction={reRenderFunction}
            />
          : (EDIT) 
            ? <DVEditNote
                note={selectedNote}
                LOADING={LOADING}
                setLoading={setLoading}
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