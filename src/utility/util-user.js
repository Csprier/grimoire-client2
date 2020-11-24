import UtilUI from '../utility/util-ui';


// ============================================================== //
function _validateLogin(values) {
  const { username, password } = values;
  let errors = {};

  // Username
  if (UtilUI.validators.required(username) === '*Required') {
    errors.username = 'Username is required';
  } 
  
  if (UtilUI.validators.hasWhiteSpace(username) === '*Usernames cannot have whitespaces') {
    errors.username = '*Usernames cannot have whitespaces';
  }
  
  if (UtilUI.validators.isTrimmed(username) === '*Cannot start or end with whitespace') {
    errors.username = 'Cannot start or end with whitespace';
  }

  // Password
  if (UtilUI.validators.required(password) === '*Required') {
    errors.password = 'Password is required';
  }
  
  if (UtilUI.validators.nonEmpty(password) === '*Field cannot be blank') {
    errors.password = 'Password cannot be blank'
  }
  
  return errors;
};

// ============================================================== //
function _validateRegister(values) {
  const { username, email, password } = values;
  let errors = {};

  // Username
  if (UtilUI.validators.required(username) === '*Required') {
    errors.username = 'Username is required';
  } 
  
  if (UtilUI.validators.nonEmpty(username) === '*Field cannot be blank') {
    errors.username = 'Field cannot be blank';
  }
  
  if (UtilUI.validators.isTrimmed(username) === '*Cannot start or end with whitespace') {
    errors.username = 'Cannot start or end with whitespace';
  }

  // Email
  if (UtilUI.validators.required(email) === '*Required') {
    errors.email = 'Email is required';
  }
  
  if (UtilUI.validators.nonEmpty(email) === '*Field cannot be blank') {
    errors.email = 'Field cannot be blank';
  }
  
  if (UtilUI.validators.validEmail(email) === '*Invalid email address') {
    errors.email = 'Not a valid email address';
  }
  
  if (UtilUI.validators.isTrimmed(email) === '*Cannot start or end with whitespace') {
    errors.email = 'Cannot start or end with whitespace';
  }
 
  // Password
  if (UtilUI.validators.required(password) === '*Required') {
    errors.password = 'Password is required';
  }
  
  if (UtilUI.validators.nonEmpty(password) === '*Field cannot be blank') {
    errors.password = 'Password cannot be blank'
  }

  return errors;
};

const UtilUSER = {
  /**
    * validateLogin: Validation checks on values for Login form submission
    * @param {object}   values - 
    * @param {string}   values.username -
    * @param {string}   values.password -
  */
  validateLogin: values => _validateLogin(values),
  /**
    * validateLogin: Validation checks on values for Login form submission
    * @param {object}   values - 
    * @param {string}   values.username -
    * @param {string}   values.email -
    * @param {string}   values.password -
  */
  validateRegister: values => _validateRegister(values)
};

export default UtilUSER;