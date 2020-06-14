import React from 'react';

/** Util */
// import Util from '../../../utility/util';

/** Components */
import AddNoteFormComponent from '../../Notes/components/AddNoteForm';

/** Styles */
import {
  DVEditorContainer
} from './DVEditorDisplay.styled';

const DesktopViewEditorDisplay = (props) => {
  return(
    <DVEditorContainer animate={props.animate}>
      <AddNoteFormComponent 
        reRenderFunction={props.reRenderFunction}
        toggleAnimation={props.toggleAnimation}
      />
    </DVEditorContainer>
  );
};

export default DesktopViewEditorDisplay;