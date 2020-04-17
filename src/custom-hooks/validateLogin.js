import utils from '../utility/utils';

export default function validateLogin(values) {
  let errors = {};

  if (utils.utilUI.validators.required(values.username) === '*Required') {
    errors.username = 'Username is required';
  } 
  else if (utils.utilUI.validators.nonEmpty(values.username) === '*Field cannot be blank') {
    errors.username = 'Field cannot be blank';
  }
  else if (utils.utilUI.validators.isTrimmed(values.username) === '*Cannot start or end with whitespace') {
    errors.username = 'Cannot start or end with whitespace';
  }

  if (utils.utilUI.validators.required(values.password) === '*Required') {
    errors.password = 'Password is required';
  }
  else if (utils.utilUI.validators.nonEmpty(values.password) === '*Field cannot be blank') {
    errors.password = 'Password cannot be blank'
  }

  return errors;
};