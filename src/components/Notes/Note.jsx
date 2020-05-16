import React, { useEffect, useState } from 'react';
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';

/** Custom Hooks */
import useNote from '../../custom-hooks/useNote';

/** Util */
import Util from '../../utility/util';

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
  const [editorState, setEditorState] = useState();


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

        <Label>Content
          <Editor 
            editorState={editorState}
            onChange={editorState => Util.NOTE.onEditorChange(editorState, setEditorState, handleContent)}
            handleKeyCommand={command => Util.NOTE.handleKeyCommand(command)}
            value={values.content || ''}
          />
        </Label>
      </NoteForm>
    </NoteComponentContainer>
  );
};

export default Note;

/**
 * debounce onBlur, on the form, 
 * to save the content and title of the form's values
 * after finishing typing
 */

  /** Initial Editor State */
  // let setupState = EditorState.createEmpty();
  // let [editorState, setEditorState] = useState(setupState);
  // let content = convertFromRaw(JSON.parse(props.note.content));
  // if (content) {
  //   setupState = EditorState.createWithContent(content);
  // }