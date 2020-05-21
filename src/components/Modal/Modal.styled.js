import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
  margin: 0 auto;
  padding: 0px;
  background-color: white;
  transition-property: transform, height;
  transition-duration: .5s;
  transition-delay: .5s;
  height: ${props => props.showModal ? "500px" : "0px"};
`;

const ModalContent = styled.div`
  position: absolute;
  width: 98%;
  transition-property: transform, margin;
  transition-duration: .5s;
  transition-delay: .5s;
  transform: ${props => props.showModal ? "translateX(0%)" : "translateX(-110%)"};
  margin: ${props => props.showModal ? "0 auto" : "0"};
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