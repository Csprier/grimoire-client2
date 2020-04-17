import axios from 'axios';
import locStrg from './local-storage'; 
import normalizeResponseErrors from './normalize-response-errors';
import API_BASE_URL from './api-config';

const usersAPI = {
  createUser(username, email, password) {
    return axios.post('/user', {
      username,
      email,
      password
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
  },

  loginUser(username, password) {
    // return axios.post(API_BASE_URL + '/auth/login', { username, password })
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
    .then((res) => normalizeResponseErrors(res))
    .then((res) => res.json())
    .then(({ authToken }) => locStrg.saveAuthToken(authToken))
    // .then(({authToken}) => console.log(authToken))
    .catch((err) => {
      console.error(err)
      const status = err;
      const message = (status === 401) 
        ? 'Unauthorized login'
        : 'Incorrect username or password';
        return err + message;
    });
  },
  
};

export default usersAPI;