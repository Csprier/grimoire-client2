import { useState } from 'react';

const useNote = (callback) => {
  const [values, setValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      setIsSubmitting(!isSubmitting);
    }
  };

  const handleChange = (e) => {
    e.persist();
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  const handleContent = (content) => {
    setValues(values => ({
      ...values,
      content: content
    }));
  };

  return {
    handleChange,
    handleContent,
    handleSubmit,
    values
  }
};

export default useNote;