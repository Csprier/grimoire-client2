import styled from 'styled-components';

const DashboardContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #000000;
  font-family: Arial;
`;

const DashboardNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  margin: 0;
  padding: 0;
  background-color: #000000;
`;

const UsernameHeader = styled.h1`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 100;
  margin: 0px 0px 0px 10px;
  padding: 0;
  color: white;
`;

const LogOutButton = styled.button`
  width: 80px;
  height: 100%;
  margin: 0px 10px 0px 0px;
  padding: 6px 8px;
  font-size: 14px;
  text-align: center;
  color: white;
  background-color: black;
  border: 1px solid black;
  &:focus { outline: none; }
  &:hover { 
    background-color: darkslateblue; 
    color: goldenrod;
  }
`;

export {
  DashboardContainer,
  DashboardNavBar,
  LogOutButton,
  UsernameHeader
};
