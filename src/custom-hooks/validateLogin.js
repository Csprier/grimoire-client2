import Util from '../utility/Util';

export default function validateLogin(values) {
  let errors = {};

  if (Util.UI.validators.required(values.username) === '*Required') {
    errors.username = 'Username is required';
  } 
  else if (Util.UI.validators.nonEmpty(values.username) === '*Field cannot be blank') {
    errors.username = 'Field cannot be blank';
  }
  else if (Util.UI.validators.isTrimmed(values.username) === '*Cannot start or end with whitespace') {
    errors.username = 'Cannot start or end with whitespace';
  }

  if (Util.UI.validators.required(values.password) === '*Required') {
    errors.password = 'Password is required';
  }
  else if (Util.UI.validators.nonEmpty(values.password) === '*Field cannot be blank') {
    errors.password = 'Password cannot be blank'
  }

  return errors;
};