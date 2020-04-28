import React from 'react';
import { Redirect } from "react-router-dom";

/** Util */
import Util from '../../utility/util';

/** Styles */
import LandingPageContainer from './LandingPage.styled';


const LandingPage = () => {
  if (Util.DATA.loadAuthToken()) {
    return <Redirect to="/dashboard" />
  }

  return(
    <LandingPageContainer>
      
    </LandingPageContainer>
  );
};

export default LandingPage;