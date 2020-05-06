import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';

import './editor-test.css';

function EditorTest() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return(
    <Editor editorState={editorState} onChange={setEditorState} />
  );
};

export default EditorTest;