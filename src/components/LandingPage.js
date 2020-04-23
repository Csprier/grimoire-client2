import React from 'react';
import { Redirect } from "react-router-dom";
import './css/landingpage.css';

import FormPortal from './FormPortal';

import Util from '../utility/util';

const LandingPage = () => {
  if (Util.DATA.loadAuthToken()) {
    return <Redirect to="/dashboard" />
  }

  return(
    <div className="landing-page-container">
      <FormPortal>
        
      </FormPortal>
    </div>
  );
};

export default LandingPage;


// import Accordion from './Accordion';
// import Background from './Background';
// import Login from './Login';
// import Register from './Register';

/* <div className="form-container">
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
</div> */