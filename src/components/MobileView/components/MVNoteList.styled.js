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
  height: 50px;
  margin: 2px auto;
  padding: 0;
  border: 1px solid gray;
  // background-color: #242526;
  overflow: hidden;
`;

const MVNoteTitle = styled.h2`
  display: flex;
  // color: lightgray;
  color: black;
  margin: 0px 4px;
  padding: 0;
`;

const MVNoteSnippet = styled.p`
  display: flex;  
  color: goldenrod;
  margin: 0px 10px;
  padding: 0;
`;

const MVNoteListAnimatedContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  transition-property: height;
  transition-duration: .5s;
  transition-delay: .5s;
  height: ${props => props.clicked ? '550px' : '0px'};
  border: 1px solid red;
`;

const MVNoteListh1 = styled.h1`
  margin: 0 auto;
  padding: 0;
`;

export {
  MVNote,
  MVNoteListh1,
  MVNoteListContainer,
  MVNoteListAnimatedContainer,
  MVNoteTitle,
  MVNoteSnippet
};