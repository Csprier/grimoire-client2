import styled from 'styled-components';

const NoteComponentContainer = styled.div`
  width: 98%;
  margin: 0 auto;
  margin: 5px 0px;
  padding: 5px;
  border: 1px solid slategray;
  border-radius: 5px;
  overflow-y: auto;
  overflow: hidden;
  transition-property: height;
  transition-duration: .5s;
  transition-delay: .5s;
  height: ${props => props.toggle ? '400px' : "40px"}
`;

const NoteComponentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  top: 0%;
  width: 100%;
  height: 25px;
  margin: 0;
  padding: 0;
`;

const NoteTitle = styled.h2`
  display: flex;
  color: goldenrod;
`;

const NoteForm = styled.form`
  width: 100%;
  height: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  transition-property: transform, margin;
  transition-duration: .5s;
  transition-delay: .5s;
  transform: ${props => props.toggle ? "translateX(0%)" : "translateX(-110%)"};
  margin: ${props => props.toggle ? "0 auto" : "0"};
`;

const Input = styled.input`
  width: 98%;
  height: 25px;
  margin: 0 auto;
  padding: 0;
  border: 1px solid gray;
  border-radius: 3px;
`;

const Label = styled.label`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 4px 0px;
  padding: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100px;
  height: 100%;
`;

const ToggleButton = styled.button`
  width: 50px;
  height: 100%;
  margin: 0;
  padding: 4px;
  background-color: ${props => props.toggle ? "darkslateblue" : "slateblue"};
  border: ${props => props.toggle ? "1px solid darkslateblue" : "1px solid slateblue"};
  color: ${props => props.toggle ? "goldenrod" : "white"};
  &:focus { outline: none; }
  `;

const DeleteButton = styled.button`
  width: 25px;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: red;
  border: 1px solid red;
  color: white;
`;
  
const SubmitButton = styled.button`
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
  DeleteButton,
  Error,
  Input,
  Label,
  NoteComponentContainer,
  NoteForm,
  NoteComponentHeader,
  NoteTitle,
  SubmitButton,
  ToggleButton
};