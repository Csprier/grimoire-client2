// import axios from 'axios';
import UtilDATA from './util-data'; 
import API_BASE_URL from './api-config';

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
  .then(({ authToken }) => UtilDATA.storeAuthInfo(authToken))
  .catch((err) => {
    console.error(err)
    const status = err;
    const message = (status === 401) 
      ? 'Unauthorized login'
      : 'Incorrect username or password';
      return err + message;
  });
};

function _registerUser(data) {
  const { username, email, password } = data;
  
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
  .then((res) => {
    console.log('Registerd new user: ', res)
    _loginUser(data);
  })
  .catch((err) => console.error(err));
};

function _refreshAuthToken() {
  const authToken = UtilDATA.loadAuthToken();
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${authToken}` }
  })
  .then((res) => UtilDATA.normalizeResponseErrors(res))
  .then((res) => res.json())
  .then(({ authToken }) => UtilDATA.storeAuthInfo(authToken))
  .catch((err) => {
    console.error(err);
    UtilDATA.clearAuthToken();
  });
};

const UtilAPI = {
  /**
    * loginUser: Logins in an existing user and stores the authToken to localStorage
    * @param {object}   data - 
    * @param {string}   data.username - 
    * @param {string}   data.password - 
  */
  loginUser: (data) => _loginUser(data),
  /**
    * registerUser: Registers the creation of a new user account, and logs the newly created user in
    * @param {object}   data - 
    * @param {string}   data.username - 
    * @param {string}   data.email -
    * @param {string}   data.password - 
  */
  registerUser: (data) => _registerUser(data),
  /**
    * refreshAuthToken: API POST request to /auth/refresh to get a new authToken for a logged in user
    * @param {string}   authToken -
  */
  refreshAuthToken: () => _refreshAuthToken()
};

export default UtilAPI;