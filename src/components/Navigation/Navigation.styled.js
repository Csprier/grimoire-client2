import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 0;
  background-color: #000000;
`;

const UsernameHeader = styled.h3`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 100;
  margin: 0px 0px 0px 20px;
  padding: 0;
  color: white;
`;

const LogOutIcon = styled.img`
  display: flex;
  align-self: center;
  width: 30px;
  margin: 0px 10px 0px 0px;
  padding: 0;
  filter: invert(1);
  &:focus { outline: none; }
  &:hover {
    filter: invert(66%) sepia(94%) saturate(420%) hue-rotate(356deg) brightness(90%) contrast(89%);
  }
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
  margin: 0px 20px 0px 0px;
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
  LogOutIcon,
  UsernameHeader
};