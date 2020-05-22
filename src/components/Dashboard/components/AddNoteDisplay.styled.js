import styled from 'styled-components';

const AddNoteButton = styled.button`
  width: 100px;
  height: 33px;
  margin: 0;
  padding: 6px 8px;
  background-color: ${props => props.animate ? "darkslateblue" : "slateblue"};
  border: ${props => props.animate ? "1px solid slateblue" : "1px solid darkslateblue"};
  color: white;
  border-radius: 3px;
  font-size: 14px;
  &:focus { outline: none };
`;

const DisplayContainer = styled.div`
  width: 500px;
  height: ${props => props.animate ? "500px" : "0px"};
  margin: 0;
  padding: 0;
  transition-property: transform, height;
  transition-duration: .5s;
  transition-delay: .5s;
  overflow: hidden;
  border: 1px solid red;
`;

const DisplayContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  transition-property: transform, margin;
  transition-duration: .5s;
  transition-delay: .5s;
  transform: ${props => props.animate ? "translateX(0%)" : "translateX(-110%)"};
  margin: ${props => props.animate ? "0 auto" : "0"};
`;

export {
  AddNoteButton,
  DisplayContainer,
  DisplayContent
};