import React from 'react';
import { Redirect } from "react-router-dom";

import Util from '../../utility/util';
import LandingPageSlider from './LandingPageSlider';
import SliderItem from './SliderItem';
import SliderDropDown from './SliderDropDown';


const LandingPage = () => {
  if (Util.DATA.loadAuthToken()) {
    return <Redirect to="/dashboard" />
  }

  return(
    <div className="landing-page-container">
      <LandingPageSlider>
        <SliderDropDown />
      </LandingPageSlider>
    </div>
  );
};

export default LandingPage;

/* 
<SliderItem icon="&#8659;">
  <SliderDropDown />
</SliderItem> 
*/