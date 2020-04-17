
import userAPI from './utils-api';
import normalizeResponseErrors from './normalize-response-errors';
import { saveAuthToken, loadAuthToken, clearAuthToken } from './local-storage';

const utils = {
  normalizeResponseErrors,
  userAPI,
  saveAuthToken, 
  loadAuthToken, 
  clearAuthToken
};

export default utils;