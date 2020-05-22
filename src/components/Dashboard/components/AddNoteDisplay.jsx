import React, { useState } from 'react';

/** Util */
// import Util from '../../utility/util';

/** Components */
import AddNoteFormComponent from '../../Notes/components/AddNoteForm';

/** Styles */
import {
  AddNoteButton,
  DisplayContainer,
  DisplayContent
} from './AddNoteDisplay.styled';


const AddNoteDisplay = (props) => {
  const [animate, setAnimation] = useState(false);

  function toggleAnimation() {
    setAnimation(!animate);
  };

  return(
    <DisplayContainer animate={animate}>
      <AddNoteButton onClick={() => toggleAnimation()} animate={animate}>Add Note</AddNoteButton>
      <DisplayContent animate={animate}>
        <AddNoteFormComponent reRender={props._reRender} />
      </DisplayContent>
    </DisplayContainer>
  );
};

export default AddNoteDisplay;

