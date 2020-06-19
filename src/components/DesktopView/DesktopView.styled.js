import styled from 'styled-components';

const DesktopViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 600px;
  margin: 0 auto;
  padding: 0;
  border: 1px solid slategray;
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

export {
  DesktopViewButtonContainer,
  DesktopViewComponentContainer,
  DesktopViewContainer
};