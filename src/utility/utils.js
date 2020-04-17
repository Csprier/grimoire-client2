import userAPI from './util-api';
import normalizeResponseErrors from './normalize-response-errors';
import locStrg from './local-storage';

const utils = {
  normalizeResponseErrors,
  userAPI,
  locStrg
};

export default utils;