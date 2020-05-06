import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';

import './editor-test.css';

function EditorTest() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  function onChange(editorState) {
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