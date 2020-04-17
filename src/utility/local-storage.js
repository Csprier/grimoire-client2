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

const locStrg = {
  saveAuthToken,
  loadAuthToken,
  clearAuthToken,
  storeAuthInfo
};

export default locStrg;