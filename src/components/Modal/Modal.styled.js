import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  width: 98%;
  z-index: 10;
  margin: 0 auto;
  padding: 0px;
  background-color: white;
  border: 1px solid blue;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
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