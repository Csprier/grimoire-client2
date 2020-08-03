import styled from 'styled-components';

const DVNoteListContainer = styled.div`
  width: 400px;
  height: 100%;
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
  border-top: 1px solid lightgray;
  overflow: hidden;
`;

const DVSelectedNote = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 75px;
  margin: 0;
  padding: 4px 10px;
  border-top: 1px solid lightgray;
  overflow: hidden;
  background-color: lightgray;
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
`;

const DVNoteAddIcon = styled.img`
  width: 30px;
  margin: 0px 0px 0px 10px;
  padding: 0;
`;

export {
  DVNote,
  DVNoteListContainer,
  DVNoteTitle,
  DNNoteSnippet,
  DVNoteUpdatedAt,
  DVSelectedNote,
  DVNoteInfoContainer,
  DVNoteDeleteButtonContainer,
  DVNoteTrashCan,
  DVNoteAddIcon
};