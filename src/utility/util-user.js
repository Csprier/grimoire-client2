import UtilUI from '../utility/util-ui';

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


function _validateRegister(values) {
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

  if (UtilUI.validators.required(values.email) === '*Required') {
    errors.email = 'Email is required';
  }
  else if (UtilUI.validators.nonEmpty(values.email) === '*Field cannot be blank') {
    errors.email = 'Field cannot be blank';
  }
  else if (UtilUI.validators.validEmail(values.email) === '*Invalid email address') {
    errors.email = 'Not a valid email address';
  }
  else if (UtilUI.validators.isTrimmed(values.email) === '*Cannot start or end with whitespace') {
    errors.email = 'Cannot start or end with whitespace';
  }
 
  if (UtilUI.validators.required(values.password) === '*Required') {
    errors.password = 'Password is required';
  }
  else if (UtilUI.validators.nonEmpty(values.password) === '*Field cannot be blank') {
    errors.password = 'Password cannot be blank'
  }

  return errors;
};

const UtilUSER = {
  validateLogin: values => _validateLogin(values),
  validateRegister: values => _validateRegister(values)
};

export default UtilUSER;