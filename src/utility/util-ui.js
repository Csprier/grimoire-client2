import history from '../history';

// VADLIDATION ERRORS MASTER OBJECT
const validators = {
	required: (value) => (value) ? undefined : '*Required',
	maxLength: (max) => (value) => value && value.length > max ? `*Must be ${max} characters or less` : undefined,
	number: (value) => (value) && isNaN(Number(value)) ? '*Must be a number' : undefined,
	minValue: (min) => (value) => value && value < min ? `*Must be at least ${min}` : undefined,
	validEmail: (value) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) ? '*Invalid email address' : undefined,
	passwordsMatch: (field) => (value, allValues) =>
		field in allValues && value.trim() === allValues[field].trim()
			? undefined
			: 'Passwords don\'t match',
	matches: (field) => (value, allValues) =>
		field in allValues && value.trim() === allValues[field].trim()
			? undefined
			: 'Does not match',
	length: (length) => (value) => {
		if (length.min && value.length < length.min) {
			return `Must be at least ${length.min} characters long`;
		}
		if (length.max && value.length > length.max) {
			return `Must be at most ${length.max} characters long`;
		}
	},
	validPhone: (value) =>
		!/^\d{10}(?:\*55\d{0,4})?$/.test(value)
			? '*Invalid phone number'
			: undefined,
	isTrimmed: value => {
		if (value) {
			return value.trim() !== value
				? '*Cannot start or end with whitespace'
				: undefined;
		}
	},
	nonEmpty: (value) => {
		if (value) {
			return !value.trim()
				? '*Field cannot be blank'
				: undefined;
		}
	}
};

function _redirectToDashboard() {
	history.push('/dashboard');
};

function _redirectToLandingPage() {
	history.push('/')
};

function _redirectToLogin() {
	history.push('/login');
};

function _redirectToRegister() {
	history.push('/register');
};

const UtilUI = {
	/**
	 * validators: Master object designed to have methods for various validation checks in Login/Register forms
	 * @param {object}   validators - 
	*/
	validators,
	/**
    * redirectToDashboard: pushes a url to the history object for component redirection on the vDOM to "/dashboard"
    * @param {object}   history - 
  */
	redirectToDashboard: () => _redirectToDashboard(),
	/**
    * redirectLandingPage: pushes a url to the history object for component redirection on the vDOM to "/"
    * @param {object}   history - 
  */
	redirectToLandingPage: () => _redirectToLandingPage(),
	/**
    * redirectToLogin: pushes a url to the history object for component redirection on the vDOM to "/login"
    * @param {object}   history - 
  */
	redirectToLogin: () => _redirectToLogin(),
	/**
    * redirectToRegister: pushes a url to the history object for component redirection on the vDOM to "/register"
    * @param {object}   history - 
  */
	redirectToRegister: () => _redirectToRegister(),
};

export default UtilUI;