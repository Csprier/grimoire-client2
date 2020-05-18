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
// display: ${props => !props.showModal ? 'block' : 'none'};
const ModalContainer = styled.div`
  position: absolute;
  width: 98%;
  height: ${props => props.showModal ? '500px' : '0px'};
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  transition: height;
  transition-duration: .5s;
  transition-delay: .5s;
  border: 1px solid red;
`;

export {
  ModalContainer,
  NoteListContainer
};