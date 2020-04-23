import React from 'react';
import { Redirect } from "react-router-dom";
import './css/landingpage.css';

import DropDown from './Dropdown';
import FormPortal from './FormPortal';
import FormItem from './FormItem';
import Login from './Login';
import Register from './Register';

// UTIL
import Util from '../utility/util';

const LandingPage = () => {
  if (Util.DATA.loadAuthToken()) {
    return <Redirect to="/dashboard" />
  }

  return(
    <div className="landing-page-container">
      <FormPortal>

        <FormItem portal="Login">
          <Login />
        </FormItem>

        <FormItem portal="Register">
          <Register />
        </FormItem>

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