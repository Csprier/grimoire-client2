// import axios from 'axios';
import utilDATA from './util-data'; 
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
  .then((res) => utilDATA.normalizeResponseErrors(res))
  .then((res) => res.json())
  .then((res) => console.log('Registerd new user: ', res))
  .catch((err) => console.error(err));
};

function loginUser(username, password) {
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
  .then((res) => utilDATA.normalizeResponseErrors(res))
  .then((res) => res.json())
  .then(({ authToken }) => utilDATA.saveAuthToken(authToken))
  .catch((err) => {
    console.error(err)
    const status = err;
    const message = (status === 401) 
      ? 'Unauthorized login'
      : 'Incorrect username or password';
      return err + message;
  });
};

const utilAPI = {
  registerUser,
  loginUser
}

export default utilAPI;