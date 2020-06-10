import React from 'react';

/** Util */
// import Util from '../../../utility/util';

/** Components */
import NoteFormComponent from '../../Notes/components/NoteForm';

/** Styles */
import {
  DVEditorContainer
} from './DVEditorDisplay.styled';

const DesktopViewEditorDisplay = (props) => {
  let noteJSON = props.note;
  console.log(noteJSON);
  return(
    <DVEditorContainer animate={props.animate}>
      <NoteFormComponent note={noteJSON} />
      {/* <NoteFormComponent 
        note={noteJSON} 
        reRender={props.reRenderFunction} 
      /> */}
    </DVEditorContainer>
  );
};

export default DesktopViewEditorDisplay;