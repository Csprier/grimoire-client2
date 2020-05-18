import styled from 'styled-components';

const NoteComponentContainer = styled.div`
  width: 98%;
  margin: 0 auto;
  margin: 5px 0px;
  padding: 5px;
  border: 1px solid slategray;
  border-radius: 10px;
  overflow-y: auto;
  overflow: hidden;
  transition-property: height;
  transition-duration: .5s;
  transition-delay: .5s;
  height: ${props => props.toggle ? '500px' : "40px"}
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
`;

const NoteForm = styled.form`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
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

const ToggleButton = styled.button`
  width: 100px;
  height: 25px;
  margin: 0;
  padding: 0;
  background-color: ${props => props.toggle ? "darkslateblue" : "slateblue"};
  &:focus { outline: none; }
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

const DeleteButton = styled.button`
  width: 50px;
  margin: 0;
  padding: 6px 8px;
  background-color: red;
  color: white;
  font-size: 14px;
`;

const Error = styled.p`
  font-size: 12px;
  color: red;
`;

export {
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