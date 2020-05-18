import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  width: 98%;
  height: auto;
  z-index: 10;
  margin: 0 auto;
  margin: 5% 5% 0% 1%;
  padding: 0px;
  background-color: white;
  box-shadow: 3px 5px 4px 5px #888888;
`;

const ModalContent = styled.div`
  position: relative;
  width: 98%;
  height: auto;
  margin: 0 auto;
  padding: 0px;
`;

export {
  ModalContainer,
  ModalContent
}