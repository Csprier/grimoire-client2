import React, { useEffect, useState } from 'react';
// import { Editor, EditorState, ContentState, convertFromRaw, convertToRaw } from 'draft-js';

/** Custom Hooks */
import useNote from '../../custom-hooks/useNote';

/** Util */
// import Util from '../../utility/util';

/** Styles */
import './note-editor.css';
import {
  Input,
  Label,
  NoteComponentContainer,
  NoteForm,
  NoteComponentHeader,
  NoteTitle,
  ToggleButton
} from './NoteComponent.styled';

const Note = (props) => {
  const [toggle, setToggle] = useState(false);
  const { values, handleChange, handleContent, handleSubmit } = useNote();

  return(
    <NoteComponentContainer toggle={toggle}>
      <NoteComponentHeader>
        <NoteTitle>{props.note.title}</NoteTitle>
        <ToggleButton onClick={() => setToggle(!toggle)}>{toggle ? 'open' : 'closed'}</ToggleButton>
      </NoteComponentHeader>
      <NoteForm>
        <Label>Title
          <Input 
            type="text"
            name="title"
            onChange={handleChange}
            value={props.note.title || values.title || ''}
            placeholder="Title..."
          />
        </Label>
      </NoteForm>
    </NoteComponentContainer>
  );
};

export default Note;