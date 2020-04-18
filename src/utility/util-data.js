import jwtDecode from 'jwt-decode';

function _saveAuthToken(authToken) {
  try {
    /** .setItem(key, value) */
    localStorage.setItem('authToken', authToken);
  } catch(e) {}
};

function _loadAuthToken() {
  /** .getItem(value) */
  return localStorage.getItem('authToken');
};

function _clearAuthToken() {
  try {
    localStorage.removeItem('authToken');
  } catch(e) {}
};

function _storeAuthInfo(authToken) {
  const decodedToken = jwtDecode(authToken);
  console.log(authToken);
  console.log(decodedToken);
  _saveAuthToken(authToken);
};

function _normalizeResponseErrors(res) {
	if (!res.ok) {
		if (res.headers.has('content-type') && res.headers.get('content-type').startsWith('application/json')) {
			return res.json().then(err => {
				return Promise.reject(err);
			});
		}
		return Promise.reject({
			code: res.status,
			message: res.statusText
		});
	}
	return res;
};

const UtilDATA = {
  /**
    * saveAuthToken: Saves authToken to localStorage as a string { authToken: '<authToken>' }
    * @param {object}   authToken - 
  */
  saveAuthToken: (authToken) => _saveAuthToken(authToken),
  /**
    * loadAuthToken: gets the value from the localStorage, if it exists, otherwise, it returns null.
  */
  loadAuthToken: () => _loadAuthToken(),
  /**
    * clearAuthToken: Removes authToken from localStorage
  */
  clearAuthToken: () => _clearAuthToken(),
  /**
    * storeAuthInfo: 
    * @param {object}   authToken - 
  */
  storeAuthInfo: (authToken) => _storeAuthInfo(authToken),
  /**
    * normalizeResponseErrors: 
    * @param {object}   res - 
  */
  normalizeResponseErrors: (res) => _normalizeResponseErrors(res)
};

export default UtilDATA;