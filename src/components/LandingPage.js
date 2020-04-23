import React from 'react';
import { Redirect } from "react-router-dom";
import './css/landingpage.css';


import Accordion from './Accordion';
import Login from './Login';
import Register from './Register';

import Util from '../utility/util';

const LandingPage = () => {
  if (Util.DATA.loadAuthToken()) {
    return <Redirect to="/dashboard" />
  }

  return(
    <div className="landing-page-container">
      <Accordion 
        title="Login" 
        onToggle={(visibility) => console.log("Login visibility -->", visibility)}
      >
        <Login />
      </Accordion>

      <Accordion 
        title="Register" 
        onToggle={(visibility) => console.log("Register visibility -->", visibility)}
      >
        <Register />
      </Accordion>
    </div>
  );
};

export default LandingPage;