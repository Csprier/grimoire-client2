import React from 'react';
import { Redirect } from "react-router-dom";

import Util from '../../utility/util';
import LandingPageSlider from './LandingPageSlider';
import SliderItem from './SliderItem';


const LandingPage = () => {
  if (Util.DATA.loadAuthToken()) {
    return <Redirect to="/dashboard" />
  }

  return(
    <div className="landing-page-container">
      <LandingPageSlider>
        <SliderItem icon="L" />
        <SliderItem icon="R" />
      </LandingPageSlider>
    </div>
  );
};

export default LandingPage;