import jwtDecode from 'jwt-decode';

function saveAuthToken(authToken) {
  try {
    // .setItem method saves key/value pairs in the local storage in the browser, both as strings.
    // .setItem(key, value);
    localStorage.setItem('authToken', authToken);
  } catch(e) {}
};

// .getItem(value) gets the value from the localStorage, if it exists, otherwise, it returns null.
function loadAuthToken() {
  return localStorage.getItem('authToken');
};

function clearAuthToken() {
  try {
    localStorage.removeItem('authToken');
  } catch(e) {}
};

function storeAuthInfo(authToken) {
  const decodedToken = jwtDecode(authToken);
  console.log(authToken)
  console.log(decodedToken)
  saveAuthToken(authToken);
};

/** NORMALIZE RESPONSE ERRORS */
function normalizeResponseErrors(res) {
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
  saveAuthToken,
  loadAuthToken,
  clearAuthToken,
  storeAuthInfo,
  normalizeResponseErrors
};

export default UtilDATA;