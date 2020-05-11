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
  SubmitButton,
  ToggleButton
} from './NoteComponent.styled';


const NoteComponent = () => {
  /** Initial State */
  let setupState = EditorState.createEmpty();

  /** Hook state */
  const { values, handleChange, handleContent, handleSubmit, errors } = useForm(_addNote, Util.NOTE.validateNote);
  let [editorState, setEditorState] = useState(setupState);
  let [toggle, setToggle] = useState(false);

  /** Persisted Data */
  const content = window.localStorage.getItem('content');
  if (content) {
    setupState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
  } 

  function _toggleOpenClose() {
    setToggle(!toggle);
    console.log('Toggle state:', toggle);
  };

  function _addNote() {
    console.log(values);
    return Util.API.notePOST(values)
      .then(() => console.log('POST request sent'))
      .catch((err) => console.error(err));
  };

  return(
    <NoteComponentContainer>
      <ToggleButton onClick={_toggleOpenClose}>{toggle ? `&#8624;` : `&#8626;`}</ToggleButton>
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


  // function _saveContent(content) {
  //   window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
  // }

  // function _onEditorChange(editorState) {
  //   const contentState = editorState.getCurrentContent();
  //   // console.log('content state', convertToRaw(contentState));
  //   const contentJSON = JSON.stringify(convertToRaw(contentState), null, 2);
  //   console.log(contentJSON);
  //   _saveContent(contentState);
  //   setEditorState(editorState);
  //   handleContent(contentJSON);
  // };

  // function handleKeyCommand(command) {
  //   const newState = RichUtils.handleKeyCommand(editorState, command);
  //   if (newState) {
  //     _onEditorChange(newState);
  //     return 'Handled';
  //   }
  //   return 'Not handled';
  // };
