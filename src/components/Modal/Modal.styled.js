import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 500px;
  z-index: 10;
  margin: 0 auto;
  padding: 0px;
  background-color: white;
  transition: transform;
  transition-duration: 2s;
  transition-delay: 2s;
  transform: ${props => props.showModal ? "translateX(0%)" : "translateX(-110%)"};
  border: 1px solid orange;
`;

const ModalContent = styled.div`
  position: relative;
  width: 98%;
  margin: 0 auto;
  padding: 0;
`;

export {
  ModalContainer,
  ModalContent
}