import styled from 'styled-components';

const Navigation = styled.div`
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
  font-size: 16px;
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

const LogOutIcon = styled.img`
  display: flex;
  align-self: center;
  width: 30px;
  height: 25px;
  margin: 0px 5px 0px 0px;
  padding: 0;
`;

const NavigationButtonContainer = styled.div`
  width: auto;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const IconButton = styled.button`
  width: 200px;
  height: 100%;
  margin: 0px 10px 0px 0px;
  padding: 6px 8px;
  font-size: 22px;
  text-align: center;
  color: white;
  background-color: black;
  border: 1px solid black;
  &:focus { outline: none; }
  &:hover { 
    color: goldenrod;
  }
`;

export {
  IconButton,
  Navigation,
  NavigationButtonContainer,
  LogOutButton,
  LogOutIcon,
  UsernameHeader
};