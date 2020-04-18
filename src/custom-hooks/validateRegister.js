import utils from '../utility/utils';

export default function validateRegister(values) {
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

  if (utils.utilUI.validators.required(values.email) === '*Required') {
    errors.email = 'Email is required';
  }
  else if (utils.utilUI.validators.nonEmpty(values.email) === '*Field cannot be blank') {
    errors.email = 'Field cannot be blank';
  }
  else if (utils.utilUI.validators.validEmail(values.email) === '*Invalid email address') {
    errors.email = 'Not a valid email address';
  }
  else if (utils.utilUI.validators.isTrimmed(values.email) === '*Cannot start or end with whitespace') {
    errors.email = 'Cannot start or end with whitespace';
  }
 
  if (utils.utilUI.validators.required(values.password) === '*Required') {
    errors.password = 'Password is required';
  }
  else if (utils.utilUI.validators.nonEmpty(values.password) === '*Field cannot be blank') {
    errors.password = 'Password cannot be blank'
  }

  return errors;
}