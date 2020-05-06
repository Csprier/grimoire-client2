import styled from 'styled-components';

const AddNoteFormContainer = styled.div`
  position: relative;
  width: 50%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  border: 1px solid goldenrod;
`;

const AddNoteForm = styled.form`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid red;
`;

const Label = styled.label`
  color: white;
`;

const TitleInput = styled.input`
  display: block;
  width: 100%;
  margin: 0;
  padding: 5px;
  border: 1px solid white;
`;

const ContentTextArea = styled.textarea`
  display: block;
  width: 100%;
  margin: 0;
  padding: 5px;
  border: 1px solid white;
`;

export {
  AddNoteForm,
  AddNoteFormContainer,
  ContentTextArea,
  Label,
  TitleInput
};