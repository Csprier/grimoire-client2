import { RichUtils, convertToRaw } from 'draft-js';
// onChange
// getLengthOfSelectedText
// handleBeforeInput
// focus
// handleKeyCommand
// onTab
// toggleBlockType
// toggleInlineStyles

function _onChange(editorState) {
  const contentState = editorState.getCurrentContent();
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
   * onChange:
   * @param
   */
  onChange: () => _onChange()
};

export default UtilEDITOR;