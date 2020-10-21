import styled from 'styled-components';

const MobileViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
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
  width: 50px;
  background-color: white;
  border: 1px solid white;
`;

const LeftArrowIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 0px;
  padding: 10px;
`;

export {
  MobileViewContainer,
  MobileViewButtonContainer,
  MobileViewComponentContainer,
  ModalCloseButton,
  LeftArrowIcon
};