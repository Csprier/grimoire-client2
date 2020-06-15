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
  const { note } = props;
  console.log('n', note);
  return(
    <DVEditorContainer animate={props.animate}>
      <DVNoteEditor 
        note={note}
        reRenderFunction={props.reRenderFunction}
        toggleAnimation={props.toggleAnimation}
      />
    </DVEditorContainer>
  );
};

export default DesktopViewEditorDisplay;