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
  flex-direction: row;
  position: relative;
  width: 98%;
  height: 75px;
  margin: 2px auto;
  padding: 0;
  border: 1px solid lightgray;
  // background-color: #242526;
  overflow: hidden;
`;

const MVNoteTitle = styled.h1`
  display: flex;
  color: gray;
  margin: 0px 4px;
  padding: 0;
  font-size: 20px;
`;

const MVNoteUpdatedAt = styled.p`
  display: flex;  
  color: gray;
  margin: 0px 10px;
  padding: 4px;
  font-size: 10px;
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
  margin: 0;
  padding: 4px;
  font-size: 24px;
  color: gray;
`;

const MVAddNoteButton = styled.button`
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0;
  padding: 0;
  color: green;
  background-color: white;
  border: 1px solid white;
`;

const MVNoteInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 50px;
  margin: 2px auto;
  padding: 6px;
`;

/** DELETE BUTTON */
const MVNoteDeleteButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: 100%;
  margin: 0;
  padding: 6px;
  // border: 1px solid red;
`;

const MVNoteDeleteButton = styled.button`
  position: relative;
  width: 25px;
  height: 25px;
  margin: 0 auto;
  padding: 0;
  color: red;
  background-color: white;
  border: 1px solid white;
`;

const MVNoteTrashCan = styled.img`
  position: relative;
  width: 30px;
  margin: 0 auto;
  padding: 0;
`;

export {
  MVNote,
  MVAddNoteButton,
  MVNoteListh1,
  MVNoteListContainer,
  MVNoteListAnimatedContainer,
  MVNoteTitle,
  MVNoteSnippet,
  MVNoteUpdatedAt,
  MVNoteInfoContainer,
  MVNoteDeleteButton,
  MVNoteDeleteButtonContainer,
  MVNoteTrashCan
};