// import axios from 'axios';
import UtilDATA from './util-data'; 
import API_BASE_URL from './api-config';

function registerUser(username, email, password) {
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
    console.error(err)
    const status = err;
    const message = (status === 401) 
      ? 'Unauthorized login'
      : 'Incorrect username or password';
      return err + message;
  });
};

const UtilAPI = {
  loginUser: (data) => _loginUser(data),
  registerUser,
}

export default UtilAPI;