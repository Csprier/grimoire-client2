import React from 'react';
import { Link, Redirect } from "react-router-dom";

import Util from '../../utility/util';
import LandingPageSlider from './LandingPageSlider';

const LandingPage = () => {
  if (Util.DATA.loadAuthToken()) {
    return <Redirect to="/dashboard" />
  }

  return(
    <div className="landing-page-container">
      <LandingPageSlider />
      {/* <Link to="/login">Login</Link>
      <Link to="/register">Register</Link> */}
    </div>
  );
};

export default LandingPage;