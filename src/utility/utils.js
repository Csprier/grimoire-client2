import userAPI from './util-api';
import normalizeResponseErrors from './normalize-response-errors';
import saveAuthToken from './local-storage'; 
import loadAuthToken from './local-storage';
import clearAuthToken from './local-storage';

const utils = {
  normalizeResponseErrors,
  userAPI,
  saveAuthToken, 
  loadAuthToken,
  clearAuthToken
};

export default utils;