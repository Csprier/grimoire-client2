import styled from 'styled-components';

const MobileViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  // border: 1px solid slategray;
  overflow: hidden;
`;

const MobileViewButtonContainer = styled.div`
  position: relative;  
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`;

const MobileViewComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const ModalCloseButton = styled.button`
  display: block;
  width: 70px;
  margin: 0 auto;
  padding: 5px;
  border: 1px solid white;
  background-color: white;
`;

export {
  MobileViewContainer,
  MobileViewButtonContainer,
  MobileViewComponentContainer,
  ModalCloseButton
};