import styled from 'styled-components';

const MVEditNoteButtonContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  border: 1px solid slategray;
  border-radius: 5px;
  overflow-y: auto;
  overflow: hidden;
`;

const MVEditNoteComponentContainer = styled.div`
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

const MVEditNoteForm = styled.form`
  width: 100%;
  height: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const MVEditNoteInput = styled.input`
  width: 98%;
  height: 25px;
  margin: 0 auto;
  padding: 0;
  border: 1px solid gray;
  border-radius: 3px;
`;

const MVEditNoteLabel = styled.label`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 4px 0px;
  padding: 0;
`;

const MVEditNoteComponentHeader = styled.div`

`;

const MVEditNoteTitle = styled.h2`
  display: flex;
  color: goldenrod;
`;

const MVEditNoteSubmitButton = styled.button`
  width: 100px;
  margin: 0 auto;
  padding: 6px 8px;
  background-color: slateblue;
  color: white;
  border: 1px solid slateblue;
  border-radius: 3px;
  font-size: 14px;
`;

const MVEditNoteToggleButton = styled.button`

`;

const MVEditNoteDeleteButton = styled.button`
  width: 25px;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: red;
  border: 1px solid red;
  color: white;
`;

export {
  MVEditNoteButtonContainer,
  MVEditNoteInput,
  MVEditNoteLabel,
  MVEditNoteComponentContainer,
  MVEditNoteForm,
  MVEditNoteComponentHeader,
  MVEditNoteTitle,
  MVEditNoteSubmitButton,
  MVEditNoteToggleButton,
  MVEditNoteDeleteButton
};