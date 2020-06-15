import React from 'react';

/** Util */
// import Util from '../../../utility/util';

/** Components */
import DVNoteEditor from './Edit/DVNoteEditor';

/** Styles */
import {
  DVEditorContainer
} from './DVEditorDisplay.styled';

const DesktopViewEditorDisplay = (props) => {
  // console.log('props.note', props.note);
  return(
    <DVEditorContainer animate={props.animate}>
      <DVNoteEditor 
        note={props.note}
        reRenderFunction={props.reRenderFunction}
        toggleAnimation={props.toggleAnimation}
      />
    </DVEditorContainer>
  );
};

export default DesktopViewEditorDisplay;