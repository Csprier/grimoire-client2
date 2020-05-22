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
        <AddNoteFormComponent reRender={props._reRender} />
      </DisplayContent>
    </DisplayContainer>
  );
};

export default AddNoteDisplay;

