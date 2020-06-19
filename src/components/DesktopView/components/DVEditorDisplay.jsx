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
  const { note, displayAddNoteForm } = props;
  
  return(
    <DVEditorContainer animate={props.animate}>
      <DVEditorInnerAnimatedContainer animate={props.animate}>
        {(displayAddNoteForm) 
          ? <DVAddNoteComponent
              closeNoteEdtior={props.closeNoteEdtior}
              reRenderFunction={props.reRenderFunction}
            />
          : <DVNoteEditor 
              note={note}
              reRenderFunction={props.reRenderFunction}
            />}
      </DVEditorInnerAnimatedContainer>
    </DVEditorContainer>
  );
};

export default DesktopViewEditorDisplay;

/* 
<DVNoteEditor 
  note={note}
  reRenderFunction={props.reRenderFunction}
/> 
*/