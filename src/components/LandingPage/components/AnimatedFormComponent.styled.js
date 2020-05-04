import styled from 'styled-components';

// height: ${props => props.loginMenu || props.registerMenu ? "height: 300px" : "height: 0px"}
// transform: ${props => props.loginMenu ? "translateX(-110%)" : "translateX(0%)"};
// transform: "translateX(${props => props.loginMenu ? "0%" : "-110%"})";
// transform: ${props => props.registerMenu ? "translateX(0%)" : "translateX(-110%)"};
// transform: "translateX(${props => props.registerMenu ? "0%" : "-110%"})";
// overflow: hidden;
// transition-property: transform;
// transition-duration: .5s;
// transition-delay: .5s;

/**
 transform: translateX(${props => {
    console.log('Login:', props.loginMenu);
    return props.loginMenu ? "0%" : "-110%"}
  }});
 transform: translateX(${props => {
    console.log('Register:', props.registerMenu);
    return props.registerMenu ? "0%" : "110%"}
  }});
 */

const FormComponentContainer = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;
  padding: 0;
  background-color: #474256;
  transition-property: transform, height;
  transition-duration: .5s;
  transition-delay: .5s;
  overflow: hidden;
  height: ${props => props.loginMenu || props.registerMenu ? "300px" : "40px"}
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
  color: white;
  border-radius: 3px;
  font-size: 14px;
  &:focus { outline: none; }
`;

const LoginDisplay = styled.div`
  position: absolute;
  transform: ${props => props.loginMenu ? "translateX(0%)" : "translateX(-110%)"};
  transition-property: transform;
  transition-duration: .5s;
  transition-delay: .5s;
`;

const RegisterDisplay = styled.div`
  position: absolute;
  transform: ${props => props.registerMenu ? "translateX(0%)" : "translateX(110%)"};
  transition-property: transform;
  transition-duration: .5s;
  transition-delay: .5s;
`;

export { 
  FormComponentContainer,
  LoginDisplay,
  RegisterDisplay,
  ToggleButton,
  ToggleButtonsContainer 
};