import React from 'react';
import { Link } from "react-router-dom";

const LandingPage = () => {
  return(
    <div className="landing-page-container">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default LandingPage;