import React, { useState } from 'react';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

/** Custom Hooks */
import useForm from '../../custom-hooks/useForm';

/** Util */
import Util from '../../utility/util';

/** Styles */
import './note-editor.css';
import {
  Error,
  Input,
  Label,
  NoteComponentContainer,
  NoteForm,
  NoteComponentHeader,
  NoteTitle,
  SubmitButton,
  ToggleButton
} from './NoteComponent.styled';


const NoteComponent = (props) => {
  /** Initial State */
  let setupState = EditorState.createEmpty();
  /** Hook state */
  const { values, handleChange, handleContent, handleSubmit, errors } = useForm(_addNote, Util.NOTE.validateNote);
  let [editorState, setEditorState] = useState(setupState);
  let [toggle, setToggle] = useState(false);

  const content = props.note.content;
  if (content) {
    setupState = EditorState.createWithContent(convertFromRaw(content));
  }

  function _toggleOpenClose() {
    setToggle(!toggle);
    // console.log('Toggle state:', toggle);
  };

  function _addNote() {
    console.log(values);
    return Util.API.notePOST(values)
      .then(() => console.log('POST request sent'))
      .catch((err) => console.error(err));
  };

  return(
    <NoteComponentContainer toggle={toggle}>
      <NoteComponentHeader>
        <NoteTitle>Note Title</NoteTitle>
        <ToggleButton onClick={_toggleOpenClose}>{toggle ? 'open' : 'closed'}</ToggleButton>
      </NoteComponentHeader>
      <NoteForm onSubmit={handleSubmit}>
        <Label>Title
          <Input
            type="text"
            name="title"
            onChange={handleChange}
            value={props.note.title || values.title || ''}
            placeholder="Title..."
            required
          />
        </Label>
        {errors.title && (
          <Error>{errors.title}</Error>
        )}

        <Label>Content
          <Editor 
            editorState={setupState} 
            onChange={editorState => Util.NOTE.onEditorChange(editorState, setEditorState, handleContent)}
            handleKeyCommand={command => Util.NOTE.handleKeyCommand(command)}
            value={values.content || ''}
          />
        </Label>

        <SubmitButton>Confirm Note</SubmitButton>
      </NoteForm>
    </NoteComponentContainer>
  );
};

export default NoteComponent;

  /** Initial State */
  // let setupState = EditorState.createEmpty();
  /** Persisted Data */
  // const content = window.localStorage.getItem('content');
  // if (content) {
  //   setupState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
  // }