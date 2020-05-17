import React, { useState } from 'react';
import { 
  Editor,
  EditorState,
  convertFromRaw,
  // convertToRaw 
} from 'draft-js';

/** Util */
// import Util from '../../../../utility/util';

/** Styles */
import '../../note-editor.css';

const NoteEditor = (props) => {
  let [editorState, setEditorState] = useState();

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