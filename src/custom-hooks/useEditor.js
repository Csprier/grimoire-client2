import { useEffect, useState } from 'react';
import { EditorState, convertFromRaw } from 'draft-js';

const modifiedEditorState = (content) => {
  const _calculateEditorState = (content) => {
    return content
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
      : EditorState.createEmpty();
  };
  
  const [editorState, setEditorState] = useState(_calculatedEditorState(content));

  useEffect(() => {
    setEditorState(_calculateEditorState(content));
  }, [content]);

  return [editorState, setEditorState];
};

export default modifiedEditorState;