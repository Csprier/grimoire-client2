import styled from 'styled-components';

const DVNoteListContainer = styled.div`
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid blue;
`;

const DVNote = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  border: 1px solid gray;
`;

const DVNoteTitle = styled.h2`
  display: flex;
  color: lightslategray;
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
  DNNoteSnippet
};