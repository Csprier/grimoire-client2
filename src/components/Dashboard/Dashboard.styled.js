import styled from 'styled-components';

const DashboardContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial;
  background-color: #F7F7F7;
`;

const DashboardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export {
  DashboardContainer,
  DashboardContent
};
