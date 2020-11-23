import styled from 'styled-components';

const MVAddNoteButtonContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  border: 1px solid slategray;
  border-radius: 5px;
  overflow-y: auto;
  overflow: hidden;
`;

const MVAddNoteComponentContainer = styled.div`
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

const MVAddNoteForm = styled.form`
  width: 100%;
  height: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const MVAddNoteInput = styled.input`
  width: 100%;
  height: 25px;
  margin: 0;
  padding: 0;
  border: 1px solid lightgray;
  border-radius: 3px;
  color: rgb(85, 85, 85);
`;

const MVAddNoteLabel = styled.label`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 4px 0px;
  padding: 0;
`;

const MVAddNoteComponentHeader = styled.div`

`;

const MVAddNoteTitle = styled.h2`
  display: flex;
  color: goldenrod;
`;

const MVAddNoteSubmitButton = styled.button`
  width: 100px;
  margin: 0 auto;
  padding: 6px 8px;
  background-color: slateblue;
  color: white;
  border: 1px solid slateblue;
  border-radius: 3px;
  font-size: 14px;
`;

const MVAddNoteToggleButton = styled.button`

`;

const MVAddNoteDeleteButton = styled.button`
  width: 25px;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: red;
  border: 1px solid red;
  color: white;
`;

export {
  MVAddNoteButtonContainer,
  MVAddNoteInput,
  MVAddNoteLabel,
  MVAddNoteComponentContainer,
  MVAddNoteForm,
  MVAddNoteComponentHeader,
  MVAddNoteTitle,
  MVAddNoteSubmitButton,
  MVAddNoteToggleButton,
  MVAddNoteDeleteButton
};