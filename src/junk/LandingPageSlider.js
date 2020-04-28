import React from 'react';
import '../css/css-LP/slider.css';

function LandingPageSlider(props) {
  return(
    <div className="slider-container">
      <ul className="slider">{props.children}</ul>
    </div>
  );
};

export default LandingPageSlider;