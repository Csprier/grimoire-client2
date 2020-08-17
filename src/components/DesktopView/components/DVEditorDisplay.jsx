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
    selectedNote, 
    ADD, 
    EDIT,
    closeNoteEdtior, 
    reRenderFunction 
  } = props;

  return(
    <DVEditorContainer>
      <DVEditorInnerAnimatedContainer>

        {(ADD) 
          ? <DVAddNoteComponent
              closeNoteEdtior={closeNoteEdtior}
              reRenderFunction={reRenderFunction}
            />
          : (EDIT) 
            ? <DVNoteEditor 
                note={selectedNote}
                closeNoteEdtior={closeNoteEdtior}
                reRenderFunction={reRenderFunction}
              />
            : null
        }

      </DVEditorInnerAnimatedContainer>
    </DVEditorContainer>
  );
};

export default DesktopViewEditorDisplay;

/* 
  // function RenderTheEditor({ note }) {
  //   return (ADD) 
  //     ? <p>ADD</p>
  //     : (EDIT && note.hasOwnProperty('_id')) 
  //       ? <p>EDIT</p>
  //       : null;
  // };

  <RenderTheEditor 
    note={note}
    ADD={ADD}
    EDIT={EDIT} 
  /> 
*/

// return (ADD) 
//  ? <DVAddNoteComponent
//      closeNoteEdtior={closeNoteEdtior}
//      reRenderFunction={reRenderFunction}
//    />
//  : (EDIT) 
//    ? <DVNoteEditor 
//        note={note}
//        closeNoteEdtior={closeNoteEdtior}
//        reRenderFunction={reRenderFunction}
//      />
//    : null;