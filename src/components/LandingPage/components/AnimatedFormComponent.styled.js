import styled from 'styled-components';

const FormComponentContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  padding: 0;
  background-color: #474256;
  transition-property: transform, height;
  transition: all .15s ease;
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

export { 
  FormComponentContainer,
  ToggleButton,
  ToggleButtonsContainer 
};