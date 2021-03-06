import React from 'react';
import { Redirect } from "react-router-dom";

/** Util */
import Util from '../../utility/util';

/** Styles */
import { HeaderOne, LandingPageContainer } from './LandingPage.styled';

/** Components */
import AnimatedFormComponent from './components/AnimatedFormComponent';

const LandingPage = () => {
  if (Util.DATA.loadAuthToken()) {
    return <Redirect to="/dashboard" />
  }

  return(
    <LandingPageContainer>
      <HeaderOne>ɢʀɨʍօɨʀɛ</HeaderOne>
      <AnimatedFormComponent />
    </LandingPageContainer>
  );
};

export default LandingPage;