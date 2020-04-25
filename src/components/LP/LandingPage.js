import React from 'react';
import { Redirect } from "react-router-dom";

// CSS
import '../css/css-LP/landingpage.css';

import Util from '../../utility/util';
// import LandingPageSlider from './LandingPageSlider';
// import SliderDropDown from './SliderDropDown';
import FormContainer from './FormContainer';
import Login from '../Login';
import Register from '../Register';

const LandingPage = () => {
  if (Util.DATA.loadAuthToken()) {
    return <Redirect to="/dashboard" />
  }

  return(
    <div className="landing-page-container">
      <FormContainer name="Login">
        <Login />
      </FormContainer>
      <FormContainer name="Register">
        <Register />
      </FormContainer>
    </div>
  );
};

export default LandingPage;

/* <LandingPageSlider>
  <SliderDropDown />
</LandingPageSlider> */