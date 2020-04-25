import React from 'react';
import { Redirect } from "react-router-dom";

import Util from '../../utility/util';
// import LandingPageSlider from './LandingPageSlider';
// import SliderDropDown from './SliderDropDown';


const LandingPage = () => {
  if (Util.DATA.loadAuthToken()) {
    return <Redirect to="/dashboard" />
  }

  return(
    <div className="landing-page-container">
      
    </div>
  );
};

export default LandingPage;

/* <LandingPageSlider>
  <SliderDropDown />
</LandingPageSlider> */