import React, { useState } from 'react';
import { convertToRaw } from 'draft-js';

/** Custom Hooks */
import useNote from '../../custom-hooks/useNote';

/** Util */
import Util from '../../utility/util';

/** Components */
import NoteTextEditor from '../../components/Notes/components/Editor/NoteEditor';

/** Styles */
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
  const { values, handleChange } = useNote();
  const [contentValue, setContentValue] = useState({});
  let [editorState, setEditorState] = useState({});

  function handleContentChange() {
    setContentValue(editorState);
  };

  function _submitNote() {
    console.log()
  };

  return(
    <NoteComponentContainer toggle={toggle}>
      <NoteComponentHeader>
        <NoteTitle>{props.note.title}</NoteTitle>
        <ToggleButton onClick={() => setToggle(!toggle)}>{toggle ? 'open' : 'closed'}</ToggleButton>
      </NoteComponentHeader>
      <NoteForm onSubmit={_submitNote}>
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
          <NoteTextEditor
            handleContentChange={handleContentChange}
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

/* <Editor 
  // editorState={setupState}
  editorState={editorState}
  onChange={editorState => Util.NOTE.onEditorChange(editorState, setEditorState, handleContent)}
  // handleKeyCommand={command => Util.NOTE.handleKeyCommand(command)}
  // value={values.content || ''}
/> */