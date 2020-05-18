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
  height: 100%;
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

const SubmitButton = styled.button`
  width: 100px;
  margin: 0 auto;
  padding: 6px 8px;
  background-color: slateblue;
  color: white;
  border-radius: 3px;
  font-size: 14px;
`;

export {
  Input,
  Label,
  NoteComponentContainer,
  NoteForm,
  SubmitButton,
};