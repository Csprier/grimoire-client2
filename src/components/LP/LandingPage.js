import React from 'react';
import { Redirect } from "react-router-dom";

// CSS
import '../css/css-LP/landingpage.css';

import Util from '../../utility/util';
import FormContainer from './FormContainer';

const LandingPage = () => {
  if (Util.DATA.loadAuthToken()) {
    return <Redirect to="/dashboard" />
  }

  return(
    <div className="landing-page-container">
      <FormContainer />
    </div>
  );
};

export default LandingPage;

/* <LandingPageSlider>
  <SliderDropDown />
</LandingPageSlider> */