import jwtDecode from 'jwt-decode';

function _saveAuthToken(authToken) {
  try {
    // .setItem method saves key/value pairs in the local storage in the browser, both as strings.
    // .setItem(key, value);
    localStorage.setItem('authToken', authToken);
  } catch(e) {}
};

// .getItem(value) gets the value from the localStorage, if it exists, otherwise, it returns null.
function _loadAuthToken() {
  return localStorage.getItem('authToken');
};

function _clearAuthToken() {
  try {
    localStorage.removeItem('authToken');
  } catch(e) {}
};

function _storeAuthInfo(authToken) {
  const decodedToken = jwtDecode(authToken);
  console.log(authToken)
  console.log(decodedToken)
  _saveAuthToken(authToken);
};

/** NORMALIZE RESPONSE ERRORS */
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
  saveAuthToken: (authToken) => _saveAuthToken(authToken),
  loadAuthToken: () => _loadAuthToken(),
  clearAuthToken: () => _clearAuthToken(),
  storeAuthInfo: (authToken) => _storeAuthInfo(authToken),
  normalizeResponseErrors: (res) => _normalizeResponseErrors(res)
};

export default UtilDATA;