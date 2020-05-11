import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';

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
  SubmitButton
} from './NoteComponent.styled';


const NoteComponent = () => {
  let setupState = EditorState.createEmpty();
  /** Hook state */
  const { values, handleChange, handleContent, handleSubmit, errors } = useForm(_addNote, Util.NOTE.validateNote);
  let [editorState, setEditorState] = useState(setupState);
  /** Persisted Data */
  const content = window.localStorage.getItem('content');
  if (content) {
  setupState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
  } 

  function _saveContent(content) {
    window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
  }

  function _onEditorChange(editorState) {
    const contentState = editorState.getCurrentContent();
    // console.log('content state', convertToRaw(contentState));
    const contentJSON = JSON.stringify(convertToRaw(contentState), null, 2);
    console.log(contentJSON);
    _saveContent(contentState);
    setEditorState(editorState);
    handleContent(contentJSON);
  };

  function handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      _onEditorChange(newState);
      return 'Handled';
    }
    return 'Not handled';
  };

  function _addNote() {
    console.log(values);
  };

  return(
    <NoteComponentContainer>
      <NoteForm onSubmit={handleSubmit}>
        <Label>Title
          <Input
            type="text"
            name="title"
            onChange={handleChange}
            value={values.title || ''}
            placeholder="Title..."
            required
          />
        </Label>
        {errors.title && (
          <Error>{errors.title}</Error>
        )}

        <Label>Content
          <Editor 
            editorState={editorState} 
            onChange={_onEditorChange}
            handleKeyCommand={handleKeyCommand}
            value={values.content || ''}
          />
        </Label>

        <SubmitButton>Confirm Note</SubmitButton>
      </NoteForm>
    </NoteComponentContainer>
  );
};

export default NoteComponent;