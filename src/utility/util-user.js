import UtilUI from './util-ui';

function _validateLogin(values) {
  let errors = {};

  if (UtilUI.validators.required(values.username) === '*Required') {
    errors.username = 'Username is required';
  } 
  else if (UtilUI.validators.nonEmpty(values.username) === '*Field cannot be blank') {
    errors.username = 'Field cannot be blank';
  }
  else if (UtilUI.validators.isTrimmed(values.username) === '*Cannot start or end with whitespace') {
    errors.username = 'Cannot start or end with whitespace';
  }

  if (UtilUI.validators.required(values.password) === '*Required') {
    errors.password = 'Password is required';
  }
  else if (UtilUI.validators.nonEmpty(values.password) === '*Field cannot be blank') {
    errors.password = 'Password cannot be blank'
  }

  return errors;
};

const UtilUsers = {
  validateLogin: (values) => _validateLogin(values),
};

export default UtilUsers;