import styled from 'styled-components';

const NoteCounter = styled.h1`
  margin: 0;
  padding: 4px;
  font-size: 24px;
  color: #444;
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
  padding: 0px 16px 0px 0px;
  border: 1px solid lightgray;
`;

export {
  NoteCounter,
  SearchInput,
  SearchNotesInputContainer
};