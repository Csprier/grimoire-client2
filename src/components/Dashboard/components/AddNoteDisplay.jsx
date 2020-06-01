import React from 'react';

/** Components */
// import AddNoteFormComponent from '../../Notes/components/AddNoteForm';
import AddNote from '../../Notes/components/AddNote';

/** Styles */
import {
  DisplayContainer,
  DisplayContent
} from './AddNoteDisplay.styled';

const AddNoteDisplay = (props) => {
  return(
    <DisplayContainer animate={props.animate}>
      <DisplayContent animate={props.animate}>
        <AddNote />
      </DisplayContent>
    </DisplayContainer>
  );
};

export default AddNoteDisplay;

/* 
<AddNoteFormComponent 
  toggleAnimation={props.toggleAnimation}
  reRenderFunction={props.reRenderFunction}
/>
*/

