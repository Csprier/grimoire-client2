import { userState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = userState({});

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      callback();
    }
  }

  const handleChange = (e) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  return {
    handleSubmit,
    handleChange,
    values
  }
};

export default useForm;