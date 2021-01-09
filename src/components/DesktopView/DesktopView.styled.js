import styled from 'styled-components';

const DesktopViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
`;

const DesktopViewButtonContainer = styled.div`
  position: relative;  
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`;

const DesktopViewComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const LeftArrowIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 0px;
  padding: 10px;
`;

export {
  DesktopViewButtonContainer,
  DesktopViewComponentContainer,
  DesktopViewContainer,
  LeftArrowIcon
};