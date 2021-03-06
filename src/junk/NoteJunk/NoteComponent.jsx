import React, { useEffect, useState } from 'react';
import { Editor, EditorState, ContentState, convertFromRaw, convertToRaw } from 'draft-js';

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

  /** ======================================================================== */
  let content = convertFromRaw(JSON.parse(props.note.content));
  if (content) {
    setupState = EditorState.createWithContent(content);
  }

  /** ======================================================================== */
  /** Functions that will eventually be put in Util.NOTE */
  function _toggleOpenClose() {
    setToggle(!toggle);
  };

  function _addNote() {
    console.log(values);
    return Util.API.notePOST(values)
      .then(() => console.log('POST request sent'))
      .catch((err) => console.error(err));
  };
  /** ======================================================================== */

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

  /** ========================================================================
   * WHERE I LEFT OFF
   * 
   * The data populates into the editor, but I cannot
   * add any content to the populated content
   * 
   * _debounceSave() <--- custom function in Util
   * setTimeout / clearTimeout pattern to debounce API calls to 
   * save on the LAST keystroke. Basically throw away all but the 
   * last keystroke, then save with API POST request.
  */

  /** Initial State */
  // let setupState = EditorState.createEmpty();
  /** Persisted Data */
  // const content = window.localStorage.getItem('content');
  // if (content) {
  //   setupState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
  // }