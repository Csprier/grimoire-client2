import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';

import './editor-test.css';

function EditorTest() {
  /** Persisted Data */
  const content = window.localStorage.getItem('content');
  let setupState = EditorState.createEmpty();
  if (content) {
   setupState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
  } 
 
  /** Hook state */
  let [editorState, setEditorState] = useState(setupState);

  function _saveContent(content) {
    window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
  }

  function onChange(editorState) {
    const contentState = editorState.getCurrentContent();
    console.log('content state', convertToRaw(contentState));
    _saveContent(contentState);
    setEditorState(editorState);
  }

  function handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'Handled';
    }
    return 'Not handled';
  };

  return(
    <Editor 
      editorState={editorState} 
      onChange={onChange}
      handleKeyCommand={handleKeyCommand}
    />
  );
};

export default EditorTest;