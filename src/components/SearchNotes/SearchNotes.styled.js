import styled from 'styled-components';

const NoteCounter = styled.h1`
  margin: 0;
  padding: 4px;
  font-size: 24px;
  color: goldenrod;
`;

const SearchNotesInputContainer = styled.div`
  position: relative;
  display: block;
  width: 98%;
  height: 70px;
  margin: 0 auto;
  padding: 0;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  margin: 0;
  padding: 0;
  background-color: lightgray;
  border: 1px solid lightgray;
  ::placeholder {
    padding: 0px 0px 0px 5px;
  }
`;

export {
  NoteCounter,
  SearchInput,
  SearchNotesInputContainer
};