import UtilUI from '../utility/util-ui';

function _validateNote(values) {
  let errors = {};

  if (UtilUI.validators.required(values.title) === '*Required') {
    errors.title = 'Title is required';
  }
  return errors;
};

const UtilNOTE = {
  /**
   * validateNote: Validation for modifying Notes
   * @param {object}  values -
   */
  validateNote: values => _validateNote(values),
};

export default UtilNOTE;