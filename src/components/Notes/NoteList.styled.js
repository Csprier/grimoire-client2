import styled from 'styled-components';

const AddNoteButton = styled.button`
  width: 100px;
  height: 33px;
  margin: 0;
  padding: 6px 8px;
  background-color: ${props => props.showModal ? "darkslateblue" : "slateblue"};
  border: ${props => props.showModal ? "1px solid slateblue" : "1px solid darkslateblue"};
  color: white;
  border-radius: 3px;
  font-size: 14px;
  &:focus { outline: none };
`;

const NoteListContainer = styled.div`
  position: relative;
  width: 400px;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  overflow-y: scroll;
  border: 1px solid gray;
  background-color: #242526;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  width: 98%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  transition: height, transform;
  transition-duration: .5s;
  transition-delay: .5s;
  height: ${props => props.showModal ? '450px' : '0px'};
`;

export {
  AddNoteButton,
  ModalContainer,
  NoteListContainer
};