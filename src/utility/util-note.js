import UtilUI from '../utility/util-ui';

/** FORM VALIDATIONS */
function _validateNote(values) {
  let errors = {};

  if (UtilUI.validators.required(values.title) === '*Required') {
    errors.title = 'Title is required';
  }
  return errors;
};

/** ================================================= */
/** EXPORTS */
const UtilNOTE = {
  /**
   * validateNote: Validation for modifying Notes
   * @param {object}    values - form values
   */
  validateNote: values => _validateNote(values),
};

export default UtilNOTE;