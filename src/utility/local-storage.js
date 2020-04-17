const saveAuthToken = authToken => {
  try {
    // .setItem method saves key/value pairs in the local storage in the browser, both as strings.
    // .setItem(key, value);
    localStorage.setItem('authToken', authToken);
  } catch(e) {}
};

// .getItem(value) gets the value from the localStorage, if it exists, otherwise, it returns null.
const loadAuthToken = () => {
  return localStorage.getItem('authToken');
};

const clearAuthToken = () => {
  try {
    localStorage.removeItem('authToken');
  } catch(e) {}
};

export default {
  saveAuthToken,
  loadAuthToken,
  clearAuthToken
}