import jwtDecode from 'jwt-decode';
import UtilAPI from './util-api';

// Global variables
let refreshInterval;

function _saveAuthToken(authToken) {
  try {
    /** .setItem(key, value) */
    localStorage.setItem('authToken', authToken);
  } catch(e) {
    console.error(e);
  };
};

function _clearLocalStorageContent() {
  try {
    localStorage.removeItem('content');
  } catch(e) {
    console.error(e);
  };
}

function _loadAuthToken() {
  const authToken = localStorage.getItem('authToken');
  return authToken ? authToken : false;
};

function _clearAuthToken() {
  try {
    localStorage.removeItem('authToken');
  } catch(e) {}
};

function _storeAuthInfo(authToken) {
  _saveAuthToken(authToken);
};

function _getUsernameFromLocalStorage() {
  const authToken = _loadAuthToken();
  const decodedToken = jwtDecode(authToken);
  const username = decodedToken.user.username;
  return username;
};

function _getUserIdFromLocalStorage() {
  const authToken = _loadAuthToken();
  const decodedToken = jwtDecode(authToken);
  const user_id = decodedToken.user.id;
  return user_id;
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

function _startPeriodicRefresh() {
  const oneHour = 3600000;
  refreshInterval = setInterval(() => {
    UtilAPI.refreshAuthToken()
  }, oneHour);
};

function _stopPeriodicRefresh() {
  clearInterval(refreshInterval);
};

const UtilDATA = {
  /**
    * saveAuthToken: Saves authToken to localStorage as a string { authToken: '<authToken>' }
    * @param {object}   authToken - 
  */
  saveAuthToken: (authToken) => _saveAuthToken(authToken),
  /**
   * clearLocalStorageContent: Uses LocalStorage.removeItem('content) to clear the local storage's content key/value
   * @param 
   */
  clearLocalStorageContent: () => _clearLocalStorageContent(),
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
   * getUsernameFromLocalStorage: Use jwtDecode to get the currently logged in user
   */
  getUsernameFromLocalStorage: () => _getUsernameFromLocalStorage(),
  /**
   * getUserIdFromLocalStorage: Uses jwtDecode to get the currently logged in user's id
   */
  getUserIdFromLocalStorage: () => _getUserIdFromLocalStorage(),
  /**
    * normalizeResponseErrors: 
    * @param {object}   res - 
  */
  normalizeResponseErrors: (res) => _normalizeResponseErrors(res),
  /**
    * startPeriodicRefresh: Created a 1 hour refreshInterval for the authToken
  */
  startPeriodicRefresh: () => _startPeriodicRefresh(),
  /**
    * stopPeriodicRefresh: Clears the authToken from localStorage if there is a refreshInterval, otherwise it returns out of the function
    * @param {object}   res - 
  */
  stopPeriodicRefresh: () => _stopPeriodicRefresh(),
};

export default UtilDATA;