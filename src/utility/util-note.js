import UtilUI from '../utility/util-ui';
import { RichUtils, convertToRaw } from 'draft-js';

/** EDITOR FUNCTIONS */
function handleKeyCommand(command, editorState) {
  const newState = RichUtils.handleKeyCommand(editorState, command);
  if (newState) {
    _onEditorChange(newState);
    return 'Handled';
  }
  return 'Not handled';
};

function _onEditorChange(editorState, setEditorState, handleContent) {
  const contentState = editorState.getCurrentContent();
  console.log('contentState OEC: ', convertToRaw(contentState));
  const contentJSON = JSON.stringify(convertToRaw(contentState));
  // console.log(contentJSON);
  // _saveContent(contentState);
  setEditorState(contentState);
  handleContent(contentJSON);
};

function _saveContent(content) {
  window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
}

/** FORM VALIDATIONS */
function _validateNote(values) {
  let errors = {};

  if (UtilUI.validators.required(values.title) === '*Required') {
    errors.title = 'Title is required';
  }
  return errors;
};

/**
 * EXPORTS
 */
const UtilNOTE = {
  /**
   * handleKeyCommand: Uses RichUtils to monitor fancy key commands like cmd+b for bold, cmd+i for italic, etc
   * @param {      }    command - key command
   * @param {object}    editorState - editor state object
   */
  handleKeyCommand: (command, editorState) => handleKeyCommand(command, editorState),
  /**
   * onEditorChange: Gets current content state, saves content to local storage, and uses handleContent hook function
   * @param {object}    editorState - editor state object
   * @param {function}  setEditorState - set editor state hook function
   * @param {function}  handleContent - useForm custom function for modifying the value of content in the form state
   */
  onEditorChange: (editorState,  setEditorState, handleContent) => _onEditorChange(editorState,  setEditorState, handleContent),
  /**
   * saveContent: saves content to local storage
   * @param {string}    content - JSON string
   */
  saveContent: values => _saveContent(values),
  /**
   * validateNote: Validation for modifying Notes
   * @param {object}    values - form values
   */
  validateNote: values => _validateNote(values),
};

export default UtilNOTE;