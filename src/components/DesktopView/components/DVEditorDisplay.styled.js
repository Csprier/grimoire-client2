import styled from 'styled-components';

const DVEditorContainer = styled.div`
  display: ${props => props.note ? 'none' : 'block'};
  width: 90%;
  height: ${props => props.animate ? '600px' : '0px'};
  margin: 0 auto;
  padding: 20px 0px 0px 0px;
  transition-property: height;
  transition-duration: .1s;
  transition-delay: .1s;
  overflow: hidden;
`;

const DVEditorInnerAnimatedContainer = styled.div`
  width: ${props => props.animate ? '98%' : '0px'};
  width: 100%;
  height: ${props => props.animate ? '600px' : '0px'};
  margin: 0 auto;
  padding: 0;
  transition-property: width, height;
  transition-duration: .1s;
  transition-delay: .1s;
  overflow: hidden;
`;

export {
  DVEditorContainer,
  DVEditorInnerAnimatedContainer
};