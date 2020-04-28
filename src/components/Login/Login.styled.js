import styled from 'styled-components';

const LoginContainer = styled.form`
  max-width: 250px;
  height: auto;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  color: white;
`;

const InputContainer = styled.div`
  position: relative;
  width: 90%;
  height: auto;
  margin: 0 auto;
  padding: 5px;
`;

const Input = styled.input`
  width: 98%;
  height: 25px;
  margin: 0 auto;
  padding: 2px;
  border: 1px solid gray;
  border-radius: 3px;
`;

const Label = styled.label`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif; 
  margin: 4px 0px;
  padding: 0px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 5px;
  text-align: center;
`;

const LoginButton = styled.button`
  width: 100px;
  margin: 0 auto;
  padding: 6px 8px;
  background-color: slateblue;
  color: white;
  border-radius: 3px;
  font-size: 14px;
`;

const Error = styled.p`
  font-size: 12px;
  color: red;
`;

export { 
  ButtonContainer, 
  Error,
  Input, 
  InputContainer, 
  Label, 
  LoginButton,
  LoginContainer
};