import { useEffect, useState } from 'react';
import { EditorState, convertFromRaw } from 'draft-js';

const modifiedEditorState = (content) => {
  const [editorState, setEditorState] = useState(_calculatedEditorState(content));

  useEffect(() => {
    setEditorState(_calculateEditorState(content));
  }, [content]);

  return [editorState, setEditorState];
};

function _calculateEditorState(content) {
  return props
    ? EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
    : EditorState.createEmpty();
};

export default modifiedEditorState;