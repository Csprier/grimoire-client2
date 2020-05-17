import UtilAPI from './util-api';
import { RichUtils, convertToRaw } from 'draft-js';
// focus
// getLengthOfSelectedText
// handleBeforeInput
// handleKeyCommand
// onChange
// onTab
// toggleBlockType
// toggleInlineStyles

function _saveContent(content) {
  UtilAPI.debounce(window.localStorage.setItem('content', JSON.stringify((convertToRaw(content)))), 1000);
};

function _onChange(editorState, setEditorState) {
  const contentState = editorState.getCurrentContent();
  // handleContentChange(convertToRaw(contentState));
  _saveContent(contentState);
  setEditorState(contentState);
};

function handleKeyCommand(command, editorState) {
  const newState = RichUtils.handleKeyCommand(editorState, command);
  if (newState) {
    _onChange(newState);
    return 'Handled';
  }
  return 'Not handled';
};


/** ================================================= */
/** EXPORTS */
const UtilEDITOR = {
  /**
   * handleKeyCommand: Uses RichUtils to monitor fancy key commands like cmd+b for bold, cmd+i for italic, etc
   * @param {      }    command - key command
   * @param {object}    editorState - editor state object
   */
  handleKeyCommand: (command, editorState) => handleKeyCommand(command, editorState),
  /**
   * onChange: Uses contentState to handleContentChange hook, saves content to localStorage, and sets editorState via setEditorState hook
   * @param {object}    editorState - editorState object, used to get contentState
   */
  onChange: (editorState, setEditorState, handleContentChange) => _onChange(editorState, setEditorState, handleContentChange)
};

export default UtilEDITOR;