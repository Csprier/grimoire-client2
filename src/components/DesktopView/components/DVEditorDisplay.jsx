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
    animate, 
    note, 
    toggleAddNote, 
    toggleEditNote,
    closeNoteEdtior, 
    reRenderFunction 
  } = props;
  // console.log('DesktopViewEditorDisplay props:', props);

  function RenderTheEditor({ note }) {
    return (toggleAddNote) 
      ? <DVAddNoteComponent
          closeNoteEdtior={closeNoteEdtior}
          reRenderFunction={reRenderFunction}
        />
      : (toggleEditNote) 
        ? <DVNoteEditor 
            note={note}
            closeNoteEdtior={closeNoteEdtior}
            reRenderFunction={reRenderFunction}
          />
        : null;
  };

  return(
    <DVEditorContainer animate={animate}>
      <DVEditorInnerAnimatedContainer animate={animate}>
        
        <RenderTheEditor 
          note={note}
          toggleAddNote={toggleAddNote}
          toggleEditNote={toggleEditNote} 
        />
        
      </DVEditorInnerAnimatedContainer>
    </DVEditorContainer>
  );
};

export default DesktopViewEditorDisplay;

// {(toggleAddNote) 
//   ? (<p>Add Note</p>) 
//   : (<p>`Edit note: ${JSON.stringify(note, null, 2)}`</p>)
// }
// {(toggleAddNote) 
// ? <DVAddNoteComponent
//     closeNoteEdtior={closeNoteEdtior}
//     reRenderFunction={reRenderFunction}
//   />
// : <DVNoteEditor 
//     note={note}
//     closeNoteEdtior={closeNoteEdtior}
//     reRenderFunction={reRenderFunction}
//   />}