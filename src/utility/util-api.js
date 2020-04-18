import UtilDATA from './util-data'; 
import API_BASE_URL from './api-config';

function _registerUser(username, email, password) {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  })
  .then((res) => UtilDATA.normalizeResponseErrors(res))
  .then((res) => res.json())
  .then((res) => console.log('Registerd new user: ', res))
  .catch((err) => console.error(err));
};

function _loginUser(data) {
  const { username, password } = data;

  return fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then((res) => UtilDATA.normalizeResponseErrors(res))
  .then((res) => res.json())
  .then(({ authToken }) => UtilDATA.saveAuthToken(authToken))
  .catch((err) => {
    const status = err;
    const message = (status === 401) 
      ? 'Unauthorized login'
      : 'Incorrect username or password';
      console.error(err + message);
  });
};

const UtilAPI = {
  /**
    * registerUser: description what it does in a few words
    * @param {object}   data - 
    * @param {string}   data.username - 
    * @param {string}   data.password - 
    * @param {object}   stateFunctions - 
    * @param {function} stateFunctions.setFormValues -
    * @param {function} stateFunctions.setFormErrors -
  */
  registerUser: (data, stateFunctions) => _registerUser(data, stateFunctions),
  /**
    * loginUser: description what it does in a few words
    * @param {object}   data - 
    * @param {string}   data.username - 
    * @param {string}   data.password - 
    * @param {object}   stateFunctions - 
    * @param {function} stateFunctions.setFormValues -
    * @param {function} stateFunctions.setFormErrors -
  */
  loginUser: (data) => _loginUser(data),
}

export default UtilAPI;