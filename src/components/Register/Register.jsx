import React from 'react';

/** Custom Hooks */
import useForm from '../../custom-hooks/useForm';

/** Util */
import Util from '../../utility/util';

/** Styles */
import {
  ButtonContainer, 
  Error,
  Input, 
  InputContainer, 
  Label, 
  RegisterButton,
  RegisterContainer
} from './Register.styled';


const Register = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(register, Util.USER.validateRegister);

  function register() {
    console.log(values);
    return Util.API.registerUser(values)
      .catch(err => console.error(err));
  }
  
  return (
    <RegisterContainer onSubmit={handleSubmit}>
      <InputContainer>
        <Label>Username
          <Input 
            className="input"
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username || ''}
            placeholder="Username..."
            required   
          />
          {errors.username && (
            <Error>{errors.username}</Error>
          )}
        </Label>
        <Label>Email
          <Input 
            className="input"
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email || ''}
            placeholder="Email..."
            required
          />
          {errors.email && (
            <Error>{errors.email}</Error>
          )}
        </Label>
        <Label>Password
          <Input 
            className="input"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password  || ''}
            placeholder="Password..."
            required
          />
          {errors.password && (
            <Error>{errors.password}</Error>
          )}
        </Label>
      </InputContainer>
      <ButtonContainer>
        <RegisterButton type="submit">Register</RegisterButton>
      </ButtonContainer>
    </RegisterContainer>
  )
};

export default Register;