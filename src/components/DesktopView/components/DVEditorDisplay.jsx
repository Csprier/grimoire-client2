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
    closeNoteEdtior, 
    reRenderFunction 
  } = props;
  // console.log('DesktopViewEditorDisplay props:', props);

  return(
    <DVEditorContainer animate={animate}>
      <DVEditorInnerAnimatedContainer animate={animate}>
        {(toggleAddNote) && <p>Add Note</p>}
        {(note) && <p>`Edit note: ${JSON.stringify(note, null, 2)}`</p>}
        {// : (note) 
         //   && <p>`Edit note: ${JSON.stringify(note, null, 2)}`</p>

            // ? <DVAddNoteComponent
          //     closeNoteEdtior={closeNoteEdtior}
          //     reRenderFunction={reRenderFunction}
          //   />
          // : (note) 
            // ? <DVNoteEditor 
            //     note={note}
            //     closeNoteEdtior={closeNoteEdtior}
            //     reRenderFunction={reRenderFunction}
            //   />
            // : null
        }
      </DVEditorInnerAnimatedContainer>
    </DVEditorContainer>
  );
};

export default DesktopViewEditorDisplay;