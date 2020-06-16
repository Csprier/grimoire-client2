import styled from 'styled-components';

const DVEditorContainer = styled.div`
  width: 100%;
  height: ${props => props.animate ? '600px' : '0px'};
  margin: 0;
  padding: 0;
  border: 1px solid blue;
  transition-property: height;
  transition-duration: .1s;
  transition-delay: .1s;
  overflow: hidden;
`;

export {
  DVEditorContainer
};