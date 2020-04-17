import axios from 'axios';

const usersAPI = {
  createUser = (username, email, password) => {
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

  loginUser = (username, password) => {
    return axios.post('/auth/login')
      .then((res) => res.json())
      .catch((err) => console.error(err));
  },
  
};