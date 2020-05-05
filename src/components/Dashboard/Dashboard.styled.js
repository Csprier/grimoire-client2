import styled from 'styled-components';

const DashboardContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #23344c;
  font-family: Arial;
`;

const DashboardNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  background-color: darkslateblue;
`;

const LogOutButton = styled.button`
  width: 100px;
  height: 100%;
  margin: 0;
  padding: 6px 8px;
  font-size: 14px;
  text-align: center;
  color: goldenrod;
  background-color: slateblue;
  border: 1px solid slateblue;
  &:focus { outline: none; }
`;

export {
  DashboardContainer,
  DashboardNavBar,
  LogOutButton
};
