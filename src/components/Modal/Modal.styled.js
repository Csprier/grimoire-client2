import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: ${props => props.showModal ? '550px' : '0px'};
  z-index: 10;
  margin: 0;
  padding: 0px;
  background-color: white;
  overflow: hidden;
  transition-property: height;
  transition-duration: .1s;
  transition-delay: .1s;
`;

const ModalContent = styled.div`
  position: relative;
  width: 98%;
  margin: 0 auto;
  padding: 0;
`;

const ModalHeader = styled.h1`
  text-align: center;
  font-family: Arial;
`;

export {
  ModalContainer,
  ModalContent,
  ModalHeader
}

// transition-property: transform;
// transition-duration: .5s;
// transition-delay: .5s;
// transform: ${props => props.showModal ? "translateX(0%)" : "translateX(-110%)"};