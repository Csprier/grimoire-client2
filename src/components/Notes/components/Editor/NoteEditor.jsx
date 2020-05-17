import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';

/** Util */
// import Util from '../../../../utility/util';

/** Styles */
import '../../note-editor.css';

const NoteEditor = (props) => {
  let [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <Editor 
      editorState={editorState}
      onChange={props.onChange}
    />
  );
};

export default NoteEditor;

/*
function _onChange(editorState) {
  const contentState = editorState.getCurrentContent();
  console.log('contentState:', contentState);
  props.handleContentChange(convertToRaw(contentState));
  Util.EDITOR._saveContent(contentState);
  setEditorState(contentState);
};
*/