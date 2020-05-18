import styled from 'styled-components';

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

export {
  NoteListContainer
};