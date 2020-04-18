import UtilAPI from './util-api';
import UtilDATA from './util-data';
import UtilUI from './util-ui';

function _handleFormSubmit(e, formValues, stateFunctions) {
  const { setFormErrors, setIsSubmitting } = stateFunctions;
  const errors = UtilUI.validateLogin(formValues);
  if (e) {
    // e.preventDefault();
    setIsSubmitting(true);
    setFormErrors(errors);
    if (!errors) {
      UtilAPI.loginUser(formValues.username, formValues.password, stateFunctions)
    }
  }
}

function _handleFormChange(e, values, stateFunctions) {
  const { setFormValues } = stateFunctions;
  e.persist();
  setFormValues({
    ...values,
    [e.target.name]: e.target.value
  })
}


const Utils = {
  handleFormSubmit: (e, values, stateFunctions) => _handleFormSubmit(e, values, stateFunctions),
  handleFormChange: (e, values, stateFunctions) => _handleFormChange(e, values, stateFunctions),
  UtilAPI,
  UtilDATA,
  UtilUI
};

export default Utils;