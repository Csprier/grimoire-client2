import styled from 'styled-components';

const DVNoteListContainer = styled.div`
  position: relative;
  width: 400px;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const DVNoteListFixedContainer = styled.div`
  position: relative;
  display: block;
  top: 0px;
  left: 0px;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`;

const DVNoteList = styled.div`
  position: relative;
  width: 100%;
  max-height: 500px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  };
`;

const DVNote = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 75px;
  margin: 0;
  padding: 4px 10px;
  border-top: 1px solid #C7CCDB;
  overflow: hidden;
  &:hover {
    background-color: #C7CCDB;
    border-top: 1px solid: #C7CCDB;
  }
`;

const DVSelectedNote = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 75px;
  margin: 0;
  padding: 4px 10px;
  overflow: hidden;
  background-color: #8093F1;
  border-top: 1px solid #8093F1;
  &:hover {
    background-color: #8093F1;
    border-top: 1px solid #8093F1;
  }
`;

/** NOTE INFORMATION */
const DVNoteInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 50px;
  margin: 2px auto;
  padding: 0;
`;

const DVNoteTitle = styled.h2`
  display: flex;
  color: #444;
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

const DVNoteUpdatedAt = styled.p`
  display: flex;  
  color: gray;
  margin: 0;
  padding: 2px;
  font-size: 10px;
`;

const DNNoteSnippet = styled.p`
  display: flex;  
  color: goldenrod;
  margin: 0;
  padding: 3px 8px;
  font-size: 14px;
`;

/** DELETE BUTTON */
const DVNoteDeleteButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: 100%;
  margin: 0;
  padding: 0;
  // border: 1px solid red;
`;

const DVNoteTrashCan = styled.img`
  position: relative;
  width: 30px;
  margin: 0 auto;
  padding: 0;
  &:hover {
    filter: invert(12%) sepia(67%) saturate(5710%) hue-rotate(358deg) brightness(125%) contrast(121%);
  }
`;

const DVNoteAddIcon = styled.img`
  width: 40px;
  margin: 0px 0px 0px 10px;
  padding: 0;
  margin: 0px 10px;
  &:hover {
    filter: invert(59%) sepia(5%) saturate(5503%) hue-rotate(59deg) brightness(100%) contrast(79%);
    // background-color: rgb(223, 253, 223);
    // border: 1px solid lightgreen;
  }
`;

export {
  DVNote,
  DVNoteList,
  DVNoteListContainer,
  DVNoteListFixedContainer,
  DVNoteTitle,
  DNNoteSnippet,
  DVNoteUpdatedAt,
  DVSelectedNote,
  DVNoteInfoContainer,
  DVNoteDeleteButtonContainer,
  DVNoteTrashCan,
  DVNoteAddIcon
};