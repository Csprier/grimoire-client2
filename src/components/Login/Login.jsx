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
  LoginButton,
  LoginContainer, 
 } from './Login.styled';

const Login = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(login, Util.USER.validateLogin);

  function login() {
    console.log(values);
    return Util.API.loginUser(values)
    .then(() => Util.UI.redirectToDashboard())
    .then(() => Util.DATA.startPeriodicRefresh())
    .catch(err => console.error(err));
  }

  return(
    <LoginContainer onSubmit={handleSubmit}>
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
        <LoginButton type="submit">Login</LoginButton>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default Login;