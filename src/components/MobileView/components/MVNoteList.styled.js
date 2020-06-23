import styled from 'styled-components';

const MVNoteListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  };
`;

const MVNote = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: auto;
  margin: 2px auto;
  padding: 0;
  border: 1px solid gray;
  background-color: #242526;
`;

const MVNoteTitle = styled.h2`
  display: flex;
  color: lightgray;
  margin: 0px 4px;
  padding: 0;
`;

const MVNoteSnippet = styled.p`
  display: flex;  
  color: goldenrod;
  margin: 0px 10px;
  padding: 0;
`;

export {
  MVNote,
  MVNoteListContainer,
  MVNoteTitle,
  MVNoteSnippet
};