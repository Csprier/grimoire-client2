import styled from 'styled-components';

const FormComponentContainer = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;
  padding: 0;
  transition-property: transform, height;
  transition-duration: .5s;
  transition-delay: .5s;
  overflow: hidden;
  height: ${props => props.loginMenu || props.registerMenu ? "240px" : "40px"}
`;

const ToggleButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 33px;
  margin: 0 auto;
  padding: 6px 8px;
  background-color: ${props => props.loginMenu || props.registerMenu ? "darkslateblue" : "slateblue"};
  border: ${props => props.loginMenu || props.registerMenu ? "1px solid slateblue" : "1px solid darkslateblue"};
  color: white;
  border-radius: 3px;
  font-size: 14px;
  &:focus { outline: none; }
`;

const LoginDisplay = styled.div`
  position: absolute;
  width: 98%;
  transition-property: transform, margin;
  transition-duration: .5s;
  transition-delay: .5s;
  transform: ${props => props.loginMenu ? "translateX(0%)" : "translateX(-110%)"};
  margin: ${props => props.registerMenu ? "0 auto" : "0"};
`;

const RegisterDisplay = styled.div`
  position: absolute;
  width: 98%;
  transition-property: transform, margin;
  transition-duration: .5s;
  transition-delay: .5s;
  transform: ${props => props.registerMenu ? "translateX(0%)" : "translateX(110%)"};
  margin: ${props => props.registerMenu ? "0 auto" : "0"};
`;

export { 
  FormComponentContainer,
  LoginDisplay,
  RegisterDisplay,
  ToggleButton,
  ToggleButtonsContainer 
};