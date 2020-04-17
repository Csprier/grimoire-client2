import axios from 'axios';
import utils from './util-api';

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
    return axios.post('/auth/login')
      .then((res) => utils.normalizeResponseErrors(res))
      .then((res) => res.json())
      .then(({ authToken }) => utils.storeAuthInfo(authToken))
      .catch((err) => {
        console.error(err)
        const status = err;
        const message = (status === 401) 
          ? 'Unauthorized login'
          : 'Incorrect username or password';
          return message;
      });
  },
  
};

export default usersAPI;