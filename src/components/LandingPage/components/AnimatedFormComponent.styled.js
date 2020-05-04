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

const FormComponentContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  padding: 0;
  background-color: #474256;
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
  width: 100px;
  margin: 0 auto;
  padding: 6px 8px;
  background-color: slateblue;
  color: white;
  border-radius: 3px;
  font-size: 14px;
`;

const LoginDisplay = styled.div`
  position: absolute;
  transform: translateX(${props => {
    console.log('Login:', props.loginMenu);
    return props.loginMenu ? "0%" : "-110%"}
  }});
  transition: transform .15s ease;
  border: 1px solid green;
`;

const RegisterDisplay = styled.div`
  position: absolute;
  transform: translateX(${props => {
    console.log('Register:', props.registerMenu);
    return props.registerMenu ? "0%" : "110%"}
  }});
  transition: transform .15s ease;
  border: 1px solid pink;
`;

export { 
  FormComponentContainer,
  LoginDisplay,
  RegisterDisplay,
  ToggleButton,
  ToggleButtonsContainer 
};