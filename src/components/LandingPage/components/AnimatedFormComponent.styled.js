import styled from 'styled-components';

const FormComponentContainer = styled.div`
  position: absolute;
  width: 300px;
  height: ${props => props.loginMenu || props.registerMenu ? "height: 300px" : "height: 0px"}
  margin: 0 auto;
  padding: 0;
  background-color: #474256;
  overflow: hidden;
  transition-property: transform, height;
  transition: all .15s ease;
  border: 1px solid red;
`;

const ToggleButtonsContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  border: 1px solid orange;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  border: 1px solid purple;
`;

const LoginDisplay = styled.div`
  position: absolute;
  transform: ${props => props.loginMenu ? "translateX(-110%)" : "translateX(0%)"};
  transition-property: transform;
  transition-duration: .5s;
  transition-delay: .5s;
  border: 1px solid green;
`;

const RegisterDisplay = styled.div`
  position: absolute;
  transform: ${props => props.registerMenu ? "translateX(110%)" : "translateX(0%)"};
  transition-property: transform;
  transition-duration: .5s;
  transition-delay: .5s;
  border: 1px solid pink;
`;

export { 
  FormComponentContainer,
  LoginDisplay,
  RegisterDisplay,
  ToggleButton,
  ToggleButtonsContainer 
};