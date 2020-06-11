import styled from 'styled-components';

const DVNoteListContainer = styled.div`
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: 1px solid blue;
`;

const DVNote = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: auto;
  margin: 2px auto;
  padding: 0;
  border: 1px solid gray;
  background-color: #242526;
`;

const DVSelectedNote = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: auto;
  margin: 2px auto;
  padding: 0;
  border: 1px solid gray;
  background-color: lightslategray;
`;

const DVNoteTitle = styled.h2`
  display: flex;
  color: lightgray;
  margin: 0px 4px;
  padding: 0;
`;

const DNNoteSnippet = styled.p`
  display: flex;  
  color: goldenrod;
  margin: 0px 10px;
  padding: 0;
`;

export {
  DVNote,
  DVNoteListContainer,
  DVNoteTitle,
  DNNoteSnippet,
  DVSelectedNote
};