import React from 'react';
import { Redirect } from "react-router-dom";

/** Util */
import Util from '../../utility/util';

/** Styles */
import LandingPageContainer from './LandingPage.styled';

/** Components */
import Login from '../Login/Login';
import Register from '../Register/Register';

const LandingPage = () => {
  if (Util.DATA.loadAuthToken()) {
    return <Redirect to="/dashboard" />
  }

  return(
    <LandingPageContainer>
      <Login />
      <Register />
    </LandingPageContainer>
  );
};

export default LandingPage;