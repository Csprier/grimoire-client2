// import axios from 'axios';
import UtilDATA from './util-data'; 
import API_BASE_URL from './api-config';

/** ============================================== */
/** Custom debounce function for API calls */
function _debounce(callback, timeDelay) {
  let timerId;
  clearTimeout(timerId);

  timerId = setTimeout(callback, timeDelay);
};

/** ============================================== */
/** USER API FUNCTIONS - Login, Register, AuthToken Refresh */
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
    // console.log('Registerd new user: ', res)
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

/** ============================================== */
/** NOTE API FUNCTIONS - POST, GET */
function _notePOST(data) {
  const authToken = UtilDATA.loadAuthToken();
  const url = `${API_BASE_URL}/notes`;
  // console.log(authToken);
  // console.log(url);
  // console.log(data);
  return fetch(url, {
    method: 'POST',
    headers: { 
      Authorization: `Bearer ${authToken}`,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  // .then(res => console.log(res))
  .catch(err => console.error(err));
};

function _noteGET() {
  const authToken = UtilDATA.loadAuthToken();
  const url = `${API_BASE_URL}/notes`;
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'bearer ' + authToken
    }
  })
  .then(res => res.json())
  .catch(err => console.error(err));
};

function _notePUT(id, data) {
  const url = `${API_BASE_URL}/notes/${id}`;
  const authToken = UtilDATA.loadAuthToken();
  return fetch(url, {
    method: 'PUT',
    headers: { 
      Authorization: `Bearer ${authToken}`,
      'Access-Control-Allow-Origin': '*, PUT',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  // .then(res => console.log(res))
  .catch(err => console.error(err));
};

function _noteDELETE(id) {
  const url = `${API_BASE_URL}/notes/${id}`;
  const authToken = UtilDATA.loadAuthToken();
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'bearer ' + authToken
    }
  })
  .then(res => console.log(res))
  .catch(err => console.error(err));
};

/** ============================================== */
/** EXPORTS & DOCUMENATION */
const UtilAPI = {
  /**
   * debounce: delays the invoking of the callback function
   * @param {function}  callback - function to execute
   * @param {integer}   timeDelay - delay in  milliseconds 
   */
  debounce: (callback, timeDelay) => _debounce(callback, timeDelay),
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
  refreshAuthToken: () => _refreshAuthToken(),
  /**
   * notePOST: API POST request to /api/notes to create a new Note record in the database
   * @param {string}    data - title, content, tags, folders
   */
  notePOST: (data) => _notePOST(data),
  /**
   * noteGET: API GET request to /api/notes to get a list of Notes in the database
   * @param 
   */
  noteGET: () => _noteGET(),
  /**
   * notePUT: API PUT request to /api/notes/:id to replace a record in the database
   * @param {string}    id - id of note
   * @param {object}    note - new note object
   */
  notePUT: (id, note) => _notePUT(id, note),
  /**
   * noteDELETE: API DELETE request to /api/notes/:id to delete a record from the database
   * @param {string}    id - id of note
   */
  noteDELETE: (id) => _noteDELETE(id)
};

export default UtilAPI;