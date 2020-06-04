import styled from 'styled-components';

const AddNoteComponentContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 5px auto;
  padding: 5px;
  border: 1px solid slategray;
  border-radius: 5px;
  overflow-y: auto;
  overflow: hidden;
  transition-property: height;
  transition-duration: .5s;
  transition-delay: .5s;
`;

const AddNoteForm = styled.form`
  width: 100%;
  height: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const AddNoteInput = styled.input`
  width: 98%;
  height: 25px;
  margin: 0 auto;
  padding: 0;
  border: 1px solid gray;
  border-radius: 3px;
`;

const AddNoteLabel = styled.label`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 4px 0px;
  padding: 0;
`;

const AddNoteSubmitButton = styled.button`
  width: 100px;
  margin: 0 auto;
  padding: 6px 8px;
  background-color: slateblue;
  color: white;
  border: 1px solid slateblue;
  border-radius: 3px;
  font-size: 14px;
`;

export {
  AddNoteInput,
  AddNoteLabel,
  AddNoteComponentContainer,
  AddNoteForm,
  AddNoteSubmitButton,
};