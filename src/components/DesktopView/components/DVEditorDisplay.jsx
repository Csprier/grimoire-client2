import React from 'react';

/** Util */
// import Util from '../../../utility/util';

/** Components */
import DVNoteEditor from './Edit/DVNoteEditor';
import AddNoteFormComponent from '../../Notes/components/AddNoteForm';

/** Styles */
import {
  DVEditorContainer
} from './DVEditorDisplay.styled';

const DesktopViewEditorDisplay = (props) => {
  const { note, displayAddNoteForm } = props;
  
  return(
    <DVEditorContainer animate={props.animate}>
      {(displayAddNoteForm) 
        ? <AddNoteFormComponent 
            reRenderFunction={props.reRenderFunction}
          />
        : <DVNoteEditor 
            note={note}
            reRenderFunction={props.reRenderFunction}
          />}
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