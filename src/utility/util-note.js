import UtilUI from '../utility/util-ui';

/** ================================================= */
/** FORM VALIDATIONS */
function _validateNote(values) {
  let errors = {};

  if (UtilUI.validators.required(values.title) === '*Required') {
    errors.title = 'Title is required';
  }
  return errors;
};

/** ================================================= */
/** Note form handlers */
// function _handleContentChange(contentValue, setContentValue) {
//   setContentValue(contentValue);
// };

/** ================================================= */
/** EXPORTS */
const UtilNOTE = {
  /**
   * handleContentChange: Handles the content value of the form
   * @param {object}    contentValue - literally the editorState
   * @param {function}  setContentValue - hook function passed as a parameter
   */
  // handleContentChange: (contentValue, setContentValue) => _handleContentChange(contentValue, setContentValue),
  /**
   * validateNote: Validation for modifying Notes
   * @param {object}    values - form values
   */
  validateNote: values => _validateNote(values),
};

export default UtilNOTE;