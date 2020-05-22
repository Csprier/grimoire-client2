import React from 'react';

/** Components */
import AddNoteFormComponent from '../../Notes/components/AddNoteForm';

/** Styles */
import {
  DisplayContainer,
  DisplayContent
} from './AddNoteDisplay.styled';

const AddNoteDisplay = (props) => {
  return(
    <DisplayContainer animate={props.animate}>
      <DisplayContent animate={props.animate}>
        <AddNoteFormComponent 
          toggleAnimation={props.toggleAnimation}
          reRenderFunction={props.reRenderFunction}
        />
      </DisplayContent>
    </DisplayContainer>
  );
};

export default AddNoteDisplay;

