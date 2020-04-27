import React from 'react';
import { Redirect } from "react-router-dom";

// CSS
import '../css/css-LP/landingpage.css';

import Util from '../../utility/util';

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